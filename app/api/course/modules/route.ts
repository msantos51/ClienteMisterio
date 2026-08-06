/*
 * DESCRIÇÃO DO FICHEIRO: Serve o conteúdo teórico e os quizzes do curso a alunos autenticados
 * com o curso pago. As respostas certas (correctIndex) nunca saem daqui — a pontuação do
 * quiz é sempre calculada no servidor (ver app/api/course/progress/route.ts).
 */

import { NextResponse } from "next/server";

import { courseModules as courseModulesPt, type CourseModule, type PublicCourseModule } from "@/app/curso/courseData";
import { courseModules as courseModulesEn } from "@/app/curso/courseDataEn";
import {
  moduleSupportContentPt,
  moduleSupportContentEn,
  type TheorySupportContent,
} from "@/app/curso/courseSupportContent";
import { hasUserCourseAccess } from "@/lib/courseAccess";
import { getSession } from "@/lib/session";

type PublicCourseModuleWithSupport = PublicCourseModule & { support: TheorySupportContent | null };

const stripAnswers = (
  modules: CourseModule[],
  support: Record<number, TheorySupportContent>
): PublicCourseModuleWithSupport[] => {
  return modules.map((courseModule) => ({
    ...courseModule,
    quiz: courseModule.quiz.map(({ correctIndex: _correctIndex, ...question }) => question),
    support: support[courseModule.id] ?? null,
  }));
};

export const GET = async (request: Request) => {
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json({ message: "É necessário iniciar sessão." }, { status: 401 });
  }

  const hasCourseAccess = await hasUserCourseAccess(session.userId);

  if (!hasCourseAccess) {
    return NextResponse.json(
      { message: "É necessário concluir o pagamento para aceder ao curso." },
      { status: 403 }
    );
  }

  const lang = new URL(request.url).searchParams.get("lang") === "en" ? "en" : "pt";
  const modules = lang === "en" ? courseModulesEn : courseModulesPt;
  const support = lang === "en" ? moduleSupportContentEn : moduleSupportContentPt;

  return NextResponse.json({ modules: stripAnswers(modules, support) });
};

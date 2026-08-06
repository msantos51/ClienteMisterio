/*
 * DESCRIÇÃO DO FICHEIRO: API para gerir o progresso do curso de Cliente Mistério por utilizador.
 */

import { NextResponse } from "next/server";

import { courseModules as courseModulesPt } from "@/app/curso/courseData";
import { courseModules as courseModulesEn } from "@/app/curso/courseDataEn";
import { query } from "@/lib/database";
import { hasUserCourseAccess } from "@/lib/courseAccess";
import { getSession } from "@/lib/session";

type CourseProgressRow = {
  module_id: number;
  completed: boolean;
  quiz_score: number | null;
  quiz_answers: Record<string, number> | null;
  completed_at: string | null;
};

type SubmitPayload = {
  moduleId: number;
  quizAnswers: Record<string, number>;
  lang?: string;
};

const totalModules = 11;
const passingScore = 60;

/*
 * DESCRIÇÃO DA FUNÇÃO: Calcula a pontuação do quiz no servidor a partir das respostas
 * submetidas — nunca confia numa pontuação vinda do cliente. Módulos sem quiz (ex.: o
 * passo do certificado) aprovam automaticamente.
 */
const gradeQuiz = (moduleId: number, quizAnswers: Record<string, number>, lang: string): number => {
  const modules = lang === "en" ? courseModulesEn : courseModulesPt;
  const quiz = modules.find((m) => m.id === moduleId)?.quiz ?? [];

  if (quiz.length === 0) {
    return 100;
  }

  const correctCount = quiz.filter((question) => quizAnswers[question.id] === question.correctIndex).length;

  return Math.round((correctCount / quiz.length) * 100);
};

export const GET = async () => {
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão." },
      { status: 401 }
    );
  }



  const hasCourseAccess = await hasUserCourseAccess(session.userId);

  if (!hasCourseAccess) {
    return NextResponse.json(
      { message: "É necessário concluir o pagamento para aceder ao curso." },
      { status: 403 }
    );
  }

  const result = await query<CourseProgressRow>(
    "select module_id, completed, quiz_score, quiz_answers, completed_at from course_progress where user_id = $1 order by module_id",
    [session.userId]
  );

  const modules = result.rows.map((row) => ({
    moduleId: row.module_id,
    completed: row.completed,
    quizScore: row.quiz_score,
    quizAnswers: row.quiz_answers,
    completedAt: row.completed_at,
  }));

  const completedCount = modules.filter((m) => m.completed).length;

  return NextResponse.json({
    modules,
    totalModules,
    completedCount,
    progressPercent: Math.round((completedCount / totalModules) * 100),
  });
};

export const PUT = async (request: Request) => {
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão." },
      { status: 401 }
    );
  }

  const hasCourseAccess = await hasUserCourseAccess(session.userId);

  if (!hasCourseAccess) {
    return NextResponse.json(
      { message: "É necessário concluir o pagamento para aceder ao curso." },
      { status: 403 }
    );
  }

  const payload = (await request.json()) as Partial<SubmitPayload>;

  if (!payload.moduleId || payload.moduleId < 1 || payload.moduleId > totalModules) {
    return NextResponse.json(
      { message: "Módulo inválido." },
      { status: 400 }
    );
  }

  const quizAnswers =
    payload.quizAnswers && typeof payload.quizAnswers === "object" ? payload.quizAnswers : {};
  const lang = payload.lang === "en" ? "en" : "pt";

  // Pontuação calculada sempre no servidor a partir do gabarito — nunca a partir do
  // que o cliente envia, para o certificado não poder ser obtido sem responder ao quiz.
  const quizScore = gradeQuiz(payload.moduleId, quizAnswers, lang);
  const passed = quizScore >= passingScore;

  if (passed) {
    await query(
      `insert into course_progress (user_id, module_id, completed, quiz_score, quiz_answers, completed_at)
       values ($1, $2, true, $3, $4, now())
       on conflict (user_id, module_id)
       do update set completed = true, quiz_score = $3, quiz_answers = $4, completed_at = now()`,
      [session.userId, payload.moduleId, quizScore, JSON.stringify(quizAnswers)]
    );
  }

  const countResult = await query<{ count: string }>(
    "select count(*) as count from course_progress where user_id = $1 and completed = true",
    [session.userId]
  );

  const completedCount = parseInt(countResult.rows[0].count, 10);

  return NextResponse.json({
    message: passed ? "Progresso guardado com sucesso." : "Pontuação insuficiente para concluir o módulo.",
    quizScore,
    passed,
    completedCount,
    totalModules,
    progressPercent: Math.round((completedCount / totalModules) * 100),
  });
};

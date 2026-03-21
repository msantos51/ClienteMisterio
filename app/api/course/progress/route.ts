/*
 * DESCRIÇÃO DO FICHEIRO: API para gerir o progresso do curso de Cliente Mistério por utilizador.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
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
  quizScore: number;
  quizAnswers: Record<string, number>;
};

const totalModules = 10;

export const GET = async () => {
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão." },
      { status: 401 }
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

  const payload = (await request.json()) as SubmitPayload;

  if (!payload.moduleId || payload.moduleId < 1 || payload.moduleId > totalModules) {
    return NextResponse.json(
      { message: "Módulo inválido." },
      { status: 400 }
    );
  }

  if (typeof payload.quizScore !== "number" || payload.quizScore < 0 || payload.quizScore > 100) {
    return NextResponse.json(
      { message: "Pontuação inválida." },
      { status: 400 }
    );
  }

  await query(
    `insert into course_progress (user_id, module_id, completed, quiz_score, quiz_answers, completed_at)
     values ($1, $2, true, $3, $4, now())
     on conflict (user_id, module_id)
     do update set completed = true, quiz_score = $3, quiz_answers = $4, completed_at = now()`,
    [session.userId, payload.moduleId, payload.quizScore, JSON.stringify(payload.quizAnswers)]
  );

  const countResult = await query<{ count: string }>(
    "select count(*) as count from course_progress where user_id = $1 and completed = true",
    [session.userId]
  );

  const completedCount = parseInt(countResult.rows[0].count, 10);

  return NextResponse.json({
    message: "Progresso guardado com sucesso.",
    completedCount,
    totalModules,
    progressPercent: Math.round((completedCount / totalModules) * 100),
  });
};

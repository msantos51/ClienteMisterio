/*
 * DESCRIÇÃO DO FICHEIRO: Endpoint administrativo para alterar manualmente o estado de pagamento/acesso ao curso por utilizador.
 */

import { NextResponse } from "next/server";

import { ensureAdminAccess } from "@/lib/admin";
import { query } from "@/lib/database";
import { getSession } from "@/lib/session";

type UpdateCourseAccessPayload = {
  email: string;
  hasCourseAccess: boolean;
};

type UpdatedUserRow = {
  id: string;
  email: string;
  has_course_access: boolean;
  course_access_granted_at: string | null;
};

export const PUT = async (request: Request) => {
  // Garante que existe sessão válida e que o utilizador autenticado é administrador.
  const session = await getSession();

  if (!session?.email) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão para executar esta operação." },
      { status: 401 }
    );
  }

  try {
    await ensureAdminAccess(session.email);
  } catch {
    return NextResponse.json(
      { message: "Apenas administradores podem alterar o acesso ao curso." },
      { status: 403 }
    );
  }

  // Valida payload antes de tentar atualizar o utilizador alvo.
  let payload: UpdateCourseAccessPayload;

  try {
    payload = (await request.json()) as UpdateCourseAccessPayload;
  } catch {
    return NextResponse.json(
      { message: "Corpo do pedido inválido." },
      { status: 400 }
    );
  }

  const normalizedEmail = payload.email?.trim().toLowerCase();

  if (!normalizedEmail || typeof payload.hasCourseAccess !== "boolean") {
    return NextResponse.json(
      { message: "Informe um e-mail válido e o valor booleano hasCourseAccess." },
      { status: 400 }
    );
  }

  const updateResult = await query<UpdatedUserRow>(
    `update users
     set has_course_access = $1,
         course_access_granted_at = case
           when $1 = true then coalesce(course_access_granted_at, now())
           else null
         end
     where lower(email) = $2
     returning id, email, has_course_access, course_access_granted_at`,
    [payload.hasCourseAccess, normalizedEmail]
  );

  if (!updateResult.rowCount) {
    return NextResponse.json(
      { message: "Utilizador não encontrado para o e-mail informado." },
      { status: 404 }
    );
  }

  const updatedUser = updateResult.rows[0];

  return NextResponse.json({
    message: "Acesso ao curso atualizado com sucesso.",
    user: {
      id: updatedUser.id,
      email: updatedUser.email,
      hasCourseAccess: updatedUser.has_course_access,
      courseAccessGrantedAt: updatedUser.course_access_granted_at,
    },
  });
};

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/user/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { getSession } from "@/lib/session";

type UserRow = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  birth_date: string | null;
  gender: string | null;
  profile_completed: boolean;
  is_admin: boolean;
};

type UpdatePayload = {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
};

const allowedGender = ["male", "female"];

export const GET = async () => {
  // Devolve o perfil do utilizador autenticado com base na sessão server-side.
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão para carregar o perfil." },
      { status: 401 }
    );
  }

  const result = await query<UserRow>(
    "select id, first_name, last_name, full_name, email, birth_date, gender, profile_completed, is_admin from users where id = $1",
    [session.userId]
  );

  if (!result.rows[0]) {
    return NextResponse.json({ message: "Utilizador não encontrado." }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      id: result.rows[0].id,
      firstName: result.rows[0].first_name,
      lastName: result.rows[0].last_name,
      fullName: result.rows[0].full_name,
      email: result.rows[0].email,
      birthDate: result.rows[0].birth_date,
      gender: result.rows[0].gender,
      profileCompleted: result.rows[0].profile_completed,
      isAdmin: result.rows[0].is_admin,
    },
  });
};

export const PUT = async (request: Request) => {
  // Atualiza o perfil do utilizador autenticado sem confiar em e-mail enviado pelo cliente.
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json(
      { message: "É necessário iniciar sessão para atualizar o perfil." },
      { status: 401 }
    );
  }

  const payload = (await request.json()) as UpdatePayload;

  if (!payload.email || !payload.firstName || !payload.lastName) {
    return NextResponse.json(
      { message: "Primeiro nome, último nome e e-mail são obrigatórios." },
      { status: 400 }
    );
  }

  if (!payload.birthDate || !payload.gender) {
    return NextResponse.json(
      { message: "Data de nascimento e género são obrigatórios." },
      { status: 400 }
    );
  }

  if (!allowedGender.includes(payload.gender)) {
    return NextResponse.json({ message: "Género inválido." }, { status: 400 });
  }
  const normalizedEmail = payload.email.trim().toLowerCase();

  const conflictingUser = await query<UserRow>(
    "select id from users where email = $1 and id <> $2",
    [normalizedEmail, session.userId]
  );

  if (conflictingUser.rowCount) {
    return NextResponse.json(
      { message: "Já existe uma conta registada com este e-mail." },
      { status: 409 }
    );
  }

  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const fullName = `${firstName} ${lastName}`.trim();

  await query(
    `update users
     set first_name = $1,
         last_name = $2,
         full_name = $3,
         email = $4,
         birth_date = $5,
         gender = $6,
         profile_completed = true
     where id = $7`,
    [
      firstName,
      lastName,
      fullName,
      normalizedEmail,
      payload.birthDate,
      payload.gender,
      session.userId,
    ]
  );

  return NextResponse.json({ message: "Perfil atualizado com sucesso." });
};

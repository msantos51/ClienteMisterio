/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/login/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { verifyPassword } from "@/lib/password";
import { createSession } from "@/lib/session";

type LoginPayload = {
  email: string;
  password: string;
};

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
  has_course_access: boolean;
  password_hash: string;
};

export const POST = async (request: Request) => {
  try {
    // Lê o corpo da requisição e valida o formato mínimo esperado para login.
    const payload = (await request.json()) as Partial<LoginPayload>;

    if (typeof payload.email !== "string" || typeof payload.password !== "string") {
      return NextResponse.json(
        { message: "Informe o e-mail e a senha para continuar." },
        { status: 400 }
      );
    }

    const normalizedEmail = payload.email.trim().toLowerCase();
    const normalizedPassword = payload.password;

    if (!normalizedEmail || !normalizedPassword) {
      return NextResponse.json(
        { message: "Informe o e-mail e a senha para continuar." },
        { status: 400 }
      );
    }

    // Procura o utilizador pelo e-mail para validar credenciais de forma segura.
    const result = await query<UserRow>(
      `select id, first_name, last_name, full_name, email, birth_date, gender, profile_completed, is_admin, has_course_access, password_hash
       from users
       where email = $1`,
      [normalizedEmail]
    );

    const user = result.rows[0];

    if (!user || !verifyPassword(normalizedPassword, user.password_hash)) {
      return NextResponse.json(
        { message: "E-mail ou senha inválidos. Verifique os dados e tente novamente." },
        { status: 401 }
      );
    }

    // Cria a sessão autenticada do utilizador após validação das credenciais.
    await createSession({
      userId: user.id,
      email: user.email,
      isAdmin: user.is_admin,
    });

    return NextResponse.json({
      message: "Login efetuado com sucesso.",
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        fullName: user.full_name,
        email: user.email,
        birthDate: user.birth_date,
        gender: user.gender,
        profileCompleted: user.profile_completed,
        isAdmin: user.is_admin,
      },
    });
  } catch (error: unknown) {
    // Garante resposta controlada em qualquer falha inesperada sem expor detalhes sensíveis.
    console.error("LOGIN_ROUTE_ERROR", error);

    return NextResponse.json(
      { message: "Não foi possível concluir o login neste momento. Tente novamente." },
      { status: 500 }
    );
  }
};

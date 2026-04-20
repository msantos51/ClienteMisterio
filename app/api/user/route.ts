/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/user/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { verifyPassword } from "@/lib/password";
import { getSession } from "@/lib/session";
import { isValidEmail, isReasonableText } from "@/lib/validation";

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
};

type UpdatePayload = {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
};

type DeletePayload = {
  currentPassword: string;
};

type PasswordRow = {
  password_hash: string;
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
    "select id, first_name, last_name, full_name, email, birth_date, gender, profile_completed, is_admin, has_course_access from users where id = $1",
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
      hasCourseAccess: result.rows[0].has_course_access,
    },
  });
};

export const PUT = async (request: Request) => {
  try {
    // Atualiza o perfil do utilizador autenticado sem confiar em e-mail enviado pelo cliente.
    const session = await getSession();

    if (!session?.userId) {
      return NextResponse.json(
        { message: "É necessário iniciar sessão para atualizar o perfil." },
        { status: 401 }
      );
    }

    const payload = (await request.json()) as Partial<UpdatePayload>;

    if (!isReasonableText(payload.firstName, 80) || !isReasonableText(payload.lastName, 80)) {
      return NextResponse.json(
        { message: "Primeiro nome e último nome são obrigatórios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Informe um e-mail válido." },
        { status: 400 }
      );
    }

    if (typeof payload.birthDate !== "string" || !payload.birthDate || typeof payload.gender !== "string") {
      return NextResponse.json(
        { message: "Data de nascimento e género são obrigatórios." },
        { status: 400 }
      );
    }

    // Valida formato ISO (YYYY-MM-DD) e que a data é real e razoável.
    const birthDateMatch = /^\d{4}-\d{2}-\d{2}$/.test(payload.birthDate);
    const birthDate = birthDateMatch ? new Date(`${payload.birthDate}T00:00:00Z`) : null;
    const today = new Date();
    const minBirthYear = today.getUTCFullYear() - 120;

    if (!birthDate || Number.isNaN(birthDate.getTime()) || birthDate > today || birthDate.getUTCFullYear() < minBirthYear) {
      return NextResponse.json({ message: "Data de nascimento inválida." }, { status: 400 });
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
  } catch (error: unknown) {
    console.error("USER_UPDATE_ROUTE_ERROR", error);
    return NextResponse.json(
      { message: "Não foi possível atualizar o perfil neste momento. Tente novamente." },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    // Exige sessão autenticada e validação da senha atual antes de remover a conta.
    const session = await getSession();

    if (!session?.userId) {
      return NextResponse.json(
        { message: "É necessário iniciar sessão para apagar a conta." },
        { status: 401 }
      );
    }

    const payload = (await request.json()) as Partial<DeletePayload>;

    if (typeof payload.currentPassword !== "string" || !payload.currentPassword) {
      return NextResponse.json(
        { message: "Informe a senha atual para confirmar a eliminação da conta." },
        { status: 400 }
      );
    }

    const userResult = await query<PasswordRow>(
      "select password_hash from users where id = $1",
      [session.userId]
    );

    const user = userResult.rows[0];

    if (!user) {
      return NextResponse.json({ message: "Utilizador não encontrado." }, { status: 404 });
    }

    if (!verifyPassword(payload.currentPassword, user.password_hash)) {
      return NextResponse.json(
        { message: "A senha atual está incorreta." },
        { status: 401 }
      );
    }

    await query("delete from users where id = $1", [session.userId]);

    return NextResponse.json({ message: "Conta apagada com sucesso." });
  } catch (error: unknown) {
    console.error("USER_DELETE_ROUTE_ERROR", error);
    return NextResponse.json(
      { message: "Não foi possível apagar a conta neste momento. Tente novamente." },
      { status: 500 }
    );
  }
};

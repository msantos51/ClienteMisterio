/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/register/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { createEmailConfirmationTemplate } from "@/lib/authEmail";
import { query } from "@/lib/database";
import { hashPassword } from "@/lib/password";
import { sendEmail } from "@/lib/email";
import { createToken, hashToken } from "@/lib/token";

type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserRow = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  is_admin: boolean;
  created_at: string;
};

export const POST = async (request: Request) => {
  // Lê o corpo da requisição para criar o novo utilizador.
  const payload = (await request.json()) as RegisterPayload;

  if (!payload.firstName || !payload.lastName || !payload.email || !payload.password || !payload.confirmPassword) {
    return NextResponse.json(
      { message: "Preencha primeiro nome, último nome, e-mail, senha e confirmação para continuar." },
      { status: 400 }
    );
  }

  if (payload.password !== payload.confirmPassword) {
    return NextResponse.json(
      { message: "A confirmação da senha deve ser igual à senha informada." },
      { status: 400 }
    );
  }

  const normalizedEmail = payload.email.trim().toLowerCase();

  const existingUserByEmail = await query<UserRow>("select id from users where email = $1", [normalizedEmail]);

  if (existingUserByEmail.rowCount && existingUserByEmail.rowCount > 0) {
    return NextResponse.json(
      { message: "Já existe uma conta registada com este e-mail." },
      { status: 409 }
    );
  }

  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const passwordHash = hashPassword(payload.password);
  const firstAdminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const shouldBeAdmin = Boolean(firstAdminEmail) && normalizedEmail === firstAdminEmail;

  // Gera token de confirmação de email
  const confirmationToken = createToken();
  const confirmationTokenHash = hashToken(confirmationToken);

  const result = await query<UserRow>(
    `insert into users (
      first_name,
      last_name,
      full_name,
      email,
      password_hash,
      profile_completed,
      email_confirmed,
      email_confirmation_token_hash,
      is_admin
    )
     values ($1, $2, $3, $4, $5, false, false, $6, $7)
     returning id, first_name, last_name, full_name, email, is_admin, created_at`,
    [firstName, lastName, fullName, normalizedEmail, passwordHash, confirmationTokenHash, shouldBeAdmin]
  );

  // Envia email de confirmação
  const user = result.rows[0];
  if (user) {
    const template = createEmailConfirmationTemplate(confirmationToken);
    try {
      await sendEmail({
        to: user.email,
        subject: template.subject,
        html: template.html,
      });
    } catch (error) {
      // Log do erro mas não falha o registo
      console.error("Falha ao enviar e-mail de confirmação:", error);
    }
  }

  return NextResponse.json({
    message: "Conta criada com sucesso. Confirme o seu e-mail para continuar.",
    user: {
      id: user?.id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      fullName: user?.full_name,
      email: user?.email,
      isAdmin: user?.is_admin ?? false,
    },
  });
};

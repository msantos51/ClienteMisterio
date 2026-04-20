/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/reset-password/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { hashPassword, validatePasswordStrength } from "@/lib/password";
import { checkRateLimit, getClientIdentifier } from "@/lib/rateLimit";
import { hashToken } from "@/lib/token";

type ResetPasswordPayload = {
  token: string;
  newPassword: string;
  confirmPassword: string;
};

type UserRow = {
  id: string;
};

export const POST = async (request: Request) => {
  try {
    // Limita tentativas de abuso no endpoint de reposição de password por origem do pedido.
    const rate = checkRateLimit({
      key: `reset:${getClientIdentifier(request)}`,
      windowMs: 60 * 60 * 1000,
      max: 20,
    });

    if (rate.limited) {
      return NextResponse.json(
        { message: "Demasiadas tentativas. Tente novamente mais tarde." },
        { status: 429, headers: { "Retry-After": rate.retryAfterSeconds.toString() } }
      );
    }

    // Atualiza password usando token válido recebido por e-mail de recuperação.
    const payload = (await request.json()) as Partial<ResetPasswordPayload>;

    if (
      typeof payload.token !== "string" ||
      typeof payload.newPassword !== "string" ||
      typeof payload.confirmPassword !== "string" ||
      !payload.token.trim()
    ) {
      return NextResponse.json(
        { message: "Token, nova password e confirmação são obrigatórios." },
        { status: 400 }
      );
    }

    if (payload.newPassword !== payload.confirmPassword) {
      return NextResponse.json(
        { message: "A confirmação da nova password deve ser igual." },
        { status: 400 }
      );
    }

    const passwordError = validatePasswordStrength(payload.newPassword);
    if (passwordError) {
      return NextResponse.json({ message: passwordError }, { status: 400 });
    }

    const tokenHash = hashToken(payload.token.trim());
    const passwordHash = hashPassword(payload.newPassword);

    const updateResult = await query<UserRow>(
      `update users
       set
         password_hash = $1,
         password_reset_token_hash = null,
         password_reset_expires_at = null
       where password_reset_token_hash = $2
         and password_reset_expires_at is not null
         and password_reset_expires_at > now()
       returning id`,
      [passwordHash, tokenHash]
    );

    if (!updateResult.rowCount) {
      return NextResponse.json(
        { message: "O link de recuperação é inválido ou expirou." },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Password atualizada com sucesso." });
  } catch (error: unknown) {
    console.error("RESET_PASSWORD_ROUTE_ERROR", error);
    return NextResponse.json(
      { message: "Não foi possível atualizar a password neste momento. Tente novamente." },
      { status: 500 }
    );
  }
};

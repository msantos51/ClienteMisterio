/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/forgot-password/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { createPasswordResetTemplate } from "@/lib/authEmail";
import { query } from "@/lib/database";
import { sendEmail } from "@/lib/email";
import { checkRateLimit, getClientIdentifier } from "@/lib/rateLimit";
import { createToken, hashToken } from "@/lib/token";
import { isValidEmail } from "@/lib/validation";

type ForgotPasswordPayload = {
  email: string;
};

type UserRow = {
  id: string;
  email: string;
};

const resetTokenDurationMs = 1000 * 60 * 30;

const neutralResponse = () =>
  NextResponse.json({
    message: "Se o e-mail estiver registado, enviámos instruções para redefinir a password.",
  });

export const POST = async (request: Request) => {
  try {
    // Limita disparos de e-mail e enumeração de contas por origem do pedido.
    const rate = checkRateLimit({
      key: `forgot:${getClientIdentifier(request)}`,
      windowMs: 60 * 60 * 1000,
      max: 10,
    });

    if (rate.limited) {
      return NextResponse.json(
        { message: "Demasiados pedidos de recuperação. Tente novamente mais tarde." },
        { status: 429, headers: { "Retry-After": rate.retryAfterSeconds.toString() } }
      );
    }

    // Recebe o e-mail e envia instruções de recuperação sem expor existência da conta.
    const payload = (await request.json()) as Partial<ForgotPasswordPayload>;

    if (!isValidEmail(payload.email)) {
      // Resposta neutra mesmo em input inválido para não revelar diagnóstico sobre contas.
      return neutralResponse();
    }

    const normalizedEmail = payload.email.trim().toLowerCase();
    const userResult = await query<UserRow>("select id, email from users where email = $1", [normalizedEmail]);
    const user = userResult.rows[0];

    if (user) {
      const token = createToken();
      const tokenHash = hashToken(token);

      await query(
        `update users
         set
           password_reset_token_hash = $1,
           password_reset_expires_at = to_timestamp($2 / 1000.0)
         where id = $3`,
        [tokenHash, Date.now() + resetTokenDurationMs, user.id]
      );

      const template = createPasswordResetTemplate(token);
      try {
        await sendEmail({
          to: user.email,
          subject: template.subject,
          html: template.html,
        });
      } catch (error) {
        // Evita falha do endpoint quando o provedor estiver indisponível, mantendo resposta neutra por segurança.
        console.error("Falha ao enviar e-mail de recuperação de password:", error);
      }
    }

    return neutralResponse();
  } catch (error: unknown) {
    console.error("FORGOT_PASSWORD_ROUTE_ERROR", error);
    return neutralResponse();
  }
};

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/confirm-email/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { getAppBaseUrl } from "@/lib/appUrl";
import { query } from "@/lib/database";
import { hashToken } from "@/lib/token";

type ConfirmRow = {
  id: string;
};

export const GET = async (request: Request) => {
  // Valida token recebido por query string para confirmar a conta.
  const url = new URL(request.url);
  const token = url.searchParams.get("token")?.trim();

  // Monta o redirect a partir de APP_URL, nunca de request.url — atrás do
  // proxy de produção o host da ligação pode resolver para o bind interno
  // do servidor (ex.: 0.0.0.0:<PORT>) em vez do domínio público.
  const appBaseUrl = getAppBaseUrl();

  if (!token) {
    return NextResponse.redirect(new URL("/entrar?confirmed=0", appBaseUrl));
  }

  const tokenHash = hashToken(token);

  const updateResult = await query<ConfirmRow>(
    `update users
     set
       email_confirmed = true,
       email_confirmation_token_hash = null
     where email_confirmation_token_hash = $1
     returning id`,
    [tokenHash]
  );

  if (!updateResult.rowCount) {
    return NextResponse.redirect(new URL("/entrar?confirmed=0", appBaseUrl));
  }

  return NextResponse.redirect(new URL("/entrar?confirmed=1", appBaseUrl));
};

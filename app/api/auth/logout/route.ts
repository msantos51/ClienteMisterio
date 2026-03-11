/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/auth/logout/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";

import { destroySession } from "@/lib/session";

export const POST = async () => {
  // Invalida a sessão ativa removendo o cookie HTTP-only no servidor.
  await destroySession();

  return NextResponse.json({ message: "Sessão terminada com sucesso." });
};

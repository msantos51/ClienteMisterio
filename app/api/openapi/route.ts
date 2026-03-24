/*
 * DESCRIÇÃO DO FICHEIRO: Expõe a especificação OpenAPI em JSON para ser consumida pelo Swagger UI no browser.
 */

import { NextResponse } from "next/server";

import { openApiDocument } from "@/lib/openapi";

export const GET = async () => {
  // Devolve o documento OpenAPI como JSON para o cliente Swagger.
  return NextResponse.json(openApiDocument);
};

/*
 * DESCRIÇÃO DO FICHEIRO: Expõe a especificação OpenAPI em JSON para ser consumida pelo Swagger UI no browser.
 */

import { NextResponse } from "next/server";

import { openApiDocument } from "@/lib/openapi";

const isPublicApiDocsEnabled = () => {
  // Permite expor o JSON OpenAPI apenas quando explicitamente autorizado por configuração.
  return process.env.ENABLE_PUBLIC_API_DOCS === "true";
};

export const GET = async () => {
  if (process.env.NODE_ENV === "production" && !isPublicApiDocsEnabled()) {
    // Evita exposição da documentação técnica da API em ambiente público por defeito.
    return NextResponse.json({ message: "Recurso não encontrado." }, { status: 404 });
  }

  // Devolve o documento OpenAPI como JSON para o cliente Swagger.
  return NextResponse.json(openApiDocument);
};

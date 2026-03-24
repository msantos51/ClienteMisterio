/*
 * DESCRIÇÃO DO FICHEIRO: Página pública que centraliza a documentação e teste manual da API através do Swagger UI carregado por CDN.
 */

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "API Docs | Cliente Mistério",
  description: "Documentação Swagger para testar endpoints manualmente no browser.",
};

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] px-4 py-6 sm:px-6 md:px-8">
      {/* Título e contexto rápido para orientar quem vai testar endpoints no browser. */}
      <header className="mx-auto mb-4 max-w-6xl">
        <h1 className="text-2xl font-bold text-[#171717]">Swagger API Explorer</h1>
        <p className="mt-2 text-sm text-[#4a4a4a]">
          Use esta página para testar todos os endpoints disponíveis da aplicação.
        </p>
      </header>

      {/* Folha de estilos oficial do Swagger UI para renderização da interface. */}
      <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />

      {/* Container onde o Swagger UI será montado no cliente. */}
      <section className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#e7e7e7] bg-white p-2 shadow-sm">
        <div id="swagger-ui" />
      </section>

      {/* Script oficial do Swagger UI carregado no browser. */}
      <Script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js" strategy="afterInteractive" />

      {/* Inicializa o Swagger apontando para o JSON OpenAPI da própria app. */}
      <Script id="swagger-ui-init" strategy="afterInteractive">
        {`
          window.onload = function () {
            if (!window.SwaggerUIBundle) {
              return;
            }

            window.SwaggerUIBundle({
              url: '/api/openapi',
              dom_id: '#swagger-ui',
              deepLinking: true,
              displayRequestDuration: true,
              persistAuthorization: true,
              presets: [window.SwaggerUIBundle.presets.apis],
            });
          };
        `}
      </Script>
    </main>
  );
}

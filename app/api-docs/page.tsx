/*
 * DESCRIÇÃO DO FICHEIRO: Página pública que centraliza a documentação e teste manual da API através do Swagger UI carregado por CDN.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "API Docs | Cliente Mistério",
  description: "Documentação Swagger para testar endpoints manualmente no browser.",
};

const isPublicApiDocsEnabled = () => {
  // Permite expor Swagger apenas quando explicitamente autorizado por variável de ambiente.
  return process.env.ENABLE_PUBLIC_API_DOCS === "true";
};

export default function ApiDocsPage() {
  if (process.env.NODE_ENV === "production" && !isPublicApiDocsEnabled()) {
    // Oculta a rota em produção para reduzir exposição desnecessária de superfície da API.
    notFound();
  }

  return (
    <main className="full-section full-section-scroll bg-[color:var(--background)] px-4 py-6 sm:px-6 md:px-8">
      {/* Título e contexto rápido para orientar quem vai testar endpoints no browser. */}
      <header className="mx-auto mb-4 max-w-6xl">
        <h1 className="text-2xl font-bold tracking-[-0.03em] text-white">Swagger API Explorer</h1>
        <p className="mt-2 text-sm text-white/80">
          Use esta página para testar todos os endpoints disponíveis da aplicação.
        </p>
      </header>

      {/* Folha de estilos oficial do Swagger UI para renderização da interface. */}
      <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />

      {/* Container onde o Swagger UI será montado no cliente. */}
      {/* O Swagger UI traz o seu próprio tema claro: fica num painel branco,
          como os restantes blocos de foco do sistema. */}
      <section className="on-light mx-auto max-w-6xl overflow-hidden rounded-xl bg-white p-2 shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
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

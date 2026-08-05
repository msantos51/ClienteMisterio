/*
 * DESCRIÇÃO DO FICHEIRO: Página de erro 500 personalizada em português.
 * `global-error` substitui todo o layout raiz quando ocorre um erro não
 * tratado, por isso precisa do próprio <html>/<body>.
 */

"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="pt-PT">
      <body className="bg-[color:var(--background,#5a3dc7)] text-white antialiased">
        <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="text-label">Erro 500</p>
          <h1 className="page-title">Algo correu mal.</h1>
          <p className="text-body-lg max-w-[52ch]">
            Ocorreu um erro inesperado. Podes tentar novamente ou voltar à página inicial.
          </p>
          <div className="hero-buttons">
            <button type="button" className="button primary" onClick={() => reset()}>
              Tentar novamente
            </button>
            <a href="/" className="button secondary">
              Página inicial
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

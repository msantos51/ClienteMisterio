/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Mantém o hero com o mesmo content width e paddings das páginas internas para evitar "salto" visual na navegação. */}
      <div className="relative w-full bg-transparent">
        {/* Reaproveita o mesmo envelope horizontal (max-w-6xl + px responsivo) usado no AppShell das páginas internas. */}
        <div className="mx-auto w-full max-w-6xl px-3 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-10 md:px-10">
          {/* Em desktop, mantém duas colunas, mas com alinhamento inicial para sincronizar o ponto de arranque com a página Sobre. */}
          <div className="grid w-full items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
            {/* Agrupa o conteúdo textual com alinhamento consistente com a página sobre. */}
            <div className="space-y-4 sm:space-y-6">
              {/* Reforça o contexto da landing com uma etiqueta editorial discreta. */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Formação e prática
              </p>

              {/* Destaca a proposta principal com cor de marca e peso tipográfico forte para aumentar o impacto. */}
              <h1 className="text-3xl font-semibold leading-tight home-title-highlight-text sm:text-4xl lg:text-5xl">
                Sê pago para testar produtos e serviços
              </h1>

              {/* Mostra os benefícios em destaque com leitura vertical clara e espaçamento equilibrado. */}
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base leading-6 sm:leading-7 text-white">
                <li>-Sem horários</li>
                <li>-Escolhes as marcas</li>
                <li>-Rendimento extra</li>
              </ul>

              {/* Posiciona o CTA junto ao bloco textual para manter hierarquia e facilitar interação. */}
              <div className="flex justify-start pt-2 sm:pt-4">
                <Link
                  className="site-pill-button px-8 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  href="/about"
                >
                  Começa Já
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

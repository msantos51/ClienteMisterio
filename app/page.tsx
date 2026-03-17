/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Mantém o hero com o mesmo content width e paddings das páginas internas para evitar "salto" visual na navegação. */}
      <div className="relative w-full bg-transparent">
        {/* Reaproveita o mesmo envelope horizontal (max-w-6xl + px responsivo) usado no AppShell das páginas internas. */}
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 md:px-10">
          {/* Em desktop, mantém duas colunas, mas com alinhamento inicial para sincronizar o ponto de arranque com a página Sobre. */}
          <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
            {/* Agrupa o conteúdo textual e mantém alinhamento central no mobile e à esquerda no desktop. */}
            <div className="flex w-full max-w-2xl flex-col items-center gap-8 pt-8 text-center lg:items-start lg:pt-10 lg:text-left">
              {/* Reforça o contexto da landing com uma etiqueta editorial discreta. */}
              <p className="section-label-uppercase text-[11px] tracking-[0.35em] text-white/80">
                Formação e prática
              </p>

              {/* Destaca a proposta principal com cor de marca e peso tipográfico forte para aumentar o impacto. */}
              <h1 className="text-4xl font-bold leading-tight home-title-highlight-text sm:text-5xl lg:text-6xl">
                Sê pago para testar produtos e serviços
              </h1>

              {/* Mostra os benefícios em destaque com leitura vertical clara e espaçamento equilibrado. */}
              <ul className="space-y-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                <li>-Sem horários</li>
                <li>-Escolhes as marcas</li>
                <li>-Rendimento extra</li>
              </ul>

              {/* Posiciona o CTA junto ao bloco textual para manter hierarquia e facilitar interação. */}
              <div className="flex justify-center pb-4 pt-8 lg:justify-start">
                <Link
                  className="site-pill-button px-10 py-4 text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  href="/about"
                >
                  Começa Já
                </Link>
              </div>
            </div>

            {/* Exibe a imagem na segunda coluna para criar separação real entre os blocos em desktop. */}
            <div className="relative mx-auto hidden h-[70vh] min-h-[520px] w-full max-w-[620px] lg:block">
              {/* Usa imagem local otimizada do Next para garantir desempenho e fidelidade visual. */}
              <Image
                src="/images/hero-bg.webp"
                alt="Imagem decorativa do lado direito"
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Mantém o hero a ocupar o ecrã para preservar o impacto visual da primeira dobra. */}
      <div className="relative min-h-screen w-full bg-transparent">
        {/* Usa um content wrapper com limites de largura para criar margens laterais consistentes em desktop. */}
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-20 xl:px-24">
          {/* Em desktop, distribui texto e imagem em duas colunas com espaçamento semelhante à referência. */}
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
            {/* Agrupa o conteúdo textual e mantém alinhamento central no mobile e à esquerda no desktop. */}
            <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
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
                src="/images/background (2).png"
                alt="Imagem decorativa do lado direito"
                fill
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

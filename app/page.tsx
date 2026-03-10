import Image from "next/image";
import Link from "next/link";

const mainHeroImagePath = "/images/Background.png";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Divide o hero em duas colunas no desktop para manter o texto à esquerda e a imagem à direita. */}
      <div className="relative grid min-h-screen w-full bg-gradient-to-b from-[#0067a9] to-[#0067a9] lg:grid-cols-2">
        {/* Mantém um painel dedicado ao conteúdo textual para evitar que o texto desapareça atrás da imagem. */}
        <div className="relative z-10 flex px-6 py-24 sm:px-10 lg:px-16">
          {/* Estrutura o conteúdo textual para preservar hierarquia e legibilidade. */}
          <div className="flex min-h-[70vh] w-full max-w-xl flex-col gap-8">
            {/* Reforça o contexto da landing com uma etiqueta editorial discreta. */}
            <p className="section-label-uppercase text-[11px] tracking-[0.35em] text-black/70">
              Formação e prática
            </p>

            {/* Destaca a proposta principal com cor azul e peso tipográfico forte para aumentar o impacto. */}
            <h1 className="text-4xl font-bold leading-tight text-[#2596be] sm:text-5xl lg:text-6xl">
              Sê pago para testar produtos e serviços
            </h1>

            {/* Mostra os benefícios em bold e com tamanho ligeiramente inferior ao título principal. */}
            <ul className="space-y-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              <li>-Sem horários</li>
              <li>-Escolhes as marcas</li>
              <li>-Rendimento extra</li>
            </ul>

            {/* Em mobile mantém o CTA no fluxo natural para facilitar leitura e toque. */}
            <div className="flex justify-center pb-4 pt-8 lg:hidden">
              <Link
                className="site-pill-button px-10 py-4 text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                href="/about"
              >
                Começa Já
              </Link>
            </div>
          </div>
        </div>

        {/* No desktop posiciona o CTA no centro horizontal da página, mantendo a altura atual no hero. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[18%] z-20 hidden justify-center lg:flex">
          <Link
            className="pointer-events-auto site-pill-button px-10 py-4 text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            href="/about"
          >
            Começa Já
          </Link>
        </div>

        {/* Garante que a imagem começa no topo e chega até ao extremo direito da página. */}
        <div className="relative min-h-screen">
          <Image
            alt="Cliente mistério em destaque"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={mainHeroImagePath}
          />
        </div>
      </div>
    </section>
  );
}

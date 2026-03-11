import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Mantém o hero em coluna única para priorizar a mensagem principal em ecrãs pequenos. */}
      <div className="relative flex min-h-screen w-full bg-transparent">
        {/* Posiciona a imagem decorativa no lado direito apenas em desktop para não comprometer a leitura no mobile. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42vw] max-w-[680px] lg:block">
          {/* Usa imagem local otimizada do Next para garantir desempenho e manter o visual solicitado. */}
          <Image
            src="/images/background (2).png"
            alt="Imagem decorativa do lado direito"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Centraliza e limita a largura do conteúdo textual para preservar legibilidade em todos os ecrãs. */}
        <div className="relative z-10 flex w-full px-6 py-24 sm:px-10 lg:px-16">
          {/* Organiza título, benefícios e CTA com espaçamento consistente e com respiro à direita em desktop. */}
          <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center gap-8 pr-0 text-center lg:mx-0 lg:ml-0 lg:pr-[30vw]">
            {/* Reforça o contexto da landing com uma etiqueta editorial discreta. */}
            <p className="section-label-uppercase text-[11px] tracking-[0.35em] text-white/80">
              Formação e prática
            </p>

            {/* Destaca a proposta principal com cor de marca e peso tipográfico forte para aumentar o impacto. */}
            <h1 className="text-4xl font-bold leading-tight home-title-highlight-text sm:text-5xl lg:text-6xl">
              Sê pago para testar produtos e serviços
            </h1>

            {/* Mostra os benefícios em destaque com alinhamento central para manter equilíbrio visual. */}
            <ul className="space-y-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              <li>-Sem horários</li>
              <li>-Escolhes as marcas</li>
              <li>-Rendimento extra</li>
            </ul>

            {/* Mantém o CTA principal em posição central para facilitar leitura e toque em todos os dispositivos. */}
            <div className="flex justify-center pb-4 pt-8">
              <Link
                className="site-pill-button px-10 py-4 text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                href="/about"
              >
                Começa Já
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

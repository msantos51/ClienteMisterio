import Image from "next/image";
import Link from "next/link";

const mainHeroImagePath = "/images/Background.png";

export default function HomePage() {
  return (
    <section className="px-0 pb-10 pt-2">
      {/* Cria duas colunas no desktop para posicionar o conteúdo textual à esquerda e a imagem à direita. */}
      <div className="mx-auto grid min-h-[calc(100vh-130px)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)] lg:gap-12">
        {/* Mantém o bloco textual encostado ao lado esquerdo para reproduzir o alinhamento da referência. */}
        <article className="max-w-[640px] pt-6 lg:pt-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
            Novo Curso
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[color:var(--foreground)] sm:mt-5 sm:text-5xl lg:text-6xl">
            O único curso de <span className="text-[color:var(--accent)]">cliente mistério</span> em Portugal
          </h1>

          <p className="mt-8 max-w-[560px] text-base font-medium leading-relaxed text-[#4a4a4a]">
            Sê dos primeiros Clientes Mistério certificados!
          </p>

          <div className="mt-10">
            <Link
              className="site-pill-button text-[10px] uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]"
              href="/about"
            >
              Começa Já
            </Link>
          </div>
        </article>

        {/* Reserva uma área alta para a imagem e ancora o conteúdo no fundo para equilibrar a composição. */}
        <div className="relative mx-auto h-[360px] w-full max-w-[390px] sm:h-[460px] sm:max-w-[440px] lg:h-[720px] lg:max-w-[520px]">
          <Image
            alt="Cliente mistério em destaque"
            className="object-contain object-bottom lg:object-right-bottom"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 68vw, 520px"
            src={mainHeroImagePath}
          />
        </div>
      </div>
    </section>
  );
}

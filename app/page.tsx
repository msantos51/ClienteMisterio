import Image from "next/image";
import Link from "next/link";

const mainHeroImagePath = "/images/Background.png";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Divide o hero em duas colunas no desktop para manter o texto à esquerda e a imagem à direita. */}
      <div className="relative grid min-h-screen w-full bg-[#efefef] lg:grid-cols-2">
        {/* Reserva a metade esquerda como área limpa para reforçar o contraste da composição. */}
        <div aria-hidden="true" className="hidden lg:block" />

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

        {/* Posiciona o botão mais abaixo para evitar o centro visual da página. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-16 sm:pb-20 lg:pb-24">
          <Link
            className="pointer-events-auto site-pill-button px-10 py-4 text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            href="/about"
          >
            Começa Já
          </Link>
        </div>
      </div>
    </section>
  );
}

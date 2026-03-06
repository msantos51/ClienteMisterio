import Image from "next/image";
import Link from "next/link";

const mainHeroImagePath = "/images/Background.png";

export default function HomePage() {
  return (
    <section className="px-0 pb-6 pt-2">
      {/* Define uma grelha de duas colunas para dividir o ecrã em metades no desktop. */}
      <div className="relative mx-auto grid min-h-[calc(100vh-130px)] w-full max-w-none bg-[#efefef] lg:grid-cols-2">
        {/* Reserva a metade esquerda como área limpa para reforçar o efeito de divisão do ecrã. */}
        <div aria-hidden="true" className="hidden lg:block" />

        {/* Coloca a imagem a ocupar toda a metade direita, com enquadramento elegante em várias larguras. */}
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            alt="Cliente mistério em destaque"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={mainHeroImagePath}
          />
        </div>

        {/* Mantém o botão principal exatamente no centro para destacar a ação principal da página. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
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

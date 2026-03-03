import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      {/* Centraliza o conteúdo numa largura máxima para aproximar texto e imagem em ecrãs grandes. */}
      <div className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:gap-10">
        {/* Mantém o bloco textual com largura controlada para preservar legibilidade e hierarquia visual. */}
        <article className="max-w-xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] sm:p-5 lg:bg-transparent lg:p-0 lg:shadow-none">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
            Novo Curso
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[color:var(--foreground)] sm:mt-5 sm:text-5xl lg:text-6xl">
            O único curso de <span className="text-[color:var(--accent)]">cliente mistério</span> em Portugal
          </h1>

          <p className="mt-5 text-sm font-medium text-[#4a4a4a] sm:mt-6 sm:text-base">
            Sê dos primeiros Clientes Mistério certificados!
          </p>

          <div className="mt-7 sm:mt-8">
            <Link
              className="site-pill-button text-[10px] uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]"
              href="/about"
            >
              Começa Já
            </Link>
          </div>
        </article>

        {/* Reserva uma coluna fixa para a imagem no desktop para reduzir o espaço vazio entre blocos. */}
        <div className="relative mx-auto h-[340px] w-full max-w-[360px] sm:h-[420px] sm:max-w-[420px] lg:h-[680px] lg:max-w-[480px]">
          <Image
            alt="Cliente mistério em destaque"
            className="object-contain object-bottom lg:object-right-bottom"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 480px"
            src="/images/IMG_2622.png"
          />
        </div>
      </div>
    </section>
  );
}

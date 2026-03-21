/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal e organiza o hero inicial com a mensagem, benefícios e CTA.
 */

import Link from "next/link";
import ThreePointsCards from "./components/ThreePointsCards";
import CheckoutButton from "./components/CheckoutButton";

const mainHeroImagePath = "/images/Background.png";

export default function HomePage() {
  return (
    <section className="w-full">
      {/* Mantém a secção principal com largura total para o hero ocupar todo o espaço disponível. */}
      <div className="relative w-full bg-transparent">
        {/* Centraliza o conteúdo num contentor responsivo alinhado com o restante layout da aplicação. */}
        <div className="mx-auto w-full max-w-6xl px-3 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-10 md:px-10">
          {/* Usa uma grelha simples e centra o bloco principal para destacar a proposta de valor. */}
          <div className="grid w-full justify-items-center gap-6 sm:gap-8">
            {/* Agrupa o texto e o botão num bloco centralizado para melhorar a hierarquia visual. */}
            <div className="flex w-full max-w-3xl flex-col items-center space-y-4 text-center sm:space-y-6">
              {/* Destaca a mensagem principal no centro com texto preto, sem caixa vermelha. */}
              <h1 className="h-auto min-h-0 rounded-3xl px-6 py-4 text-center text-3xl font-semibold leading-tight sm:px-8 sm:py-5 sm:text-4xl lg:text-5xl home-title-highlight-text">
                Cliente Mistério
              </h1>

              {/* Tagline por baixo do título principal */}
              <p className="text-center text-sm sm:text-base leading-6 sm:leading-7">
                O único curso de Cliente Mistério em Portugal — aprende a ganhar enquanto avalias!
              </p>

              {/* Exibe os 3 pontos principais em cards animados. */}
              <ThreePointsCards />

              {/* Mantém o CTA centrado por baixo dos benefícios para reforçar a ação principal. */}
              <div className="flex flex-col gap-3 justify-center pt-2 sm:pt-4 items-center sm:flex-row sm:gap-4">
                <Link
                  className="site-pill-button-secondary px-8 py-3 text-[10px] uppercase tracking-[0.15em] shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:px-10 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]"
                  href="/about"
                >
                  Sabe mais
                </Link>
                <CheckoutButton label="Comprar Curso" />
              </div>
            </div>
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

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal e organiza o hero inicial com a mensagem, benefícios e CTA.
 */

import Link from "next/link";
import ThreePointsCards from "./components/ThreePointsCards";

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
              <h1 className="h-auto min-h-0 rounded-3xl px-6 py-4 text-center text-2xl leading-tight whitespace-normal sm:px-8 sm:py-5 sm:text-4xl lg:text-5xl text-black">
                Cliente Mistério
              </h1>

              {/* Exibe os 3 pontos principais em cards animados. */}
              <ThreePointsCards />

              {/* Mantém o CTA centrado por baixo dos benefícios para reforçar a ação principal. */}
              <div className="flex justify-center pt-2 sm:pt-4">
                <Link
                  className="site-pill-button px-8 py-3 text-[10px] uppercase tracking-[0.15em] shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:px-10 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]"
                  href="/about"
                >
                  Começa já
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

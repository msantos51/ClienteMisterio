import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import TopNav from "./components/TopNav";
import HeaderActions from "./components/HeaderActions";
import "./globals.css";

// Define a fonte principal com estilo geométrico para reforçar o visual editorial.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Mantém as fontes auxiliares para áreas técnicas sem quebrar compatibilidade.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Centraliza metadados globais do website.
export const metadata: Metadata = {
  title: "Cliente Mistério",
  description: "Portal de participação cidadã e informação pública.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} bg-[color:var(--background)] text-[color:var(--foreground)] antialiased`}
      >
        {/* Limita a largura máxima da página para manter o mesmo eixo de alinhamento da referência. */}
        <div className="mx-auto min-h-screen w-full max-w-[1400px] bg-[color:var(--background)]">
          {/* Estrutura o cabeçalho em três áreas (logo, menu, ação) para manter disposição equilibrada no desktop. */}
          <header className="relative grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-5 sm:px-6 md:px-10 md:py-6 lg:grid-cols-[minmax(220px,1fr)_auto_minmax(180px,1fr)]">
            <a
              className="text-[10px] font-black uppercase tracking-[0.28em] text-[color:var(--foreground)] sm:text-xs sm:tracking-[0.35em]"
              href="/"
            >
              Cliente Mistério
            </a>

            {/* Mantém o menu no centro em ecrãs grandes e no lado direito em ecrãs pequenos. */}
            <div className="justify-self-end lg:justify-self-center">
              <TopNav />
            </div>

            {/* Alinha o botão de ação à direita para reproduzir a hierarquia visual do exemplo. */}
            <div className="hidden lg:flex lg:justify-self-end">
              <HeaderActions />
            </div>

            {/* Mantém as ações disponíveis no mobile sem quebrar o layout do menu hamburguer. */}
            <div className="justify-self-end lg:hidden">
              <HeaderActions />
            </div>
          </header>

          {/* Renderiza o conteúdo principal sem deslocar o eixo de alinhamento lateral. */}
          <main className="px-4 pb-10 sm:px-6 md:px-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

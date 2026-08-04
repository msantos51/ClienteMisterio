/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/AppShell.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/app/context/LanguageContext";
import HeaderActions from "./HeaderActions";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // A página inicial ocupa exatamente um ecrã: sem rodapé não há nada para
  // percorrer abaixo do processo. As restantes páginas mantêm o rodapé.
  const isHome = pathname === "/";

  return (
    <LanguageProvider>
      <div className="mx-auto flex min-h-screen w-full flex-col bg-transparent">
        {/* Cabeçalho branco: marca à esquerda, navegação e ações à direita. */}
        <header className="site-header on-light sticky top-0 z-50">
          <div className="site-header-inner mx-auto w-full max-w-[1400px]">
            <Link
              className="logo shrink-0"
              href="/"
              aria-label="Cliente Mistério — início"
            >
              <span className="whitespace-nowrap text-[18px] font-bold tracking-[-0.03em] text-[color:var(--ink)]">
                Cliente Mistério<span className="text-[color:var(--color-red)]">.</span>
              </span>
            </Link>

            <div className="nav-buttons gap-3 lg:gap-8">
              <TopNav />
              <HeaderActions />
            </div>
          </div>
        </header>

        {/* Na página inicial o conteúdo estica-se para ocupar o ecrã inteiro. */}
        <main className={`flex-1 px-0 pb-0 ${isHome ? "flex flex-col" : ""}`}>
          {children}
        </main>

        {!isHome ? <Footer /> : null}
      </div>
    </LanguageProvider>
  );
}

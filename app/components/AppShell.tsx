/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/AppShell.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { LanguageProvider } from "@/app/context/LanguageContext";
import HeaderActions from "./HeaderActions";
import LanguageSwitcher from "./LanguageSwitcher";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="mx-auto flex min-h-screen w-full flex-col bg-transparent">
        {/* Cabeçalho azul: marca à esquerda, navegação e ações à direita. */}
        <header className="site-header sticky top-0 z-50">
          <div className="site-header-inner mx-auto w-full max-w-[1400px]">
            <Link
              className="logo shrink-0"
              href="/"
              aria-label="Cliente Mistério — início"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--color-primary-red)] text-[13px] font-bold tracking-tight text-white">
                CM
              </span>
              <span className="hidden flex-col whitespace-nowrap leading-none sm:flex">
                <span className="text-[16px] font-bold tracking-tight text-white">
                  Cliente Mistério<span className="text-[color:var(--color-primary-red)]">.</span>
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-white/60">
                  Formação Pro
                </span>
              </span>
            </Link>

            <div className="nav-buttons gap-3 lg:gap-8">
              <TopNav />
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <HeaderActions />
            </div>
          </div>

          {/* Em ecrãs pequenos o seletor de idioma fica numa linha própria. */}
          <div className="flex w-full justify-center border-t border-white/15 px-3 py-1.5 md:hidden">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 px-0 pb-0">{children}</main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

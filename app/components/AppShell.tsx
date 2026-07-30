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
        {/* Cabeçalho escuro: marca à esquerda, navegação e ações à direita. */}
        <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--background)]/92 backdrop-blur-md">
          <div className="px-3 py-3 sm:px-6 md:px-10 md:py-4">
            <div className="relative flex w-full items-center justify-between gap-3">
              <Link
                className="flex shrink-0 items-center gap-2.5"
                href="/"
                aria-label="Cliente Mistério — início"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-[color:var(--brand)] text-[13px] font-extrabold tracking-tight text-white sm:h-10 sm:w-10">
                  CM
                </span>
                <span className="hidden flex-col whitespace-nowrap leading-none sm:flex">
                  <span className="text-[15px] font-extrabold tracking-tight text-white">
                    Cliente Mistério<span className="text-[color:var(--brand)]">.</span>
                  </span>
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Formação Pro
                  </span>
                </span>
              </Link>

              <div className="flex items-center gap-3 lg:gap-8 xl:gap-10">
                <TopNav />
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
                <HeaderActions />
              </div>
            </div>
          </div>

          {/* Em ecrãs pequenos o seletor de idioma fica numa linha própria. */}
          <div className="flex w-full justify-center border-t border-[color:var(--line-light)] px-3 py-1.5 md:hidden">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 px-0 pb-0">{children}</main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

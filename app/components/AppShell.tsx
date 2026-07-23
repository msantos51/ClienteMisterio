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
        <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/85 backdrop-blur-md">
          <div className="flex w-full justify-center border-b border-[color:var(--line-light)] px-3 sm:px-6 md:px-10">
            <LanguageSwitcher />
          </div>

          <div className="px-3 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4">
            <div className="relative flex w-full items-center justify-between gap-2 sm:gap-3">
              <Link
                className="order-2 lg:order-first flex items-center gap-2.5"
                href="/"
                aria-label="Cliente Mistério — início"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#312e81] text-[13px] font-extrabold tracking-tight text-white shadow-[0_8px_18px_-8px_rgba(79,70,229,0.7)] sm:h-10 sm:w-10">
                  CM
                </span>
                <span className="hidden flex-col leading-none sm:flex">
                  <span className="text-[13px] font-extrabold tracking-tight text-[color:var(--ink)]">
                    Cliente Mistério
                  </span>
                  <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                    Formação Pro
                  </span>
                </span>
              </Link>

              <div className="order-first lg:order-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                <TopNav />
              </div>

              <div className="order-last max-w-[calc(100%-120px)] sm:max-w-none">
                <HeaderActions />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-0 pb-0">{children}</main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

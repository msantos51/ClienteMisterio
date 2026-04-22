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
        <header className="sticky top-0 z-50 border-b border-white/20 bg-[#E8EAED] backdrop-blur-[2px]">
          <div className="flex w-full justify-center border-b border-black/5 px-3 sm:px-6 md:px-10">
            <LanguageSwitcher />
          </div>

          <div className="px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6">
            <div className="relative flex w-full items-center justify-between gap-2 sm:gap-3">
              <Link
                className="order-2 lg:order-first text-[10px] font-black uppercase tracking-[0.25em] text-[color:var(--foreground)] sm:text-sm sm:tracking-[0.35em]"
                href="/"
              >
                CM
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

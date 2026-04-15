/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/AppShell.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderActions from "./HeaderActions";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCoursePage = pathname === "/curso";

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      {/* Mantém o cabeçalho absoluto na home para sobrepor o hero, e sticky nas páginas internas. */}
      <header
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-3 py-3 backdrop-blur-[2px] sm:px-6 sm:py-4 md:px-10 md:py-6"
      >
        <div className="relative flex w-full items-center justify-between gap-2 sm:gap-3">
          <Link
            className="text-[10px] font-black uppercase tracking-[0.25em] text-[color:var(--foreground)] sm:text-sm sm:tracking-[0.35em]"
            href="/"
          >
            CM
          </Link>

          {/* Mantém o menu centrado no cabeçalho em desktop, inclusive na home. */}
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <TopNav />
          </div>

          {/* Mantém uma única instância das ações para evitar renderização duplicada e navegação menos fluída. */}
          <div className="max-w-[calc(100%-120px)] sm:max-w-none">
            <HeaderActions />
          </div>
        </div>
      </header>

      {/* Remove margens na home para permitir hero full-bleed e mantém paddings nas páginas internas. */}
      <main className={`flex-1 ${isHomePage ? "px-0 pb-0" : "px-3 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-10 md:px-10 bg-gray-50"}`}>
        {isHomePage ? (
          children
        ) : (
          <div className={isCoursePage ? "mx-auto w-full max-w-none sm:max-w-6xl" : "mx-auto w-full max-w-6xl"}>{children}</div>
        )}
      </main>

      <Footer />
    </div>
  );
}

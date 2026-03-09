"use client";

import { usePathname } from "next/navigation";
import HeaderActions from "./HeaderActions";
import TopNav from "./TopNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="mx-auto min-h-screen w-full bg-[color:var(--background)]">
      {/* Mantém o cabeçalho absoluto na home para sobrepor o hero, e sticky nas páginas internas. */}
      <header
        className={`${
          isHomePage
            ? "absolute inset-x-0 top-0 z-50 border-b border-transparent bg-transparent"
            : "sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--background)]/95 backdrop-blur-sm"
        } px-4 py-5 sm:px-6 md:px-10 md:py-6`}
      >
        <div className="relative flex w-full items-center justify-between gap-3">
          <a
            className="text-[11px] font-black uppercase tracking-[0.3em] text-[color:var(--foreground)] sm:text-sm sm:tracking-[0.35em]"
            href="/"
          >
            Cliente Mistério
          </a>

          {/* Mantém o menu sempre no centro para evitar sobreposição com o logótipo. */}
          <div
            className="justify-self-end lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <TopNav />
          </div>

          {/* Alinha o botão de ação ao limite direito do conteúdo para manter consistência visual. */}
          <div className="hidden lg:flex">
            <HeaderActions />
          </div>

          {/* Mantém as ações disponíveis no mobile sem quebrar o layout do menu hamburguer. */}
          <div className="lg:hidden">
            <HeaderActions />
          </div>
        </div>
      </header>

      {/* Remove margens na home para permitir hero full-bleed e mantém paddings nas páginas internas. */}
      <main className={isHomePage ? "px-0 pb-0" : "px-4 pb-10 sm:px-6 md:px-10"}>{children}</main>
    </div>
  );
}

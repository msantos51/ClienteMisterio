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
        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[minmax(220px,1fr)_auto_minmax(180px,1fr)]">
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

          {/* Alinha o botão de ação ao limite direito do conteúdo para manter consistência visual. */}
          <div className="hidden lg:flex lg:justify-self-end">
            <HeaderActions />
          </div>

          {/* Mantém as ações disponíveis no mobile sem quebrar o layout do menu hamburguer. */}
          <div className="justify-self-end lg:hidden">
            <HeaderActions />
          </div>
        </div>
      </header>

      {/* Remove margens na home para permitir hero full-bleed e mantém paddings nas páginas internas. */}
      <main className={isHomePage ? "px-0 pb-0" : "px-4 pb-10 sm:px-6 md:px-10"}>{children}</main>
    </div>
  );
}

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/AppShell.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderActions from "./HeaderActions";
import TopNav from "./TopNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="mx-auto min-h-screen w-full bg-transparent">
      {/* Mantém o cabeçalho absoluto na home para sobrepor o hero, e sticky nas páginas internas. */}
      <header
        className="sticky top-0 z-50 border-b border-white/20 bg-transparent px-4 py-5 backdrop-blur-[2px] sm:px-6 md:px-10 md:py-6"
      >
        <div className="relative flex w-full items-center justify-between gap-3">
          <Link
            className="text-[11px] font-black uppercase tracking-[0.3em] text-[color:var(--foreground)] sm:text-sm sm:tracking-[0.35em]"
            href="/"
          >
            CM
          </Link>

          {/* Mantém o menu centrado no cabeçalho em desktop, inclusive na home. */}
          <div className="justify-self-end lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <TopNav />
          </div>

          {/* Mantém uma única instância das ações para evitar renderização duplicada e navegação menos fluída. */}
          <div>
            <HeaderActions />
          </div>
        </div>
      </header>

      {/* Remove margens na home para permitir hero full-bleed e mantém paddings nas páginas internas. */}
      <main className={isHomePage ? "px-0 pb-0" : "px-4 pb-10 pt-8 sm:px-6 sm:pt-10 md:px-10"}>
        {isHomePage ? children : <div className="mx-auto w-full max-w-6xl">{children}</div>}
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/o-curso", label: "O Curso" },
  { href: "/contact", label: "Contacto" },
  { href: "/account", label: "Conta" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Fecha automaticamente o menu quando a rota muda para manter a navegação ágil no mobile.
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    // Fecha o menu após navegação para melhorar a experiência em ecrãs pequenos.
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Exibe botão hamburguer apenas no mobile para manter o desktop limpo e alinhado ao centro. */}
      <button
        aria-expanded={isMenuOpen}
        aria-label="Abrir menu principal"
        className={`menu-toggle-button lg:hidden ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className="menu-toggle-bar">
          <span className="menu-toggle-line top" />
          <span className="menu-toggle-line middle" />
          <span className="menu-toggle-line bottom" />
        </span>
      </button>

      {/* Mantém os links centrados no desktop e destaca a página ativa com sublinhado. */}
      <nav className="hidden items-center justify-center gap-8 xl:gap-10 lg:flex">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`relative pb-2 text-[16px] font-semibold transition ${
                isActive
                  ? "text-[#2596be]"
                  : "text-[#2596be] hover:text-[#2596be]"
              }`}
              href={item.href}
            >
              {item.label}

              {isActive ? (
                <span className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-[#2596be]" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* Renderiza menu vertical no mobile com área clicável confortável e ordem visual consistente. */}
      {isMenuOpen ? (
        <nav className="mobile-menu-container absolute inset-x-4 top-[84px] z-40 flex flex-col overflow-hidden rounded-[10px] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-sm lg:hidden">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isLast = index === navigationItems.length - 1;

            return (
              <Link
                key={item.href}
                className={`mobile-menu-item px-5 py-4 text-base font-semibold transition ${
                  isActive
                    ? "text-[#2596be]"
                    : "text-[#2596be] hover:bg-[#eaf6fb]"
                } ${isLast ? "border-b-0" : "border-b border-[color:var(--line)]"}`}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </>
  );
}

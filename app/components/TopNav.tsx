/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/TopNav.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TopNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const navigationItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/o-curso", label: t.nav.course },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
    { href: "/account", label: t.nav.account },
  ];

  // Deriva o fecho do menu a partir da alteração da rota sem disparar efeitos em cascata.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  const closeMenu = () => {
    // Fecha o menu após navegação para melhorar a experiência em ecrãs pequenos.
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Fecha o menu ao clicar fora do contêiner para evitar sobreposição visual persistente.
    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (!menuContainerRef.current) {
        return;
      }

      const targetNode = event.target as Node | null;
      if (targetNode && !menuContainerRef.current.contains(targetNode)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("pointerdown", handleOutsidePointerDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
    };
  }, [isMenuOpen]);

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

      {/* Links compactos em maiúsculas, com régua Turkish Red curta na página ativa. */}
      <nav className="hidden items-center justify-center gap-5 lg:gap-5 xl:gap-8 lg:flex">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`relative flex min-h-[44px] items-center whitespace-nowrap pb-1 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-white xl:text-[13px] ${
                isActive ? "text-white" : "text-[color:var(--muted)]"
              }`}
              href={item.href}
            >
              {item.label}

              {isActive ? (
                <span className="absolute bottom-1.5 left-0 h-[2px] w-5 bg-[color:var(--brand)]" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* Renderiza menu vertical no mobile com área clicável confortável e ordem visual consistente. */}
      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" role="presentation">
          <nav
            aria-label="Menu principal mobile"
            className="mobile-menu-container absolute left-3 right-3 top-[76px] flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] sm:left-4 sm:right-4 sm:top-[82px]"
            ref={menuContainerRef}
          >
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isLast = index === navigationItems.length - 1;

              return (
                <Link
                  key={item.href}
                  className={`mobile-menu-item px-4 sm:px-5 py-3 sm:py-4 text-sm font-bold uppercase tracking-[0.08em] transition ${
                    isActive ? "bg-[color:var(--brand-soft)]" : ""
                  } ${isLast ? "border-b-0" : "border-b border-[color:var(--line-light)]"}`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}

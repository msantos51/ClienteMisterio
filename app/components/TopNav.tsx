/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/TopNav.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const MOBILE_MENU_ID = "mobile-menu-panel";

export default function TopNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  const navigationItems = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/o-curso", label: t.nav.course },
    { href: "/faq", label: t.nav.faq },
    { href: "/contactos", label: t.nav.contact },
    { href: "/criar-conta", label: t.nav.account },
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
    // Torna o resto da página inerte enquanto o menu mobile está aberto,
    // devolve o foco ao botão de abrir/fechar quando o menu fecha.
    const mainContent = document.getElementById("conteudo");
    const logo = document.querySelector<HTMLElement>(".site-header .logo");

    if (isMenuOpen) {
      mainContent?.setAttribute("inert", "");
      logo?.setAttribute("inert", "");
    } else {
      mainContent?.removeAttribute("inert");
      logo?.removeAttribute("inert");
    }

    return () => {
      mainContent?.removeAttribute("inert");
      logo?.removeAttribute("inert");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    // Foca o primeiro link do painel ao abrir.
    const panel = menuContainerRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) {
        return;
      }

      // Focus trap: mantém o Tab dentro do painel enquanto está aberto.
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

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
        ref={menuToggleRef}
        aria-expanded={isMenuOpen}
        aria-controls={MOBILE_MENU_ID}
        aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
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

      {/* Links do cabeçalho, com régua vermelha na página ativa (ver globals.css). */}
      <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Navegação principal">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`flex min-h-[44px] items-center whitespace-nowrap ${
                isActive ? "nav-link-active" : ""
              }`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Renderiza menu vertical no mobile com área clicável confortável e ordem visual consistente. */}
      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" role="presentation">
          <nav
            id={MOBILE_MENU_ID}
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
                  aria-current={isActive ? "page" : undefined}
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

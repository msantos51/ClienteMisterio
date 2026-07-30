/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/HeaderActions.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type SessionUser = {
  fullName: string;
  email: string;
  isAdmin?: boolean;
};

// Chaves legadas mantidas para limpar estado antigo em browsers já utilizados.
const legacyStorageKeys = ["vp_user", "vp_session"];

export default function HeaderActions() {
  const pathname = usePathname();
  const router = useRouter();
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);
  const { t } = useLanguage();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });

    if (typeof window !== "undefined") {
      legacyStorageKeys.forEach((key) => window.localStorage.removeItem(key));
    }

    setSessionUser(null);
    router.push("/");
    router.refresh();
  }

  useEffect(() => {
    // Verifica o estado real da sessão no servidor para evitar divergência em relação ao cookie HTTP-only.
    let cancelled = false;

    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/session", { cache: "no-store" });

        if (!response.ok) {
          if (!cancelled) setSessionUser(null);
          return;
        }

        const data = (await response.json()) as {
          authenticated: boolean;
          user?: { fullName: string; email: string; isAdmin: boolean };
        };

        if (cancelled) return;

        if (!data.authenticated || !data.user) {
          setSessionUser(null);
          legacyStorageKeys.forEach((key) => window.localStorage.removeItem(key));
          return;
        }

        setSessionUser({
          fullName: data.user.fullName,
          email: data.user.email,
          isAdmin: data.user.isAdmin,
        });
      } catch {
        if (!cancelled) setSessionUser(null);
      }
    };

    loadSession();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <div className="flex flex-nowrap items-center justify-end gap-2">
      {!sessionUser ? (
        <Link
          className="site-pill-button nav-login-btn px-4 sm:px-6 py-2.5 text-[10px] sm:text-[11px] leading-none"
          href="/login"
        >
          {t.nav.login}
        </Link>
      ) : (
        <>
          {/* User Avatar & Name */}
          <div className="flex items-center gap-2 rounded-[3px] border border-[color:var(--line)] bg-[color:var(--surface)] px-2 sm:px-3 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-[color:var(--brand)] text-[10px] sm:text-xs font-bold text-white">
              {sessionUser.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[11px] font-bold leading-tight text-white">
                {sessionUser.fullName.split(" ")[0]}
              </span>
              <span className="text-[9px] uppercase tracking-[0.14em] leading-tight text-[color:var(--muted)]">
                {t.nav.account}
              </span>
            </div>
          </div>

          {/* Dashboard & Logout Links */}
          <Link
            className="site-pill-button nav-dashboard-btn px-4 sm:px-6 py-2.5 text-[10px] sm:text-[11px] leading-none"
            href="/dashboard"
            title={`${t.nav.dashboard} - ${sessionUser.fullName}`}
          >
            {t.nav.dashboard}
          </Link>
          <button
            onClick={handleLogout}
            className="site-pill-button-secondary hidden px-4 sm:px-6 py-2.5 text-[10px] sm:text-[11px] leading-none md:inline-flex"
            title={t.nav.logout}
          >
            {t.nav.logout}
          </button>
        </>
      )}
    </div>
  );
}

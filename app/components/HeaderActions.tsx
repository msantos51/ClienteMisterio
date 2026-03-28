/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/components/HeaderActions.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SessionUser = {
  fullName: string;
  email: string;
  isAdmin?: boolean;
};

const userStorageKey = "vp_user";
const sessionStorageKey = "vp_session";

export default function HeaderActions() {
  const pathname = usePathname();
  const router = useRouter();
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem(userStorageKey);
    localStorage.removeItem(sessionStorageKey);
    setSessionUser(null);
    router.push("/");
  }

  useEffect(() => {
    // Lê a sessão guardada no browser para alternar ação entre login e dashboard.
    const storedSession = localStorage.getItem(sessionStorageKey);
    const storedUser = localStorage.getItem(userStorageKey);

    if (!storedSession || !storedUser) {
      setSessionUser(null);
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser) as SessionUser;

      if (parsedUser.email !== storedSession) {
        setSessionUser(null);
        return;
      }

      setSessionUser(parsedUser);
    } catch {
      setSessionUser(null);
    }
  }, [pathname]);

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
      {!sessionUser ? (
        <Link
          className="site-pill-button px-4 sm:px-8 py-2 sm:py-3 text-[10px] uppercase tracking-[0.12em] sm:text-[12px] sm:tracking-[0.15em] leading-none"
          href="/login"
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            className="site-pill-button px-4 sm:px-8 py-2 sm:py-3 text-[10px] uppercase tracking-[0.12em] sm:text-[12px] sm:tracking-[0.15em] leading-none"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="site-pill-button-secondary px-4 sm:px-8 py-2 sm:py-3 text-[10px] uppercase tracking-[0.12em] sm:text-[12px] sm:tracking-[0.15em] leading-none"
          >
            Terminar Sessão
          </button>
        </>
      )}
    </div>
  );
}

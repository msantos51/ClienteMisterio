"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);

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
    <div className="flex items-center gap-2 sm:gap-3">
      {!sessionUser ? (
        <Link
          className="site-pill-button text-[11px] uppercase tracking-[0.14em] sm:text-[12px] sm:tracking-[0.15em]"
          href="/login"
        >
          Login
        </Link>
      ) : (
        <Link
          className="site-pill-button text-[11px] uppercase tracking-[0.14em] sm:text-[12px] sm:tracking-[0.15em]"
          href="/dashboard"
        >
          Dashboard
        </Link>
      )}
    </div>
  );
}

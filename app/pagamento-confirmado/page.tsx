/*
 * DESCRIÇÃO DO FICHEIRO: Página de regresso do pagamento Stripe. O acesso ao curso só
 * fica ativo quando o webhook do Stripe processar o pagamento (de forma assíncrona) —
 * esta página aguarda essa confirmação em vez de mostrar de imediato "sem acesso" a
 * quem acabou mesmo de pagar.
 */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SessionResponse = {
  authenticated: boolean;
  user?: { hasCourseAccess: boolean };
};

type ConfirmationState = "checking" | "confirmed" | "pending";

const pollIntervalMs = 2000;
const maxAttempts = 12; // ~24s — cobre a maior parte dos webhooks, incluindo cold start do plano free.

export default function PagamentoConfirmadoPage() {
  const router = useRouter();
  const [state, setState] = useState<ConfirmationState>("checking");
  const attemptsRef = useRef(0);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    const checkAccess = async () => {
      try {
        const response = await fetch("/api/auth/session", { cache: "no-store" });

        if (response.status === 401 || !response.ok) {
          if (!cancelledRef.current) router.push("/entrar");
          return;
        }

        const data = (await response.json()) as SessionResponse;

        if (!data.authenticated) {
          if (!cancelledRef.current) router.push("/entrar");
          return;
        }

        if (data.user?.hasCourseAccess) {
          if (!cancelledRef.current) setState("confirmed");
          return;
        }

        attemptsRef.current += 1;

        if (attemptsRef.current >= maxAttempts) {
          if (!cancelledRef.current) setState("pending");
          return;
        }

        if (!cancelledRef.current) {
          setTimeout(checkAccess, pollIntervalMs);
        }
      } catch {
        attemptsRef.current += 1;
        if (!cancelledRef.current && attemptsRef.current < maxAttempts) {
          setTimeout(checkAccess, pollIntervalMs);
        } else if (!cancelledRef.current) {
          setState("pending");
        }
      }
    };

    checkAccess();

    return () => {
      cancelledRef.current = true;
    };
  }, [router]);

  if (state === "confirmed") {
    return (
      <div className="full-section flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <h1 className="text-xl font-semibold home-title-highlight-text">Pagamento confirmado!</h1>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            O teu acesso ao curso já está ativo.
          </p>
          <Link href="/curso" className="submit inline-block max-w-sm text-center !no-underline">
            Começar o curso
          </Link>
        </div>
      </div>
    );
  }

  if (state === "pending") {
    return (
      <div className="full-section flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <h1 className="text-xl font-semibold home-title-highlight-text">A confirmação está a demorar mais do que o normal</h1>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            Se acabaste de pagar, o acesso costuma ficar ativo em poucos segundos. Podes tentar
            verificar novamente ou, se pagaste com um e-mail diferente do desta conta, contacta-nos
            para ativarmos manualmente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="submit inline-block max-w-sm text-center"
              onClick={() => {
                attemptsRef.current = 0;
                cancelledRef.current = false;
                setState("checking");
              }}
            >
              Verificar novamente
            </button>
            <Link href="/contactos" className="submit inline-block max-w-sm text-center !no-underline">
              Contactar suporte
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="full-section flex items-center justify-center" aria-busy="true" aria-label="A confirmar o pagamento">
      <div className="text-center space-y-4">
        <h1 className="text-xl font-semibold home-title-highlight-text">A confirmar o teu pagamento...</h1>
        <p className="text-sm sm:text-base leading-6 sm:leading-7">Isto demora só alguns segundos.</p>
      </div>
    </div>
  );
}

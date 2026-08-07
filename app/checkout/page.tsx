/*
 * DESCRIÇÃO DO FICHEIRO: Página de checkout que redireciona para o Stripe Payment Link.
 */

"use client";

import { useEffect, useState } from "react";

import { buildCheckoutUrl } from "@/app/lib/checkoutLink";

type SessionResponse = {
  authenticated: boolean;
  user?: { id: string; email: string };
};

export default function CheckoutPage() {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!paymentLink) return;

    let isCancelled = false;

    const redirectToCheckout = async () => {
      // Liga o pagamento à conta autenticada (client_reference_id) antes de redirecionar.
      let url = paymentLink;
      try {
        const response = await fetch("/api/auth/session", { cache: "no-store" });
        const data = response.ok ? ((await response.json()) as SessionResponse) : { authenticated: false };
        if (data.authenticated && data.user) {
          url = buildCheckoutUrl(paymentLink, data.user);
        }
      } catch {
        // Mantém o link base do Stripe se a sessão não puder ser confirmada.
      }

      if (isCancelled) return;
      setCheckoutUrl(url);
      window.location.href = url;
    };

    redirectToCheckout();

    return () => {
      isCancelled = true;
    };
  }, [paymentLink]);

  const fallbackHref = checkoutUrl ?? paymentLink;

  if (!paymentLink) {
    return (
      <div className="full-section on-light bg-[color:var(--surface)] text-[color:var(--body)] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <h1 className="text-xl font-semibold home-title-highlight-text">Pagamento indisponível de momento</h1>
          <p role="alert" className="text-sm sm:text-base leading-6 sm:leading-7">
            Não foi possível iniciar o pagamento. Tenta novamente mais tarde ou contacta-nos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="full-section on-light bg-[color:var(--surface)] text-[color:var(--body)] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-xl font-semibold home-title-highlight-text">Redirecionando para pagamento...</h1>
        <p className="text-sm sm:text-base leading-6 sm:leading-7">Se não for redirecionado automaticamente,</p>
        {fallbackHref && (
          <a
            href={fallbackHref}
            className="submit inline-block max-w-sm text-center !no-underline"
          >
            clique aqui
          </a>
        )}
      </div>
    </div>
  );
}

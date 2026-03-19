/*
 * DESCRIÇÃO DO FICHEIRO: Página de checkout que redireciona para o Stripe Payment Link.
 */

"use client";

import { useEffect } from "react";

export default function CheckoutPage() {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

  useEffect(() => {
    if (paymentLink) {
      // Redireciona automaticamente para o Stripe Payment Link
      window.location.href = paymentLink;
    }
  }, [paymentLink]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">Redirecionando para pagamento...</h1>
        <p className="text-white/70">Se não for redirecionado automaticamente,</p>
        {paymentLink && (
          <a
            href={paymentLink}
            className="submit inline-block max-w-sm text-center !no-underline"
          >
            clique aqui
          </a>
        )}
      </div>
    </div>
  );
}

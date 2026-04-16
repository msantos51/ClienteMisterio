/*
 * DESCRIÇÃO DO FICHEIRO: Componente reutilizável para o botão de checkout do Stripe.
 */

"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CheckoutButtonProps {
  label?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CheckoutButton({
  label = "Comprar Curso",
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const router = useRouter();
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

  if (!paymentLink) {
    return (
      <button disabled className="opacity-50 cursor-not-allowed" title="Payment link não configurado">
        {label}
      </button>
    );
  }

  const handleCheckout = () => {
    const session = localStorage.getItem("vp_session");
    if (session) {
      window.location.href = paymentLink;
    } else {
      router.push("/login?checkout=1");
    }
  };

  const buttonClasses =
    variant === "primary"
      ? "site-pill-button"
      : "submit inline-block text-center !no-underline";

  return (
    <button
      onClick={handleCheckout}
      className={`${buttonClasses} ${className}`}
    >
      {label}
    </button>
  );
}

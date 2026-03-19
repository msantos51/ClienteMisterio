/*
 * DESCRIÇÃO DO FICHEIRO: Componente reutilizável para o botão de checkout do Stripe.
 */

"use client";

interface CheckoutButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CheckoutButton({
  label = "Comprar Curso",
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

  if (!paymentLink) {
    return (
      <button disabled className="opacity-50 cursor-not-allowed" title="Payment link não configurado">
        {label}
      </button>
    );
  }

  const handleCheckout = () => {
    window.location.href = paymentLink;
  };

  const buttonClasses =
    variant === "primary"
      ? "site-pill-button px-8 py-3 text-[10px] uppercase tracking-[0.15em] shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:px-10 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]"
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

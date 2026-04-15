/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/forgot-password/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { useState } from "react";

type ForgotResponse = {
  message: string;
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Controla estado de submissão para impedir pedidos duplicados.
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as ForgotResponse;
      setFeedback(data.message);
    } catch {
      setFeedback("Não foi possível processar o pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <article className="login-form">
          <h1 className="form-heading">Recuperar password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                placeholder="nome@exemplo.com"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="label">E-mail</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? "A enviar..." : "Enviar link"}
              </button>
              <div className="text-center">
                <Link className="form-link" href="/login">
                  Voltar ao login
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

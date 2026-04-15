/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/reset-password/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

type ResetResponse = {
  message: string;
};

// Componente externo que envolve o conteúdo em Suspense para cumprir
// os requisitos do Next.js ao usar useSearchParams em rotas de app router.
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordLoadingState />}>
      <ResetPasswordContent />
    </Suspense>
  );
}

// Estado de carregamento simples enquanto os parâmetros de pesquisa
// ainda não estão disponíveis durante o render inicial.
function ResetPasswordLoadingState() {
  return (
    <section className="space-y-8 ">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <article className="login-form">
          <p className="text-center text-sm">A carregar formulário de recuperação...</p>
        </article>
      </div>
    </section>
  );
}

// Conteúdo principal da página com o formulário de redefinição de password.
function ResetPasswordContent() {
  const searchParameters = useSearchParams();
  const token = searchParameters.get("token") || "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Evita dupla submissão enquanto o pedido de reset está em processamento.
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword, confirmPassword }),
      });

      const data = (await response.json()) as ResetResponse;
      setFeedback(data.message);
    } catch {
      setFeedback("Não foi possível redefinir a password. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8 ">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <article className="login-form">
          <h1 className="form-heading">Definir password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                placeholder="Digite a nova password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <span className="label">Nova password</span>
            </div>

            <div className="input-group">
              <input
                placeholder="Confirme a nova password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <span className="label">Confirmar password</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? "A atualizar..." : "Atualizar password"}
              </button>
              <div className="text-center">
                <Link className="form-link" href="/login">
                  Ir para login
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FeedbackState = {
  type: "success" | "error";
  message: string;
};

export default function AccountPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    // Evita múltiplos envios enquanto a requisição está em andamento.
    if (isSubmitting) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFeedback({
        type: "error",
        message: "A confirmação da senha não coincide com a senha informada.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setFeedback({ type: "error", message: data.message });
        return;
      }

      setFeedback({ type: "success", message: "Registo efetuado com sucesso." });
      router.push("/login?registered=1");
    } catch {
      setFeedback({
        type: "error",
        message: "Não foi possível criar a conta. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex w-full max-w-5xl justify-center">
        <article className="login-form max-w-[620px]">
          <h1 className="form-heading">Criar conta</h1>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="firstName"
                placeholder="Digite o seu primeiro nome"
                type="text"
                value={formData.firstName}
                onChange={(event) => handleChange("firstName", event.target.value)}
              />
              <span className="label">Primeiro nome</span>
            </div>

            <div className="input-group">
              <input
                name="lastName"
                placeholder="Digite o seu último nome"
                type="text"
                value={formData.lastName}
                onChange={(event) => handleChange("lastName", event.target.value)}
              />
              <span className="label">Último nome</span>
            </div>

            <div className="input-group md:col-span-2">
              <input
                name="email"
                placeholder="voce@email.com"
                type="email"
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <span className="label">E-mail</span>
            </div>

            <div className="input-group">
              <input
                name="password"
                placeholder="Crie uma senha segura"
                type="password"
                value={formData.password}
                onChange={(event) => handleChange("password", event.target.value)}
              />
              <span className="label">Senha</span>
            </div>

            <div className="input-group">
              <input
                name="confirmPassword"
                placeholder="Repita a senha"
                type="password"
                value={formData.confirmPassword}
                onChange={(event) => handleChange("confirmPassword", event.target.value)}
              />
              <span className="label">Confirmar senha</span>
            </div>

            {feedback && (
              <p className="form-feedback md:col-span-2">{feedback.message}</p>
            )}

            <div className="md:col-span-2 mt-2 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? "A criar..." : "Criar conta"}
              </button>
              <div className="text-center">
                <Link className="form-link" href="/login">
                  Já tenho conta
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

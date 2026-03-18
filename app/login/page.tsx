/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/login/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginResponse = {
  message: string;
  user?: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    birthDate: string | null;
    city: string | null;
    gender: string | null;
    educationLevel: string | null;
    profileCompleted: boolean;
    isAdmin: boolean;
  };
};

type SessionUser = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  birthDate: string;
  city: string;
  gender: string;
  educationLevel: string;
  profileCompleted: boolean;
  isAdmin: boolean;
};

const userStorageKey = "vp_user";
const sessionStorageKey = "vp_session";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search);

    if (urlParameters.get("registered") === "1") {
      // Exibe confirmação de registo concluído e acesso imediato ao login.
      setFeedback("Conta criada com sucesso. Já pode iniciar sessão.");
    }

    // Mantém o utilizador autenticado ao regressar ao ecrã de login.
    const storedSession = localStorage.getItem(sessionStorageKey);
    const storedUser = localStorage.getItem(userStorageKey);

    if (storedSession && storedUser) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    // Evita múltiplos envios enquanto a requisição está em andamento.
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as LoginResponse;

      if (!response.ok) {
        setFeedback(data.message);
        return;
      }

      if (data.user?.email) {
        const normalizedSessionUser: SessionUser = {
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          fullName: data.user.fullName,
          email: data.user.email,
          birthDate: data.user.birthDate ?? "",
          city: data.user.city ?? "",
          gender: data.user.gender ?? "",
          educationLevel: data.user.educationLevel ?? "",
          profileCompleted: data.user.profileCompleted,
          isAdmin: data.user.isAdmin,
        };

        localStorage.setItem(sessionStorageKey, normalizedSessionUser.email);
        localStorage.setItem(userStorageKey, JSON.stringify(normalizedSessionUser));
      }

      router.push("/dashboard");
    } catch {
      setFeedback("Não foi possível iniciar sessão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <article className="login-form">
          <h1 className="form-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                placeholder="voce@email.com"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="label">E-mail</span>
            </div>

            <div className="input-group">
              <input
                name="password"
                placeholder="Digite a sua senha"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="label">Senha</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? "A entrar..." : "Entrar"}
              </button>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link className="form-link" href="/account">
                  Criar conta
                </Link>
                <Link className="form-link" href="/forgot-password">
                  Esqueci-me da password
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

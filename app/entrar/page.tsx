"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type LoginResponse = {
  message: string;
  user?: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    birthDate: string | null;
    gender: string | null;
    profileCompleted: boolean;
    isAdmin: boolean;
  };
};

type Feedback = { message: string; type: "success" | "error" };

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search);
    const checkout = urlParameters.get("checkout") === "1";
    const confirmed = urlParameters.get("confirmed");
    setIsCheckout(checkout);

    if (urlParameters.get("registered") === "1") {
      if (checkout) {
        setFeedback({ message: t.auth.loginSuccessCheckout, type: "success" });
      } else {
        setFeedback({ message: t.auth.loginSuccess, type: "success" });
      }
    } else if (checkout) {
      setFeedback({ message: t.auth.checkoutRequired, type: "success" });
    } else if (confirmed === "1") {
      setFeedback({ message: t.auth.emailConfirmed, type: "success" });
    } else if (confirmed === "0") {
      setFeedback({ message: t.auth.emailConfirmError, type: "error" });
    }

    // A sessão vive só no cookie httpOnly — pergunta ao servidor em vez de
    // ler um estado duplicado em localStorage.
    let cancelled = false;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: { authenticated: boolean }) => {
        // Vem do fluxo de compra sem conta — leva a /o-curso para o cliente
        // ver a informação do curso antes do Stripe, em vez de saltar direto
        // para o pagamento.
        if (!cancelled && data.authenticated) {
          router.push(checkout ? "/o-curso" : "/dashboard");
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [router, t]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

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
        setFeedback({ message: data.message, type: "error" });
        return;
      }

      // O login já deixou o cookie httpOnly definido no servidor — nada a
      // guardar no cliente. Vem do fluxo de compra sem conta — leva a
      // /o-curso para o cliente ver a informação do curso antes do Stripe.
      router.push(isCheckout ? "/o-curso" : "/dashboard");
    } catch {
      setFeedback({ message: t.auth.loginError, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="full-section full-section-scroll w-full space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.loginTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="login-email"
                name="email"
                placeholder={t.auth.emailPlaceholder}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="label" htmlFor="login-email">{t.auth.emailLabel}</label>
            </div>

            <div className="input-group">
              <input
                id="login-password"
                name="password"
                placeholder={t.auth.passwordPlaceholder}
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="label" htmlFor="login-password">{t.auth.passwordLabel}</label>
            </div>

            <div role="status" aria-live="polite">
              {feedback && (
                <p className={`form-feedback ${feedback.type === "success" ? "form-feedback-success" : ""}`}>
                  {feedback.message}
                </p>
              )}
            </div>

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit" aria-busy={isSubmitting}>
                {isSubmitting ? t.auth.loginSubmitting : t.auth.loginButton}
              </button>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link className="form-link" href={isCheckout ? "/criar-conta?checkout=1" : "/criar-conta"}>
                  {t.auth.createAccount}
                </Link>
                <Link className="form-link" href="/forgot-password">
                  {t.auth.forgotPassword}
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

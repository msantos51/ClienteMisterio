"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type ForgotResponse = {
  message: string;
};

type Feedback = { message: string; type: "success" | "error" };

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      setFeedback({ message: data.message, type: response.ok ? "success" : "error" });
    } catch {
      setFeedback({ message: t.auth.resetError, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="full-section full-section-scroll on-light bg-[color:var(--surface)] w-full space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.forgotPasswordTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="forgot-email"
                name="email"
                placeholder={t.auth.emailPlaceholder}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="label" htmlFor="forgot-email">{t.auth.emailLabel}</label>
            </div>

            <div role="status" aria-live="polite">
              {feedback && (
                <p className={`form-feedback ${feedback.type === "success" ? "form-feedback-success" : ""}`}>
                  {feedback.message}
                </p>
              )}
            </div>

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? t.auth.resetSubmitting : t.auth.resetButton}
              </button>
              <div className="text-center">
                <Link className="form-link" href="/entrar">
                  {t.auth.goToLogin}
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

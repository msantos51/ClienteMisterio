"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type ForgotResponse = {
  message: string;
};

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
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
      setFeedback(data.message);
    } catch {
      setFeedback(t.auth.resetError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full space-y-8 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.forgotPasswordTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                placeholder={t.auth.emailPlaceholder}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="label">{t.auth.emailLabel}</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? t.auth.resetSubmitting : t.auth.resetButton}
              </button>
              <div className="text-center">
                <Link className="form-link" href="/login">
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

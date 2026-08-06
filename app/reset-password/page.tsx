"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type ResetResponse = {
  message: string;
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordLoadingState />}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordLoadingState() {
  const { t } = useLanguage();
  return (
    <section className="full-section full-section-scroll w-full space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <p className="text-center text-sm">{t.auth.loadingRecoveryForm}</p>
        </article>
      </div>
    </section>
  );
}

type Feedback = { message: string; type: "success" | "error" };

function ResetPasswordContent() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParameters = useSearchParams();
  const token = searchParameters.get("token") || "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setFeedback(null);

    if (newPassword !== confirmPassword) {
      setFeedback({ message: t.auth.resetPasswordMismatch, type: "error" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword, confirmPassword }),
      });

      const data = (await response.json()) as ResetResponse;
      setFeedback({ message: data.message, type: response.ok ? "success" : "error" });

      if (response.ok) {
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => router.push("/entrar"), 1800);
      }
    } catch {
      setFeedback({ message: t.auth.resetPasswordError, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="full-section full-section-scroll w-full space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.resetPasswordTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="reset-new-password"
                name="newPassword"
                placeholder={t.auth.newPasswordPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <label className="label" htmlFor="reset-new-password">{t.auth.newPasswordLabel}</label>
            </div>

            <div className="input-group">
              <input
                id="reset-confirm-password"
                name="confirmPassword"
                placeholder={t.auth.confirmPasswordPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <label className="label" htmlFor="reset-confirm-password">{t.auth.confirmPasswordLabel}</label>
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
                {isSubmitting ? t.auth.resetPasswordSubmitting : t.auth.resetPasswordButton}
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

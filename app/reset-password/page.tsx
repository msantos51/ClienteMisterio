"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  return (
    <section className="w-full space-y-8 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <p className="text-center text-sm">Loading recovery form...</p>
        </article>
      </div>
    </section>
  );
}

function ResetPasswordContent() {
  const { t } = useLanguage();
  const searchParameters = useSearchParams();
  const token = searchParameters.get("token") || "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword, confirmPassword }),
      });

      const data = (await response.json()) as ResetResponse;
      setFeedback(data.message);
    } catch {
      setFeedback(t.auth.resetPasswordError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full space-y-8 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.resetPasswordTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                placeholder="Enter your new password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <span className="label">{t.auth.newPasswordLabel}</span>
            </div>

            <div className="input-group">
              <input
                placeholder="Confirm your new password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <span className="label">{t.auth.confirmPasswordLabel}</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? t.auth.resetPasswordSubmitting : t.auth.resetPasswordButton}
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

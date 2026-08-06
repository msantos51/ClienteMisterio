"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

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
  const { t } = useLanguage();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search);
    setIsCheckout(urlParameters.get("checkout") === "1");
  }, []);

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (isSubmitting) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFeedback({
        type: "error",
        message: t.auth.registerPasswordMismatch,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setFeedback({ type: "error", message: data.message });
        return;
      }

      setFeedback({ type: "success", message: t.auth.registerSuccess });
      router.push(isCheckout ? "/entrar?registered=1&checkout=1" : "/entrar?registered=1");
    } catch {
      setFeedback({
        type: "error",
        message: t.auth.registrationError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="full-section full-section-scroll w-full space-y-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form max-w-[620px]">
          <h1 className="form-heading">{t.auth.registerTitle}</h1>
          {isCheckout && (
            <p className="form-feedback form-feedback-success mb-4">{t.auth.checkoutRequired}</p>
          )}

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="register-first-name"
                name="firstName"
                placeholder={t.auth.firstNamePlaceholder}
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={(event) => handleChange("firstName", event.target.value)}
              />
              <label className="label" htmlFor="register-first-name">{t.auth.firstNameLabel}</label>
            </div>

            <div className="input-group">
              <input
                id="register-last-name"
                name="lastName"
                placeholder={t.auth.lastNamePlaceholder}
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={(event) => handleChange("lastName", event.target.value)}
              />
              <label className="label" htmlFor="register-last-name">{t.auth.lastNameLabel}</label>
            </div>

            <div className="input-group md:col-span-2">
              <input
                id="register-email"
                name="email"
                placeholder={t.auth.emailPlaceholder}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <label className="label" htmlFor="register-email">{t.auth.emailLabel}</label>
            </div>

            <div className="input-group">
              <input
                id="register-password"
                name="password"
                placeholder={t.auth.registerPasswordPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={(event) => handleChange("password", event.target.value)}
              />
              <label className="label" htmlFor="register-password">{t.auth.passwordLabel}</label>
            </div>

            <div className="input-group">
              <input
                id="register-password-confirm"
                name="confirmPassword"
                placeholder={t.auth.registerPasswordConfirmPlaceholder}
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={(event) => handleChange("confirmPassword", event.target.value)}
              />
              <label className="label" htmlFor="register-password-confirm">{t.auth.passwordConfirmLabel}</label>
            </div>

            <div className="md:col-span-2" role="status" aria-live="polite">
              {feedback && (
                <p className={`form-feedback ${feedback.type === "success" ? "form-feedback-success" : ""}`}>
                  {feedback.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2 mt-2 space-y-3">
              <button className="submit" type="submit" aria-busy={isSubmitting}>
                {isSubmitting ? t.auth.registerSubmitting : t.auth.registerButton}
              </button>
              <div className="text-center">
                <Link className="form-link" href={isCheckout ? "/entrar?checkout=1" : "/entrar"}>
                  {t.auth.alreadyHaveAccount}
                </Link>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

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
        message: "Password confirmation does not match the password entered.",
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

      setFeedback({ type: "success", message: "Registration successful." });
      router.push(isCheckout ? "/login?registered=1&checkout=1" : "/login?registered=1");
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
    <section className="w-full space-y-8 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form max-w-[620px]">
          <h1 className="form-heading">{t.auth.registerTitle}</h1>
          {isCheckout && (
            <p className="form-feedback mb-4">To proceed with the purchase, you need to create an account or <a className="form-link" href="/login?checkout=1">sign in</a>.</p>
          )}

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                value={formData.firstName}
                onChange={(event) => handleChange("firstName", event.target.value)}
              />
              <span className="label">{t.auth.firstNameLabel}</span>
            </div>

            <div className="input-group">
              <input
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                value={formData.lastName}
                onChange={(event) => handleChange("lastName", event.target.value)}
              />
              <span className="label">{t.auth.lastNameLabel}</span>
            </div>

            <div className="input-group md:col-span-2">
              <input
                name="email"
                placeholder="name@example.com"
                type="email"
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <span className="label">{t.auth.emailLabel}</span>
            </div>

            <div className="input-group">
              <input
                name="password"
                placeholder="Create a secure password"
                type="password"
                value={formData.password}
                onChange={(event) => handleChange("password", event.target.value)}
              />
              <span className="label">{t.auth.passwordLabel}</span>
            </div>

            <div className="input-group">
              <input
                name="confirmPassword"
                placeholder="Repeat the password"
                type="password"
                value={formData.confirmPassword}
                onChange={(event) => handleChange("confirmPassword", event.target.value)}
              />
              <span className="label">{t.auth.passwordConfirmLabel}</span>
            </div>

            {feedback && (
              <p className="form-feedback md:col-span-2">{feedback.message}</p>
            )}

            <div className="md:col-span-2 mt-2 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? t.auth.registerSubmitting : t.auth.registerButton}
              </button>
              <div className="text-center">
                <Link className="form-link" href={isCheckout ? "/login?checkout=1" : "/login"}>
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

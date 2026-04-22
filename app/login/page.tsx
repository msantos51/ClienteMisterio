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

type SessionUser = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  birthDate: string;
  gender: string;
  profileCompleted: boolean;
  isAdmin: boolean;
};

const userStorageKey = "vp_user";
const sessionStorageKey = "vp_session";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search);
    const checkout = urlParameters.get("checkout") === "1";
    setIsCheckout(checkout);

    if (urlParameters.get("registered") === "1") {
      if (checkout) {
        setFeedback(t.auth.loginSuccessCheckout);
      } else {
        setFeedback(t.auth.loginSuccess);
      }
    } else if (checkout) {
      setFeedback(t.auth.checkoutRequired);
    }

    const storedSession = localStorage.getItem(sessionStorageKey);
    const storedUser = localStorage.getItem(userStorageKey);

    if (storedSession && storedUser) {
      router.push(checkout ? "/checkout" : "/dashboard");
    }
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
          gender: data.user.gender ?? "",
          profileCompleted: data.user.profileCompleted,
          isAdmin: data.user.isAdmin,
        };

        localStorage.setItem(sessionStorageKey, normalizedSessionUser.email);
        localStorage.setItem(userStorageKey, JSON.stringify(normalizedSessionUser));
      }

      router.push(isCheckout ? "/checkout" : "/dashboard");
    } catch {
      setFeedback(t.auth.loginError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full space-y-8 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <article className="login-form">
          <h1 className="form-heading">{t.auth.loginTitle}</h1>
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

            <div className="input-group">
              <input
                name="password"
                placeholder={t.auth.passwordPlaceholder}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="label">{t.auth.passwordLabel}</span>
            </div>

            {feedback && <p className="form-feedback">{feedback}</p>}

            <div className="mt-5 space-y-3">
              <button className="submit" type="submit">
                {isSubmitting ? t.auth.loginSubmitting : t.auth.loginButton}
              </button>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link className="form-link" href={isCheckout ? "/account?checkout=1" : "/account"}>
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

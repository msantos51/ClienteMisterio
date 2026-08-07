"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import Field from "@/app/components/ui/Field";
import styles from "./page.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type ContactApiResponse = {
  message?: string;
  reference?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusReference, setStatusReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const validators: Record<keyof FormData, (value: string) => string | null> = {
    name: (value) => (value.trim() ? null : t.contact.formNameError),
    email: (value) => (isValidEmail(value) ? null : t.contact.formEmailError),
    subject: (value) => (value.trim() ? null : t.contact.formSubjectError),
    message: (value) => (value.trim().length >= 10 ? null : t.contact.formMessageError),
  };

  const validateField = (field: keyof FormData, value: string) => validators[field](value);

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Validação em tempo real: só depois do primeiro blur, para não mostrar
    // erro enquanto o utilizador ainda está a escrever o valor inicial.
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) ?? undefined }));
    }
  };

  const handleFieldBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) ?? undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusReference("");

    const nextErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) nextErrors[field] = error;
    });
    const nextConsentError = consent ? null : t.contact.formConsentError;

    if (Object.keys(nextErrors).length > 0 || nextConsentError) {
      setErrors(nextErrors);
      setConsentError(nextConsentError);
      setTouched({ name: true, email: true, subject: true, message: true });
      // Foca o resumo de erros no topo do formulário, para leitores de ecrã
      // e utilizadores de teclado saberem imediatamente o que falta corrigir.
      errorSummaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });

      const data = (await response.json()) as ContactApiResponse;
      setStatusReference(data.reference || "");
      setStatusMessage(data.message || t.contact.formErrorMessage);

      if (response.ok) {
        setFormData(initialFormData);
        setTouched({});
        setErrors({});
        setConsent(false);
        setConsentError(null);
      }
    } catch {
      setStatusMessage(t.contact.formConnectionError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.values(errors).some(Boolean) || Boolean(consentError);

  return (
    <div className={`${styles.page} on-light`}>
      {/* ============================================================
          CONTENT — título e informação de contacto à esquerda,
          formulário à direita, tudo num único ecrã sem scroll.
          ============================================================ */}
      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {/* Left — heading + contact info */}
            <div>
              <div className={styles.eyebrow}>{t.contact.badge}</div>
              <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>
                Fala <em className={styles.italic}>connosco</em>.
              </h1>
              <p className={`${styles.lead} ${styles.heroSub}`}>
                {t.contact.description}
              </p>
              <h2 className={styles.infoTitle}>{t.contact.contactHeader}</h2>
              <div className={styles.infoItems}>
                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className={styles.infoText}>
                    <div className={styles.infoLabel}>{t.contact.emailLabel}</div>
                    <div className={styles.infoValue}>
                      <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                {t.contact.responseTime}
              </div>
            </div>

            {/* Right — form card */}
            <div className={styles.card}>
              <h2 id="contact-form-heading" className={styles.cardTitle}>Enviar mensagem</h2>
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                aria-labelledby="contact-form-heading"
                noValidate
              >
                {/* Honeypot — invisível para humanos; bots costumam preenchê-lo. */}
                <div className={styles.hp} aria-hidden="true">
                  <label htmlFor="contact-website">Não preencher este campo</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {hasErrors && (
                  <div
                    ref={errorSummaryRef}
                    className={styles.errorSummary}
                    role="alert"
                    tabIndex={-1}
                  >
                    {t.contact.formErrorSummary}
                  </div>
                )}

                <div className={styles.row}>
                  <Field
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    label={t.contact.formNameLabel}
                    placeholder={t.contact.formNamePlaceholder}
                    required
                    value={formData.name}
                    onChange={(value) => handleFieldChange("name", value)}
                    onBlur={() => handleFieldBlur("name")}
                    error={errors.name}
                    wrapperClassName={styles.field}
                    labelClassName={styles.label}
                    controlClassName={styles.input}
                    errorClassName={styles.fieldError}
                  />
                  <Field
                    id="contact-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    label={t.contact.formEmailLabel}
                    placeholder={t.contact.formEmailPlaceholder}
                    required
                    value={formData.email}
                    onChange={(value) => handleFieldChange("email", value)}
                    onBlur={() => handleFieldBlur("email")}
                    error={errors.email}
                    wrapperClassName={styles.field}
                    labelClassName={styles.label}
                    controlClassName={styles.input}
                    errorClassName={styles.fieldError}
                  />
                </div>

                <Field
                  id="contact-subject"
                  name="subject"
                  type="text"
                  label={t.contact.formSubjectLabel}
                  placeholder={t.contact.formSubjectPlaceholder}
                  required
                  value={formData.subject}
                  onChange={(value) => handleFieldChange("subject", value)}
                  onBlur={() => handleFieldBlur("subject")}
                  error={errors.subject}
                  wrapperClassName={styles.field}
                  labelClassName={styles.label}
                  controlClassName={styles.input}
                  errorClassName={styles.fieldError}
                />

                <Field
                  as="textarea"
                  id="contact-message"
                  name="message"
                  label={t.contact.formMessageLabel}
                  placeholder={t.contact.formMessagePlaceholder}
                  required
                  value={formData.message}
                  onChange={(value) => handleFieldChange("message", value)}
                  onBlur={() => handleFieldBlur("message")}
                  error={errors.message}
                  wrapperClassName={styles.field}
                  labelClassName={styles.label}
                  controlClassName={styles.textarea}
                  errorClassName={styles.fieldError}
                />

                <div className={styles.consentRow}>
                  <label className="checkbox-container" htmlFor="contact-consent">
                    <input
                      id="contact-consent"
                      className="custom-checkbox"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setConsentError(null);
                      }}
                      aria-invalid={consentError ? true : undefined}
                      aria-describedby={consentError ? "contact-consent-error" : undefined}
                    />
                    <span className="checkmark" aria-hidden="true" />
                  </label>
                  <label htmlFor="contact-consent">
                    {t.contact.formConsentLabel}{" "}
                    <Link href="/privacidade" target="_blank" rel="noopener noreferrer">
                      {t.contact.formConsentLinkText}
                    </Link>
                    .
                  </label>
                </div>
                {consentError && (
                  <p id="contact-consent-error" className={styles.fieldError} role="alert">
                    {consentError}
                  </p>
                )}

                <div role="status" aria-live="polite">
                  {statusMessage && (
                    <div className={styles.status}>
                      <div>{statusMessage}</div>
                      {statusReference && (
                        <div className={styles.statusRef}>
                          Referência: <strong>{statusReference}</strong>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? t.contact.formSubmittingButton : t.contact.formSubmitButton}
                  {!isSubmitting && <ArrowIcon />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./page.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

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

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusReference, setStatusReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusReference("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactApiResponse;
      setStatusReference(data.reference || "");
      setStatusMessage(data.message || t.contact.formErrorMessage);

      if (response.ok) {
        setFormData(initialFormData);
      }
    } catch {
      setStatusMessage(t.contact.formConnectionError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{t.contact.badge}</div>
          <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>
            Fala <em className={styles.italic}>connosco</em>.
          </h1>
          <p className={`${styles.lead} ${styles.heroSub}`}>
            {t.contact.description}
          </p>
        </div>
      </header>

      {/* ============================================================
          CONTENT
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {/* Left — contact info */}
            <div>
              <h2 className={styles.infoTitle}>{t.contact.contactHeader}</h2>
              <div className={styles.infoItems}>
                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.emailLabel}</div>
                    <div className={styles.infoValue}>
                      <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.72-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.phoneLabel}</div>
                    <div className={styles.infoValue}>
                      <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>{t.contact.phone}</a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.addressLabel}</div>
                    <div className={styles.infoValue} style={{ whiteSpace: "pre-line" }}>
                      {t.contact.address}
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
              <h2 className={styles.cardTitle}>Enviar mensagem</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.contact.formNameLabel}</label>
                    <input
                      className={styles.input}
                      name="name"
                      type="text"
                      placeholder={t.contact.formNamePlaceholder}
                      required
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.contact.formEmailLabel}</label>
                    <input
                      className={styles.input}
                      name="email"
                      type="email"
                      placeholder={t.contact.formEmailPlaceholder}
                      required
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t.contact.formSubjectLabel}</label>
                  <input
                    className={styles.input}
                    name="subject"
                    type="text"
                    placeholder={t.contact.formSubjectPlaceholder}
                    required
                    value={formData.subject}
                    onChange={(e) => handleFieldChange("subject", e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t.contact.formMessageLabel}</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder={t.contact.formMessagePlaceholder}
                    required
                    value={formData.message}
                    onChange={(e) => handleFieldChange("message", e.target.value)}
                  />
                </div>

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

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
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

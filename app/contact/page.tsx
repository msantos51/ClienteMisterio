"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

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

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusReference, setStatusReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
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
        headers: {
          "Content-Type": "application/json",
        },
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
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-label">{t.contact.badge}</span>
          </div>

          <div>
            <h1 className="h1">{t.contact.title}</h1>
            <p className="mt-3 text-body-sm">
              {t.contact.description}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="h5">{t.contact.contactHeader}</h2>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">{t.contact.emailLabel}</p>
                  <a href="mailto:email@clientemisterio.pt" className="text-body-sm text-gray-600 hover:text-teal-600">
                    {t.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.453 4.045 1.238 1.238 2.78 2.035 4.045 2.453l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-6.607 0-12-5.393-12-12V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">{t.contact.phoneLabel}</p>
                  <a href="tel:+351912345678" className="text-body-sm text-gray-600 hover:text-teal-600">
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">{t.contact.addressLabel}</p>
                  <p className="text-body-sm text-gray-600">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-3">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              <p className="text-label">{t.contact.responseTime}</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-6 h5">{t.contact.formNameLabel}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="input-group">
                  <input
                    name="name"
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    placeholder={t.contact.formNamePlaceholder}
                    required
                    type="text"
                    value={formData.name}
                  />
                  <span className="label">{t.contact.formNameLabel}</span>
                </div>

                <div className="input-group">
                  <input
                    name="email"
                    onChange={(event) => handleFieldChange("email", event.target.value)}
                    placeholder={t.contact.formEmailPlaceholder}
                    required
                    type="email"
                    value={formData.email}
                  />
                  <span className="label">{t.contact.formEmailLabel}</span>
                </div>
              </div>

              {/* Subject */}
              <div className="input-group">
                <input
                  name="subject"
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                  placeholder={t.contact.formSubjectPlaceholder}
                  required
                  type="text"
                  value={formData.subject}
                />
                <span className="label">{t.contact.formSubjectLabel}</span>
              </div>

              {/* Message */}
              <div className="input-group">
                <textarea
                  name="message"
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder={t.contact.formMessagePlaceholder}
                  required
                  value={formData.message}
                />
                <span className="label">{t.contact.formMessageLabel}</span>
              </div>

              {/* Status Message */}
              {statusMessage ? (
                <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
                  <p className="text-body-sm text-teal-900">{statusMessage}</p>
                  {statusReference ? (
                    <p className="mt-2 text-body-xs text-teal-700">
                      Referência: <span className="font-semibold">{statusReference}</span>
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* Submit Button */}
              <button
                className="submit w-full"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? t.contact.formSubmittingButton : t.contact.formSubmitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

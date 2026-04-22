"use client";

import type { Metadata } from "next";
import { useLanguage } from "@/app/context/LanguageContext";

// Note: Metadata export not possible in client component, but Next.js handles this
// by processing the page separately
const metadataFallback: Metadata = {
  title: "Terms and Conditions | Mystery Shopper",
  description: "Read the terms and conditions of use for the Mystery Shopper portal.",
};

export default function TermosECondicoes() {
  const { t, language } = useLanguage();

  const sections = t.termsAndConditions as Array<{
    number: string;
    title: string;
    content: string;
  }>;

  const dateLocale = language === "pt" ? "pt-PT" : "en-GB";
  const headerLabel = language === "pt" ? "Política & Regulamento" : "Policy & Regulations";
  const pageTitle = language === "pt" ? "Termos e Condições de Utilização" : "Terms and Conditions of Use";
  const lastUpdatedText = language === "pt" ? "Última atualização:" : "Last updated:";

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-label">{headerLabel}</span>
          </div>

          <div>
            <h1 className="h1">{pageTitle}</h1>
            <p className="mt-3 text-body-sm">{lastUpdatedText} {new Date().toLocaleDateString(dateLocale)}</p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.number} className="rounded-lg bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <span className="h4 text-teal-600">{section.number}</span>
                </div>
                <h2 className="h3">{section.title}</h2>
              </div>
              <p className="text-body">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

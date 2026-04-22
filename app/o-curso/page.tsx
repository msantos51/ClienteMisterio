"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import CheckoutButton from "../components/CheckoutButton";
import { courseModules as courseData } from "../curso/courseData";

export default function CoursePage() {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/auth/session", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { authenticated: false }))
      .then((data: { authenticated: boolean }) => {
        if (!cancelled) setIsLoggedIn(Boolean(data?.authenticated));
      })
      .catch(() => {
        if (!cancelled) setIsLoggedIn(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const pricingFeatures = [
    t.coursePage.pricingFeature1,
    t.coursePage.pricingFeature2,
    t.coursePage.pricingFeature3,
    t.coursePage.pricingFeature4,
    t.coursePage.pricingFeature5,
  ];

  const benefits = [
    { title: t.coursePage.benefitBeginners, desc: t.coursePage.benefitBeginnersDesc, emoji: "👩‍💼" },
    { title: t.coursePage.benefitPractical, desc: t.coursePage.benefitPracticalDesc, emoji: "⚡" },
    { title: t.coursePage.benefitEarn, desc: t.coursePage.benefitEarnDesc, emoji: "💰" },
    { title: t.coursePage.benefitCareer, desc: t.coursePage.benefitCareerDesc, emoji: "📈" },
    { title: t.coursePage.benefitTests, desc: t.coursePage.benefitTestsDesc, emoji: "✅" },
    { title: t.coursePage.benefitCommunity, desc: t.coursePage.benefitCommunityDesc, emoji: "🤝" },
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span className="text-label">{t.coursePage.badge}</span>
            </div>

            {/* Title */}
            <h1 className="h1" dangerouslySetInnerHTML={{ __html: t.coursePage.title }} />

            {/* Description */}
            <p className="text-body">
              {t.coursePage.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 py-4 border-t border-gray-200">
              <div className="text-center">
                <p className="h3">10</p>
                <p className="text-body-xs">{t.coursePage.statsModules}</p>
              </div>
              <div className="text-center">
                <p className="h4 text-teal-600 whitespace-nowrap">€5–€150+</p>
                <p className="text-body-xs">{t.coursePage.statsEarnings}</p>
              </div>
              <div className="text-center">
                <p className="h3 text-teal-600">Lifetime</p>
                <p className="text-body-xs">{t.coursePage.statsAccess}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-sm h-fit">
            <div className="mb-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
                <span className="text-label">{t.coursePage.pricingBadge}</span>
              </div>
              <div>
                <p className="h5">{t.coursePage.pricingTitle}</p>
                <p className="text-body-sm text-gray-400 line-through">{t.coursePage.pricingOriginal}</p>
                <p className="h1 text-teal-600">{t.coursePage.pricingPrice}</p>
                <p className="text-body-xs">{t.coursePage.pricingPayment}</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              {pricingFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <CheckoutButton label={t.coursePage.buyButton} />
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              {t.coursePage.paymentSecure}
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="h3 mb-8">{t.coursePage.benefitsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-3xl mb-3">{benefit.emoji}</p>
                <p className="h5 mb-2">{benefit.title}</p>
                <p className="text-body-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div className="mb-16">
          <h2 className="h3 mb-2">{t.coursePage.modulesTitle}</h2>
          <div className="space-y-3">
            {courseData.map((module) => (
              <div
                key={module.id}
                className="rounded-lg border border-gray-200 bg-white px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <span className="text-body-sm font-bold text-teal-600">{module.id}</span>
                  </div>
                  <div>
                    <p className="h5">{module.title}</p>
                    <p className="text-body-xs text-gray-600">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {!isLoggedIn && (
          <div className="text-center space-y-4 py-8 border-t border-gray-200">
            <p className="text-body-sm">{t.coursePage.ctaText}</p>
            <div className="flex flex-col gap-3 justify-center items-center sm:flex-row sm:gap-4">
              <CheckoutButton label={t.coursePage.buyButton} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

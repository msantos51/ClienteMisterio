"use client";

import { useLanguage } from '@/app/context/LanguageContext';
import CheckoutButton from '../components/CheckoutButton';

export default function AboutPage() {
  const { t } = useLanguage();

  const courseAdvantages = [
    t.about.advantage1,
    t.about.advantage2,
    t.about.advantage3,
    t.about.advantage4,
  ];

  const courseFeatures = [
    t.about.feature1,
    t.about.feature2,
    t.about.feature3,
    t.about.feature4,
    t.about.feature5,
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Main Content */}
        <div className="mb-16 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-label">{t.about.badge}</span>
          </div>

          {/* Title */}
          <h1 className="h1">
            {t.about.title} <span className="text-teal-600">{t.about.titleHighlight}</span>
          </h1>

          {/* Description */}
          <div className="space-y-4 text-body-sm text-justify">
            <p>
              {t.about.description1}
            </p>

            <p>
              {t.about.description2}
            </p>

            <p>
              {t.about.description3}
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Advantages */}
            <div className="space-y-4">
              <h2 className="h3">{t.about.advantagesTitle}</h2>
              <p className="text-body-sm">
                {t.about.advantagesDesc}
              </p>

              <div className="space-y-3">
                {courseAdvantages.map((advantage, index) => (
                  <div key={advantage} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 pt-0.5">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="h-fit rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
            {/* Course Title */}
            <div className="mb-6 space-y-2">
              <p className="text-label">
                {t.about.courseTitle}
              </p>
              <div className="space-y-1">
                <p className="h2 text-gray-900">{t.about.price}</p>
                <p className="text-body-xs">{t.about.paymentInfo}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              {courseFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <CheckoutButton label={t.about.buyCourseButton} />
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal com o novo design.
 */

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import CheckoutButton from "./components/CheckoutButton";

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-gray-50">
      <div className="relative w-full">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              <span className="text-sm font-medium text-gray-900">{t.home.badge}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-center text-4xl sm:text-5xl font-bold leading-tight">
            {t.home.title}<br />Torne-se <span className="text-teal-600">{t.home.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-center text-gray-600 max-w-2xl mx-auto">
            {t.home.description}
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label={<>{t.home.buyButton} <span className="line-through opacity-70">{t.home.originalPrice}</span>  <span>{t.home.discountPrice}</span></>} />
            <Link
              href="/o-curso"
              className="site-pill-button-secondary"
            >
              {t.home.viewProgram}
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">100%</div>
                <p className="text-sm text-teal-600 font-medium">{t.home.stats.reviews}</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">+500</div>
                <p className="text-sm text-teal-600 font-medium">{t.home.stats.students}</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">10</div>
                <p className="text-sm text-teal-600 font-medium">{t.home.stats.modules}</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">4.9★</div>
                <p className="text-sm text-teal-600 font-medium">{t.home.stats.rating}</p>
              </div>
            </div>
          </div>

          {/* Section: O QUE INCLUI */}
          <div id="what-included" className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">{t.home.whatIncluded.label}</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.home.whatIncluded.title}</h2>
              <p className="text-gray-600">{t.home.whatIncluded.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{t.home.whatIncluded.card1Title}</h3>
                <p className="text-sm text-gray-600">{t.home.whatIncluded.card1Desc}</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{t.home.whatIncluded.card2Title}</h3>
                <p className="text-sm text-gray-600">{t.home.whatIncluded.card2Desc}</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{t.home.whatIncluded.card3Title}</h3>
                <p className="text-sm text-gray-600">{t.home.whatIncluded.card3Desc}</p>
              </div>
            </div>
          </div>

          {/* Section: COMO FUNCIONA */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">{t.home.howWorks.label}</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.home.howWorks.title}</h2>
              <p className="text-gray-600">{t.home.howWorks.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">1</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{t.home.howWorks.step1Title}</h3>
                <p className="text-sm text-gray-600">{t.home.howWorks.step1Desc}</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">2</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{t.home.howWorks.step2Title}</h3>
                <p className="text-sm text-gray-600">{t.home.howWorks.step2Desc}</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">3</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{t.home.howWorks.step3Title}</h3>
                <p className="text-sm text-gray-600">{t.home.howWorks.step3Desc}</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">4</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{t.home.howWorks.step4Title}</h3>
                <p className="text-sm text-gray-600">{t.home.howWorks.step4Desc}</p>
              </div>
            </div>
          </div>

          {/* Section: TESTEMUNHOS */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">{t.home.testimonials.label}</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.home.testimonials.title}</h2>
              <p className="text-gray-600">{t.home.testimonials.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  {t.home.testimonials.testimonial1}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">AP</div>
                  <div>
                    <p className="font-bold text-gray-900">Ana P.</p>
                    <p className="text-xs text-gray-500">Lisboa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  {t.home.testimonials.testimonial2}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">RC</div>
                  <div>
                    <p className="font-bold text-gray-900">Rui C.</p>
                    <p className="text-xs text-gray-500">Porto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  {t.home.testimonials.testimonial3}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">MF</div>
                  <div>
                    <p className="font-bold text-gray-900">Maria F.</p>
                    <p className="text-xs text-gray-500">Braga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-gray-900 p-10 sm:p-12 text-center text-white">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold">{t.home.cta.title}</h2>
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              {t.home.cta.description}
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>{t.home.cta.immediateAccess}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>{t.home.cta.certificateIncluded}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>{t.home.cta.lifetimeSupport}</span>
              </div>
            </div>

            <CheckoutButton label={<>{t.home.buyButton} <span className="line-through opacity-70">{t.home.originalPrice}</span>  <span>{t.home.discountPrice}</span></>} />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CatalogPage() {
  const { t } = useLanguage();
  const c = t.catalog;

  const modules = [
    { id: 1, title: c.module1Title, description: c.module1Desc },
    { id: 2, title: c.module2Title, description: c.module2Desc },
    { id: 3, title: c.module3Title, description: c.module3Desc },
    { id: 4, title: c.module4Title, description: c.module4Desc },
    { id: 5, title: c.module5Title, description: c.module5Desc },
    { id: 6, title: c.module6Title, description: c.module6Desc },
    { id: 7, title: c.module7Title, description: c.module7Desc },
    { id: 8, title: c.module8Title, description: c.module8Desc },
    { id: 9, title: c.module9Title, description: c.module9Desc },
    { id: 10, title: c.module10Title, description: c.module10Desc },
  ];

  const includedItems = [
    c.include1,
    c.include2,
    c.include3,
    c.include4,
    c.include5,
    c.include6,
    c.include7,
    c.include8,
  ];

  const howWorksSteps = [
    { step: "1", label: c.step1Label, desc: c.step1Desc },
    { step: "2", label: c.step2Label, desc: c.step2Desc },
    { step: "3", label: c.step3Label, desc: c.step3Desc },
    { step: "4", label: c.step4Label, desc: c.step4Desc },
  ];

  return (
    <>
      <style>{`
        @media print {
          header, footer, .no-print { display: none !important; }
          body { background: white !important; }
          .print-page { box-shadow: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-10 px-4 print:bg-white print:py-0 print:px-0">
        {/* Print button */}
        <div className="no-print mx-auto mb-6 max-w-[820px] flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-lg bg-[#22a094] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d8f84] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            {c.saveAsPdf}
          </button>
        </div>

        {/* A4 Document */}
        <div className="print-page mx-auto max-w-[820px] bg-white shadow-lg print:shadow-none">

          {/* Header */}
          <div className="bg-[#22a094] px-10 py-10 text-white">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold tracking-wide text-white/70">
                  {c.trainingLabel}
                </p>
                <h1 className="text-3xl font-bold leading-tight">
                  {c.courseTitle}
                </h1>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/85">
                  {c.courseDesc}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-4xl font-bold">24,99€</p>
                <p className="text-sm text-white/70 line-through">64,99€</p>
                <p className="mt-1 text-xs text-white/70">{c.lifetimeAccess}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-4 gap-4 border-t border-white/20 pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold">10</p>
                <p className="text-xs text-white/75 mt-0.5">{c.statsModules}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">+500</p>
                <p className="text-xs text-white/75 mt-0.5">{c.statsStudents}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/75 mt-0.5">{c.statsOnline}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">PDF</p>
                <p className="text-xs text-white/75 mt-0.5">{c.statsCertificate}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-10 py-8 space-y-8">

            {/* For whom */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                {c.forWhomTitle}
              </h2>
              <p className="text-sm leading-7 text-[#444] text-justify">
                {c.forWhomDesc}
              </p>
            </section>

            {/* What's included */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                {c.whatsIncludedTitle}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#444]">
                    <span className="mt-0.5 shrink-0 text-[#22a094]">✓</span>
                    <span className="leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Programme */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                {c.programTitle}
              </h2>
              <div className="space-y-2">
                {modules.map((mod) => (
                  <div
                    key={mod.id}
                    className="flex items-start gap-4 rounded-lg border border-[#D4B5A0]/25 bg-[#fafafa] px-4 py-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22a094]/15 text-xs font-bold text-[#22a094]">
                      {mod.id}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2a2a2a]">{mod.title}</p>
                      <p className="text-xs text-[#666] mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                ))}
                {/* Certificate */}
                <div className="flex items-start gap-4 rounded-lg border border-[#22a094]/30 bg-[#f0f9f8] px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22a094] text-xs font-bold text-white">
                    ★
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2a2a2a]">{c.certificateModuleTitle}</p>
                    <p className="text-xs text-[#666] mt-0.5">
                      {c.certificateModuleDesc}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                {c.howWorksTitle}
              </h2>
              <div className="grid grid-cols-4 gap-4 text-center">
                {howWorksSteps.map((item) => (
                  <div key={item.step} className="space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#22a094] text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <p className="text-sm font-semibold text-[#2a2a2a]">{item.label}</p>
                    <p className="text-xs text-[#666] leading-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Document footer */}
          <div className="border-t border-[#D4B5A0]/30 bg-[#f9f9f9] px-10 py-6">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-[#2a2a2a]">{c.footerBrand}</p>
                <p className="text-xs text-[#666] mt-0.5">{c.footerUrl}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#22a094]">24,99€</p>
                <p className="text-xs text-[#666]">{c.footerAccessNote}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

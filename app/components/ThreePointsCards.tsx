"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function ThreePointsCards() {
  const { t } = useLanguage();

  // Alterna vermelho profundo / branco / preto: o trio percorre a paleta
  // inteira sem introduzir cores fora do sistema.
  const benefits = [
    {
      title: t.threePoints.learn,
      description: t.threePoints.learnDesc,
      surface: "bg-[color:var(--color-red-2)] text-white",
      titleClass: "text-white",
      bodyClass: "text-white/80",
    },
    {
      title: t.threePoints.certificate,
      description: t.threePoints.certificateDesc,
      surface: "bg-white",
      titleClass: "text-[color:var(--on-invert)]",
      bodyClass: "text-[color:var(--on-invert-2)]",
    },
    {
      title: t.threePoints.opportunities,
      description: t.threePoints.opportunitiesDesc,
      surface: "bg-[color:var(--color-black)] text-white",
      titleClass: "text-white",
      bodyClass: "text-white/70",
    },
  ];

  return (
    <div className="grid w-full gap-4 sm:gap-5 md:gap-6 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className={`flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-[var(--radius-xl)] p-6 text-center shadow-[0_20px_44px_-24px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-2 sm:min-h-[240px] sm:gap-4 sm:p-10 md:min-h-[260px] ${benefit.surface}`}
        >
          <h3 className={`text-base font-bold leading-tight tracking-[-0.02em] sm:text-lg ${benefit.titleClass}`}>
            {benefit.title}
          </h3>
          <p className={`text-sm leading-6 sm:text-base sm:leading-7 ${benefit.bodyClass}`}>
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}

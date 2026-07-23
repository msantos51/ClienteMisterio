"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function ThreePointsCards() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.threePoints.learn,
      description: t.threePoints.learnDesc,
      background: "linear-gradient(155deg, #4f46e5 0%, #312e81 100%)",
    },
    {
      title: t.threePoints.certificate,
      description: t.threePoints.certificateDesc,
      background: "linear-gradient(155deg, #ff6b4a 0%, #f5502e 100%)",
    },
    {
      title: t.threePoints.opportunities,
      description: t.threePoints.opportunitiesDesc,
      background: "linear-gradient(155deg, #6366f1 0%, #4338ca 100%)",
    },
  ];

  return (
    <div className="grid w-full gap-4 sm:gap-5 md:gap-6 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="on-brand flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-[24px] p-6 text-center shadow-[0_20px_44px_-24px_rgba(33,29,84,0.5)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_50px_-22px_rgba(33,29,84,0.55)] sm:min-h-[240px] sm:gap-4 sm:p-10 md:min-h-[260px]"
          style={{ background: benefit.background }}
        >
          <h3 className="text-base font-bold text-white sm:text-lg leading-tight">{benefit.title}</h3>
          <p className="text-sm leading-6 text-white sm:text-base sm:leading-7">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

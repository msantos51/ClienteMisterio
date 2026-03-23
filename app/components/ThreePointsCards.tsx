"use client";

const benefits = [
  {
    icon: "📋",
    title: "Aprende",
    description: "10 módulos práticos do básico ao avançado — conceitos, ética, metodologia e relatórios profissionais.",
  },
  {
    icon: "🎯",
    title: "Pratica",
    description: "Checklists reais, cenários do terreno e técnicas para passares despercebido em qualquer avaliação.",
  },
  {
    icon: "💶",
    title: "Ganha",
    description: "5€ a 150€+ por missão. Flexibilidade total, sem patrão. Começa a ganhar já no primeiro mês.",
  },
];

export default function ThreePointsCards() {
  return (
    <div className="grid w-full gap-3 sm:gap-4 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center gap-2 rounded-2xl border border-black/10 bg-white/60 p-4 sm:p-5 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#F66856] hover:shadow-md"
        >
          <span className="text-2xl" aria-hidden="true">{benefit.icon}</span>
          <h3 className="text-base font-bold text-black">{benefit.title}</h3>
          <p className="text-xs sm:text-sm leading-5 text-black/70">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

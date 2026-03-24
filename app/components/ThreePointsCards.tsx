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
          className="flex flex-col items-center gap-2 rounded-2xl p-4 sm:p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md bg-[#F66856]"
        >
          <h3 className="text-base font-bold text-white">{benefit.title}</h3>
          <p className="text-xs sm:text-sm leading-5 text-white">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

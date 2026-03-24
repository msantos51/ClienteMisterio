"use client";

const benefits = [
  {
    icon: "📋",
    title: "Aprende",
    description: "Curso 100% online, ao teu ritmo e sem horários definidos. Aprende quando quiseres, com total flexibilidade.",
  },
  {
    icon: "🎯",
    title: "Pratica",
    description: "10 módulos práticos do básico ao avançado — conceitos, ética, metodologia e relatórios profissionais.",
  },
  {
    icon: "💶",
    title: "Ganha",
    description: "15€ a 150€ por missão. Avalia hotéis, restaurantes, lojas e outros negócios. Todos os custos são totalmente suportados pelas marcas.",
  },
];

export default function ThreePointsCards() {
  return (
    <div className="grid w-full gap-3 sm:gap-4 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center gap-3 rounded-2xl p-6 sm:p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md bg-gradient-to-b from-[#F66856] to-white min-h-[200px] sm:min-h-[220px] justify-center"
        >
          <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
          <p className="text-xs sm:text-sm leading-5 text-gray-700 text-justify">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

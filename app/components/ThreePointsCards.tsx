"use client";

// Define os três cartões de benefícios apresentados na landing page.
const benefits = [
  {
    title: "Aprende",
    description: "Curso 100% online, sem horários e ao teu ritmo.",
  },
  {
    title: "Certificado",
    description: "Direito a documento que comprova conclusão do curso.",
  },
  {
    title: "Oportunidades",
    description: "Testa produtos, lojas, restaurantes e hotéis sem qualquer custo.",
  },
];

export default function ThreePointsCards() {
  return (
    <div className="grid w-full gap-4 sm:gap-5 md:gap-6 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-[24px] p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:min-h-[240px] sm:gap-4 sm:p-10 md:min-h-[260px]"
          style={{ backgroundColor: "#22a094" }}
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl leading-tight">{benefit.title}</h3>
          <p className="text-sm leading-6 text-white sm:text-base sm:leading-7">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

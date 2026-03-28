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
    <div className="grid w-full gap-3 sm:gap-4 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex min-h-[172px] flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[220px] sm:gap-3 sm:p-8"
          style={{ backgroundColor: "#F66856" }}
        >
          <h3 className="text-lg font-bold text-white sm:text-xl">{benefit.title}</h3>
          <p className="text-xs leading-5 text-white sm:text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

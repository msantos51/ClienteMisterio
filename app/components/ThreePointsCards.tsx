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
          className="flex flex-col items-center gap-3 rounded-2xl p-6 sm:p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md min-h-[200px] sm:min-h-[220px] justify-center"
          style={{ backgroundColor: "#F66856" }}
        >
          <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
          <p className="text-xs sm:text-sm leading-5 text-white text-justify">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

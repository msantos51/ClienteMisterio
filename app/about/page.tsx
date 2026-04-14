/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a página "Sobre" com o novo design.
 */

import CheckoutButton from '../components/CheckoutButton';

export default function AboutPage() {
  const courseAdvantages = [
    'Checklists práticos para não esqueceres detalhes',
    'Técnicas para pareceres um cliente normal (sem te denunciares)',
    'Relatórios claros e bem avaliados pelas empresas',
    'Estratégias para conseguir mais avaliações e aumentar o rendimento',
  ];

  const courseFeatures = [
    'Acesso completo',
    'Certificado de conclusão',
    'Acesso ilimitado',
    'Curso 100% online, ao teu ritmo',
    'Oportunidades de avaliação gratuitas',
  ];

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-4xl">
        {/* Main Content */}
        <div className="mb-16 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">Sobre a Cliente Mistério</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Atua com <span className="text-teal-600">método e consistência</span>
          </h1>

          {/* Description */}
          <div className="space-y-4 text-sm sm:text-base leading-7 text-gray-700">
            <p>
              Um Cliente Mistério é um cliente "normal" contratado para avaliar serviços
              (atendimento, rapidez, qualidade e cumprimento de regras) e, ao mesmo tempo, gerar
              rendimento extra por cada avaliação realizada.
            </p>

            <p>
              Quanto melhor e mais consistente fores, mais convites costumas receber para novas
              visitas e análises.
            </p>

            <p>
              Neste curso, vais aprender do básico ao avançado como fazer visitas sem falhas,
              entregar relatórios profissionais e aumentar a tua taxa de aprovação para
              transformares isto num extra mensal realista.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Advantages */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Vantagens do curso</h2>
              <p className="text-sm text-gray-600">
                Estrutura prática para melhorares a qualidade das avaliações e aumentares o teu
                rendimento com consistência.
              </p>

              <div className="space-y-3">
                {courseAdvantages.map((advantage, index) => (
                  <div key={advantage} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 pt-0.5">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="h-fit rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
            {/* Course Title */}
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600">
                Curso Cliente Mistério
              </p>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-gray-900">€19.99</p>
                <p className="text-xs text-gray-600">Pagamento único · Acesso vitalício</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              {courseFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <CheckoutButton label="Comprar curso" />
          </div>
        </div>
      </div>
    </section>
  );
}

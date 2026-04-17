/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal com o novo design.
 */

import Link from "next/link";
import CheckoutButton from "./components/CheckoutButton";

export default function HomePage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="relative w-full">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              <span className="text-sm font-medium text-gray-900">O ÚNICO CURSO EM PORTUGAL</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-center text-4xl sm:text-5xl font-bold leading-tight">
            Aprende a ganhar<br />como <span className="text-teal-600">Cliente<br />Mistério</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-center text-gray-600 max-w-2xl mx-auto">
            Avalia lojas, restaurantes e produtos ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label={<>Comprar o curso — <span className="line-through opacity-70">64,99€</span> <span> 24,99€</span></>} />
            <Link
              href="/o-curso"
              className="site-pill-button-secondary"
            >
              Ver o programa
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">100%</div>
                <p className="text-sm text-teal-600 font-medium">Críticas</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">+500</div>
                <p className="text-sm text-teal-600 font-medium">Alunos</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">10</div>
                <p className="text-sm text-teal-600 font-medium">Módulos</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl sm:text-4xl font-bold text-gray-900">4.9★</div>
                <p className="text-sm text-teal-600 font-medium">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Section: O QUE INCLUI */}
          <div id="what-included" className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">O QUE INCLUI</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">Tudo o que precisas para começar</h2>
              <p className="text-gray-600">Do zero à primeira missão paga, com estrutura completa.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Aprende ao teu ritmo</h3>
                <p className="text-sm text-gray-600">100% online, sem horários. Acesso vitalício aos conteúdos e atualizações futuras.</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Certificado incluído</h3>
                <p className="text-sm text-gray-600">Documento que comprova a conclusão do curso e as tuas competências como avaliador.</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Oportunidades reais</h3>
                <p className="text-sm text-gray-600">Testa produtos, lojas e restaurantes sem qualquer custo — e ainda recebes por cada visita.</p>
              </div>
            </div>
          </div>

          {/* Section: COMO FUNCIONA */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">COMO FUNCIONA</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">Do curso à primeira missão</h2>
              <p className="text-gray-600">Quatro passos simples para começares a ganhar.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">1</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Compra o curso</h3>
                <p className="text-sm text-gray-600">Pagamento único de <span className="line-through text-gray-400">64,99€</span> <strong className="text-gray-700">24,99€</strong>. Acesso imediato a todos os módulos.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">2</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Aprende</h3>
                <p className="text-sm text-gray-600">10 módulos práticos do enquadramento ao relacionamento.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">3</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Regista-te</h3>
                <p className="text-sm text-gray-600">Acesso às plataformas de mystery shopping em Portugal.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">4</div>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Ganhas</h3>
                <p className="text-sm text-gray-600">De 5 a 150€ por avaliação concluída.</p>
              </div>
            </div>
          </div>

          {/* Section: TESTEMUNHOS */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-teal-600">TESTEMUNHOS</p>
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-gray-900">O que dizem os alunos</h2>
              <p className="text-gray-600">Mais de 500 pessoas já completaram o curso.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  Comecei sem saber nada e no primeiro mês já tinha completado 4 missões. Muito prático e direto ao ponto.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">AP</div>
                  <div>
                    <p className="font-bold text-gray-900">Ana P.</p>
                    <p className="text-xs text-gray-500">Lisboa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  Recomendo o valor do curso logo na primeira avaliação. Excelente investimento.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">RC</div>
                  <div>
                    <p className="font-bold text-gray-900">Rui C.</p>
                    <p className="text-xs text-gray-500">Porto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-lg">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  Curso bem estruturado. Ótimas informações e suporte ao longo de todo o processo. Já realizei mais de 10 missões.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">MF</div>
                  <div>
                    <p className="font-bold text-gray-900">Maria F.</p>
                    <p className="text-xs text-gray-500">Braga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-gray-900 p-10 sm:p-12 text-center text-white">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold">Pronto para começar?</h2>
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              Junta-te a mais de 500 alunos que já avaliam e ganham em Portugal.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>Certificado incluído</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>✓</span>
                <span>Suporte vitalício</span>
              </div>
            </div>

            <CheckoutButton label={<>Comprar o curso — <span className="line-through opacity-70">64,99€</span> <span> 24,99€</span></>} />
          </div>
        </div>
      </div>
    </section>
  );
}

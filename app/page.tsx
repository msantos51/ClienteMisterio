/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal com o novo design.
 */

import Link from "next/link";
import CheckoutButton from "./components/CheckoutButton";

export default function HomePage() {
  return (
    <section className="w-full">
      <div className="relative w-full bg-transparent">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span className="text-label">O único curso de Cliente Misterio em Portugal</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-center h1">
            Aprende a ganhar<br />como <span className="text-teal-600">Cliente Misterio</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-center text-body-sm">
            Avalia produtos, lojas e restaurantes ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label="Comprar o curso — 19.99€" />
            <Link
              href="#what-included"
              className="btn-secondary"
            >
              Saber mais
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <div className="text-center">
                <div className="mb-2 h3">100%</div>
                <p className="text-body-xs">Online e ao teu ritmo</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h3">+500</div>
                <p className="text-body-xs">Alunos formados</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h3">0€</div>
                <p className="text-body-xs">Custos das avaliações</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h3">4.9★</div>
                <p className="text-body-xs">Avaliação média</p>
              </div>
            </div>
          </div>

          {/* Section: O QUE INCLUI */}
          <div id="what-included" className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-label text-teal-600">O QUE INCLUI</p>
              <h2 className="mb-3 h2">Tudo o que precisas para começar</h2>
              <p className="text-body-sm text-gray-600">Estrutura completa, do zero à primeira missão paga.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {/* Card 1 */}
              <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-teal-50 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 h5">Aprende ao teu ritmo</h3>
                <p className="text-body-sm">Curso 100% online, sem horários fixes. Acesso vitalício aos conteúdos e tutoriais atualizações.</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-teal-50 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 h5">Certificado incluído</h3>
                <p className="text-body-sm">Documento que comprova a conclusão do curso e as tuas competências como avaliador.</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-teal-50 p-3">
                    <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 h5">Oportunidades reais</h3>
                <p className="text-body-sm">Testa produtos, lojas, restaurantes e hotéis — sem qualquer custo do teu bolso.</p>
              </div>
            </div>
          </div>

          {/* Section: COMO FUNCIONA */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-label text-teal-600">COMO FUNCIONA</p>
              <h2 className="mb-3 h2">Do curso à primeira missão paga</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">1</div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Compra o curso</h3>
                <p className="text-body-xs text-gray-600">Pagamento único de 19.99€. Acesso imediato a todos os módulos.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">2</div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Aprende</h3>
                <p className="text-body-xs text-gray-600">10 módulos práticos, do enquadramento à elaboração de relatórios.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">3</div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Regista-te em plataformas</h3>
                <p className="text-body-xs text-gray-600">Acesso aos vários sites de plataformas de mystery shopping em Portugal.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">4</div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Ganhas</h3>
                <p className="text-body-xs text-gray-600">Recebe reembolsos entre 5€ e 150€ por avaliação realizada.</p>
              </div>
            </div>
          </div>

          {/* Section: TESTEMUNHOS */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-2 text-label text-teal-600">TESTEMUNHOS</p>
              <h2 className="mb-3 h2">O que dizem os alunos</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600">★</span>
                  ))}
                </div>
                <p className="mb-4 text-body-sm italic text-gray-700">
                  "Comecei sem saber nada e no primeiro mês já tinha completado 4 missões. O curso é muito prático e direto ao ponto."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">AP</div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana P.</p>
                    <p className="text-body-xs text-gray-600">Lisboa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600">★</span>
                  ))}
                </div>
                <p className="mb-4 text-body-sm italic text-gray-700">
                  "Excelente investimento. Recomendo o curso logo na primeira avaliação e já amortizei o investimento."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">RC</div>
                  <div>
                    <p className="font-semibold text-gray-900">Rui C.</p>
                    <p className="text-body-xs text-gray-600">Porto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600">★</span>
                  ))}
                </div>
                <p className="mb-4 text-body-sm italic text-gray-700">
                  "Adorei a forma como o curso está estruturado. Ótimas informações e suporte ao longo de todo o processo."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">MF</div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria F.</p>
                    <p className="text-body-xs text-gray-600">Braga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-teal-700 p-8 text-center text-white sm:p-10">
            <h2 className="mb-3 h3 text-white">Pronto para começar?</h2>
            <p className="mb-6 text-body-sm text-teal-100">
              Junta-te a mais de 500 alunos que já avaliam e ganham em Portugal.
            </p>
            <CheckoutButton label="Comprar o curso — 19.99€" />
            <p className="mt-4 text-body-xs text-teal-200">Acesso imediato · Certificado incluído</p>
          </div>
        </div>
      </div>
    </section>
  );
}

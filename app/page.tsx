/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal com o novo design.
 */

import Link from "next/link";
import CheckoutButton from "./components/CheckoutButton";

export default function HomePage() {
  return (
    <section className="w-full bg-gray-100">
      <div className="relative w-full">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-6xl px-3 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-teal-600"></span>
              <span className="text-xs font-medium text-gray-700 uppercase">O ÚNICO CURSO EM PORTUGAL</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-4 text-center text-5xl sm:text-6xl font-black leading-tight">
            Aprende a ganhar<br />
            como <span className="text-teal-600">Cliente<br />Mistério</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-center text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Avalia lojas, restaurantes e produtos ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label="Comprar o curso — 19.99€" />
            <Link
              href="#what-included"
              className="px-6 py-3 border border-gray-400 rounded-lg font-medium text-gray-900 hover:bg-gray-200 transition text-sm"
            >
              Ver o programa
            </Link>
          </div>

          {/* Stats Section - NO WHITE BACKGROUND */}
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
              <div className="text-center">
                <div className="mb-1 text-4xl sm:text-5xl font-black text-teal-700">100%</div>
                <p className="text-xs text-teal-500">Críticas</p>
              </div>
              <div className="text-center">
                <div className="mb-1 text-4xl sm:text-5xl font-black text-teal-500">+500</div>
                <p className="text-xs text-teal-500">Alunos</p>
              </div>
              <div className="text-center">
                <div className="mb-1 text-4xl sm:text-5xl font-black text-teal-600">0€</div>
                <p className="text-xs text-gray-500">Horas módulos</p>
              </div>
              <div className="text-center">
                <div className="mb-1 text-4xl sm:text-5xl font-black text-teal-700">4.9★</div>
                <p className="text-xs text-teal-500">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Section: O QUE INCLUI */}
          <div id="what-included" className="mb-16">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-bold text-teal-600 uppercase">O QUE INCLUI</p>
              <h2 className="mb-4 text-4xl sm:text-5xl font-black text-gray-900">Tudo o que precisas para começar</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">Do zero à primeira missão paga, com estrutura completa.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3 flex items-center justify-center">
                    <svg className="h-6 w-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Aprende ao teu ritmo</h3>
                <p className="text-xs text-gray-600 leading-relaxed">100% online, sem horários. Acesso vitalício aos conteúdos e atualizações futuras.</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3 flex items-center justify-center">
                    <svg className="h-6 w-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Certificado incluído</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Documento que comprova a conclusão do curso e as tuas competências como avaliador.</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-3 flex items-center justify-center">
                    <svg className="h-6 w-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">Oportunidades reais</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Testa produtos, lojas e restaurantes sem qualquer custo — e ainda recebes por cada visita.</p>
              </div>
            </div>
          </div>

          {/* Section: COMO FUNCIONA */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-bold text-teal-600 uppercase">COMO FUNCIONA</p>
              <h2 className="mb-4 text-4xl sm:text-5xl font-black text-gray-900">Do curso à primeira missão</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">Quatro passos simples para começares a ganhar.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white font-black text-lg">1</div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Compra o curso</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Pagamento único de 19.99€. Acesso imediato a todos os módulos.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white font-black text-lg">2</div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Aprende</h3>
                <p className="text-xs text-gray-600 leading-relaxed">10 módulos práticos do enquadramento ao relacionamento.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white font-black text-lg">3</div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Regista-te</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Acesso às plataformas de mystery shopping em Portugal.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white font-black text-lg">4</div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Ganhas</h3>
                <p className="text-xs text-gray-600 leading-relaxed">De 5 a 150€ por avaliação concluída.</p>
              </div>
            </div>
          </div>

          {/* Section: TESTEMUNHOS */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-bold text-teal-600 uppercase">TESTEMUNHOS</p>
              <h2 className="mb-4 text-4xl sm:text-5xl font-black text-gray-900">O que dizem os alunos</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">Mais de 500 pessoas já completaram o curso.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-base">★</span>
                  ))}
                </div>
                <p className="mb-6 text-xs text-gray-700 leading-relaxed">
                  Comecei sem saber nada e no primeiro mês já tinha completado 4 missões. Muito prático e direto ao ponto.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">AP</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Ana P.</p>
                    <p className="text-xs text-gray-500">Lisboa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-base">★</span>
                  ))}
                </div>
                <p className="mb-6 text-xs text-gray-700 leading-relaxed">
                  Recomendo o valor do curso logo na primeira avaliação. Excelente investimento.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">RC</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Rui C.</p>
                    <p className="text-xs text-gray-500">Porto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600 text-base">★</span>
                  ))}
                </div>
                <p className="mb-6 text-xs text-gray-700 leading-relaxed">
                  Curso bem estruturado. Ótimas informações e suporte ao longo de todo o processo. Já realizei terceira missão.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">MF</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Maria F.</p>
                    <p className="text-xs text-gray-500">Braga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - BLACK BACKGROUND */}
          <div className="rounded-3xl bg-black p-12 sm:p-16 text-center text-white">
            <h2 className="mb-3 text-3xl sm:text-4xl font-black">Pronto para começar?</h2>
            <p className="mb-8 text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Junta-te a mais de 500 alunos que já avaliam e ganham em Portugal.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Certificado incluído</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Suporte vitalício</span>
              </div>
            </div>

            <CheckoutButton label="Comprar o curso — 19.99€" />
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <div className="mx-auto w-full max-w-4xl px-3 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span className="text-sm font-medium text-teal-700">O único curso em Portugal</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Aprende a ganhar<br />como <span className="text-teal-600">Cliente Mistério</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-center text-sm sm:text-base text-gray-600">
            Avalia produtos, lojas e restaurantes ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label="Comprar o curso" />
            <Link
              href="/about"
              className="site-pill-button-secondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em]"
            >
              Saber mais
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">100%</div>
              <p className="text-xs text-gray-600 sm:text-sm">Online e ao teu ritmo</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">+500</div>
              <p className="text-xs text-gray-600 sm:text-sm">Alunos formados</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">0€</div>
              <p className="text-xs text-gray-600 sm:text-sm">Custos das avaliações</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">4.9★</div>
              <p className="text-xs text-gray-600 sm:text-sm">Avaliação média</p>
            </div>
          </div>

          {/* Three Point Cards */}
          <div className="mb-16 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">💳</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">Aprende</h3>
              <p className="text-sm text-gray-600 sm:text-base">Curso 100% online, sem horários e ao teu ritmo. Acesso ilimitado aos conteúdos.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">📋</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">Certificado</h3>
              <p className="text-sm text-gray-600 sm:text-base">Documento oficial que comprova a conclusão do curso e tuas competências.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">🎁</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">Oportunidades</h3>
              <p className="text-sm text-gray-600 sm:text-base">Testa produtos, lojas, restaurantes e hotéis sem qualquer custo.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-teal-700 p-8 text-center text-white sm:p-10">
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">Pronto para começar?</h2>
            <p className="mb-6 text-sm sm:text-base text-teal-100">
              Junta-te a centenas de alunos que já avaliam e ganham.
            </p>
            <CheckoutButton label="Comprar o curso" />
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro renderiza a landing page principal com o novo design.
 */

import Link from "next/link";
import CheckoutButton from "./components/CheckoutButton";

export default function HomePage() {
  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      <div className="relative w-full bg-transparent flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-4xl px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5 flex-1 flex flex-col justify-between">
          {/* Badge */}
          <div className="mb-2 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
              <span className="text-label">O único curso em Portugal</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-2 text-center h1 text-2xl sm:text-3xl md:text-4xl">
            Aprende a ganhar<br />como <span className="text-teal-600">Cliente Mistério</span>
          </h1>

          {/* Description */}
          <p className="mb-3 text-center text-body-sm text-sm sm:text-base">
            Avalia produtos, lojas e restaurantes ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <CheckoutButton label="Comprar o curso" />
            <Link
              href="/about"
              className="btn-secondary text-sm"
            >
              Saber mais
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="text-center">
              <div className="mb-1 h5 text-xl sm:text-2xl">100%</div>
              <p className="text-body-xs text-xs">Online e ao teu ritmo</p>
            </div>
            <div className="text-center">
              <div className="mb-1 h5 text-xl sm:text-2xl">+500</div>
              <p className="text-body-xs text-xs">Alunos formados</p>
            </div>
            <div className="text-center">
              <div className="mb-1 h5 text-xl sm:text-2xl">0€</div>
              <p className="text-body-xs text-xs">Custos das avaliações</p>
            </div>
            <div className="text-center">
              <div className="mb-1 h5 text-xl sm:text-2xl">4.9★</div>
              <p className="text-body-xs text-xs">Avaliação média</p>
            </div>
          </div>

          {/* Three Point Cards */}
          <div className="mb-3 grid gap-2 sm:grid-cols-3 sm:gap-3">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-3 text-center shadow-sm sm:p-4">
              <div className="mb-2 flex justify-center text-2xl">💳</div>
              <h3 className="mb-1 h6 text-sm sm:text-base">Aprende</h3>
              <p className="text-body-sm text-xs sm:text-sm">Curso 100% online, sem horários e ao teu ritmo. Acesso ilimitado.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-3 text-center shadow-sm sm:p-4">
              <div className="mb-2 flex justify-center text-2xl">📋</div>
              <h3 className="mb-1 h6 text-sm sm:text-base">Certificado</h3>
              <p className="text-body-sm text-xs sm:text-sm">Documento oficial que comprova a conclusão do curso.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-3 text-center shadow-sm sm:p-4">
              <div className="mb-2 flex justify-center text-2xl">🎁</div>
              <h3 className="mb-1 h6 text-sm sm:text-base">Oportunidades</h3>
              <p className="text-body-sm text-xs sm:text-sm">Testa produtos, lojas e restaurantes sem custo.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-xl bg-teal-700 p-4 text-center text-white sm:p-5">
            <h2 className="mb-2 h5 text-white text-sm sm:text-base">Pronto para começar?</h2>
            <p className="mb-3 text-body-sm text-teal-100 text-xs sm:text-sm">
              Junta-te a centenas de alunos que já avaliam e ganham.
            </p>
            <CheckoutButton label="Comprar o curso" />
          </div>
        </div>
      </div>
    </section>
  );
}

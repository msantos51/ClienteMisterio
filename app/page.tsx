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
        <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span className="text-label">O único curso em Portugal</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-center h1">
            Aprende a ganhar<br />como <span className="text-teal-600">Cliente Mistério</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-center text-body-sm">
            Avalia produtos, lojas e restaurantes ao teu ritmo — e recebe por isso. Certificado incluído.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CheckoutButton label="Comprar o curso" />
            <Link
              href="/about"
              className="btn-secondary"
            >
              Saber mais
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
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

          {/* Three Point Cards */}
          <div className="mb-16 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">💳</div>
              <h3 className="mb-3 h5">Aprende</h3>
              <p className="text-body-sm">Curso 100% online, sem horários e ao teu ritmo. Acesso ilimitado aos conteúdos.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">📋</div>
              <h3 className="mb-3 h5">Certificado</h3>
              <p className="text-body-sm">Documento oficial que comprova a conclusão do curso e tuas competências.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 flex justify-center text-3xl">🎁</div>
              <h3 className="mb-3 h5">Oportunidades</h3>
              <p className="text-body-sm">Testa produtos, lojas, restaurantes e hotéis sem qualquer custo.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-teal-700 p-8 text-center text-white sm:p-10">
            <h2 className="mb-3 h3 text-white">Pronto para começar?</h2>
            <p className="mb-6 text-body-sm text-teal-100">
              Junta-te a centenas de alunos que já avaliam e ganham.
            </p>
            <CheckoutButton label="Comprar o curso" />
          </div>
        </div>
      </div>
    </section>
  );
}

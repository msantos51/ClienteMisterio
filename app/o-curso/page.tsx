/*
 * DESCRIÇÃO DO FICHEIRO: Página pública com a estrutura do curso e ligação para a formação completa.
 */

"use client";

import { useEffect, useState } from "react";
import CheckoutButton from "../components/CheckoutButton";
import { courseModules as courseData } from "../curso/courseData";

const sessionStorageKey = "vp_session";

export default function CoursePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem(sessionStorageKey)));
  }, []);

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              <span className="text-label">Formação Completa</span>
            </div>

            {/* Title */}
            <h1 className="h1">
              O Curso de<br />Cliente Mistério
            </h1>

            {/* Description */}
            <p className="text-body">
              100% prático e desenhado para iniciantes. Aprende tudo o que precisas para começar a ganhar como Cliente Mistério — dos conceitos básicos às estratégias de carreira avançadas.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 py-4 border-t border-gray-200">
              <div className="text-center">
                <p className="h3">10</p>
                <p className="text-body-xs">Módulos</p>
              </div>
              <div className="text-center">
                <p className="h4 text-teal-600">5€–</p>
                <p className="h4 text-teal-600">150€+</p>
                <p className="text-body-xs">Por mês</p>
              </div>
              <div className="text-center">
                <p className="h3 text-teal-600">Vitalício</p>
                <p className="text-body-xs">Acesso</p>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-sm h-fit">
            <div className="mb-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
                <span className="text-label">+ Acesso completo</span>
              </div>
              <div>
                <p className="h5">Curso Cliente Mistério</p>
                <p className="h1">€19.99</p>
                <p className="text-body-xs">Pagamento único · Acesso vitalício</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              {[
                "10 módulos completos",
                "Testes por módulo",
                "Checklists e modelos",
                "Certificado de conclusão",
                "100% online, ao teu ritmo"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <CheckoutButton label="Comprar o curso" />
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              Pagamento seguro via Stripe · Sem subscrição
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="h3 mb-8">Por que fazer este curso?</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">👩‍💼</p>
              <p className="h5 mb-2">Para iniciantes</p>
              <p className="text-body-sm">Explicações simples, sem jargão. Começa do zero e aprende ao teu ritmo.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">⚡</p>
              <p className="h5 mb-2">Prático e real</p>
              <p className="text-body-sm">Casos reais, dicas profissionais e checklists. Tudo que precisas para ganhar já no mês 1.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">💰</p>
              <p className="h5 mb-2">Ganha desde já</p>
              <p className="text-body-sm">5€ a 150€+ por missão. Flexibilidade total. Começa quando quiseres.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">📈</p>
              <p className="h5 mb-2">Carreira escalável</p>
              <p className="text-body-sm">Evolua para missões premium. Quanto melhor, mais ganhas.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">✅</p>
              <p className="h5 mb-2">Testes por módulo</p>
              <p className="text-body-sm">Questionários em cada módulo para garantir que compreendeste antes de avançar.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl mb-3">🤝</p>
              <p className="h5 mb-2">Comunidade e apoio</p>
              <p className="text-body-sm">Aprende com outros avaliadores. Dicas, truques e suporte contínuo.</p>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="mb-16">
          <h2 className="h3 mb-2">10 Módulos completos</h2>
          <div className="space-y-3">
            {courseData.map((module) => (
              <div
                key={module.id}
                className="rounded-lg border border-gray-200 bg-white px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <span className="text-body-sm font-bold text-teal-600">{module.id}</span>
                  </div>
                  <div>
                    <p className="h5">{module.title}</p>
                    <p className="text-body-xs text-gray-600">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {!isLoggedIn && (
          <div className="text-center space-y-4 py-8 border-t border-gray-200">
            <p className="text-body-sm">Crie uma conta ou inicie sessão para aceder ao curso completo com conteúdo teórico e questionários.</p>
            <div className="flex flex-col gap-3 justify-center items-center sm:flex-row sm:gap-4">
              <CheckoutButton label="Comprar o curso" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

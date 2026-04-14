/*
 * DESCRIÇÃO DO FICHEIRO: Página pública com a estrutura do curso e ligação para a formação completa.
 */

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CheckoutButton from "../components/CheckoutButton";

const sessionStorageKey = "vp_session";

const courseModules = [
  {
    title: 'Módulo 1 — Enquadramento do Cliente Mistério',
    topics: [
      'Conceito e objetivos do Cliente Mistério (Mystery Shopping)',
      'Benefícios para empresas e para o avaliador',
      'Tipos de projetos e principais intervenientes (marca, agência/plataforma, avaliador)',
    ],
  },
  {
    title: 'Módulo 2 — Mercado e Oportunidades',
    topics: [
      'Áreas com maior procura (retalho, restauração, serviços, turismo, saúde, entre outras)',
      'Modelos de colaboração: agências, plataformas e cliente direto',
      'Critérios de seleção e como aumentar a taxa de aceitação em missões',
    ],
  },
  {
    title: 'Módulo 3 — Perfil, Conduta e Ética Profissional',
    topics: [
      'Requisitos do avaliador: discrição, rigor, imparcialidade e consistência',
      'Confidencialidade e conflitos de interesse',
      'Boas práticas de comportamento durante a avaliação',
    ],
  },
  {
    title: 'Módulo 4 — Metodologia de Avaliação e Critérios de Qualidade',
    topics: [
      'O que avaliar: atendimento, processos, produto/serviço, conformidade e experiência do cliente',
      'Indicadores e métricas frequentes (tempos de espera, cumprimento de procedimentos, qualidade do serviço)',
      'Como evitar enviesamentos e erros de interpretação',
    ],
  },
  {
    title: 'Módulo 5 — Preparação da Missão',
    topics: [
      'Leitura e análise do briefing: objetivos, checklist e requisitos',
      'Planeamento logístico: horários, deslocações e orçamento',
      'Gestão de riscos e situações que podem invalidar a missão',
    ],
  },
  {
    title: 'Módulo 6 — Execução no Terreno',
    topics: [
      'Abordagem ao ponto de venda/serviço: naturalidade e consistência',
      'Técnicas de observação e recolha de informação sem comprometer a discrição',
      'Gestão de imprevistos (rutura de stock, alterações de equipa, filas, indisponibilidade de serviço)',
    ],
  },
  {
    title: 'Módulo 7 — Recolha e Gestão de Evidências',
    topics: [
      'Tipos de evidência: talões, registos, notas e suportes permitidos pelo projeto',
      'Organização e validação da informação recolhida',
      'Checklist pós-visita para garantir conformidade e evitar rejeições',
    ],
  },
  {
    title: 'Módulo 8 — Elaboração do Relatório e Submissão',
    topics: [
      'Estrutura de um relatório eficaz: factos, contexto e evidência',
      'Respostas a perguntas fechadas e abertas (objetividade e clareza)',
      'Prazos, validações e requisitos de qualidade na entrega',
    ],
  },
  {
    title: 'Módulo 9 — Remuneração, Reembolsos e Rentabilidade',
    topics: [
      'Como funcionam pagamentos e reembolsos (por missão/projeto)',
      'Cálculo de rentabilidade: tempo, deslocação, custos e retorno',
      'Estratégias para aumentar rendimento: rotas, recorrência, especialização e volume',
    ],
  },
  {
    title: 'Módulo 10 — Desenvolvimento Profissional e Plano de Ação',
    topics: [
      'Construção de reputação: consistência, qualidade e cumprimento de prazos',
      'Evolução para missões mais complexas e melhor remuneradas',
      'Plano de ação prático (30 dias): objetivos, rotina e métricas de progresso',
    ],
  },
];

export default function CoursePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem(sessionStorageKey)));
  }, []);

  /*
   * DESCRIÇÃO DO EFEITO: Fecha o modal com a tecla ESC e bloqueia o scroll da página
   * enquanto o curso está aberto em janela sobreposta.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCourseModalOpen(false);
      }
    };

    if (isCourseModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isCourseModalOpen]);

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-16 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">Formação Completa</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            O Curso de <span className="text-teal-600">Cliente Mistério</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-7 text-gray-700">
            Um curso completo, 100% prático e desenhado para iniciantes. Aprende tudo que precisas para começar a ganhar dinheiro como Cliente Mistério — desde os conceitos básicos até estratégias de carreira avançadas.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Por que fazer este curso */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Por que fazer este curso?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Para Iniciantes</p>
                  <p className="text-sm text-gray-600">Explicações simples, sem jargão. Começa do zero e aprende no teu ritmo.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Prático & Real</p>
                  <p className="text-sm text-gray-600">Casos reais, dicas profissionais, checklis práticos. Tudo que precisas para ganhar já no mês 1.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Ganha Desde Já</p>
                  <p className="text-sm text-gray-600">5€ a 150€+ por missão. Flexibilidade total. Começa quando queres.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Carreira Escalável</p>
                  <p className="text-sm text-gray-600">Começa simples, evolui para missões premium. Quanto melhor, mais ganhas.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Questões & Avaliação</p>
                  <p className="text-sm text-gray-600">Testes em cada módulo. Certifica-te que compreendeste antes de avançar.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">✓ Comunidade & Apoio</p>
                  <p className="text-sm text-gray-600">Aprende com outros avaliadores. Dicas, truques e apoio contínuo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="h-fit rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600">
                Acesso Completo
              </p>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-gray-900">€19.99</p>
                <p className="text-xs text-gray-600">Pagamento único · Acesso vitalício</p>
              </div>
            </div>
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">10 módulos completos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Certificado de conclusão</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Acesso ilimitado</p>
              </div>
            </div>
            <CheckoutButton label="Comprar curso" />
          </div>
        </div>

      {isLoggedIn && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setIsCourseModalOpen(true)}
            className="submit inline-block max-w-sm text-center"
          >
            Aceder ao Curso Completo
          </button>
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold sm:text-3xl home-title-highlight-text mt-8 mb-4">10 Módulos Completos</h3>
        {courseModules.map((moduleItem, idx) => {
          const emojis = ["🔍", "📈", "🎭", "✅", "📋", "👀", "📸", "📝", "💰", "🚀"];

          return (
            <details
              key={moduleItem.title}
              className="group rounded-2xl border border-[#22a094] bg-[#22a094] p-5 open:shadow-lg transition-all cursor-pointer"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold marker:content-none text-white">
                <div className="flex items-center gap-3">
                  <span>{moduleItem.title}</span>
                </div>
                <span className="transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>

              <ul className="mt-4 space-y-3 border-t border-white/30 pt-4 text-sm leading-6 text-white">
                {moduleItem.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white opacity-70" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>

      {!isLoggedIn && (
        <div className="text-center space-y-4">
          <p className="text-sm text-white/70">Crie uma conta ou inicie sessão para aceder ao curso completo com conteúdo teórico e questionários.</p>
          <div className="flex flex-col gap-3 justify-center items-center sm:flex-row sm:gap-4">
            <Link
              href="/account"
              className="submit inline-block max-w-sm text-center !no-underline"
            >
              Criar Conta Gratuita
            </Link>
          </div>
        </div>
      )}

      {isCourseModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 sm:p-6">
          <div className="flex h-[95vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#22a094]">Curso em ecrã expandido</p>
                <p className="text-sm font-medium text-black sm:text-base">Visualização focada para estudar sem scroll na página principal</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCourseModalOpen(false)}
                className="rounded-full border border-black/15 px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Fechar
              </button>
            </div>

            <iframe
              title="Curso completo de Cliente Mistério"
              src="/curso"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}

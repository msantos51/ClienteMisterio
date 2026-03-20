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

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem(sessionStorageKey)));
  }, []);

  return (
    <section className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#F66856" }}>
          Formação completa
        </p>

        <h1 className="text-3xl font-semibold home-title-highlight-text sm:text-4xl lg:text-5xl">O Curso de Cliente Mistério</h1>

        <p className="max-w-3xl text-sm sm:text-base leading-6 sm:leading-7">
          Um curso completo, 100% prático e desenhado para INICIANTES. Aprende tudo que precisas para começar a ganhar dinheiro como Cliente Mistério — desde os conceitos básicos até estratégias de carreira avançadas.
        </p>
      </header>

      {/* Benefícios do curso */}
      <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold sm:text-3xl home-title-highlight-text mb-4">Por que fazer este curso?</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Para Iniciantes</p>
            <p className="text-sm text-white/90">Explicações simples, sem jargão. Começa do zero e aprende no teu ritmo.</p>
          </div>
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Prático & Real</p>
            <p className="text-sm text-white/90">Casos reais, dicas profissionais, checklis práticos. Tudo que precisas para ganhar já no mês 1.</p>
          </div>
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Ganha Desde Já</p>
            <p className="text-sm text-white/90">5€ a 150€+ por missão. Flexibilidade total. Começa quando queres.</p>
          </div>
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Carreira Escalável</p>
            <p className="text-sm text-white/90">Começa simples, evolui para missões premium. Quanto melhor, mais ganhas.</p>
          </div>
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Questões & Avaliação</p>
            <p className="text-sm text-white/90">Testes em cada módulo. Certifica-te que compreendeste antes de avançar.</p>
          </div>
          <div className="rounded-lg border border-[#F66856] bg-[#F66856] p-4">
            <p className="font-semibold text-white mb-2">✓ Comunidade & Apoio</p>
            <p className="text-sm text-white/90">Aprende com outros avaliadores. Dicas, truques e apoio contínuo.</p>
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <div className="flex justify-center">
          <Link
            href="/curso"
            className="submit inline-block max-w-sm text-center !no-underline"
          >
            Aceder ao Curso Completo
          </Link>
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold sm:text-3xl home-title-highlight-text mt-8 mb-4">10 Módulos Completos</h3>
        {courseModules.map((moduleItem, idx) => {
          const emojis = ["🔍", "📈", "🎭", "✅", "📋", "👀", "📸", "📝", "💰", "🚀"];

          return (
            <details
              key={moduleItem.title}
              className="group rounded-2xl border border-[#F66856] bg-[#F66856] p-5 open:shadow-lg transition-all cursor-pointer"
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
            <CheckoutButton label="Comprar Acesso Completo" />
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

const modules = [
  {
    id: 1,
    title: "Módulo 1. Enquadramento do Cliente Mistério",
    description: "Conceito, objetivos e intervenientes do Mystery Shopping.",
  },
  {
    id: 2,
    title: "Módulo 2. Mercado e Oportunidades",
    description: "Setores com maior procura, modelos de colaboração e critérios de seleção.",
  },
  {
    id: 3,
    title: "Módulo 3. Perfil, Conduta e Ética Profissional",
    description: "Requisitos do avaliador, confidencialidade e boas práticas.",
  },
  {
    id: 4,
    title: "Módulo 4. Metodologia de Avaliação e Critérios de Qualidade",
    description: "O que avaliar, indicadores frequentes e como evitar enviesamentos.",
  },
  {
    id: 5,
    title: "Módulo 5. Preparação da Missão",
    description: "Análise do briefing, planeamento logístico e gestão de riscos.",
  },
  {
    id: 6,
    title: "Módulo 6. Execução no Terreno",
    description: "Abordagem natural, técnicas de observação e gestão de imprevistos.",
  },
  {
    id: 7,
    title: "Módulo 7. Recolha e Gestão de Evidências",
    description: "Tipos de evidência, organização e checklist pós-visita.",
  },
  {
    id: 8,
    title: "Módulo 8. Elaboração do Relatório e Submissão",
    description: "Estrutura do relatório, respostas objetivas e requisitos de qualidade.",
  },
  {
    id: 9,
    title: "Módulo 9. Remuneração, Reembolsos e Rentabilidade",
    description: "Pagamentos, cálculo de rentabilidade e estratégias de rendimento.",
  },
  {
    id: 10,
    title: "Módulo 10. Desenvolvimento Profissional e Plano de Ação",
    description: "Construção de reputação, evolução e plano prático de 30 dias.",
  },
];

export default function CatalogPage() {
  return (
    <>
      <style>{`
        @media print {
          header, footer, .no-print { display: none !important; }
          body { background: white !important; }
          .print-page { box-shadow: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-10 px-4 print:bg-white print:py-0 print:px-0">
        {/* Botão de impressão */}
        <div className="no-print mx-auto mb-6 max-w-[820px] flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-lg bg-[#22a094] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d8f84] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Guardar como PDF
          </button>
        </div>

        {/* Documento A4 */}
        <div className="print-page mx-auto max-w-[820px] bg-white shadow-lg print:shadow-none">

          {/* Cabeçalho */}
          <div className="bg-[#22a094] px-10 py-10 text-white">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold tracking-wide text-white/70">
                  Formação Profissional Online
                </p>
                <h1 className="text-3xl font-bold leading-tight">
                  Curso de Cliente Mistério
                </h1>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/85">
                  Formação completa para auditores que querem trabalhar com rigor,
                  produzir relatórios de qualidade e crescer profissionalmente.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-4xl font-bold">24,99€</p>
                <p className="text-sm text-white/70 line-through">64,99€</p>
                <p className="mt-1 text-xs text-white/70">acesso vitalício</p>
              </div>
            </div>

            {/* Destaques */}
            <div className="mt-8 grid grid-cols-4 gap-4 border-t border-white/20 pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold">10</p>
                <p className="text-xs text-white/75 mt-0.5">Módulos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">+500</p>
                <p className="text-xs text-white/75 mt-0.5">Alunos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/75 mt-0.5">Online</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">PDF</p>
                <p className="text-xs text-white/75 mt-0.5">Certificado</p>
              </div>
            </div>
          </div>

          {/* Corpo */}
          <div className="px-10 py-8 space-y-8">

            {/* Para quem é */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                Para quem é este curso?
              </h2>
              <p className="text-sm leading-7 text-[#444] text-justify">
                Este curso destina-se a qualquer pessoa que queira iniciar ou aprofundar a atividade de avaliador de
                Cliente Mistério. É especialmente relevante para auditores registados em agências e plataformas que
                pretendam produzir relatórios de qualidade superior, aumentar a taxa de aprovação e aceder a missões
                de maior valor.
              </p>
            </section>

            {/* O que inclui */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                O que está incluído
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "10 módulos de conteúdo teórico estruturado",
                  "Questionário de avaliação em cada módulo",
                  "Casos reais, estratégias e checklists por módulo",
                  "Certificado de conclusão personalizado em PDF",
                  "Acesso vitalício — estude ao seu ritmo",
                  "Conteúdo atualizado ao mercado português",
                  "Exemplos de relatórios e boas práticas",
                  "Guia de rentabilidade e desenvolvimento profissional",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#444]">
                    <span className="mt-0.5 shrink-0 text-[#22a094]">✓</span>
                    <span className="leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Programa */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                Programa do curso
              </h2>
              <div className="space-y-2">
                {modules.map((mod) => (
                  <div
                    key={mod.id}
                    className="flex items-start gap-4 rounded-lg border border-[#D4B5A0]/25 bg-[#fafafa] px-4 py-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22a094]/15 text-xs font-bold text-[#22a094]">
                      {mod.id}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2a2a2a]">{mod.title}</p>
                      <p className="text-xs text-[#666] mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                ))}
                {/* Certificado */}
                <div className="flex items-start gap-4 rounded-lg border border-[#22a094]/30 bg-[#f0f9f8] px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22a094] text-xs font-bold text-white">
                    ★
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2a2a2a]">Módulo 11. Certificado de Conclusão</p>
                    <p className="text-xs text-[#666] mt-0.5">
                      Emissão do certificado final em PDF com nome personalizado, após conclusão de todos os módulos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Como funciona */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-[#2a2a2a] border-b border-[#D4B5A0]/40 pb-2">
                Como funciona
              </h2>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { step: "1", label: "Registo", desc: "Cria conta e adquire o curso" },
                  { step: "2", label: "Aprende", desc: "Estuda os módulos ao teu ritmo" },
                  { step: "3", label: "Avalia", desc: "Completa os questionários" },
                  { step: "4", label: "Certifica", desc: "Descarrega o certificado PDF" },
                ].map((item) => (
                  <div key={item.step} className="space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#22a094] text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <p className="text-sm font-semibold text-[#2a2a2a]">{item.label}</p>
                    <p className="text-xs text-[#666] leading-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Rodapé do documento */}
          <div className="border-t border-[#D4B5A0]/30 bg-[#f9f9f9] px-10 py-6">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-[#2a2a2a]">Cliente Mistério — Formação Profissional</p>
                <p className="text-xs text-[#666] mt-0.5">clientemisterio.onrender.com</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#22a094]">24,99€</p>
                <p className="text-xs text-[#666]">Acesso imediato após pagamento</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

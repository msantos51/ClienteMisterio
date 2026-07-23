"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const CheckIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DownloadIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function RecursosPage() {
  const { t } = useLanguage();

  const resources = [
    {
      category: "Templates Prontos",
      items: [
        { name: "Checklist - Restaurante", size: "340 KB", pages: "3", updated: "Mai 2026" },
        { name: "Checklist - Retalho de Moda", size: "285 KB", pages: "3", updated: "Mai 2026" },
        { name: "Checklist - Eletrônica", size: "420 KB", pages: "4", updated: "Mai 2026" },
        { name: "Checklist - Hotelaria (60 itens)", size: "512 KB", pages: "5", updated: "Mai 2026" },
        { name: "Checklist - Banca e Telecom", size: "365 KB", pages: "4", updated: "Mai 2026" },
      ],
    },
    {
      category: "Guias Práticos",
      items: [
        { name: "Guia - Perfil Otimizado (Exemplo)", size: "1.2 MB", pages: "6", updated: "Mai 2026" },
        { name: "Guia - 15+ Plataformas em Portugal", size: "892 KB", pages: "8", updated: "Abr 2026" },
        { name: "Guia Fiscal - Recibos Verdes", size: "745 KB", pages: "6", updated: "Abr 2026" },
        { name: "Guia - Conformidade Banca", size: "634 KB", pages: "5", updated: "Mai 2026" },
      ],
    },
    {
      category: "Modelos & Spreadsheets",
      items: [
        { name: "Recibo Verde Templado (Word)", size: "256 KB", pages: "1", updated: "Mai 2026" },
        { name: "Dashboard Rentabilidade (Excel)", size: "420 KB", pages: "3 abas", updated: "Mai 2026" },
        { name: "Dashboard Rentabilidade (Google Sheets)", size: "Online", pages: "Compartilhado", updated: "Mai 2026" },
        { name: "Template - Relatório Restaurante", size: "512 KB", pages: "2", updated: "Mai 2026" },
      ],
    },
    {
      category: "Casos Reais & Exemplos",
      items: [
        { name: "5 Relatórios Aprovados (com análise)", size: "1.5 MB", pages: "12", updated: "Abr 2026" },
        { name: "5 Relatórios Rejeitados (com feedback)", size: "1.3 MB", pages: "11", updated: "Abr 2026" },
        { name: "Análise Comparativa: Antes vs. Depois", size: "892 KB", pages: "8", updated: "Mai 2026" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      {/* Hero */}
      <header className="border-b border-gray-200 px-3 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--accent-600)]">
            <span className="block h-px w-6 bg-[color:var(--accent)]" />
            Recursos
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Descarrega tudo o que precisas
          </h1>
          <p className="text-lg text-gray-600">
            Templates, checklists, guias práticos e exemplos reais de relatórios. Todos os recursos incluídos no curso,
            organizados por categoria.
          </p>
        </div>
      </header>

      {/* Resources */}
      <main className="px-3 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl">
          {resources.map((section, idx) => (
            <section key={idx} className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {section.category}
              </h2>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition hover:border-[color:var(--brand)] hover:shadow-sm"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <div className="mt-1 flex gap-4 text-sm text-gray-500">
                        <span>📁 {item.size}</span>
                        <span>📄 {item.pages}</span>
                        <span>🕐 {item.updated}</span>
                      </div>
                    </div>

                    <button className="ml-4 inline-flex items-center gap-2 rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-700)]">
                      <DownloadIcon size={16} />
                      Descarregar
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Additional Info */}
          <section className="mt-24 rounded-2xl border-2 border-[color:var(--brand)] bg-[color:var(--brand-soft)] p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Como usar estes recursos</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <CheckIcon size={20} className="text-[color:var(--brand)]" />
                <span>
                  <strong>Checklists:</strong> Imprime ou acessa no telemóvel durante a visita para não esquecer nenhum detalhe.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon size={20} className="text-[color:var(--brand)]" />
                <span>
                  <strong>Templates:</strong> Adapta aos teus projetos específicos. Personaliza conforme o setor.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon size={20} className="text-[color:var(--brand)]" />
                <span>
                  <strong>Exemplos reais:</strong> Estuda os relatórios aprovados para entender o padrão de qualidade esperado.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon size={20} className="text-[color:var(--brand)]" />
                <span>
                  <strong>Dashboard:</strong> Mantém atualizado com cada missão para visualizar a tua rentabilidade.
                </span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-20 rounded-2xl bg-gradient-to-br from-[#211d54] to-[#4338ca] p-8 text-center text-white sm:p-12">
            <h2 className="mb-4 text-2xl font-bold">Acesso completo a todos os recursos</h2>
            <p className="mb-8 text-gray-300">
              Todos estes materiais estão incluídos no curso. Regista-te ou faz login para descarregar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/login"
                className="rounded-lg bg-[color:var(--brand)] px-6 py-3 font-semibold hover:bg-[color:var(--brand-700)]"
              >
                Fazer Login
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Voltar ao Início
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

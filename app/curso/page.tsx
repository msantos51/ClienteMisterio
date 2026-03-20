/*
 * DESCRIÇÃO DO FICHEIRO: Página do curso de Cliente Mistério com conteúdo teórico, questionários e progresso persistente.
 */

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { courseModules, type QuizQuestion } from "./courseData";

type ModuleProgress = {
  moduleId: number;
  completed: boolean;
  quizScore: number | null;
  quizAnswers: Record<string, number> | null;
};

type ProgressData = {
  modules: ModuleProgress[];
  totalModules: number;
  completedCount: number;
  progressPercent: number;
};

type TheorySupportContent = {
  realScenario: string;
  goodPractices: string[];
  badPractices: string[];
  strategies: string[];
  executionChecklist: string[];
};

const sessionStorageKey = "vp_session";

/*
 * DESCRIÇÃO DO BLOCO: Conteúdo premium adicional por módulo para tornar a formação mais prática e diferenciadora.
 */
const moduleSupportContent: Record<number, TheorySupportContent> = {
  1: {
    realScenario:
      "Caso real (retalho alimentar): uma cadeia com 80 lojas descobriu que o maior problema não era o preço, mas a inconsistência no acolhimento inicial. Ao medir tempo de abordagem, saudação e linguagem consultiva, subiu 14 pontos no NPS em 3 meses.",
    goodPractices: [
      "Validar sempre objetivos do projeto antes da visita.",
      "Registar factos observáveis e comparáveis entre lojas.",
      "Separar experiência emocional de evidência operacional.",
    ],
    badPractices: [
      "Avaliar apenas por simpatia pessoal do colaborador.",
      "Generalizar uma única interação para toda a operação.",
      "Ignorar contexto do briefing e improvisar critérios.",
    ],
    strategies: [
      "Usar matriz de objetivos (atendimento, operação, compliance, venda).",
      "Comparar resultados por momentos da jornada: entrada, interação, fecho.",
      "Criar notas rápidas com evidências cronológicas para reduzir enviesamento.",
    ],
    executionChecklist: [
      "Entendi os objetivos da marca?",
      "Sei exatamente o que medir nesta missão?",
      "Consigo justificar cada resposta com um facto?",
    ],
  },
  2: {
    realScenario:
      "Caso real (telecom): avaliadores com perfil completo e resposta em menos de 30 minutos tiveram 2,3x mais convites para missões premium do que avaliadores com perfil genérico.",
    goodPractices: [
      "Especializar-se em 2 a 3 setores para ganhar consistência.",
      "Responder convites com rapidez e confirmação objetiva.",
      "Manter histórico de missões, notas e feedback por cliente.",
    ],
    badPractices: [
      "Aceitar missões sem calcular custos reais.",
      "Depender de uma única plataforma de trabalho.",
      "Falhar prazos por excesso de missões simultâneas.",
    ],
    strategies: [
      "Aplicar regra 70/20/10: 70% missões estáveis, 20% novas, 10% estratégicas.",
      "Definir taxa mínima por hora líquida para aceitar missões.",
      "Criar agenda semanal com blocos de deslocação por zona.",
    ],
    executionChecklist: [
      "A missão cobre custos e gera margem?",
      "Tenho capacidade para entregar com qualidade?",
      "Esta missão reforça meu posicionamento profissional?",
    ],
  },
  3: {
    realScenario:
      "Caso real (banca): um avaliador foi removido do painel após partilhar detalhes de uma agência num grupo público. A quebra de confidencialidade invalidou 46 relatórios históricos.",
    goodPractices: [
      "Declarar conflitos de interesse antes de aceitar tarefas.",
      "Usar postura neutra, sem provocar colaboradores.",
      "Tratar informação de projeto como confidencial por defeito.",
    ],
    badPractices: [
      "Comentar missões em redes sociais ou grupos informais.",
      "Aceitar avaliações em locais com relações pessoais.",
      "Manipular narrativa para parecer 'mais interessante'.",
    ],
    strategies: [
      "Criar protocolo pessoal de ética com critérios de recusa.",
      "Fazer revisão final para remover linguagem opinativa.",
      "Utilizar descritores observáveis (quem, o quê, quando).",
    ],
    executionChecklist: [
      "Há conflito de interesse nesta missão?",
      "Consigo manter imparcialidade total?",
      "Existe qualquer risco de exposição indevida de dados?",
    ],
  },
  4: {
    realScenario:
      "Caso real (hotelaria): duas equipas avaliavam o mesmo hotel com diferença de 28 pontos por falta de calibração. Após guião com exemplos observáveis, a diferença caiu para 6 pontos.",
    goodPractices: [
      "Aplicar critérios fechados e mensuráveis.",
      "Distinguir comportamento observado de interpretação.",
      "Cronometrar tempos críticos da jornada.",
    ],
    badPractices: [
      "Usar escalas subjetivas sem âncoras de avaliação.",
      "Penalizar com base em expectativa pessoal de serviço.",
      "Avaliar tudo como 'médio' para evitar compromisso.",
    ],
    strategies: [
      "Adotar protocolo A-B-C: Acontecimento, Base do critério, Consequência.",
      "Comparar checklist com evidências antes de pontuar.",
      "Rever vieses comuns antes de submeter o relatório.",
    ],
    executionChecklist: [
      "Cada resposta está ancorada num critério?",
      "Registei tempos e comportamentos com precisão?",
      "Evitei conclusões não suportadas por factos?",
    ],
  },
  5: {
    realScenario:
      "Caso real (automóvel): missão recusada por falta de prova de visita porque o avaliador não validou previamente requisitos de evidência fotográfica e política de estacionamento.",
    goodPractices: [
      "Ler briefing completo duas vezes antes da execução.",
      "Simular roteiro e pontos de decisão antes de sair.",
      "Ter plano alternativo para imprevistos operacionais.",
    ],
    badPractices: [
      "Confiar apenas na memória do briefing.",
      "Chegar sem validar horário real do ponto de venda.",
      "Ignorar custo de deslocação na rentabilidade.",
    ],
    strategies: [
      "Criar check de pré-saída com 10 itens obrigatórios.",
      "Definir janela horária principal e secundária.",
      "Preparar perguntas neutras alinhadas com a persona.",
    ],
    executionChecklist: [
      "O briefing foi convertido em plano de ação?",
      "Tenho plano B se a loja estiver encerrada?",
      "Levo todos os recursos necessários para evidência?",
    ],
  },
  6: {
    realScenario:
      "Caso real (restauração): avaliadores que usavam ancoragem temporal (entrada, pedido, entrega) reduziram em 40% as correções pedidas pela agência por incoerência de tempos.",
    goodPractices: [
      "Manter comportamento orgânico e credível.",
      "Observar com foco em sinais objetivos do serviço.",
      "Registar mentalmente marcos de tempo da interação.",
    ],
    badPractices: [
      "Questionar de forma artificial para testar limites.",
      "Fazer anotações explícitas em frente da equipa.",
      "Mudar narrativa da persona durante a visita.",
    ],
    strategies: [
      "Usar técnica 3x3: 3 tempos, 3 comportamentos, 3 provas.",
      "Planejar saída discreta para registo imediato.",
      "Acionar agência rapidamente em bloqueios críticos.",
    ],
    executionChecklist: [
      "Mantive naturalidade durante toda a jornada?",
      "Consegui recolher observações sem levantar suspeita?",
      "Registei os principais tempos operacionais?",
    ],
  },
  7: {
    realScenario:
      "Caso real (farmácia): relatório reprovado porque o talão estava ilegível e sem hora visível. A missão teve de ser refeita sem remuneração adicional.",
    goodPractices: [
      "Validar legibilidade de provas antes de sair do local.",
      "Nomear ficheiros com padrão consistente.",
      "Guardar cópia digital e original físico quando necessário.",
    ],
    badPractices: [
      "Submeter fotos desfocadas ou cortadas.",
      "Misturar provas de missões diferentes na mesma pasta.",
      "Expor dados pessoais de terceiros em anexos.",
    ],
    strategies: [
      "Aplicar triagem em 3 passos: qualidade, completude, coerência.",
      "Usar estrutura de pastas por cliente/mês/missão.",
      "Criar rotina de backup imediato após cada visita.",
    ],
    executionChecklist: [
      "Tenho todas as evidências obrigatórias?",
      "As provas estão legíveis e datadas?",
      "Os anexos correspondem exatamente ao relato?",
    ],
  },
  8: {
    realScenario:
      "Caso real (energia): relatório inicialmente devolvido por linguagem opinativa. Após reescrita factual cronológica, passou a ser usado como referência interna de formação.",
    goodPractices: [
      "Escrever de forma cronológica e verificável.",
      "Usar linguagem profissional e objetiva.",
      "Conferir consistência entre respostas fechadas e abertas.",
    ],
    badPractices: [
      "Usar adjetivos vagos como 'bom' ou 'péssimo' sem prova.",
      "Contradizer a checklist no texto narrativo.",
      "Submeter em cima do prazo sem revisão final.",
    ],
    strategies: [
      "Aplicar padrão STAR factual: Situação, Tarefa, Ação observada, Resultado.",
      "Rever ortografia e consistência com leitura em voz alta.",
      "Criar templates próprios por setor para acelerar qualidade.",
    ],
    executionChecklist: [
      "Cada afirmação pode ser comprovada?",
      "Há coerência total entre campos do questionário?",
      "A submissão foi revista antes do envio final?",
    ],
  },
  9: {
    realScenario:
      "Caso real (multi-cliente): um avaliador aumentou 31% da margem mensal ao reorganizar rotas por zona e eliminar missões com taxa horária abaixo do mínimo definido.",
    goodPractices: [
      "Calcular remuneração líquida por hora.",
      "Consolidar missões geograficamente próximas.",
      "Controlar pagamentos e reembolsos com rastreabilidade.",
    ],
    badPractices: [
      "Aceitar missão apenas pelo valor bruto anunciado.",
      "Ignorar tempo administrativo de relatório e uploads.",
      "Não validar prazos de pagamento em cada contrato.",
    ],
    strategies: [
      "Criar dashboard simples de receita, custo e margem.",
      "Negociar missões recorrentes com histórico de qualidade.",
      "Usar limites mínimos de preço por tipo de visita.",
    ],
    executionChecklist: [
      "Conheço o valor líquido real desta missão?",
      "A rota está otimizada para reduzir custos?",
      "O prazo de pagamento é compatível com meu fluxo de caixa?",
    ],
  },
  10: {
    realScenario:
      "Caso real (progressão): avaliador júnior passou a auditor premium em 8 meses ao documentar portfólio de qualidade, obter certificações setoriais e manter taxa de aprovação acima de 95%.",
    goodPractices: [
      "Definir metas trimestrais de evolução profissional.",
      "Recolher feedback e transformar em plano de melhoria.",
      "Construir posicionamento por nicho de maior valor.",
    ],
    badPractices: [
      "Operar sem estratégia de carreira.",
      "Repetir erros recorrentes sem revisão de processo.",
      "Aceitar qualquer missão sem coerência com objetivo profissional.",
    ],
    strategies: [
      "Criar roadmap anual com competências técnicas e comerciais.",
      "Medir KPI pessoais: aprovação, prazo, margem, reincidência.",
      "Investir em networking com agências e gestores de projeto.",
    ],
    executionChecklist: [
      "Esta missão aproxima meu posicionamento desejado?",
      "Que competência estou a desenvolver neste ciclo?",
      "Tenho evidência de evolução para mostrar ao mercado?",
    ],
  },
};

export default function CursoPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [theoryPage, setTheoryPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const loadProgress = useCallback(async () => {
    try {
      const response = await fetch("/api/course/progress", { credentials: "include" });
      if (response.ok) {
        const data = (await response.json()) as ProgressData;
        setProgress(data);
      }
    } catch {
      // Silently fail — progress will show as empty.
    }
  }, []);

  useEffect(() => {
    const session = localStorage.getItem(sessionStorageKey);
    if (!session) {
      router.push("/login");
      return;
    }
    setIsAuthenticated(true);
    loadProgress();
  }, [router, loadProgress]);

  const getModuleProgress = (moduleId: number): ModuleProgress | undefined => {
    return progress?.modules.find((m) => m.moduleId === moduleId);
  };

  const isModuleUnlocked = (moduleId: number): boolean => {
    if (moduleId === 1) return true;
    const previousModule = getModuleProgress(moduleId - 1);
    return previousModule?.completed === true;
  };

  const openModule = (moduleId: number) => {
    if (!isModuleUnlocked(moduleId)) return;
    setActiveModuleId(moduleId);
    setQuizMode(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setTheoryPage(0);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  const selectAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitQuiz = async () => {
    if (!activeModuleId) return;
    const moduleData = courseModules.find((m) => m.id === activeModuleId);
    if (!moduleData) return;

    const totalQuestions = moduleData.quiz.length;
    const correctCount = moduleData.quiz.filter(
      (q) => quizAnswers[q.id] === q.correctIndex
    ).length;
    const score = Math.round((correctCount / totalQuestions) * 100);

    setQuizScore(score);
    setQuizSubmitted(true);

    if (score >= 60) {
      setIsSaving(true);
      try {
        const response = await fetch("/api/course/progress", {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            moduleId: activeModuleId,
            quizScore: score,
            quizAnswers,
          }),
        });
        if (response.ok) {
          await loadProgress();
        }
      } catch {
        // Silently fail.
      } finally {
        setIsSaving(false);
      }
    }
  };

  const allQuestionsAnswered = (quiz: QuizQuestion[]): boolean => {
    return quiz.every((q) => quizAnswers[q.id] !== undefined);
  };

  const getOptionClass = (question: QuizQuestion, optionIndex: number): string => {
    const base = "w-full text-left p-3 rounded-lg border-2 transition-all text-sm text-slate-900";
    if (!quizSubmitted) {
      if (quizAnswers[question.id] === optionIndex) {
        return `${base} border-[#F66856] bg-[#F66856]/10 text-white`;
      }
      return `${base} border-slate-200 hover:border-slate-300 bg-white`;
    }
    if (optionIndex === question.correctIndex) {
      return `${base} border-green-500 bg-green-50`;
    }
    if (quizAnswers[question.id] === optionIndex && optionIndex !== question.correctIndex) {
      return `${base} border-red-400 bg-red-50`;
    }
    return `${base} border-slate-200 bg-white opacity-60`;
  };

  if (!isAuthenticated) {
    return <p className="text-sm text-slate-500">A verificar sessão...</p>;
  }

  const activeModule = activeModuleId ? courseModules.find((m) => m.id === activeModuleId) : null;
  const activeSupportContent = activeModule ? moduleSupportContent[activeModule.id] : null;
  const baseTheoryPages = activeModule
    ? [
        {
          title: "Página 1 — Fundamentos e Contexto",
          blocks: activeModule.content.slice(0, 2),
        },
        {
          title: "Página 2 — Critérios Avançados e Aplicação",
          blocks: activeModule.content.slice(2, 5),
        },
      ]
    : [];
  const premiumTheoryPage = activeSupportContent
    ? {
        title: "Página 3 — Casos Reais, Boas/Más Práticas e Estratégia",
        blocks: [activeSupportContent.realScenario],
      }
    : null;
  const allTheoryPages = premiumTheoryPage ? [...baseTheoryPages, premiumTheoryPage] : baseTheoryPages;
  const currentTheoryPage = allTheoryPages[theoryPage];
  const isLastTheoryPage = theoryPage === allTheoryPages.length - 1;
  const completedCount = progress?.completedCount ?? 0;
  const totalModules = progress?.totalModules ?? 10;
  const progressPercent = progress?.progressPercent ?? 0;

  return (
    <section className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] home-title-highlight-text">
          Formação completa
        </p>
        <h1 className="text-3xl font-semibold home-title-highlight-text lg:text-4xl">
          Curso de Cliente Mistério
        </h1>
        <p className="max-w-3xl text-base leading-7">
          Complete todos os módulos para obter a sua certificação. Cada módulo inclui conteúdo
          teórico e um questionário de avaliação.
        </p>
      </header>

      {/* Barra de progresso global */}
      <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="font-semibold">Progresso do Curso</span>
          <span className="home-title-highlight-text font-bold">{progressPercent}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#F66856] to-[#F66856] transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-white/60">
          {completedCount} de {totalModules} módulos concluídos
        </p>
      </div>

      {/* Lista de módulos */}
      {!activeModule && (
        <div className="space-y-3">
          {courseModules.map((mod) => {
            const modProgress = getModuleProgress(mod.id);
            const unlocked = isModuleUnlocked(mod.id);
            const completed = modProgress?.completed === true;

            return (
              <button
                key={mod.id}
                type="button"
                disabled={!unlocked}
                onClick={() => openModule(mod.id)}
                className={`w-full text-left rounded-2xl border p-5 transition-all ${
                  completed
                    ? "border-[#F66856]/40 bg-[#F66856]/10 hover:bg-[#F66856]/20"
                    : unlocked
                      ? "border-white/30 hover:border-[#F66856] cursor-pointer hover:bg-white/5"
                      : "border-white/10 opacity-40 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        completed
                          ? "bg-[#F66856] text-white"
                          : unlocked
                            ? "bg-[#F66856]/20 text-[#F66856]"
                            : "bg-white/10 text-white/30"
                      }`}
                    >
                      {completed ? "\u2713" : mod.id}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm break-words text-white">{mod.title}</h3>
                      <p className="text-xs text-white/70 mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-sm">
                    {completed && modProgress?.quizScore !== null && (
                      <span className="text-[#F66856] font-semibold">{modProgress.quizScore}%</span>
                    )}
                    {!completed && unlocked && (
                      <span className="home-title-highlight-text">&rarr;</span>
                    )}
                    {!unlocked && (
                      <span className="text-white/30 text-xs">Bloqueado</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Conteúdo do módulo ativo */}
      {activeModule && !quizMode && currentTheoryPage && (
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setActiveModuleId(null)}
            className="text-sm text-white font-semibold hover:underline"
          >
            &larr; Voltar aos módulos
          </button>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold">{activeModule.title}</h2>
              <p className="text-sm text-white/70 mt-2">{activeModule.description}</p>
            </div>

            {/* Card de informação rápida — visível apenas na primeira página */}
            {theoryPage === 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {/* Palavras-chave */}
                {activeModule.keywords && activeModule.keywords.length > 0 && (
                  <div className="rounded-lg border border-[#f66856]/30 bg-[#f66856]/10 p-4">
                    <p className="text-sm font-bold text-[#2a2a2a] mb-3">Conceitos-chave</p>
                    <div className="flex flex-wrap gap-2">
                      {activeModule.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-[#f66856]/20 text-[#2a2a2a]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dica Prática */}
                {activeModule.practicalTip && (
                  <div className="rounded-lg border border-[#fde1dd]/30 bg-[#fde1dd] p-4">
                    <p className="text-sm font-bold text-[#2a2a2a] mb-2">Dica Prática</p>
                    <p className="text-sm text-[#2a2a2a]">{activeModule.practicalTip}</p>
                  </div>
                )}

                {/* Benefício */}
                {activeModule.benefit && (
                  <div className="rounded-lg border border-[#f99589]/30 bg-[#f99589] p-4">
                    <p className="text-sm font-bold text-[#2a2a2a] mb-2">Por que isto importa</p>
                    <p className="text-sm text-[#2a2a2a]">{activeModule.benefit}</p>
                  </div>
                )}

                {/* Aviso */}
                {activeModule.warning && (
                  <div className="rounded-lg border border-[#fbc3bb]/30 bg-[#fbc3bb] p-4">
                    <p className="text-sm font-bold text-[#2a2a2a] mb-2">Aviso Importante</p>
                    <p className="text-sm text-[#2a2a2a]">{activeModule.warning}</p>
                  </div>
                )}
              </div>
            )}

            <div className="rounded-lg border border-[#e0ddd8] bg-[#f2f2ee] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#666] font-semibold mb-4">{currentTheoryPage.title}</p>

              <div className="space-y-4">
                {currentTheoryPage.blocks.map((paragraph, idx) => (
                  <p key={idx} className="text-sm leading-7 text-[#2a2a2a]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {premiumTheoryPage && theoryPage === allTheoryPages.length - 1 && activeSupportContent && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#fde1dd]/30 bg-[#fde1dd] p-4">
                  <p className="font-bold text-[#2a2a2a] mb-3">Boas práticas</p>
                  <ul className="space-y-2 text-sm text-[#2a2a2a]">
                    {activeSupportContent.goodPractices.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-[#fbc3bb]/30 bg-[#fbc3bb] p-4">
                  <p className="font-bold text-[#2a2a2a] mb-3">Más práticas</p>
                  <ul className="space-y-2 text-sm text-[#2a2a2a]">
                    {activeSupportContent.badPractices.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-[#f99589]/30 bg-[#f99589] p-4 md:col-span-2">
                  <p className="font-bold text-[#2a2a2a] mb-3">Estratégias práticas</p>
                  <ul className="space-y-2 text-sm text-[#2a2a2a]">
                    {activeSupportContent.strategies.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-[#f66856]/30 bg-[#f66856] p-4 md:col-span-2">
                  <p className="font-bold text-white mb-3">Checklist de execução profissional</p>
                  <ul className="space-y-2 text-sm text-white">
                    {activeSupportContent.executionChecklist.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-4">
              <button
                type="button"
                onClick={() => setTheoryPage((prev) => Math.max(prev - 1, 0))}
                disabled={theoryPage === 0}
                className="site-pill-button-secondary max-w-[180px] disabled:opacity-40"
              >
                Página anterior
              </button>
              <p className="text-xs text-white/60">
                Página {theoryPage + 1} de {allTheoryPages.length}
              </p>
              <button
                type="button"
                onClick={() => setTheoryPage((prev) => Math.min(prev + 1, allTheoryPages.length - 1))}
                disabled={isLastTheoryPage}
                className="submit max-w-[180px] disabled:opacity-40"
              >
                Próxima página
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={startQuiz}
              disabled={!isLastTheoryPage}
              className="submit max-w-xs"
            >
              {isLastTheoryPage ? "Iniciar Questionário" : "Conclua a teoria para iniciar o questionário"}
            </button>
          </div>
        </div>
      )}

      {/* Questionário */}
      {activeModule && quizMode && (
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setQuizMode(false)}
            className="text-sm text-white font-semibold hover:underline"
          >
            &larr; Voltar ao conteúdo
          </button>

          <div className="rounded-2xl border border-white/20 bg-[#feb1a5] p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-1">{activeModule.title}</h2>
            <p className="text-sm text-white/60 mb-6">
              Responda a todas as questões. Necessita de 60% para concluir o módulo.
            </p>

            <div className="space-y-8">
              {activeModule.quiz.map((question, qIdx) => (
                <div key={question.id} className="space-y-3">
                  <p className="font-semibold text-sm">
                    {qIdx + 1}. {question.question}
                  </p>
                  <div className="grid gap-2">
                    {question.options.map((option, oIdx) => (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={quizSubmitted}
                        onClick={() => selectAnswer(question.id, oIdx)}
                        className={getOptionClass(question, oIdx)}
                      >
                        {String.fromCharCode(65 + oIdx)}) {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!quizSubmitted && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  disabled={!allQuestionsAnswered(activeModule.quiz) || isSaving}
                  onClick={submitQuiz}
                  className="submit max-w-xs disabled:opacity-40"
                >
                  Submeter Respostas
                </button>
              </div>
            )}

            {quizSubmitted && quizScore !== null && (
              <div className={`mt-8 rounded-xl p-5 text-center ${
                quizScore >= 60 ? "bg-[#F66856]/10 border border-[#F66856]/30" : "bg-red-900/20 border border-red-400/30"
              }`}>
                <p className="text-2xl font-bold mb-2">
                  {quizScore >= 60 ? "Parabéns!" : "Tente novamente"}
                </p>
                <p className="text-sm mb-1 text-white/90">
                  Obteve <span className="font-bold text-lg text-[#F66856]">{quizScore}%</span> neste questionário.
                </p>
                <p className="text-xs text-white/60 mb-4">
                  {quizScore >= 60
                    ? isSaving ? "A guardar progresso..." : "Módulo concluído com sucesso!"
                    : "Necessita de pelo menos 60% para avançar. Reveja o conteúdo e tente novamente."}
                </p>
                <div className="flex justify-center gap-3">
                  {quizScore >= 60 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModuleId(null);
                        setQuizMode(false);
                      }}
                      className="submit max-w-xs"
                    >
                      Voltar aos Módulos
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setQuizMode(false)}
                        className="submit max-w-[200px] !bg-white/20"
                      >
                        Rever Conteúdo
                      </button>
                      <button
                        type="button"
                        onClick={startQuiz}
                        className="submit max-w-[200px]"
                      >
                        Repetir Quiz
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

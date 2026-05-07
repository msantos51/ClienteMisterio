/*
 * DESCRIÇÃO DO FICHEIRO: Página do curso de Cliente Mistério com conteúdo teórico, questionários e progresso persistente.
 */

"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { courseModules as courseModulesPt, type QuizQuestion } from "./courseData";
import { courseModules as courseModulesEn } from "./courseDataEn";
import { useLanguage } from "@/app/context/LanguageContext";

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

type TheoryPage = {
  title: string;
  blocks: string[];
};

const sessionStorageKey = "vp_session";

/*
 * DESCRIÇÃO DA CONSTANTE: Lista de siglas válidas que devem manter maiúsculas.
 */
const acronymWhitelist = new Set(["NPS", "SMS", "PDF", "JPG", "LED", "KPI", "FAQ", "URL", "APP", "API", "RH", "CV"]);

/*
 * DESCRIÇÃO DA FUNÇÃO: Suaviza palavras totalmente em maiúsculas para melhorar leitura,
 * preservando siglas comuns e texto curto.
 */
const softenAllCapsWords = (text: string) =>
  text.replace(/\b\p{Lu}{4,}\b/gu, (word) => {
    if (acronymWhitelist.has(word)) {
      return word;
    }

    return `${word[0]}${word.slice(1).toLowerCase()}`;
  });

/*
 * DESCRIÇÃO DA FUNÇÃO: Divide parágrafos longos em blocos menores mantendo sequência textual.
 */
const splitLongParagraph = (text: string): string[] => {
  const sentenceCandidates = text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentenceCandidates.length < 4) {
    return [text];
  }

  const chunks: string[] = [];

  for (let i = 0; i < sentenceCandidates.length; i += 2) {
    chunks.push(sentenceCandidates.slice(i, i + 2).join(" "));
  }

  return chunks;
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Converte texto corrido com enumerações "(1) ... (2) ..."
 * em estrutura visual com lista e aplica melhorias de legibilidade em todos os módulos.
 */
const renderTheoryBlock = (paragraph: string, index: number) => {
  const normalizedParagraph = softenAllCapsWords(paragraph);
  const enumerationRegex = /\(\d+\)\s/g;
  const matches = [...normalizedParagraph.matchAll(enumerationRegex)];

  if (matches.length < 2) {
    const paragraphChunks = splitLongParagraph(normalizedParagraph);

    return (
      <div key={index} className="space-y-3">
        {paragraphChunks.map((chunk) => (
          <p key={`${index}-${chunk}`} className="text-base leading-8 text-[#2a2a2a] text-justify">
            {chunk}
          </p>
        ))}
      </div>
    );
  }

  const introText = normalizedParagraph.slice(0, matches[0].index).trim();
  const items = matches.map((match, itemIndex) => {
    const itemStart = match.index ?? 0;
    const contentStart = itemStart + match[0].length;
    const nextItemStart = matches[itemIndex + 1]?.index ?? normalizedParagraph.length;
    const itemText = normalizedParagraph.slice(contentStart, nextItemStart).trim();

    return itemText;
  });

  return (
    <div key={index} className="space-y-3">
      {introText && <p className="text-base leading-8 text-[#2a2a2a] text-justify">{introText}</p>}
      <ul className="list-disc pl-6 space-y-2 text-base leading-8 text-[#2a2a2a] text-justify">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

/*
 * DESCRIÇÃO DO BLOCO: Conteúdo premium adicional por módulo (versão portuguesa).
 */
const moduleSupportContentPt: Record<number, TheorySupportContent> = {
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

const moduleSupportContentEn: Record<number, TheorySupportContent> = {
  1: {
    realScenario:
      "Real case (food retail): a chain with 80 stores discovered the main problem wasn't price but inconsistency in initial greeting. By measuring approach time, greeting and consultative language, NPS rose 14 points in 3 months.",
    goodPractices: [
      "Always validate project objectives before the visit.",
      "Record observable and comparable facts across stores.",
      "Separate emotional experience from operational evidence.",
    ],
    badPractices: [
      "Evaluate solely based on personal liking of the employee.",
      "Generalise a single interaction to the whole operation.",
      "Ignore briefing context and improvise criteria.",
    ],
    strategies: [
      "Use objective matrix (service, operations, compliance, sales).",
      "Compare results by journey moments: entry, interaction, close.",
      "Create quick notes with chronological evidence to reduce bias.",
    ],
    executionChecklist: [
      "Did I understand the brand's objectives?",
      "Do I know exactly what to measure in this mission?",
      "Can I justify each answer with a fact?",
    ],
  },
  2: {
    realScenario:
      "Real case (telecom): evaluators with a complete profile and response within 30 minutes received 2.3x more invitations for premium missions than evaluators with a generic profile.",
    goodPractices: [
      "Specialise in 2 to 3 sectors to build consistency.",
      "Respond to invitations quickly with objective confirmation.",
      "Keep a history of missions, notes and feedback per client.",
    ],
    badPractices: [
      "Accept missions without calculating actual costs.",
      "Depend on a single work platform.",
      "Miss deadlines due to too many simultaneous missions.",
    ],
    strategies: [
      "Apply the 70/20/10 rule: 70% stable missions, 20% new, 10% strategic.",
      "Set a minimum net hourly rate to accept missions.",
      "Create a weekly schedule with commute blocks by area.",
    ],
    executionChecklist: [
      "Does the mission cover costs and generate margin?",
      "Do I have the capacity to deliver with quality?",
      "Does this mission strengthen my professional positioning?",
    ],
  },
  3: {
    realScenario:
      "Real case (banking): an evaluator was removed from the panel after sharing details about a branch in a public group. The confidentiality breach invalidated 46 historical reports.",
    goodPractices: [
      "Declare conflicts of interest before accepting assignments.",
      "Maintain a neutral stance, without provoking employees.",
      "Treat project information as confidential by default.",
    ],
    badPractices: [
      "Commenting on missions on social media or informal groups.",
      "Accepting evaluations at locations with personal relationships.",
      "Manipulating the narrative to seem 'more interesting'.",
    ],
    strategies: [
      "Create a personal ethics protocol with refusal criteria.",
      "Do a final review to remove opinionated language.",
      "Use observable descriptors (who, what, when).",
    ],
    executionChecklist: [
      "Is there a conflict of interest in this mission?",
      "Can I maintain complete impartiality?",
      "Is there any risk of improper data exposure?",
    ],
  },
  4: {
    realScenario:
      "Real case (hospitality): two teams evaluating the same hotel with a 28-point gap due to lack of calibration. After a guide with observable examples, the difference dropped to 6 points.",
    goodPractices: [
      "Apply closed and measurable criteria.",
      "Distinguish observed behaviour from interpretation.",
      "Time critical moments of the journey.",
    ],
    badPractices: [
      "Using subjective scales without evaluation anchors.",
      "Penalising based on personal service expectations.",
      "Rating everything as 'average' to avoid commitment.",
    ],
    strategies: [
      "Adopt the A-B-C protocol: Occurrence, Basis of criterion, Consequence.",
      "Compare checklist with evidence before scoring.",
      "Review common biases before submitting the report.",
    ],
    executionChecklist: [
      "Is each answer anchored to a criterion?",
      "Did I record times and behaviours accurately?",
      "Did I avoid conclusions not supported by facts?",
    ],
  },
  5: {
    realScenario:
      "Real case (automotive): a mission was rejected due to lack of proof of visit because the evaluator had not previously validated photographic evidence requirements and parking policy.",
    goodPractices: [
      "Read the briefing in full twice before execution.",
      "Simulate the route and decision points before leaving.",
      "Have a contingency plan for operational unforeseen events.",
    ],
    badPractices: [
      "Relying only on memory of the briefing.",
      "Arriving without validating the actual opening hours of the point of sale.",
      "Ignoring travel costs in profitability calculations.",
    ],
    strategies: [
      "Create a pre-departure checklist with 10 mandatory items.",
      "Define a primary and secondary time window.",
      "Prepare neutral questions aligned with the persona.",
    ],
    executionChecklist: [
      "Has the briefing been converted into an action plan?",
      "Do I have a plan B if the store is closed?",
      "Do I have all the necessary resources for evidence?",
    ],
  },
  6: {
    realScenario:
      "Real case (food service): evaluators who used time anchoring (entry, order, delivery) reduced corrections requested by the agency for time inconsistency by 40%.",
    goodPractices: [
      "Maintain organic and credible behaviour.",
      "Observe with focus on objective service signals.",
      "Mentally record time milestones of the interaction.",
    ],
    badPractices: [
      "Questioning artificially to test limits.",
      "Taking explicit notes in front of the team.",
      "Changing the persona narrative during the visit.",
    ],
    strategies: [
      "Use the 3x3 technique: 3 times, 3 behaviours, 3 proofs.",
      "Plan a discreet exit for immediate recording.",
      "Contact the agency quickly in critical blockages.",
    ],
    executionChecklist: [
      "Did I maintain naturalness throughout the journey?",
      "Did I collect observations without raising suspicion?",
      "Did I record the main operational times?",
    ],
  },
  7: {
    realScenario:
      "Real case (pharmacy): a report was rejected because the receipt was illegible and had no visible time. The mission had to be redone without additional payment.",
    goodPractices: [
      "Validate the legibility of evidence before leaving the location.",
      "Name files with a consistent pattern.",
      "Keep a digital copy and physical original when necessary.",
    ],
    badPractices: [
      "Submitting blurry or cropped photos.",
      "Mixing evidence from different missions in the same folder.",
      "Exposing third-party personal data in attachments.",
    ],
    strategies: [
      "Apply a 3-step triage: quality, completeness, coherence.",
      "Use a folder structure by client/month/mission.",
      "Create an immediate backup routine after each visit.",
    ],
    executionChecklist: [
      "Do I have all mandatory evidence?",
      "Is the evidence legible and dated?",
      "Do the attachments match exactly what was reported?",
    ],
  },
  8: {
    realScenario:
      "Real case (energy): a report initially returned for opinionated language was, after a factual chronological rewrite, used as an internal training reference.",
    goodPractices: [
      "Write in a chronological and verifiable manner.",
      "Use professional and objective language.",
      "Check consistency between closed and open answers.",
    ],
    badPractices: [
      "Using vague adjectives like 'good' or 'terrible' without proof.",
      "Contradicting the checklist in the narrative text.",
      "Submitting at the last minute without a final review.",
    ],
    strategies: [
      "Apply the factual STAR pattern: Situation, Task, Observed Action, Result.",
      "Review spelling and consistency by reading aloud.",
      "Create personal templates by sector to accelerate quality.",
    ],
    executionChecklist: [
      "Can every statement be verified?",
      "Is there full consistency between questionnaire fields?",
      "Was the submission reviewed before final sending?",
    ],
  },
  9: {
    realScenario:
      "Real case (multi-client): an evaluator increased monthly margin by 31% by reorganising routes by area and eliminating missions with an hourly rate below the defined minimum.",
    goodPractices: [
      "Calculate net pay per hour.",
      "Consolidate geographically close missions.",
      "Track payments and reimbursements with traceability.",
    ],
    badPractices: [
      "Accepting a mission based only on the gross announced value.",
      "Ignoring administrative time for reports and uploads.",
      "Not validating payment deadlines in each contract.",
    ],
    strategies: [
      "Create a simple income, cost and margin dashboard.",
      "Negotiate recurring missions with a quality track record.",
      "Use minimum price limits by visit type.",
    ],
    executionChecklist: [
      "Do I know the real net value of this mission?",
      "Is the route optimised to reduce costs?",
      "Is the payment deadline compatible with my cash flow?",
    ],
  },
  10: {
    realScenario:
      "Real case (progression): a junior evaluator became a premium auditor in 8 months by documenting a quality portfolio, obtaining sector certifications and maintaining an approval rate above 95%.",
    goodPractices: [
      "Set quarterly professional development goals.",
      "Collect feedback and turn it into an improvement plan.",
      "Build positioning around the highest-value niche.",
    ],
    badPractices: [
      "Operating without a career strategy.",
      "Repeating recurring errors without process review.",
      "Accepting any mission without alignment to professional objectives.",
    ],
    strategies: [
      "Create an annual roadmap with technical and commercial competencies.",
      "Measure personal KPIs: approval, deadline, margin, recurrence.",
      "Invest in networking with agencies and project managers.",
    ],
    executionChecklist: [
      "Does this mission advance my desired positioning?",
      "What competency am I developing in this cycle?",
      "Do I have evidence of progress to show the market?",
    ],
  },
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Distribui o conteúdo teórico em 4 páginas equilibradas
 * para garantir profundidade antes de iniciar o questionário.
 */
const buildBaseTheoryPages = (content: string[], pageTitles: string[]): TheoryPage[] => {
  const totalBasePages = 4;
  const chunkSize = Math.max(1, Math.ceil(content.length / totalBasePages));

  const pages: TheoryPage[] = [];

  for (let pageIndex = 0; pageIndex < totalBasePages; pageIndex += 1) {
    const start = pageIndex * chunkSize;
    const end = start + chunkSize;
    const pageBlocks = content.slice(start, end);

    if (pageBlocks.length === 0) {
      continue;
    }

    pages.push({
      title: pageTitles[pageIndex] ?? `Página ${pageIndex + 1}`,
      blocks: pageBlocks,
    });
  }

  return pages;
};

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function CursoPage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const cp = t.coursePlayer;
  const courseModules = language === "en" ? courseModulesEn : courseModulesPt;
  const moduleSupportContent = language === "en" ? moduleSupportContentEn : moduleSupportContentPt;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [theoryPage, setTheoryPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloadingCertificate, setIsDownloadingCertificate] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const moduleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    moduleContentRef.current?.scrollTo({ top: 0 });
  }, [theoryPage, activeModuleId, quizMode]);

  const loadProgress = useCallback(async () => {
    setAccessDenied(false);

    try {
      const response = await fetch("/api/course/progress", { credentials: "include" });
      if (response.status === 403) {
        setAccessDenied(true);
        return;
      }

      if (response.ok) {
        const data = (await response.json()) as ProgressData;
        setProgress(data);
      }
    } catch {
      // Silently fail: progress will show as empty.
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

  /*
   * DESCRIÇÃO DO EFEITO: Bloqueia o scroll da página principal sempre que um módulo
   * está aberto em modo sobreposto (teoria ou questionário), mantendo o foco no conteúdo.
   */
  useEffect(() => {
    if (!activeModuleId) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModuleId]);

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

  /*
   * DESCRIÇÃO DA FUNÇÃO: Marca o módulo 11 como concluído e inicia a descarga do certificado PDF personalizado.
   */
  const downloadCertificate = async () => {
    if (isDownloadingCertificate) return;

    setIsDownloadingCertificate(true);

    try {
      await fetch("/api/course/progress", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId: 11,
          quizScore: 100,
          quizAnswers: {},
        }),
      });

      const certificateResponse = await fetch("/api/course/certificate", {
        method: "GET",
        credentials: "include",
      });

      if (!certificateResponse.ok) return;

      const pdfBlob = await certificateResponse.blob();
      const objectUrl = URL.createObjectURL(pdfBlob);
      const downloadAnchor = document.createElement("a");
      const contentDisposition = certificateResponse.headers.get("content-disposition");
      const fileNameMatch = contentDisposition?.match(/filename=([^;]+)/i);
      const fileName = fileNameMatch?.[1]?.replace(/\"/g, "").trim() || "certificado.pdf";

      downloadAnchor.href = objectUrl;
      downloadAnchor.download = fileName;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
      URL.revokeObjectURL(objectUrl);

      await loadProgress();
    } catch {
      // Silently fail.
    } finally {
      setIsDownloadingCertificate(false);
    }
  };

  const allQuestionsAnswered = (quiz: QuizQuestion[]): boolean => {
    return quiz.every((q) => quizAnswers[q.id] !== undefined);
  };

  const getOptionClass = (question: QuizQuestion, optionIndex: number): string => {
    const base = "w-full text-left p-3 rounded-lg border-2 transition-all text-sm text-[#2a2a2a]";
    if (!quizSubmitted) {
      if (quizAnswers[question.id] === optionIndex) {
        return `${base} border-[#22a094] bg-[#22a094]/15`;
      }
      return `${base} border-[#D4B5A0]/30 hover:border-[#D4B5A0]/60 bg-white`;
    }
    if (optionIndex === question.correctIndex) {
      return `${base} border-green-500 bg-green-50`;
    }
    if (quizAnswers[question.id] === optionIndex && optionIndex !== question.correctIndex) {
      return `${base} border-red-400 bg-red-50`;
    }
    return `${base} border-[#D4B5A0]/30 bg-white opacity-60`;
  };

  if (!isAuthenticated) {
    return <p className="text-sm text-slate-500">{cp.verifyingSession}</p>;
  }

  if (accessDenied) {
    return (
      <section className="w-full space-y-6 bg-white p-8 rounded-2xl">
        <h1 className="text-3xl font-semibold home-title-highlight-text lg:text-4xl">{cp.courseTitle}</h1>
        <p className="text-base text-[#2a2a2a]">
          {cp.accessDeniedDesc}
        </p>
        <div className="flex gap-3">
          <button className="submit max-w-[220px]" type="button" onClick={() => router.push("/checkout")}>
            {cp.goToPayment}
          </button>
          <button
            className="site-pill-button-secondary max-w-[220px]"
            type="button"
            onClick={() => router.push("/dashboard")}
          >
            {cp.backToDashboard}
          </button>
        </div>
      </section>
    );
  }

  const activeModule = activeModuleId ? courseModules.find((m) => m.id === activeModuleId) : null;
  const activeSupportContent = activeModule ? moduleSupportContent[activeModule.id] : null;
  const baseTheoryPages = activeModule
    ? activeModule.pages
      ? activeModule.pages.map((p) => ({ title: p.title, blocks: p.blocks }))
      : buildBaseTheoryPages(activeModule.content, cp.theoryPageTitles)
    : [];
  const premiumTheoryPage = activeSupportContent
    ? {
        title: cp.premiumPageTitle,
        blocks: [activeSupportContent.realScenario],
      }
    : null;
  const allTheoryPages = premiumTheoryPage ? [...baseTheoryPages, premiumTheoryPage] : baseTheoryPages;
  const currentTheoryPage = allTheoryPages[theoryPage];
  const isLastTheoryPage = theoryPage === allTheoryPages.length - 1;
  const completedCount = progress?.completedCount ?? 0;
  const totalModules = progress?.totalModules ?? 11;
  const progressPercent = progress?.progressPercent ?? 0;

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <div className="space-y-8 bg-white p-8 rounded-2xl">
      <header className="space-y-3">
        <p className="text-xs font-semibold" style={{ color: "#22a094" }}>
          {cp.completeTraining}
        </p>
        <h1 className="text-3xl font-semibold home-title-highlight-text lg:text-4xl">
          {cp.courseTitle}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#2a2a2a]">
          {cp.completionDesc}
        </p>
      </header>

      {/* Course stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#D4B5A0]/30 bg-white p-6">
          <p className="text-3xl font-bold text-[#2a2a2a]">{totalModules}</p>
          <p className="text-xs text-[#666] mt-2 font-medium">{cp.targetModules}</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#D4B5A0]/30 bg-white p-6">
          <p className="text-3xl font-bold text-[#2a2a2a]">{totalModules - (progress?.completedCount ?? 0)}</p>
          <p className="text-xs text-[#666] mt-2 font-medium">{cp.missing}</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#D4B5A0]/30 bg-white p-6">
          <p className="text-3xl font-bold text-[#2a2a2a]">{completedCount}</p>
          <p className="text-xs text-[#666] mt-2 font-medium">{cp.finished}</p>
        </div>
      </div>

      {/* Global progress bar */}
      <div className="rounded-2xl border border-[#D4B5A0]/30 bg-white p-5">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="font-semibold text-[#2a2a2a]">{cp.courseProgress}</span>
          <span className="font-bold text-[#22a094]">{progressPercent}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-[#D4B5A0]/20 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#22a094] to-[#22a094] transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-[#666]">
          {completedCount} {cp.of} {totalModules} {cp.modulesCompleted}
        </p>
      </div>

      {/* Module list */}
      {!activeModule && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#2a2a2a]">{cp.courseModulesTitle}</h2>
            <div className="flex gap-4 text-sm">
              <div className="text-right">
                <span className="font-bold text-[#22a094]">{totalModules}</span>
                <p className="text-xs text-[#666]">{cp.available}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#2a2a2a]">{completedCount}</span>
                <p className="text-xs text-[#666]">{cp.completed}</p>
              </div>
            </div>
          </div>
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
                    ? "border-[#22a094]/40 bg-[#F5E5DB] hover:bg-[#E8D5C8]"
                    : unlocked
                      ? "border-[#D4B5A0]/30 hover:border-[#22a094] cursor-pointer hover:bg-white/60"
                      : "border-[#D4B5A0]/20 opacity-40 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        completed
                          ? "bg-[#22a094] text-white"
                          : unlocked
                            ? "bg-[#22a094]/20 text-[#22a094]"
                            : "bg-[#D4B5A0]/20 text-[#2a2a2a]"
                      }`}
                    >
                      {completed ? "\u2713" : mod.id}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm break-words text-[#2a2a2a]">{mod.title}</h3>
                      <p className="text-xs text-[#666] mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-sm flex flex-col items-end gap-0.5">
                    {completed && (
                      <span className="text-[#22a094] font-semibold text-xs">{cp.complete}</span>
                    )}
                    {completed && modProgress?.quizScore !== null && (
                      <span className="text-[#22a094] font-semibold">{modProgress.quizScore}%</span>
                    )}
                    {!completed && unlocked && (
                      <span className="text-[#2a2a2a]">&rarr;</span>
                    )}
                    {!unlocked && (
                      <span className="text-[#999] text-xs">{cp.locked}</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
          </div>
        </div>
      )}

      {/* Conteúdo do módulo ativo */}
      {activeModule && !quizMode && currentTheoryPage && (
        <div className="fixed inset-0 z-[120] bg-black/60 p-3 sm:p-6">
          <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col rounded-2xl border border-[#D4B5A0]/30 bg-white p-4 sm:p-6">
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setActiveModuleId(null)}
                className="text-sm text-[#2a2a2a] font-semibold hover:underline"
              >
                {cp.backToModules}
              </button>
            </div>

            <div ref={moduleContentRef} className="overflow-y-auto pr-1 sm:pr-2">
              <div className="mb-6 space-y-3">
                <div>
                  <h2 className="text-2xl font-bold text-[#2a2a2a]">{activeModule.title}</h2>
                  <p className="text-sm text-[#666] mt-2">{activeModule.description}</p>
                </div>

                {/* Barra de progresso do módulo */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#666]">{cp.page} {theoryPage + 1} {cp.of} {allTheoryPages.length}</p>
                    <p className="text-sm font-bold text-[#22a094]">{Math.round(((theoryPage + 1) / allTheoryPages.length) * 100)}{cp.percentComplete}</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#D4B5A0]/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#22a094] transition-all duration-500"
                      style={{ width: `${((theoryPage + 1) / allTheoryPages.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Layout de duas colunas: conteúdo + sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Coluna esquerda - conteúdo principal */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Título da página */}
                  <div>
                    <p className="text-xs text-[#666] font-semibold mb-3">{currentTheoryPage.title}</p>
                  </div>

                  {/* Conteúdo teórico */}
                  <div className="space-y-4">
                    {currentTheoryPage.blocks.map((paragraph, idx) => (
                      <p key={idx} className="text-base leading-8 text-[#2a2a2a] text-justify">
                        {renderBold(paragraph)}
                      </p>
                    ))}
                  </div>

                  {/* Conteúdo premium - no final */}
                  {premiumTheoryPage && theoryPage === allTheoryPages.length - 1 && activeSupportContent && (
                    <div className="space-y-4 mt-8 pt-6 border-t border-[#D4B5A0]/20">
                      <div className="rounded-lg border border-[#a0d5be]/30 bg-[#f0f7f4] p-4">
                        <p className="font-bold text-[#2a2a2a] mb-3">{cp.goodPractices}</p>
                        <ul className="space-y-2 text-sm text-[#2a2a2a]">
                          {activeSupportContent.goodPractices.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="shrink-0">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-[#f4b9ae]/30 bg-[#fef5f3] p-4">
                        <p className="font-bold text-[#2a2a2a] mb-3">{cp.badPractices}</p>
                        <ul className="space-y-2 text-sm text-[#2a2a2a]">
                          {activeSupportContent.badPractices.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="shrink-0">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-[#fbc3bb]/30 bg-[#fffbfa] p-4">
                        <p className="font-bold text-[#2a2a2a] mb-3">{cp.practicalStrategies}</p>
                        <ul className="space-y-2 text-sm text-[#2a2a2a]">
                          {activeSupportContent.strategies.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="shrink-0">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-[#22a094]/30 bg-[#22a094] p-4">
                        <p className="font-bold text-white mb-3">{cp.executionChecklist}</p>
                        <ul className="space-y-2 text-sm text-white">
                          {activeSupportContent.executionChecklist.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="shrink-0">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {activeModule.evaluationExamples && activeModule.evaluationExamples.length > 0 && (
                        <div className="rounded-lg border border-[#D4B5A0]/30 bg-white p-4">
                          <p className="font-bold text-[#2a2a2a] mb-3">{cp.decisionExamples}</p>
                          <div className="space-y-4">
                            {activeModule.evaluationExamples.map((example) => (
                              <article key={example.title} className="rounded-lg border border-[#e0ddd8] bg-[#f2f2ee] p-4 space-y-2">
                                <h3 className="text-sm font-bold text-[#2a2a2a]">{example.title}</h3>
                                <p className="text-sm text-[#2a2a2a]">
                                  <span className="font-semibold">{cp.scenario}</span> {example.scenario}
                                </p>
                                <p className="text-sm text-[#2a2a2a]">
                                  <span className="font-semibold">{cp.correctApproach}</span> {example.correctApproach}
                                </p>
                                <p className="text-sm text-[#2a2a2a]">
                                  <span className="font-semibold">{cp.incorrectApproach}</span> {example.incorrectApproach}
                                </p>
                              </article>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Coluna direita - sidebar com cards de contexto */}
                <div className="lg:col-span-1 space-y-4">
                  {/* Conceitos-chave */}
                  {activeModule.keywords && activeModule.keywords.length > 0 && (
                    <div className="rounded-lg border border-[#b8d5ce]/30 bg-[#eef9f6] p-4">
                      <p className="text-sm font-bold text-[#2a2a2a] mb-3">{cp.keyConceptsTitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {activeModule.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-[#22a094]/20 text-[#2a2a2a]"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dica Prática */}
                  {activeModule.practicalTip && (
                    <div className="rounded-lg border border-[#a0d5be]/30 bg-[#f0f7f4] p-4">
                      <p className="text-sm font-bold text-[#2a2a2a] mb-2">{cp.practicalTipTitle}</p>
                      <p className="text-sm text-[#2a2a2a] leading-6">{activeModule.practicalTip}</p>
                    </div>
                  )}

                  {/* Benefício */}
                  {activeModule.benefit && (
                    <div className="rounded-lg border border-[#f4b9ae]/30 bg-[#fef5f3] p-4">
                      <p className="text-sm font-bold text-[#2a2a2a] mb-2">{cp.whyItMatters}</p>
                      <p className="text-sm text-[#2a2a2a] leading-6">{activeModule.benefit}</p>
                    </div>
                  )}

                  {/* Aviso */}
                  {activeModule.warning && (
                    <div className="rounded-lg border border-[#f4b9ae]/30 bg-[#fef5f3] p-4">
                      <p className="text-sm font-bold text-[#2a2a2a] mb-2">{cp.importantWarning}</p>
                      <p className="text-sm text-[#2a2a2a] leading-6">{activeModule.warning}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Navegação de páginas */}
              <div className="flex items-center justify-between gap-3 border-t border-[#D4B5A0]/20 pt-6">
                <button
                  type="button"
                  onClick={() => setTheoryPage((prev) => Math.max(prev - 1, 0))}
                  disabled={theoryPage === 0}
                  className="site-pill-button-secondary disabled:opacity-40"
                >
                  {cp.previous}
                </button>
                <p className="text-sm font-semibold text-[#2a2a2a]">
                  {cp.page} {theoryPage + 1} {cp.of} {allTheoryPages.length}
                </p>
                <button
                  type="button"
                  onClick={() => setTheoryPage((prev) => Math.min(prev + 1, allTheoryPages.length - 1))}
                  disabled={isLastTheoryPage}
                  className="submit disabled:opacity-40"
                >
                  {cp.nextPage}
                </button>
              </div>

              {/* Botão final - Quiz ou Certificado */}
              <div className="mt-6">
                {activeModule.id === 11 ? (
                  <div className="rounded-2xl border border-[#22a094]/30 bg-[#F5E5DB] p-6 text-center space-y-4">
                    <p className="text-sm text-[#2a2a2a]">
                      {cp.certificateDesc}
                    </p>
                    <button
                      type="button"
                      onClick={downloadCertificate}
                      disabled={isDownloadingCertificate}
                      className="submit max-w-sm disabled:opacity-40"
                    >
                      {isDownloadingCertificate ? cp.preparingCertificate : cp.downloadCertificate}
                    </button>
                  </div>
                ) : (
                  isLastTheoryPage && (
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={startQuiz}
                        className="submit"
                      >
                        {cp.startQuiz}
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Questionário */}
      {activeModule && quizMode && activeModule.quiz.length > 0 && (
        <div className="fixed inset-0 z-[120] bg-black/60 p-3 sm:p-6">
          <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col rounded-2xl border border-[#D4B5A0]/30 bg-white p-4 sm:p-6">
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setQuizMode(false)}
                className="text-sm text-[#2a2a2a] font-semibold hover:underline"
              >
                {cp.backToContent}
              </button>
            </div>

            <div ref={moduleContentRef} className="overflow-y-auto pr-1 sm:pr-2">
              <div className="rounded-2xl border border-[#D4B5A0]/30 bg-white p-6">
                <h2 className="text-xl font-bold mb-1 text-[#2a2a2a]">{activeModule.title}</h2>
                <p className="text-sm text-[#666] mb-6">
                  {cp.quizInstruction}
                </p>

                <div className="space-y-6">
                  {activeModule.quiz.map((question, qIdx) => (
                    <div
                      key={question.id}
                      className="space-y-3 rounded-lg border border-[#e0ddd8] bg-[#f2f2ee] p-4 sm:p-5"
                    >
                      <p className="font-semibold text-sm text-[#2a2a2a]">
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
                      {cp.submitAnswers}
                    </button>
                  </div>
                )}

                {quizSubmitted && quizScore !== null && (
                  <div className={`mt-8 rounded-xl p-5 text-center ${
                    quizScore >= 60 ? "bg-[#22a094]/15 border border-[#22a094]/40" : "bg-red-100 border border-red-400/40"
                  }`}>
                    <p className="text-2xl font-bold mb-2 text-[#2a2a2a]">
                      {quizScore >= 60 ? cp.congrats : cp.tryAgainQuiz}
                    </p>
                    <p className="text-sm mb-1 text-[#2a2a2a]">
                      {cp.scored} <span className="font-bold text-lg text-[#22a094]">{quizScore}%</span> {cp.inThisQuiz}
                    </p>
                    <p className="text-xs text-[#666] mb-4">
                      {quizScore >= 60
                        ? isSaving ? cp.savingProgress : cp.moduleCompleted
                        : cp.needMorePoints}
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
                          {cp.backToModulesList}
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => setQuizMode(false)}
                            className="submit max-w-[200px] !bg-white/20"
                          >
                            {cp.reviewContent}
                          </button>
                          <button
                            type="button"
                            onClick={startQuiz}
                            className="submit max-w-[200px]"
                          >
                            {cp.retakeQuiz}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
}

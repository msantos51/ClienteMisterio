/*
 * DESCRIÇÃO DO FICHEIRO: Conteúdo premium por módulo (casos reais, boas/más práticas,
 * estratégias e checklist de execução). Vive fora de app/curso/page.tsx (componente
 * de cliente) para nunca ser incluído no bundle público — só é servido autenticado
 * e com curso pago, via app/api/course/modules/route.ts.
 */

export type TheorySupportContent = {
  realScenario: string;
  goodPractices: string[];
  badPractices: string[];
  strategies: string[];
  executionChecklist: string[];
};

export const moduleSupportContentPt: Record<number, TheorySupportContent> = {
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

export const moduleSupportContentEn: Record<number, TheorySupportContent> = {
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

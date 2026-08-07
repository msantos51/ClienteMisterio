/*
 * DESCRIÇÃO DO FICHEIRO: Conteúdo completo do curso de Cliente Mistério (PT).
 * Cada módulo tem teoria paginada, exemplos de decisão e questionário final.
 * Tom: direto, com humor, mas rigoroso. Regra de ouro: nada de encher chouriços.
 */

export type QuizQuestion = {
 id: string;
 question: string;
 options: string[];
 correctIndex: number;
};

export type EvaluationExample = {
 title: string;
 scenario: string;
 correctApproach: string;
 incorrectApproach: string;
};

export type CoursePage = {
 title: string;
 blocks: string[];
};

export type RecruitingCompany = {
 name: string;
 description: string;
 url: string;
};

export type RecruitingCompanyGroup = {
 category: string;
 companies: RecruitingCompany[];
};

export type CourseModule = {
 id: number;
 title: string;
 description: string;
 content: string[];
 pages?: CoursePage[];
 quiz: QuizQuestion[];
 keywords?: string[];
 practicalTip?: string;
 warning?: string;
 benefit?: string;
 evaluationExamples?: EvaluationExample[];
 recruitingCompanies?: RecruitingCompanyGroup[];
};

// Forma pública do módulo, sem a resposta certa de cada pergunta — é o que
// GET /api/course/modules devolve ao cliente. A pontuação do quiz é sempre
// calculada no servidor a partir de PublicQuizQuestion + as respostas do aluno.
export type PublicQuizQuestion = Omit<QuizQuestion, "correctIndex">;
export type PublicCourseModule = Omit<CourseModule, "quiz"> & { quiz: PublicQuizQuestion[] };

export const courseModules: CourseModule[] = [
 /* ==========================================================
    MÓDULO 1
    ========================================================== */
 {
  id: 1,
  title: "O lado invisível do serviço",
  description:
   "O que é ser cliente mistério, quem paga a fatura e porque é que a tua opinião, bem escrita, vale dinheiro.",
  keywords: ["Mystery Shopping", "Padrões de serviço", "Marca", "Agência", "Avaliador"],
  practicalTip:
   "A partir de hoje, transforma qualquer café numa aula: cronometra o tempo até seres atendido. Vais reparar em coisas que nunca viste.",
  warning:
   "Confidencialidade é sagrada. Um print no grupo dos amigos chega para te tirar da plataforma — e não há volta a dar.",
  benefit:
   "Percebes o negócio todo antes de entrares nele. Quem sabe quem paga e porquê, escolhe melhores missões e escreve melhores relatórios.",
  content: [
   "Cliente mistério é medir a experiência real de um cliente com critérios definidos, sem revelar que se está a avaliar.",
   "Três intervenientes: a marca define o que quer saber, a agência coordena e valida, o avaliador executa e documenta.",
   "Formatos: presencial, telefónico, digital, auditoria de imagem, conformidade, entregas e missões multi-fase.",
   "O relatório tem consequências reais na vida de pessoas: rigor não é simpatia, é obrigação.",
  ],
  pages: [
   {
    title: "Página 1 — O que é (e o que não é)",
    blocks: [
     "Más notícias: não vais receber uma gabardina nem uma lupa. Boas notícias: vais ser pago para entrar numa loja, num café ou num hotel como qualquer outro cliente — e sair com informação que a marca não consegue obter de mais nenhuma forma.",
     "**Cliente mistério** é uma metodologia de medição. Alguém se comporta como cliente comum e regista, com critérios definidos, o que realmente aconteceu: quanto tempo esperou, se foi cumprimentado, se o produto foi explicado, se a casa de banho estava limpa. Sem revelar que está a avaliar.",
     "A diferença para um inquérito de satisfação é enorme. O inquérito pergunta *\"ficou satisfeito?\"* três dias depois, quando a memória já inventou metade. O cliente mistério mede *\"o colaborador cumprimentou nos primeiros 30 segundos: sim ou não\"*, no momento. Um dá opiniões; o outro dá factos.",
     "E não, não és polícia. Não vais lá apanhar ninguém. Vais lá verificar se o que a marca prometeu à sua própria equipa está mesmo a acontecer no balcão — que é coisa bem diferente.",
    ],
   },
   {
    title: "Página 2 — Quem é quem neste jogo",
    blocks: [
     "São sempre três os intervenientes. **A marca** define o que quer saber e paga a conta: \"queremos saber se os nossos colaboradores oferecem o cartão de fidelização\". **A agência ou plataforma** transforma isso num questionário, recruta avaliadores, valida os relatórios e entrega resultados. **Tu, o avaliador**, executas a visita e produzes a informação.",
     "Esta cadeia explica quase tudo o que te vai acontecer. Se um relatório for devolvido, é porque a agência não consegue defendê-lo perante a marca. Se uma missão pagar mais, é porque exige mais tempo, mais discrição ou mais despesa. Nada disto é arbitrário.",
     "O ciclo típico: a marca envia o briefing → a agência publica a missão → candidatas-te → és aprovado → executas → submetes o relatório com evidências → a agência valida → recebes. Entre a visita e o pagamento costumam passar 15 a 45 dias, conforme a plataforma.",
     "Guarda esta ideia: **a agência é a tua cliente**. É ela que te avalia a ti. Prazo cumprido, relatório limpo e talão anexado valem mais para a tua carreira do que qualquer texto bonito.",
    ],
   },
   {
    title: "Página 3 — Os formatos de missão",
    blocks: [
     "**Presencial.** O clássico. Entras numa loja, restaurante, banco, farmácia ou concessionário e avalias atendimento, processo e ambiente. É o formato mais comum e o que melhor paga por hora quando corre bem.",
     "**Telefónica (mystery calling).** Ligas para uma linha de apoio ou para uma loja e avalias tempo de espera, guião, simpatia e informação dada. Faz-se de pijama, paga menos, mas acumula-se depressa.",
     "**Digital.** Submetes um formulário no site da marca, usas uma app ou pedes orçamento e mede-se o tempo e a qualidade da resposta. No setor automóvel, por exemplo, é frequente exigir-se resposta em menos de três horas.",
     "**Auditoria de imagem, conformidade e entregas.** Aqui verificas montras, sinalética, uniformes, cumprimento de regras legais ou o estado de uma encomenda que chegou a casa. E há ainda as **missões multi-fase**: preenches um formulário, avalias a chamada de resposta, visitas a loja e avalias o follow-up — a jornada inteira do cliente, medida ponto por ponto.",
    ],
   },
   {
    title: "Página 4 — O peso do que escreves",
    blocks: [
     "Uma cadeia de 80 lojas descobre que só 40% dos clientes são cumprimentados quando a norma exige 100%. Forma as equipas. Três meses depois está nos 95% e as vendas sobem. Essa mudança começou num relatório escrito por alguém como tu, num café, com o telemóvel no bolso.",
     "É por isso que a responsabilidade é grande. Do outro lado há pessoas reais cujo prémio, promoção ou renovação de contrato pode depender do que escreveste. Um \"não cumprimentou\" escrito à pressa, quando na verdade cumprimentou, é injusto e é falso.",
     "As marcas verificam. Muitas cruzam relatórios com câmaras, registos de caixa e horários de turno. Se escreveres que estiveste às 14h30 e o talão diz 15h10, o teu relatório cai — e a tua reputação com ele.",
     "Regra que vale o curso todo: **se não o consegues provar, não o escreves**. Tudo o resto — o estilo, o vocabulário, a rapidez — aprende-se depois.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Oportunidade de venda perdida",
    scenario:
     "Numa loja de roupa, pedes uma camisa específica. O colaborador leva-te ao produto, mas não sugere nada complementar.",
    correctApproach:
     "\"Abordado 2 min após a entrada. Apresentou o artigo pedido. Não sugeriu artigos complementares nem alternativas (item 7 do guião não cumprido).\"",
    incorrectApproach:
     "\"Atendimento fraco, devia ter oferecido mais coisas. Não gostei.\" — isso é opinião, não é observação.",
   },
   {
    title: "Exemplo 2 — Protocolo não cumprido",
    scenario:
     "Numa farmácia, o briefing indica que cada cliente deve receber o folheto de promoções. Não recebes nada.",
    correctApproach:
     "\"Pedi recomendação para dores de cabeça. Colaboradora indicou produto e explicou posologia. NÃO entregou folheto de promoções (item 5 do protocolo).\"",
    incorrectApproach:
     "\"Esqueceu-se do folheto.\" — sem referência ao protocolo, parece um lapso teu e não uma falha medida.",
   },
  ],
  quiz: [
   {
    id: "m1q1",
    question: "Qual é o objetivo principal de uma missão de cliente mistério?",
    options: [
     "Fazer compras com desconto",
     "Medir o cumprimento de padrões de serviço definidos pela marca",
     "Substituir os inquéritos de satisfação",
     "Comparar preços com a concorrência",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q2",
    question: "Quem são os três intervenientes de um projeto de cliente mistério?",
    options: [
     "Cliente final, fornecedor e distribuidor",
     "Marca, agência/plataforma e avaliador",
     "Gerente de loja, colaborador e cliente",
     "Marketing, recursos humanos e direção comercial",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q3",
    question: "O que distingue o cliente mistério de um inquérito de satisfação?",
    options: [
     "É mais barato para a marca",
     "Regista a experiência no momento, com critérios objetivos e definidos",
     "Não precisa de preparação",
     "É feito sempre por telefone",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q4",
    question: "Numa missão multi-fase, o que acontece tipicamente?",
    options: [
     "Visitas a mesma loja várias vezes no mesmo dia",
     "Avalias etapas sequenciais da jornada: contacto digital, chamada, visita e follow-up",
     "Avalias várias marcas concorrentes ao mesmo tempo",
     "Repetes a missão até o resultado ser positivo",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q5",
    question: "Porque é que o rigor do relatório é inegociável?",
    options: [
     "Porque as agências pagam por número de palavras",
     "Porque as conclusões afetam pessoas reais e são frequentemente cruzadas com outros registos",
     "Porque a marca só lê a primeira frase",
     "Porque o relatório é publicado online",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 2
    ========================================================== */
 {
  id: 2,
  title: "O mercado e onde estão as missões",
  description:
   "Quem opera em Portugal, que setores pagam melhor e como escolher missões que compensam mesmo.",
  keywords: ["Plataformas", "Setores", "Honorário", "Reembolso", "Custo real"],
  practicalTip:
   "Regista-te em 5 a 8 plataformas, não em uma. As missões aparecem por vagas: quem só está numa fica semanas à espera.",
  warning:
   "Missão a 12 € a 40 km de casa não é missão, é passeio pago pelo teu depósito. Faz sempre a conta do custo real antes de aceitar.",
  benefit:
   "Aprendes a filtrar. Em vez de aceitar tudo o que aparece, escolhes as três missões da semana que rendem de facto.",
  content: [
   "O mercado em Portugal é servido por plataformas internacionais e agências locais; registares-te em várias é a norma.",
   "Setores com mais volume: retalho alimentar, restauração, moda, banca, telecom, farmácia, automóvel e hotelaria.",
   "A remuneração divide-se em honorário (o teu trabalho) e reembolso (a despesa devolvida) — não são a mesma coisa.",
   "Custo real = deslocação + tempo de visita + tempo de relatório. Só depois disso se sabe se a missão compensa.",
  ],
  pages: [
   {
    title: "Página 1 — Quem opera em Portugal",
    blocks: [
     "O mercado português é pequeno mas muito ativo. É servido por dois tipos de operador: **plataformas internacionais** — que gerem projetos para marcas globais em dezenas de países — e **agências locais**, mais pequenas, com contratos diretos com cadeias nacionais.",
     "As internacionais têm mais volume, portais melhores e pagamentos mais previsíveis; costumam pedir formulários longos. As locais pagam por vezes mais e são mais flexíveis, mas publicam menos missões e comunicam muito por e-mail.",
     "Não existe exclusividade. **Estar registado em várias plataformas é a prática normal** e é o que separa quem faz uma missão por mês de quem faz oito. As missões aparecem em vagas: quando uma marca lança um projeto, saem 200 visitas de uma vez e esgotam em dias.",
     "Aviso de bom senso: plataforma séria **nunca** pede dinheiro para te inscreveres, nem taxa de \"certificação\", nem que pagues formação para desbloquear missões. Se pedir, não é uma plataforma — é um esquema.",
    ],
   },
   {
    title: "Página 2 — Setores, ritmos e valores",
    blocks: [
     "**Retalho e moda (10–40 €).** Alto volume, visitas curtas de 20 a 45 minutos. Muitas vezes com compra obrigatória reembolsada. É por aqui que quase toda a gente começa.",
     "**Restauração e cafetaria (20–60 €).** Refeição reembolsada até um limite. Exige atenção a tempos, temperatura, empratamento e higiene — e um estômago disponível.",
     "**Banca, seguros e telecom (15–50 €).** Simulas a abertura de conta, o pedido de crédito ou a mudança de tarifário. Formulários longos e muito centrados em conformidade legal. Paga bem quem escreve bem.",
     "**Farmácia e saúde (10–30 €).** Visitas rápidas, guiões apertados. **Automóvel (20–70 €).** Test drive, orçamento e follow-up, muitas vezes multi-fase. **Hotelaria (80–150 €).** Estadia paga, checklists de 60 itens e um relatório que demora horas — é a liga dos experientes, e vale a pena chegar lá.",
    ],
   },
   {
    title: "Página 3 — A conta que decide tudo",
    blocks: [
     "Aqui está o erro número um de quem começa: olhar só para o valor anunciado. Uma missão não vale o que paga; vale o que **sobra** depois dos custos e do tempo.",
     "Separa sempre duas coisas. O **honorário** é o pagamento do teu trabalho — é isso que ganhas. O **reembolso** é a devolução de uma despesa obrigatória (o café, a camisa, o almoço) e não é lucro: é dinheiro que saiu e voltou. \"Missão de 45 €\" com 30 € de reembolso são, na verdade, 15 € de honorário.",
     "A fórmula que vais usar para o resto da carreira: **(honorário − custos não reembolsados) ÷ (tempo de deslocação + tempo de visita + tempo de relatório)**. Se der menos do que aquilo que consideras aceitável por hora, recusa sem drama. Recusar é gestão, não é falta de profissionalismo.",
     "Exemplo real: missão de 25 €, 40 minutos de carro (ida e volta), 30 minutos de visita, 40 minutos de relatório. São quase duas horas e uns 6 € de combustível: rende cerca de 10 €/hora. Agora agrupa três missões na mesma zona no mesmo dia e o valor por hora quase duplica — o segredo nunca foi a missão, foi a **rota**.",
    ],
   },
   {
    title: "Página 4 — Do primeiro registo à escolha estratégica",
    blocks: [
     "Este mercado não tem uma única porta de entrada. Se nunca fizeste nada parecido, o objetivo do primeiro mês é simples: fechar o ciclo completo em missões pequenas — candidatar, executar, documentar, submeter, ser aprovado. Não persigas o honorário mais alto; persegue a primeira aprovação limpa.",
     "Se já vens de uma área próxima — atendimento ao público, receção de hotel, auditoria de qualidade, gestão de loja — já trazes o olho treinado para reparar no que a maioria demora meses a notar. Isso encurta a curva de **observação**. Não encurta, porém, a curva de **confiança**: nenhuma plataforma te dá uma missão de 150 € na primeira semana só porque o teu currículo é bom. A reputação constrói-se sempre com missões concluídas, não com experiência importada de outro lado.",
     "A vantagem de quem já tem experiência é outra: sabe mais depressa em que setor quer especializar-se. Se já trabalhaste em concessionários, o automóvel é o teu atalho natural; se já trabalhaste em hotelaria, é aí que vais render mais rápido. Usa essa vantagem para escolher setor cedo — não para saltar etapas de confiança.",
     "Seja qual for o ponto de partida, a fórmula para subir de nível é a mesma: perfil completo, resposta rápida a convites, prazos sempre cumpridos. Isso é o que as plataformas medem — e é sobre isso que voltamos a falar em detalhe no Módulo 10.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — A missão que parecia boa",
    scenario:
     "Uma plataforma anuncia \"missão de restauração — 50 €\". Inclui refeição reembolsada até 30 €, 35 minutos de carro (ida e volta) e um formulário que demora cerca de 45 minutos a preencher.",
    correctApproach:
     "\"Honorário real: 20 €. Tempo total: ~1h50 (deslocação + visita de 40 min + relatório). Valor líquido ≈ 11 €/hora — abaixo do meu mínimo. Só aceito se conseguir agrupar com outra missão na mesma zona.\"",
    incorrectApproach:
     "\"A missão paga 50 €, aceito já.\" — confunde honorário com valor total anunciado e ignora o tempo real gasto.",
   },
   {
    title: "Exemplo 2 — Escolher a plataforma certa",
    scenario:
     "Uma \"plataforma\" nova pede 15 € de \"taxa de certificação\" antes de liberar o acesso às missões disponíveis na tua zona.",
    correctApproach:
     "\"Nenhuma plataforma séria cobra para dar acesso a missões. Não me registo e reporto o anúncio, se possível.\"",
    incorrectApproach:
     "\"Pago os 15 €, deve valer a pena para começar mais depressa.\" — é precisamente o sinal de alerta descrito nesta página.",
   },
  ],
  quiz: [
   {
    id: "m2q1",
    question: "Qual é a prática normal em relação ao registo em plataformas?",
    options: [
     "Escolher só uma, por exclusividade",
     "Registar-se em várias, porque as missões surgem por vagas",
     "Registar-se apenas em agências locais",
     "Esperar por convite antes de se registar",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q2",
    question: "Qual é a diferença entre honorário e reembolso?",
    options: [
     "São sinónimos usados por plataformas diferentes",
     "O honorário paga o teu trabalho; o reembolso devolve uma despesa obrigatória",
     "O reembolso é sempre superior ao honorário",
     "O honorário só existe em missões presenciais",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q3",
    question: "Como se avalia corretamente se uma missão compensa?",
    options: [
     "Pelo valor anunciado na plataforma",
     "Pelo valor líquido a dividir pelo tempo total, incluindo deslocação e relatório",
     "Pelo prestígio da marca avaliada",
     "Pelo número de perguntas do formulário",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q4",
    question: "Que sinal indica claramente que uma \"plataforma\" não é de confiança?",
    options: [
     "Pedir documento de identificação para validar o pagamento",
     "Pedir dinheiro para inscrição ou para desbloquear missões",
     "Ter formulários longos",
     "Pagar 30 dias após a validação",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q5",
    question: "Qual é a forma mais eficaz de aumentar o valor por hora?",
    options: [
     "Aceitar apenas missões de hotelaria",
     "Agrupar várias missões da mesma zona no mesmo dia",
     "Escrever relatórios mais longos",
     "Candidatar-se a todas as missões disponíveis",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q6",
    question: "Quem já tem experiência numa área próxima (hotelaria, atendimento, auditoria) pode saltar a fase de construir reputação nas plataformas?",
    options: [
     "Sim, a experiência substitui sempre as primeiras missões",
     "Não — a experiência ajuda a observar melhor e a escolher setor mais depressa, mas a reputação constrói-se sempre com missões concluídas",
     "Sim, desde que apresente o currículo à agência",
     "Não, a experiência prévia não tem qualquer utilidade neste mercado",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 3
    ========================================================== */
 {
  id: 3,
  title: "Perfil, conduta e ética",
  description:
   "Discrição, imparcialidade e confidencialidade: as três regras que te mantêm no jogo (e as linhas que nunca se passam).",
  keywords: ["Discrição", "Imparcialidade", "Confidencialidade", "Conflito de interesses", "RGPD"],
  practicalTip:
   "Ensaia uma resposta curta para o \"anda a fazer um estudo?\": \"Não, estou só a ver, obrigado.\" Dita com naturalidade, encerra o assunto.",
  warning:
   "Nunca avalies uma loja onde trabalhas, trabalhaste ou tens família. Conflito de interesses anula a missão e queima a tua conta.",
  benefit:
   "Reputação é o teu ativo. Avaliadores discretos e fiáveis recebem convites diretos para as missões que pagam melhor.",
  content: [
   "O bom avaliador é invisível: comporta-se como cliente comum, sem chamar atenção nem interferir no atendimento.",
   "Imparcialidade significa avaliar o desempenho face ao padrão, não a simpatia da pessoa.",
   "Confidencialidade cobre a marca, o guião, o formulário e a própria existência do projeto.",
   "Conflitos de interesse, fraude e dados pessoais mal tratados são as três formas mais rápidas de acabar a carreira.",
  ],
  pages: [
   {
    title: "Página 1 — A arte de ser invisível",
    blocks: [
     "O melhor elogio que podes receber é nenhum. Se ninguém reparou em ti, fizeste o trabalho perfeito. O avaliador é um cliente comum: entra, olha, pergunta o que qualquer pessoa perguntaria, paga e sai.",
     "O que denuncia amadores: bloco de notas à vista, telemóvel apontado ao colaborador, perguntas demasiado técnicas, olhar fixo no relógio, ficar 40 minutos numa loja onde ninguém fica mais de 10. E o clássico dos clássicos — perguntar o nome do colaborador de forma óbvia, quando bastava ler o crachá ou o talão.",
     "Adapta-te ao contexto. Numa loja de bricolage podes andar cinco minutos entre corredores sem levantar suspeitas; numa joalharia, não. Numa cafetaria, sentares-te à janela e demorares é natural; num banco, não é.",
     "Se alguém perguntar diretamente, não mintas com histórias elaboradas — as histórias complicadas caem sozinhas. Uma frase curta e simpática resolve: *\"Não, estou só a ver, obrigado.\"* E segues a tua vida.",
    ],
   },
   {
    title: "Página 2 — As três regras de ouro",
    blocks: [
     "**1. Discrição.** Não reveles que estás a avaliar, nem durante, nem depois. Nem à empregada de mesa simpática, nem ao amigo que trabalha lá, nem nas redes sociais. Já houve projetos inteiros cancelados por uma publicação com a legenda \"hoje fui cliente mistério 😎\".",
     "**2. Imparcialidade.** Avalias o desempenho contra o padrão definido, não a pessoa. O colaborador pode ser encantador e mesmo assim não cumprir seis itens do guião. Pode ser seco e cumprir tudo. O teu trabalho é registar o que aconteceu, não distribuir simpatias.",
     "**3. Confidencialidade.** O briefing, o formulário, o nome do cliente final e até a existência do projeto são informação reservada. Assinas isso quando aceitas a missão — e sim, tem valor legal.",
     "Estas três regras não são burocracia. São o que faz com que a marca continue a pagar por este serviço. Se os colaboradores souberem quando são avaliados, o dado deixa de valer alguma coisa — e o mercado inteiro deixa de existir.",
    ],
   },
   {
    title: "Página 3 — Linhas vermelhas",
    blocks: [
     "**Conflito de interesses.** Não avalies onde trabalhas, trabalhaste, tens família ou amigos próximos. Não é excesso de zelo: é o mínimo. As plataformas cruzam moradas e histórico e, quando descobrem, encerram a conta.",
     "**Fraude.** Inventar uma visita, reutilizar um talão antigo, copiar um relatório anterior ou pedir a outra pessoa que faça a missão por ti são motivos de exclusão imediata e, dependendo do caso, de responsabilidade civil. Vale sempre menos do que a missão que estavas a tentar salvar.",
     "**Dados pessoais.** Podes registar o nome próprio que consta do crachá e a descrição funcional (\"colaborador do balcão, cerca de 30 anos, camisa azul\"). Não recolhas dados de saúde, opiniões políticas, morada ou fotografias de rosto sem base para isso. O RGPD aplica-se a ti tal como a qualquer profissional.",
     "**Provocação.** Não crias cenários artificiais para \"apanhar\" alguém: não peças descontos ilegais, não simules conflitos, não insistas depois de um não. Avalias o serviço normal — não uma armadilha montada por ti.",
    ],
   },
   {
    title: "Página 4 — Calibrar a discrição consoante o contexto",
    blocks: [
     "Numa loja ou num café, aplicar as três regras de ouro é quase automático: entras, observas, sais, ninguém repara em ti. É por aí que todos começam, e é suficiente para 80% das missões do mercado.",
     "Em missões mais longas — uma estadia de hotel de duas noites, um test-drive com follow-up, um processo de crédito com três contactos — o risco de exposição multiplica-se. Já não basta manter o cenário coerente durante 10 minutos; tens de o manter durante horas ou dias, perante várias pessoas que podem comparar notas entre si. Escreve o teu cenário antes de partires, exatamente como farias com um guião de teatro: quem és, porque estás ali, o que dizes se alguém repetir a pergunta no dia seguinte.",
     "Há também um dilema que só aparece com a experiência: numa estadia longa, é fácil desenvolver simpatia genuína por um rececionista simpático que te ajudou várias vezes. É precisamente aí que a imparcialidade custa mais a manter — porque já não é uma pessoa desconhecida durante cinco minutos, é alguém com quem interagiste o fim de semana todo. A regra não muda: avalias o cumprimento dos critérios, não a relação que se criou.",
     "Fica a ideia central deste módulo, para levares para todos os que se seguem: mais experiência não te dá licença para relaxar as três regras — dá-te apenas mais contextos onde as tens de aplicar com mais subtileza.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo — Colaborador simpático, guião não cumprido",
    scenario:
     "O colaborador foi extremamente simpático, conversou contigo cinco minutos, mas não apresentou a promoção ativa nem ofereceu o cartão de cliente.",
    correctApproach:
     "\"Atendimento cordial e disponível. NÃO apresentou a promoção em vigor (item 4) nem ofereceu o cartão de cliente (item 9).\" — separa a atitude do cumprimento.",
    incorrectApproach:
     "\"Foi tão simpático que dou tudo positivo.\" — a simpatia não substitui os itens do guião e distorce o dado da marca.",
   },
  ],
  quiz: [
   {
    id: "m3q1",
    question: "Qual é o comportamento correto se um colaborador te perguntar se estás a fazer um estudo?",
    options: [
     "Confirmar, para manter a honestidade",
     "Negar de forma simples e natural, sem inventar histórias elaboradas",
     "Sair imediatamente da loja",
     "Mostrar o briefing da missão",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q2",
    question: "O que significa imparcialidade numa avaliação?",
    options: [
     "Avaliar sempre pela positiva para não prejudicar ninguém",
     "Avaliar o desempenho face ao padrão definido, independentemente da simpatia demonstrada",
     "Avaliar apenas os itens que correram bem",
     "Dar a mesma nota a todas as lojas da mesma marca",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q3",
    question: "Podes avaliar uma loja onde trabalhou um familiar próximo?",
    options: [
     "Sim, desde que ele não esteja de serviço nesse dia",
     "Não — é conflito de interesses e invalida a missão",
     "Sim, se declarares depois no relatório",
     "Sim, se a plataforma for internacional",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q4",
    question: "Que tipo de informação sobre o colaborador é adequado registar?",
    options: [
     "Nome do crachá e descrição funcional observável",
     "Morada e número de telefone",
     "Estado de saúde e situação familiar",
     "Fotografia do rosto em grande plano",
    ],
    correctIndex: 0,
   },
   {
    id: "m3q5",
    question: "Porque é que a confidencialidade sustenta todo o mercado?",
    options: [
     "Porque reduz os custos das agências",
     "Porque se as equipas souberem quando são avaliadas, o dado deixa de ser real",
     "Porque as marcas exigem sigilo por moda",
     "Porque evita que outros avaliadores concorram",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q6",
    question: "Numa missão longa, como uma estadia de hotel de duas noites, o que muda em relação às três regras de ouro?",
    options: [
     "As regras deixam de se aplicar, porque já não é uma visita rápida",
     "As regras mantêm-se, mas exigem mais cuidado a manter o cenário coerente ao longo do tempo",
     "Só a confidencialidade continua a ser obrigatória",
     "A simpatia genuína criada com a equipa passa a justificar avaliações mais brandas",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 4
    ========================================================== */
 {
  id: 4,
  title: "Avaliar sem opinar",
  description:
   "Transformar o que viste em dados objetivos: factos, tempos e critérios em vez de \"gostei\" e \"foi simpático\".",
  keywords: ["Facto vs. opinião", "Cronometragem", "Critérios", "Escalas", "Enviesamento"],
  practicalTip:
   "Antes de escreveres uma frase, pergunta: \"uma câmara de vídeo teria captado isto?\". Se a resposta for não, é opinião.",
  warning:
   "Nunca respondas \"sim\" a um item que não observaste diretamente. Se não viste, não aconteceu para efeitos de relatório.",
  benefit:
   "É esta competência que separa o relatório aprovado do devolvido. Domina-a e passas a estar no grupo dos avaliadores requisitados.",
  content: [
   "Facto é o que uma câmara captaria; opinião é a tua interpretação. O relatório vive de factos.",
   "Mede tempos concretos: entrada, abordagem, entrega, pagamento, saída.",
   "As escalas têm de ser lidas antes da visita: sem critério definido, a nota é aleatória.",
   "Cuidado com enviesamentos: efeito de halo, primeira impressão e memória seletiva.",
  ],
  pages: [
   {
    title: "Página 1 — Facto, opinião e o teste da câmara",
    blocks: [
     "\"O atendimento foi mau.\" Isto não é uma avaliação; é um estado de espírito. **\"Entrei às 10h02, permaneci 7 minutos junto à secção sem ser abordado, apesar de estarem dois colaboradores disponíveis a conversar entre si.\"** Isto é uma avaliação.",
     "Usa o **teste da câmara**: se uma câmara de vídeo tivesse captado a cena, aquilo que escreveste apareceria na gravação? Tempos, gestos, frases e objetos aparecem. \"Desinteresse\", \"má vontade\" e \"pouca profissionalidade\" não aparecem — são interpretações tuas.",
     "Isto não significa escrever de forma fria e desumana. Significa dar sempre a base: em vez de \"pareceu desinteressado\", escreve *\"manteve-se de costas viradas para o cliente durante a explicação e não estabeleceu contacto visual\"*. O leitor tira a conclusão sozinho — e essa conclusão passa a ser defensável.",
     "Há uma exceção controlada: alguns formulários pedem expressamente a tua **perceção global** (\"como se sentiu enquanto cliente?\"). Aí a opinião é o dado pedido. Fora desses campos, factos.",
    ],
   },
   {
    title: "Página 2 — Medir: tempos, sequências e quantidades",
    blocks: [
     "Números são a tua melhor arma porque não se discutem. Os tempos que quase todas as missões pedem: **hora de entrada**, tempo até seres abordado, tempo de espera na fila, tempo entre pedido e entrega, duração do atendimento e hora de saída.",
     "Cronometra de forma discreta. O relógio do telemóvel ao entrar, um olhar rápido ao ecrã do multibanco, a hora impressa no talão. Não precisas de cronómetro na mão — precisas de duas ou três marcas temporais fiáveis, que depois arredondas com honestidade.",
     "Regista também **quantidades e sequências**: quantos colaboradores estavam em sala, quantos clientes esperavam, qual a ordem dos acontecimentos. \"Havia 12 clientes e 2 caixas abertas de 5\" diz mais sobre a operação do que qualquer adjetivo.",
     "E não inventes precisão que não tens. Se não cronometraste ao segundo, escreve \"cerca de 4 minutos\". Um valor honestamente aproximado vale mais do que um \"3 min 47 s\" que não consegues sustentar.",
    ],
   },
   {
    title: "Página 3 — Ler a escala antes de a usar",
    blocks: [
     "Os formulários usam sobretudo três tipos de resposta. **Binária** (sim/não/não aplicável): a mais comum e a menos ambígua. **Escala** (1 a 5 ou 1 a 10): sempre acompanhada de descritores. **Texto livre**: onde justificas, sobretudo quando respondes pela negativa.",
     "A regra crítica: **lê os descritores da escala antes da visita**. Num projeto, 3 pode significar \"cumpriu o mínimo\"; noutro, \"abaixo do esperado\". Dar 3 achando que é neutro, quando a marca o lê como falha grave, é uma das formas mais comuns de estragar um relatório sem se dar por isso.",
     "Cuidado com o **\"não aplicável\"**. Só se usa quando o item não podia mesmo ocorrer (avaliar a montra de uma loja online, por exemplo). Se o item podia ter acontecido e não aconteceu, a resposta é **não** — e é isso que a marca precisa de saber.",
     "Sempre que respondes negativamente, justifica com facto, hora e, se possível, identificação funcional de quem atendeu. Um \"não\" sem justificação é um convite para o relatório voltar para trás.",
    ],
   },
   {
    title: "Página 4 — Os enviesamentos que te tramam",
    blocks: [
     "**Efeito de halo.** O colaborador foi simpático logo à entrada, e a partir daí tudo te pareceu bem. Antídoto: responde item a item, na ordem do formulário, sem \"nota geral\" mental a contaminar o resto.",
     "**Primeira impressão.** Uma montra desarrumada põe-te de pé atrás e passas o resto da visita à procura de defeitos. Antídoto: escreve o que observaste em cada momento antes de tirares conclusões.",
     "**Memória seletiva.** Passadas duas horas, lembras-te do que te irritou e esqueces o resto. Antídoto: notas mínimas nos 10 minutos seguintes à saída — três números e cinco palavras-chave chegam.",
     "**Comparação indevida.** Estás a comparar esta loja com a que visitaste ontem, e não com o padrão do briefing. Antídoto: o guião é a única régua. Cada visita é avaliada por si.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Reescrever opinião em facto",
    scenario: "A tua primeira frase foi: \"o funcionário estava claramente aborrecido e sem paciência\".",
    correctApproach:
     "\"Respondeu em monossílabos, não estabeleceu contacto visual e continuou a arrumar prateleiras durante a interação (14h12).\"",
    incorrectApproach:
     "Manter \"estava aborrecido e sem paciência\" — é interpretação de estado de espírito, não observação.",
   },
   {
    title: "Exemplo 2 — Cronologia completa",
    scenario: "Avaliação de uma padaria às 09h15, com fila, dois colaboradores e produto acabado de sair.",
    correctApproach:
     "\"09h15 entrada; ~12 clientes, 2 caixas abertas. Espera de 4 min. Cumprimento: sim. Pão quente à venda. Vitrina limpa; vidro exterior com marcas visíveis.\"",
    incorrectApproach: "\"Estava tudo bem, atendimento rápido e produtos frescos.\" — sem métricas, não é utilizável.",
   },
  ],
  quiz: [
   {
    id: "m4q1",
    question: "Qual das frases seguintes é um facto utilizável num relatório?",
    options: [
     "O colaborador foi pouco profissional",
     "Aguardei 7 minutos junto à secção sem ser abordado, com dois colaboradores disponíveis",
     "O ambiente da loja era desagradável",
     "Notou-se falta de formação da equipa",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q2",
    question: "O que é o \"teste da câmara\"?",
    options: [
     "Filmar a visita para prova",
     "Verificar se o que escreveste teria sido captado por uma câmara — se não, é opinião",
     "Confirmar se a loja tem videovigilância",
     "Fotografar todos os itens do formulário",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q3",
    question: "Quando se deve usar a resposta \"não aplicável\"?",
    options: [
     "Sempre que houver dúvida",
     "Apenas quando o item não podia ocorrer no contexto da visita",
     "Quando o colaborador não cumpriu o item",
     "Quando não te lembras do que aconteceu",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q4",
    question: "Porque é preciso ler os descritores da escala antes da visita?",
    options: [
     "Para poupar tempo no preenchimento",
     "Porque o mesmo número tem significados diferentes conforme o projeto",
     "Porque as escalas mudam durante a visita",
     "Porque a agência exige leitura em voz alta",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q5",
    question: "Qual é o antídoto para o efeito de halo?",
    options: [
     "Dar sempre nota média",
     "Responder item a item na ordem do formulário, sem nota geral prévia",
     "Avaliar apenas no fim do dia",
     "Comparar com a loja visitada anteriormente",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 5
    ========================================================== */
 {
  id: 5,
  title: "Preparar a missão",
  description:
   "Ler o briefing como um profissional, montar o teu cenário e memorizar o essencial sem apontamentos à vista.",
  keywords: ["Briefing", "Cenário", "Memorização", "Checklist", "Janela horária"],
  practicalTip:
   "Reduz o briefing a um cartão mental de 5 pontos. Se não cabe em 5 pontos, ainda não o percebeste bem.",
  warning:
   "Confirma sempre a janela horária e o dia exigidos. Visita fora da janela é missão perdida, por muito bem executada que tenha sido.",
  benefit:
   "Vinte minutos de preparação evitam a maior fonte de relatórios rejeitados: chegar lá e perceber que faltou fazer alguma coisa.",
  content: [
   "O briefing define objetivo, cenário, janela horária, compra obrigatória, evidências e prazo.",
   "O cenário é a desculpa credível para estares ali — tem de encaixar no teu perfil real.",
   "Memorizar em blocos de 3 é mais eficaz do que decorar 30 perguntas.",
   "Checklist antes de sair de casa: bateria, meio de pagamento, documentos e formulário lido.",
  ],
  pages: [
   {
    title: "Página 1 — Ler o briefing como um profissional",
    blocks: [
     "O briefing é o contrato da missão. Quem o lê na diagonal paga com relatórios rejeitados. Lê-o duas vezes: uma para perceber, outra com lápis na mão.",
     "Procura sempre estes seis pontos: **objetivo** (o que a marca quer medir), **cenário** (que cliente deves ser), **janela horária e dia**, **compra obrigatória e limite de reembolso**, **evidências exigidas** (talão, fotos, nome do colaborador) e **prazo de submissão**.",
     "Depois lê o **formulário inteiro antes de sair de casa**. Parece óbvio, mas é o passo que mais gente salta. É lá que descobres que tens de registar o número da caixa, a hora de abertura da porta ou se havia produto X em exposição. Descobrir isso ao preencher o relatório em casa, três horas depois, é tarde de mais.",
     "Se algo estiver ambíguo, pergunta à agência **antes** da visita. As agências preferem mil vezes responder a um e-mail do que rejeitar um relatório — e ficam com a ideia de que és metódico, o que ajuda nos convites seguintes.",
    ],
   },
   {
    title: "Página 2 — O teu cenário",
    blocks: [
     "O **cenário** é a razão credível para estares ali. Nas missões mais simples é livre; nas mais exigentes é definido ao pormenor: \"casal a procurar máquina de lavar até 600 €, com entrega para a semana seguinte\".",
     "Regra prática: constrói o cenário o mais próximo possível da tua vida real. Se percebes de bicicletas, sê o cliente que procura uma bicicleta. Mentiras confortáveis são fáceis de sustentar; personagens fantasiadas caem ao terceiro \"e para que é que precisa disso?\".",
     "Prepara **duas ou três perguntas naturais** que testem o que a marca quer medir. Se o objetivo é o conhecimento de produto, chega uma pergunta comparativa simples: *\"qual é a diferença entre este e aquele?\"*. Se o objetivo é a venda complementar, basta demonstrares interesse e esperar.",
     "E prepara a saída. Um \"vou pensar e depois volto\" é a frase mais natural do mundo e fecha qualquer visita sem estranheza. Sair a correr, não.",
    ],
   },
   {
    title: "Página 3 — Memorizar sem apontamentos",
    blocks: [
     "Ninguém decora 40 perguntas. E não precisas. Precisas de decorar a **estrutura** — o resto vem por associação enquanto vais observando.",
     "Usa o método **3×3**: três momentos (entrada, interação, saída) com três coisas a observar em cada. Entrada: hora, limpeza, se fui cumprimentado. Interação: tempo de espera, perguntas feitas, oferta complementar. Saída: rapidez do pagamento, despedida, talão. Nove pontos que se decoram em dois minutos.",
     "Durante a visita, **memoriza em números**. Números fixam-se muito melhor do que impressões: 3 colaboradores, 2 caixas, 4 minutos, 9h15. Se precisares mesmo de escrever, usa a app de notas do telemóvel como quem responde a uma mensagem — é o gesto mais banal do mundo.",
     "E o passo que faz toda a diferença: **assim que saíres, para**. Café ao lado, carro, banco de jardim — e despeja tudo em notas nos primeiros 10 minutos. A memória detalhada dura minutos, não horas.",
    ],
   },
   {
    title: "Página 4 — Checklist antes de sair de casa",
    blocks: [
     "**Li o briefing e o formulário completos.** Sei o objetivo, o cenário, a janela horária e as evidências exigidas.",
     "**Tenho meio de pagamento adequado.** Muitas missões exigem talão detalhado; algumas exigem pagamento com cartão para haver rasto. Confirma antes.",
     "**Telemóvel carregado e com espaço.** Ficar sem bateria a meio de uma missão com fotos obrigatórias é uma forma cara de aprender esta lição.",
     "**Sei o meu cenário e as minhas perguntas.** Duas ou três, no máximo. E sei como saio.",
     "**Confirmei a morada exata e o horário de funcionamento.** Cadeias grandes têm lojas a 300 metros uma da outra: avaliar a errada acontece mais vezes do que imaginas.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Briefing lido na diagonal",
    scenario:
     "O briefing pede explicitamente o número da caixa registadora e a hora de abertura da loja. Só percebes isso ao preencher o formulário, já em casa, três horas depois da visita.",
    correctApproach:
     "\"Leio o briefing e o formulário completo antes de sair de casa, com lápis na mão, e só depois preparo o cenário — assim nenhum campo me apanha de surpresa.\"",
    incorrectApproach:
     "\"Li o briefing por alto, achei que percebia o essencial.\" — resultado: relatório incompleto e missão em risco de ser devolvida.",
   },
   {
    title: "Exemplo 2 — Cenário pouco credível",
    scenario:
     "A missão pede que avalies uma loja de material de escritório. Inventas um cenário elaborado de \"gerente de uma empresa de eventos que vai abrir filial em três países\".",
    correctApproach:
     "\"Uso um cenário próximo da minha realidade: preciso de material para um pequeno escritório em casa. Fácil de sustentar em qualquer pergunta de seguimento.\"",
    incorrectApproach:
     "Manter a personagem elaborada — cai ao primeiro \"e para que é que precisa disso?\" e chama a atenção do colaborador.",
   },
  ],
  quiz: [
   {
    id: "m5q1",
    question: "O que deve ser lido na íntegra antes de sair de casa?",
    options: [
     "Apenas o objetivo da missão",
     "O briefing e também o formulário completo",
     "Somente as regras de reembolso",
     "As avaliações de outros avaliadores",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q2",
    question: "Qual é a melhor abordagem para construir o cenário?",
    options: [
     "Inventar uma personagem detalhada e diferente de ti",
     "Aproximá-lo o máximo possível da tua realidade, para ser fácil de sustentar",
     "Não preparar nada e improvisar",
     "Usar sempre o mesmo cenário em todos os setores",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q3",
    question: "Em que consiste o método 3×3 de memorização?",
    options: [
     "Repetir o briefing três vezes em três dias",
     "Três momentos da visita com três pontos de observação em cada",
     "Fazer três visitas em três lojas",
     "Três fotografias em três ângulos",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q4",
    question: "Quando se devem registar as notas detalhadas da visita?",
    options: [
     "No próprio dia, à noite",
     "Nos primeiros minutos após sair do local",
     "Durante a interação com o colaborador",
     "Só quando a agência pedir esclarecimentos",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q5",
    question: "O que acontece se a visita for feita fora da janela horária exigida?",
    options: [
     "Nada, desde que o relatório esteja completo",
     "A missão pode ser invalidada, mesmo com boa execução",
     "O pagamento é reduzido para metade",
     "A agência agenda automaticamente nova data",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 6
    ========================================================== */
 {
  id: 6,
  title: "Execução no terreno",
  description:
   "Entrar, observar, cronometrar e sair sem ser apanhado — com o que muda em cada setor e o que fazer quando corre mal.",
  keywords: ["Observação", "Rotina de visita", "Setores", "Imprevistos", "Discrição"],
  practicalTip:
   "Marca a hora ao entrar e ao sair. Só com estas duas âncoras consegues reconstruir toda a cronologia depois.",
  warning:
   "Se fores identificado como avaliador, não continues como se nada fosse: regista o que aconteceu e comunica à agência.",
  benefit:
   "Uma rotina de visita sempre igual liberta a tua cabeça para observar em vez de tentar lembrar-se do que vinha a seguir.",
  content: [
   "Os primeiros 30 segundos concentram grande parte dos itens avaliados: exterior, entrada, acolhimento.",
   "Observar em movimento: percorrer o espaço com naturalidade e usar espelhos, filas e montras como pontos de paragem.",
   "Cada setor tem particularidades — restauração, retalho, banca, farmácia, automóvel e hotelaria.",
   "Imprevistos acontecem; o que conta é registá-los com honestidade e avisar a agência.",
  ],
  pages: [
   {
    title: "Página 1 — Os primeiros 30 segundos",
    blocks: [
     "Boa parte dos itens de um formulário decide-se antes de falares com alguém. Antes de entrar: **estado da fachada, montra, vitrina, sinalética, horário afixado, promoções visíveis**. Dois segundos de pausa a olhar para a montra são o gesto mais natural do mundo.",
     "Ao entrar, marca a hora — e depois olha. **Limpeza do chão, cheiro, temperatura, música, iluminação, arrumação, filas, número de colaboradores em sala e quantos estão ocupados.** Isto é o retrato da operação e explica quase tudo o que acontece a seguir.",
     "E fica atento ao **acolhimento**: houve contacto visual? Houve saudação? Em quanto tempo? Muitos guiões definem 30 segundos para o contacto visual e 60 para a abordagem verbal. É por isso que a hora de entrada é a informação mais valiosa que registas no dia todo.",
     "Se a missão exigir fotografias do exterior, tira-as **antes de entrar**, do outro lado da rua, como quem fotografa a montra. Depois de saíres, com um colaborador a ver-te, já é outro filme.",
    ],
   },
   {
    title: "Página 2 — Observar em movimento",
    blocks: [
     "Andar devagar e olhar em volta é o comportamento normal de qualquer cliente. O que não é normal é ficar parado no mesmo sítio a olhar fixamente para o balcão durante três minutos.",
     "Usa **pontos de paragem naturais**: uma prateleira, um expositor, a fila da caixa, a montra interior. A partir desses pontos vês grande parte do que precisas sem parecer que estás a vigiar. Espelhos e vidros ajudam a observar interações que não estão à tua frente.",
     "**Ouve.** Grande parte da informação chega pelos ouvidos: como o colaborador atende o cliente anterior, se cumprimenta, se sugere produtos, como resolve uma reclamação. Estás a fazer fila, tens todo o direito de ouvir o que se passa à tua frente.",
     "Controla o tempo total de permanência. Numa loja de conveniência, 8 minutos são muitos; numa loja de mobiliário, 25 são poucos. Ajusta ao contexto e, se precisares de mais tempo, sai e volta a entrar mais tarde — desde que o briefing o permita.",
    ],
   },
   {
    title: "Página 3 — O que muda em cada setor",
    blocks: [
     "**Restauração.** Tempos são reis: espera pela mesa, tempo até ao pedido, tempo até à entrada e ao prato principal, tempo até à conta. Regista temperatura, empratamento, farda, higiene das mesas e das casas de banho. Guarda o talão detalhado — quase sempre é a prova principal.",
     "**Retalho e moda.** Foco no processo de venda: abordagem, diagnóstico da necessidade, conhecimento do produto, sugestão de complementos, encaminhamento para a caixa, oferta do cartão e despedida. Repara também em exposição, tamanhos disponíveis, etiquetagem e provadores.",
     "**Banca, seguros e telecom.** Conformidade acima de tudo: identificação do colaborador, explicação de custos e comissões, entrega de documentação, confidencialidade no balcão. Prepara-te para formulários longos e para uma visita de 20 a 40 minutos.",
     "**Farmácia, automóvel e hotelaria.** Na farmácia, o aconselhamento e as perguntas de segurança. No automóvel, o test drive, o orçamento entregue e sobretudo o **follow-up** (a chamada que devia ter chegado e muitas vezes não chega). Na hotelaria, uma checklist longa de check-in, quarto, restauração e check-out — vale muito, mas exige método.",
    ],
   },
   {
    title: "Página 4 — Quando corre mal",
    blocks: [
     "**Loja fechada, em obras ou sem o produto.** Fotografa o que justifica (porta, aviso, horário), regista a hora e comunica à agência no mesmo dia. Quase sempre há reagendamento ou compensação parcial. O que não pode acontecer é inventares a visita.",
     "**Foste identificado.** Acontece a toda a gente uma vez na vida. Não confirmes, não discutas, termina a visita com naturalidade e escreve no relatório o que sucedeu e em que momento. A agência decide se o dado ainda é utilizável — a decisão não é tua, mas a informação tem de ser dada.",
     "**Perdeste o talão.** Verifica se há duplicado no e-mail ou na app, ou se a loja emite segunda via. Se não houver mesmo, comunica antes de submeter. Submeter sem evidência obrigatória e esperar que passe é a receita para o relatório voltar.",
     "**Ficaste sem tempo.** Uma visita apressada gera um relatório fraco. Se a janela permitir, adia. Se não permitir, faz a visita e assinala com honestidade os itens que não conseguiste observar. Honestidade é reparável; invenção não.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo — Registo cronológico de restauração",
    scenario: "Almoço avaliado num restaurante de centro comercial, à hora de ponta.",
    correctApproach:
     "\"13h04 entrada, 6 pessoas em fila, 3 caixas abertas. 13h09 pedido. 13h16 entrega do tabuleiro (7 min). Batatas mornas; hambúrguer quente. Não foi sugerida bebida nem menu. 13h41 saída. Casa de banho: dispensador de sabão vazio.\"",
    incorrectApproach:
     "\"Demorou bastante e a comida não estava muito quente, mas o pessoal foi simpático.\" — sem tempos nem itens, não é utilizável.",
   },
  ],
  quiz: [
   {
    id: "m6q1",
    question: "Porque é tão importante registar a hora exata de entrada?",
    options: [
     "Para provar que a loja estava aberta",
     "Porque é a âncora que permite reconstruir toda a cronologia e medir tempos de acolhimento",
     "Porque a agência paga por hora",
     "Para comparar com outras lojas da marca",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q2",
    question: "Quando se devem tirar as fotografias ao exterior do estabelecimento?",
    options: [
     "Depois de sair, junto à porta",
     "Antes de entrar, à distância, como quem observa a montra",
     "Durante o atendimento",
     "Só se a agência pedir depois",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q3",
    question: "Que aspeto é central numa missão em banca ou telecomunicações?",
    options: [
     "A decoração do espaço",
     "A conformidade: identificação, explicação de custos, documentação e confidencialidade",
     "A rapidez do pagamento",
     "A temperatura do ambiente",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q4",
    question: "O que fazer se fores identificado como avaliador durante a visita?",
    options: [
     "Confirmar e pedir colaboração ao colaborador",
     "Terminar a visita com naturalidade e relatar o sucedido à agência",
     "Abandonar a missão sem qualquer registo",
     "Repetir a visita no dia seguinte sem avisar",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q5",
    question: "A loja está fechada por obras no dia da missão. Qual é o procedimento correto?",
    options: [
     "Avaliar a loja mais próxima da mesma marca",
     "Fotografar a evidência, registar a hora e comunicar à agência nesse dia",
     "Submeter o relatório com as respostas em branco",
     "Estimar as respostas com base numa visita anterior",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 7
    ========================================================== */
 {
  id: 7,
  title: "Provas à prova de dúvida",
  description:
   "Talões, fotografias, gravações e nomes: o que recolher, como guardar e até onde a lei te deixa ir.",
  keywords: ["Talão", "Fotografia", "Gravação", "Prazo de guarda", "RGPD"],
  practicalTip:
   "Fotografa o talão ainda dentro do carro. Talões térmicos desbotam e o teu relatório não espera pela boa vontade da tinta.",
  warning:
   "Gravar imagem ou som de pessoas identificáveis sem autorização não é permitido em Portugal. Só grava se a agência o exigir e explicar a base legal.",
  benefit:
   "Evidência sólida é o que faz um relatório passar sem perguntas — e o que te protege se alguém contestar a avaliação.",
  content: [
   "O talão é a prova rainha: comprova local, data, hora e valor.",
   "Fotografias devem focar espaços, produtos e sinalética, não rostos.",
   "Gravações só com instrução expressa e base legal da agência.",
   "Guarda as evidências durante o período pedido pela plataforma, normalmente 60 a 90 dias.",
  ],
  pages: [
   {
    title: "Página 1 — O que conta como prova",
    blocks: [
     "**O talão é a prova rainha.** Comprova que estiveste naquele local, naquele dia, àquela hora, e quanto gastaste. Muitas plataformas rejeitam automaticamente relatórios sem talão legível, por muito bom que seja o texto.",
     "Cuidado com os talões térmicos: desbotam com o calor e com a luz em poucos dias. **Fotografa-o mal saias**, ainda no carro ou à porta, com boa luz, sobre uma superfície lisa e sem sombras. Depois guarda o original numa pasta até o pagamento estar processado.",
     "Além do talão, contam como evidência: **fotografias** do espaço, montra e sinalética; **capturas de ecrã** de e-mails, SMS e formulários digitais; **registos de chamada** com data e duração; e o teu próprio **registo cronológico**, desde que coerente com o resto.",
     "Uma nota sobre o nome do colaborador: usa o crachá, o talão, a assinatura no orçamento ou o cartão de contacto. Não perguntes de forma direta e artificial — é uma das formas mais fáceis de te denunciares.",
    ],
   },
   {
    title: "Página 2 — Fotografar e gravar sem sarilhos",
    blocks: [
     "**Fotografa espaços, não pessoas.** Montras, expositores, sinalética, produto, estado de limpeza, casa de banho, fila vista de trás. Se aparecer alguém de forma acidental e não identificável, tudo bem; enquadrar o rosto de um colaborador, não.",
     "Fotografa com naturalidade: telemóvel à altura do peito, um gesto rápido, sem flash. Um cliente a fotografar uma promoção é banal. Um cliente a fotografar o balcão durante 20 segundos, não.",
     "**Gravações de áudio ou vídeo:** em Portugal, gravar pessoas identificáveis sem o seu conhecimento levanta problemas legais sérios. Só o faças se a agência o exigir expressamente, indicar a finalidade e assumir a base legal — e nunca por iniciativa própria \"para garantir\".",
     "Se a missão for telefónica, o que se regista é o essencial: hora da chamada, duração, número marcado, quem atendeu (nome dado), guião cumprido e informação prestada. Um print do registo de chamadas costuma bastar como prova.",
    ],
   },
   {
    title: "Página 3 — Organizar, nomear e guardar",
    blocks: [
     "Depois de três missões numa semana, todas as fotos de talões parecem iguais. Cria uma pasta por missão com um nome que se perceba daqui a dois meses: **`2026-03-14_MarcaX_Braga_M4172`**.",
     "Dentro dela, nomes claros: `talao.jpg`, `montra.jpg`, `sinaletica.jpg`, `notas.txt`. Parece exagero até ao dia em que a agência te pergunta, cinco semanas depois, se tens a foto da entrada daquela loja.",
     "**Prazo de guarda:** mantém tudo pelo menos até o pagamento estar liquidado e, idealmente, 60 a 90 dias. Algumas plataformas fazem auditorias posteriores e pedem a evidência original.",
     "Respeita os limites: as evidências são para a missão e mais nada. Não as publiques, não as partilhes, não as reutilizes noutra missão. Passado o prazo de guarda, apaga o que contém dados pessoais — é a atitude correta e é o que o RGPD espera de ti.",
    ],
   },
   {
    title: "Página 4 — Sistema de evidências para quem já faz várias missões por semana",
    blocks: [
     "Enquanto fazes uma ou duas missões por mês, uma pasta no telemóvel chega perfeitamente. O problema aparece quando o volume cresce: a partir de quatro ou cinco missões por semana, o método manual começa a falhar — talões trocados, fotos sem nome, uma agência a perguntar por uma evidência que já não sabes onde está.",
     "Nessa fase, vale a pena migrar para uma pasta na nuvem sincronizada automaticamente (Drive, iCloud ou equivalente), organizada sempre pela mesma convenção de nomes que já usas: data, marca, cidade, código da missão. O ganho não é só arrumação — é teres a evidência acessível mesmo se perderes o telemóvel a meio de uma semana cheia.",
     "Junta o registo de evidências a uma folha de acompanhamento simples, com uma linha por missão: data, marca, honorário, reembolso, prazo de submissão, estado (submetida, aprovada, paga). É a mesma lógica de controlo que vais aprofundar no Módulo 9 para a parte financeira — aqui serve para nunca perderes o rasto de uma prova.",
     "E mantém a disciplina de sempre: duas cópias de cada evidência importante (telemóvel + nuvem), respeito pelo prazo de guarda de cada plataforma, e uma limpeza periódica — trimestral, por exemplo — para apagar o que já passou do prazo e contém dados pessoais de terceiros.",
    ],
   },
  ],
  quiz: [
   {
    id: "m7q1",
    question: "Porque se deve fotografar o talão imediatamente após a visita?",
    options: [
     "Para provar que a compra foi feita com cartão",
     "Porque os talões térmicos desbotam rapidamente e podem ficar ilegíveis",
     "Porque a agência exige a foto em menos de 5 minutos",
     "Para poder devolver o produto",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q2",
    question: "O que deve ser evitado nas fotografias de uma missão?",
    options: [
     "Fotografar a montra",
     "Enquadrar rostos identificáveis de colaboradores",
     "Fotografar a sinalética de promoções",
     "Fotografar o estado de limpeza do espaço",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q3",
    question: "Em que condições se pode gravar áudio ou vídeo numa missão?",
    options: [
     "Sempre, para garantir a prova",
     "Apenas quando a agência o exige expressamente e assume a base legal",
     "Sempre que o colaborador não perceber",
     "Apenas em espaços públicos exteriores",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q4",
    question: "Qual é a forma correta de obter o nome do colaborador?",
    options: [
     "Perguntar diretamente no início do atendimento",
     "Ler o crachá, o talão, o orçamento ou o cartão de contacto",
     "Perguntar a outro cliente",
     "Consultar as redes sociais da loja",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q5",
    question: "Durante quanto tempo se devem guardar as evidências de uma missão?",
    options: [
     "Até submeter o relatório",
     "Pelo menos até ao pagamento e, idealmente, 60 a 90 dias",
     "Cinco anos, por obrigação fiscal",
     "Indefinidamente, para portefólio",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q6",
    question: "A partir de que ponto compensa migrar de uma pasta manual no telemóvel para um sistema mais organizado de evidências?",
    options: [
     "Nunca — a pasta manual chega sempre, independentemente do volume",
     "Quando o volume de missões sobe (por exemplo, quatro ou cinco por semana) e o método manual começa a falhar",
     "Apenas se a agência o exigir por escrito",
     "Só depois de a primeira evidência se perder",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 8
    ========================================================== */
 {
  id: 8,
  title: "O relatório aprovado à primeira",
  description:
   "Estrutura, tom e nível de detalhe — e os erros que fazem chumbar relatórios que davam missões perfeitas.",
  keywords: ["Estrutura", "Justificação", "Coerência", "Revisão", "Prazo"],
  practicalTip:
   "Escreve o relatório no mesmo dia. A qualidade do texto cai a pique passadas 24 horas — e a memória inventa o resto.",
  warning:
   "Incoerências entre horas, respostas e talão são o motivo número um de rejeição. Confere sempre antes de submeter.",
  benefit:
   "Relatórios limpos sobem a tua classificação na plataforma, e classificação alta é o que te dá acesso às missões que pagam mais.",
  content: [
   "O relatório tem três camadas: respostas fechadas, justificações e narrativa cronológica.",
   "Cada resposta negativa exige facto, hora e, se possível, identificação funcional.",
   "Escreve na terceira pessoa ou em registo neutro, sem adjetivos vagos nem ironia.",
   "Revisão final: coerência de horas, ortografia, evidências anexadas, prazo cumprido.",
  ],
  pages: [
   {
    title: "Página 1 — Anatomia de um bom relatório",
    blocks: [
     "Um relatório tem três camadas e todas contam. **As respostas fechadas** (sim/não/escala) alimentam as estatísticas da marca. **As justificações** explicam cada resposta negativa. **A narrativa** conta a visita por ordem cronológica e dá contexto ao resto.",
     "A narrativa segue sempre a ordem dos acontecimentos: chegada e exterior → entrada e acolhimento → interação e processo → pagamento → saída → observações finais. Sempre a mesma ordem, em todas as missões. A tua cabeça agradece e o revisor também.",
     "Nível de detalhe: **o suficiente para que quem não esteve lá consiga visualizar**, sem virar romance. Duas a quatro frases por momento chegam. Se um item correu mal, aí sim, detalha — é exatamente essa a informação que a marca comprou.",
     "Padrão útil para justificações: **o que aconteceu + quando + quem + o que não aconteceu**. Exemplo: *\"Às 15h12, a colaboradora do balcão 2 registou a compra e entregou o talão, mas não ofereceu o cartão de cliente (item 9).\"* Uma frase, tudo lá dentro.",
    ],
   },
   {
    title: "Página 2 — Escrever com precisão",
    blocks: [
     "**Registo neutro.** Nada de ironia, nada de exclamações, nada de \"infelizmente\". O relatório não é o teu diário nem uma reclamação: é um instrumento de medida. Escreve como quem descreve, não como quem se queixa.",
     "**Elimina adjetivos vagos.** \"Bom\", \"mau\", \"lento\", \"desorganizado\" e \"pouco profissional\" dizem pouco e são indefensáveis. Troca por medidas: *\"lento\"* vira *\"9 minutos de espera com dois clientes à frente\"*.",
     "**Não faças de gestor.** O teu trabalho é reportar o que aconteceu, não recomendar contratações, formações ou despedimentos. Se o formulário tiver um campo de sugestões, sê sóbrio e factual.",
     "**Coerência acima de tudo.** Se escreveste 14h30 na entrada e 14h20 na abordagem, o relatório contradiz-se. Se disseste que não compraste nada mas anexaste um talão, contradiz-se. Uma incoerência põe todo o resto em causa — e é a primeira coisa que um revisor experiente procura.",
    ],
   },
   {
    title: "Página 3 — A revisão final (5 minutos que valem a missão)",
    blocks: [
     "**1. Horas.** Todas as horas mencionadas são compatíveis entre si e com a hora impressa no talão?",
     "**2. Respostas negativas.** Todas têm justificação com facto concreto? Nenhuma ficou com um \"não\" a seco?",
     "**3. Evidências.** Talão legível, fotografias exigidas anexadas, ficheiros com o nome certo e no formato pedido?",
     "**4. Língua.** Ortografia e pontuação revistas. Um relatório com erros grosseiros parece feito à pressa — e passa a ideia de que a observação também foi.",
     "**5. Prazo.** Submetido dentro do prazo. Muitas plataformas exigem 12 a 24 horas após a visita e cortam automaticamente o pagamento a quem chega atrasado. Se surgir um imprevisto, avisa antes de o prazo terminar, nunca depois.",
    ],
   },
   {
    title: "Página 4 — Do relatório único ao sistema de escrita",
    blocks: [
     "No início, cada relatório demora o que tem de demorar: tudo é novo, cada campo obriga a pensar duas vezes. É o preço normal de aprender e não há atalho honesto para o saltar.",
     "Quem já escreveu vinte ou trinta relatórios do mesmo tipo de missão começa naturalmente a criar \"moldes\" mentais — a mesma ordem, os mesmos blocos, frases que já sabem funcionar. Isso é bom: acelera e reduz erros de estrutura.",
     "O risco aparece quando o molde deixa de ser estrutura e passa a ser texto copiado. Um banco pessoal de frases para situações recorrentes (\"colaborador não ofereceu o cartão de cliente\", \"espera superior a 5 minutos com caixa livre\") é uma ferramenta legítima — desde que cada frase seja sempre reescrita com os factos específicos daquela visita: a hora certa, o crachá certo, o número certo.",
     "As agências com mais experiência sabem identificar relatórios \"parecidos demais\" do mesmo avaliador em missões diferentes — é um dos sinais mais óbvios de texto reciclado, e levanta suspeita de fraude mesmo quando a visita foi real. A velocidade que a experiência traz nunca pode substituir a variação genuína dos factos observados: mais rápido a escrever, sim; mais descuidado a verificar, nunca.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Justificação fraca vs. justificação sólida",
    scenario: "Respondeste \"Não\" ao item \"o colaborador apresentou a promoção em vigor\".",
    correctApproach:
     "\"Às 11h27, o colaborador (crachá: Rui) registou a compra e não mencionou a promoção 2ª unidade a 50%, afixada na montra e no expositor da entrada.\"",
    incorrectApproach: "\"Não falou da promoção.\" — sem hora, sem quem, sem contexto. Insuficiente para a marca agir.",
   },
   {
    title: "Exemplo 2 — Adjetivo vago reescrito",
    scenario: "Escreveste na narrativa que \"o espaço estava desorganizado\".",
    correctApproach:
     "\"Três caixas de reposição no corredor central a bloquear parcialmente a passagem; duas prateleiras da secção de bebidas por repor às 18h40.\"",
    incorrectApproach: "Manter \"o espaço estava desorganizado\" — é conclusão sem observação que a sustente.",
   },
  ],
  quiz: [
   {
    id: "m8q1",
    question: "Quais são as três camadas de um relatório completo?",
    options: [
     "Introdução, desenvolvimento e conclusão",
     "Respostas fechadas, justificações e narrativa cronológica",
     "Fotografias, talão e assinatura",
     "Resumo, opinião e recomendação",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q2",
    question: "O que deve conter a justificação de uma resposta negativa?",
    options: [
     "Uma sugestão de melhoria para a loja",
     "O que aconteceu, quando, quem e o que não foi cumprido",
     "Uma comparação com outra loja da marca",
     "A tua opinião sobre a equipa",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q3",
    question: "Qual é o motivo mais frequente de rejeição de relatórios?",
    options: [
     "Textos demasiado longos",
     "Incoerências entre horas, respostas e evidências",
     "Uso de linguagem neutra",
     "Anexar fotografias a mais",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q4",
    question: "Como se deve reescrever \"o atendimento foi lento\"?",
    options: [
     "\"O atendimento foi bastante lento\"",
     "\"9 minutos de espera com dois clientes à frente e uma caixa aberta de três\"",
     "\"O atendimento não correspondeu às expectativas\"",
     "\"Havia demora no atendimento\"",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q5",
    question: "Quando deve o relatório ser escrito, idealmente?",
    options: [
     "No mesmo dia da visita, enquanto a memória está fresca",
     "Ao fim de uma semana, com distanciamento",
     "Só depois de a agência o solicitar",
     "Depois de comparar com outros avaliadores",
    ],
    correctIndex: 0,
   },
   {
    id: "m8q6",
    question: "Um avaliador experiente usa um banco pessoal de frases-modelo para acelerar a escrita. O que é indispensável para que isso continue a ser uma boa prática?",
    options: [
     "Usar sempre a mesma frase, sem alterações, para poupar tempo",
     "Reescrever cada frase com os factos específicos da visita em causa (hora, nome, número)",
     "Só usar frases-modelo em missões de baixo valor",
     "Pedir autorização da agência para cada frase reutilizada",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 9
    ========================================================== */
 {
  id: 9,
  title: "Quanto ganhas e quanto sobra",
  description:
   "Honorários, reembolsos, custos e impostos: as contas reais para saberes o que rende cada missão.",
  keywords: ["Honorário", "Reembolso", "Rentabilidade", "Recibo verde", "Despesas"],
  practicalTip:
   "Mantém uma folha simples com data, missão, honorário, reembolso, km e minutos. Ao fim de um mês sabes exatamente o que compensa.",
  warning:
   "Reembolso não é rendimento, mas honorário é. Declara o que tens de declarar — a Autoridade Tributária recebe a informação das plataformas.",
  benefit:
   "Com números na mão, deixas de aceitar missões por impulso e passas a construir um rendimento previsível.",
  content: [
   "Honorário é rendimento; reembolso é devolução de despesa obrigatória.",
   "Custos típicos: combustível, transportes, estacionamento, tempo de relatório e consumos não reembolsados.",
   "Em Portugal, a atividade é normalmente exercida como trabalhador independente (recibo verde).",
   "Rentabilidade mede-se por euro líquido por hora, não por valor anunciado.",
  ],
  pages: [
   {
    title: "Página 1 — As duas parcelas que nunca se misturam",
    blocks: [
     "**Honorário** é o que ganhas pelo trabalho: observar, executar e escrever. É rendimento e é o número que interessa comparar entre missões.",
     "**Reembolso** é a devolução de uma despesa que a missão te obrigou a fazer — o café, a camisa, o almoço, o bilhete. Chega à tua conta, mas não é lucro: é dinheiro que saiu e voltou. Só se torna vantagem se fosse uma despesa que farias de qualquer forma.",
     "Repara na diferença: uma missão que paga \"45 €\" com 30 € de reembolso de refeição vale, em rigor, **15 € de honorário**. Se ias almoçar fora nesse dia, ótimo — poupaste 30 €. Se não ias, ganhaste 15 € e almoçaste.",
     "Atenção aos **limites e regras de reembolso**. Se o teto é 25 € e gastaste 34 €, os 9 € saem do teu bolso. Se a compra tinha de ser paga com cartão e pagaste em dinheiro, podes perder o reembolso inteiro. Lê sempre esta parte do briefing com atenção redobrada.",
    ],
   },
   {
    title: "Página 2 — A conta que quase ninguém faz",
    blocks: [
     "Custos que existem mesmo que não se vejam: **combustível ou transportes**, **estacionamento**, **portagens**, **consumos não reembolsados** e — o mais esquecido de todos — o **teu tempo de relatório**, que pode ser metade do tempo total da missão.",
     "Usa esta fórmula, sempre: **valor líquido por hora = (honorário − custos não reembolsados) ÷ (tempo de deslocação + tempo de visita + tempo de relatório)**.",
     "Simulação honesta. Missão A: 20 € de honorário, 15 km, 25 min de visita, 30 min de relatório, ~4 € de combustível. Total ≈ 1h25 → cerca de **11 €/hora**. Missão B: 60 € de honorário numa hotelaria, 2 h de visita e 3 h de relatório → **12 €/hora**, apesar de parecer três vezes melhor.",
     "Conclusão prática: as missões grandes não são automaticamente as melhores. O que muda o jogo é o **agrupamento** — três missões na mesma zona no mesmo dia diluem a deslocação e podem levar o valor por hora para o dobro.",
    ],
   },
   {
    title: "Página 3 — Impostos sem susto",
    blocks: [
     "Em Portugal, esta atividade é normalmente exercida como **trabalhador independente**. Isso implica abertura de atividade nas Finanças e emissão de recibo verde por cada pagamento recebido. Não é complicado e faz-se online no Portal das Finanças.",
     "O que declaras é o **honorário**, o teu rendimento. Reembolsos de despesa devidamente documentados têm tratamento diferente — vale a pena confirmar com um contabilista logo no início, sobretudo se as missões passarem a ser regulares.",
     "Existe uma isenção de IVA para quem tem rendimento anual baixo (o limiar é revisto periodicamente). Enquanto estiveres abaixo desse valor, emites recibos sem IVA; ao ultrapassá-lo, passas ao regime normal. Confirma sempre o valor em vigor no ano em causa.",
     "**Guarda tudo.** Recibos emitidos, comprovativos de pagamento, faturas de combustível e talões. Se um dia esta atividade passar de complemento a profissão, vais querer ter os últimos dois anos organizados — e a tua futura contabilista vai adorar-te.",
    ],
   },
   {
    title: "Página 4 — De complemento a atividade séria",
    blocks: [
     "Nos primeiros meses, com uma missão ocasional aqui e ali, uma folha simples com data, honorário e reembolso chega perfeitamente. É o suficiente para saberes se compensa continuar.",
     "Quando o ritmo sobe — 15, 20 missões por mês, várias plataformas em simultâneo — a contabilidade exige mais rigor: reconcilia todos os meses os honorários recebidos com os recibos verdes emitidos, e não deixes essa reconciliação acumular-se para o fim do ano.",
     "Nessa fase, diversificar deixa de ser só uma tática de agenda (como vimos no Módulo 2) e passa a ser proteção de rendimento: trabalhar com três ou quatro agências ou plataformas diferentes evita que uma quebra sazonal de um único operador — um projeto que acaba, uma pausa de contrato — te deixe sem missões durante semanas.",
     "E há um ponto de decisão real que só chega com o volume: quando o rendimento mensal desta atividade se torna relevante para o teu orçamento, vale a pena sentar com um contabilista e confirmar se o enquadramento atual (recibos verdes simples) continua a ser o mais adequado. Não é uma decisão para tomar sozinho, nem de véspera da entrega do IRS.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Separar honorário de reembolso",
    scenario:
     "No fim do mês, somas todos os valores recebidos das plataformas e concluis que \"ganhaste 480 €\" com cinco missões.",
    correctApproach:
     "\"Separo a folha em duas colunas: honorário (o que é rendimento real) e reembolso (despesa devolvida). Só declaro e conto como ganho a coluna do honorário — nesse mês, 210 €.\"",
    incorrectApproach:
     "\"Ganhei 480 €\" — confunde o total recebido com rendimento e distorce por completo a perceção de rentabilidade.",
   },
   {
    title: "Exemplo 2 — Excesso sobre o limite de reembolso",
    scenario:
     "O briefing indica um limite de reembolso de 20 € para a compra obrigatória. Na loja, o artigo mais barato que cumpre o pedido custa 27 €.",
    correctApproach:
     "\"Contacto a agência antes de comprar, a confirmar se há tolerância ou se assumo os 7 € de diferença. Guardo sempre o talão como prova do valor total gasto.\"",
    incorrectApproach:
     "\"Compro e assumo que a plataforma paga o valor todo.\" — o excesso sobre o limite fica quase sempre a cargo do avaliador, e a surpresa chega tarde de mais.",
   },
  ],
  quiz: [
   {
    id: "m9q1",
    question: "Uma missão paga 45 €, dos quais 30 € são reembolso da refeição. Qual é o teu honorário?",
    options: ["45 €", "30 €", "15 €", "Depende da plataforma"],
    correctIndex: 2,
   },
   {
    id: "m9q2",
    question: "Que custo é mais frequentemente esquecido no cálculo de rentabilidade?",
    options: [
     "O combustível",
     "O tempo dedicado à escrita do relatório",
     "O estacionamento",
     "O valor da compra obrigatória",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q3",
    question: "Qual é a forma mais eficaz de aumentar o valor líquido por hora?",
    options: [
     "Aceitar apenas missões acima de 50 €",
     "Agrupar missões na mesma zona no mesmo dia para diluir a deslocação",
     "Escrever relatórios mais curtos",
     "Recusar missões com reembolso",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q4",
    question: "Como se exerce normalmente esta atividade em Portugal?",
    options: [
     "Como trabalhador por conta de outrem da plataforma",
     "Como trabalhador independente, com abertura de atividade e recibo verde",
     "Sem qualquer enquadramento fiscal",
     "Apenas através de empresa constituída",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q5",
    question: "Gastaste 34 € numa missão com limite de reembolso de 25 €. O que acontece?",
    options: [
     "A plataforma paga sempre o valor total",
     "Os 9 € de excesso ficam a teu cargo",
     "O reembolso é anulado por completo",
     "O excesso é pago no mês seguinte",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q6",
    question: "Porque é que trabalhar com várias agências ou plataformas em simultâneo protege o rendimento, à medida que o volume de missões cresce?",
    options: [
     "Porque cada plataforma paga mais quando há concorrência entre avaliadores",
     "Porque evita que a quebra sazonal de um único operador te deixe sem missões durante semanas",
     "Porque reduz os impostos a pagar",
     "Porque as plataformas exigem exclusividade a partir de certo volume",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 10
    ========================================================== */
 {
  id: 10,
  title: "Plano de ação de 30 dias",
  description:
   "Do registo nas plataformas às primeiras missões pagas — e como subir para as que pagam melhor.",
  keywords: ["Registo", "Perfil", "Primeiras missões", "Classificação", "Especialização"],
  practicalTip:
   "Responde a convites em menos de uma hora sempre que puderes. Rapidez de resposta pesa tanto como qualidade nas plataformas.",
  warning:
   "Não aceites cinco missões na primeira semana. Falhar prazos no arranque marca a tua classificação durante meses.",
  benefit:
   "Em 30 dias, com este plano, sais do zero com perfil completo, missões concluídas e classificação positiva.",
  content: [
   "Semana 1: registo em 5 a 8 plataformas e perfil completo em todas.",
   "Semana 2: primeiras candidaturas a missões simples e próximas de casa.",
   "Semana 3: primeiras execuções, com relatórios submetidos no próprio dia.",
   "Semana 4: análise de resultados, escolha de setores e candidatura a missões melhores.",
  ],
  pages: [
   {
    title: "Página 1 — Semana 1: existir no sistema",
    blocks: [
     "**Regista-te em 5 a 8 plataformas.** Sim, é chato: são formulários parecidos, documentos repetidos e confirmações por e-mail. Faz-se numa tarde e é o investimento com melhor retorno de todo o curso.",
     "**Preenche o perfil a 100%.** Zona geográfica, disponibilidade horária, mobilidade (carro, transportes), idiomas, setores de interesse e experiência. Muitas plataformas filtram automaticamente por perfil: campos vazios significam missões que nunca chegas sequer a ver.",
     "**Escreve uma apresentação curta e concreta.** Duas ou três frases: quem és, que disponibilidade tens, que zonas cobres, e uma frase sobre rigor e prazos. Nada de textos genéricos sobre \"paixão por atendimento ao cliente\".",
     "**Cria uma pasta e um e-mail dedicados.** Uma pasta no computador para evidências e, se puderes, um e-mail só para isto. Vais receber dezenas de notificações por semana e não queres perder um convite no meio de promoções de supermercado.",
    ],
   },
   {
    title: "Página 2 — Semanas 2 e 3: as primeiras missões",
    blocks: [
     "Começa **pequeno e perto**. Uma cafetaria, uma loja de rua, uma farmácia a dez minutos de casa. O objetivo destas primeiras missões não é o dinheiro: é fechar o ciclo completo — candidatar, executar, documentar, submeter, ser aprovado.",
     "**Uma missão de cada vez, no início.** Aceitar cinco e falhar duas é a pior estreia possível: as plataformas dão muito peso ao cumprimento de prazos nas primeiras avaliações, e essa marca demora meses a limpar.",
     "**Submete no próprio dia.** Sem exceções. É o hábito que mais influencia a tua classificação e, por consequência, os convites que vais receber a seguir.",
     "Espera **feedback** e lê-o com atenção. Quase todas as plataformas devolvem uma nota de qualidade e comentários do revisor. Aquilo que parece uma crítica chata é, na prática, formação à borla feita por quem decide quem recebe as missões boas.",
    ],
   },
   {
    title: "Página 3 — Semana 4 e daí para a frente",
    blocks: [
     "**Faz as contas do mês.** Quantas missões, quanto de honorário, quantos quilómetros, quantas horas. Vais descobrir, quase de certeza, que duas ou três missões renderam muito mais por hora do que todas as outras. Essas são o teu caminho.",
     "**Especializa-te em dois ou três setores.** Quem repete o mesmo tipo de missão fica mais rápido, escreve melhores relatórios e sobe de classificação. Restauração e retalho são portas de entrada; banca, automóvel e hotelaria são onde está o dinheiro sério.",
     "**Constrói relação com as agências.** Responde rápido, cumpre prazos, avisa quando algo corre mal e sê educado com quem revê os teus relatórios. Passados alguns meses começam a chegar convites diretos — as missões que nunca chegam a ser publicadas.",
     "**Meta realista para os primeiros três meses:** 4 a 8 missões por mês, entre 80 € e 250 € de honorário mensal, e uma classificação acima da média. A partir daí, é escolher: manter como complemento ou empurrar para valores que já pagam contas.",
    ],
   },
   {
    title: "Página 4 — Depois dos 90 dias: o caminho sénior",
    blocks: [
     "Com os primeiros três meses cumpridos e uma boa classificação, abre-se um caminho que poucos avaliadores conhecem à partida: algumas agências convidam avaliadores fiáveis para funções de **revisor ou validador** dos relatórios de outros avaliadores — mais responsabilidade, e normalmente remuneração fixa ou por lote de relatórios revistos, em vez de por missão.",
     "Quem já vem de outra área — atendimento, hotelaria, auditoria de qualidade — tende a chegar mais depressa a este ponto, porque já traz hábitos de rigor treinados noutro contexto. Mas só chega lá com histórico de missões cumpridas nesta atividade: currículo de fora abre portas, não substitui a confiança construída aqui dentro.",
     "Outro caminho, mais comum, é a **especialização vertical**: concentrares-te num setor de alto valor — automóvel, banca, hotelaria — até te tornares o avaliador de referência de uma agência para essa categoria. É aí que aparecem os convites diretos para missões que nunca chegam a ser publicadas, o objetivo que persegues desde a Página 3 deste módulo.",
     "Seja qual for o caminho que te atrair, o próximo passo é sempre o mesmo e é imediato: candidatares-te. No módulo seguinte — o do certificado — encontras uma lista concreta de empresas e plataformas onde podes começar a fazê-lo hoje mesmo.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Exemplo 1 — Arranque comedido vs. arranque atabalhoado",
    scenario:
     "Na primeira semana já registada em várias plataformas, aparecem cinco convites de missão para a mesma semana.",
    correctApproach:
     "\"Aceito uma ou duas, próximas de casa e simples, para fechar bem o ciclo completo — candidatura, execução, relatório, aprovação — antes de escalar o volume.\"",
    incorrectApproach:
     "\"Aceito as cinco, mais vale aproveitar.\" — o risco de falhar um prazo é alto e uma classificação inicial baixa demora meses a recuperar.",
   },
   {
    title: "Exemplo 2 — Ler o feedback da agência",
    scenario:
     "O primeiro relatório volta com uma nota de qualidade média e três comentários do revisor sobre falta de horas na narrativa.",
    correctApproach:
     "\"Leio os comentários com atenção, ajusto o próximo relatório para incluir sempre horas concretas, e trato o feedback como formação gratuita.\"",
    incorrectApproach:
     "\"Ignoro os comentários, o importante é que já fui pago.\" — repete o mesmo erro e mantém a classificação estagnada.",
   },
  ],
  quiz: [
   {
    id: "m10q1",
    question: "Qual é a primeira ação recomendada na semana 1?",
    options: [
     "Candidatar-se à missão mais bem paga disponível",
     "Registar-se em 5 a 8 plataformas e completar o perfil a 100%",
     "Comprar equipamento de gravação",
     "Contactar marcas diretamente",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q2",
    question: "Porque é que as primeiras missões devem ser simples e próximas?",
    options: [
     "Porque pagam mais",
     "Porque o objetivo é fechar o ciclo completo com sucesso e construir classificação",
     "Porque as plataformas o obrigam",
     "Porque não exigem relatório",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q3",
    question: "Que hábito tem maior impacto na tua classificação?",
    options: [
     "Escrever relatórios longos",
     "Submeter no próprio dia e cumprir sempre os prazos",
     "Candidatar-se a muitas missões em simultâneo",
     "Anexar mais fotografias do que o pedido",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q4",
    question: "Qual é a vantagem de te especializares em dois ou três setores?",
    options: [
     "Recebes automaticamente mais dinheiro por missão",
     "Ganhas rapidez, consistência e melhores relatórios, o que faz subir a classificação",
     "Deixas de precisar de ler briefings",
     "As plataformas passam a dispensar evidências",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q5",
    question: "O que costuma acontecer depois de alguns meses de bom histórico?",
    options: [
     "As plataformas aumentam automaticamente todos os honorários",
     "Começam a chegar convites diretos para missões que não são publicadas",
     "Deixas de poder recusar missões",
     "Passas a ser funcionário da agência",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q6",
    question: "O que é necessário para uma agência convidar um avaliador para funções de revisor ou validador de relatórios?",
    options: [
     "Ter um currículo forte noutra área, independentemente do histórico na plataforma",
     "Ter histórico de missões cumpridas e boa classificação nesta atividade",
     "Pagar uma taxa de acesso ao nível seguinte",
     "Completar apenas o certificado do curso",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MÓDULO 11 — CERTIFICADO
    ========================================================== */
 {
  id: 11,
  title: "Certificado de conclusão",
  description: "Concluíste o curso. Emite o teu certificado nominal e leva-o contigo para as candidaturas.",
  keywords: ["Certificado", "Portefólio", "Candidatura", "Credibilidade"],
  practicalTip:
   "Anexa o certificado ao teu perfil em todas as plataformas onde te registares. É um sinal de método que poucos candidatos apresentam.",
  warning:
   "O certificado só fica disponível depois de concluíres os módulos 1 a 10 com aproveitamento.",
  benefit:
   "Tens agora um método completo: sabes preparar, executar, documentar, reportar e escolher missões que compensam.",
  content: [
   "O certificado é nominal e emitido em PDF, com data de conclusão.",
   "Serve como comprovativo de formação nas candidaturas às plataformas.",
   "A partir daqui, o que conta é a prática: as primeiras missões consolidam tudo.",
  ],
  pages: [
   {
    title: "Página 1 — Chegaste ao fim (e ao princípio)",
    blocks: [
     "Dez módulos depois, já não olhas para uma loja da mesma maneira. Reparas no tempo até seres cumprimentado, na montra por repor, na frase que o colaborador não disse. Isso já não desliga — e é exatamente esse o objetivo.",
     "Levas contigo o método completo: **enquadramento** do mercado, **ética** e conduta, **observação objetiva**, **preparação**, **execução**, **evidências**, **relatório**, **contas** e um **plano de 30 dias** para arrancar.",
     "O teu **certificado nominal em PDF** está disponível no botão abaixo. Anexa-o ao perfil em todas as plataformas: mostra que sabes o que é um briefing, um item de guião e um prazo — coisas que a maioria dos candidatos descobre a errar.",
     "Agora falta a única parte que não se aprende a ler: **a primeira missão**. Escolhe uma pequena, perto de casa, esta semana. O resto vem com quilómetros — e com talões bem fotografados.",
    ],
   },
   {
    title: "Página 2 — Onde te candidatares agora",
    blocks: [
     "O certificado prova que sabes preparar, executar e reportar uma missão com rigor. A parte que falta já não se aprende a ler: é candidatares-te. Tal como no Módulo 2, o mercado divide-se em dois tipos de operador — plataformas internacionais de autorregisto e agências ou institutos portugueses que publicam vagas com regularidade.",
     "A lista abaixo não é exaustiva — o mercado muda, plataformas fecham e outras abrem — mas é um ponto de partida real e verificado. Regista-te em pelo menos cinco ou seis ao mesmo tempo, hoje, enquanto o método ainda está fresco, e preenche o perfil a 100% em cada uma: é o que separa quem começa a receber convites em duas semanas de quem espera meses (Módulo 10, Página 1).",
     "E o aviso do costume, porque vale sempre a pena repetir: nenhuma empresa séria — nem nenhuma das que aqui estão — cobra para te registares, para te \"certificar\" ou para desbloquear missões. Se alguém pedir dinheiro, não é uma oportunidade, é um esquema. Ignora e segue para a próxima da lista.",
    ],
   },
  ],
  recruitingCompanies: [
   {
    category: "Plataformas internacionais de autorregisto",
    companies: [
     {
      name: "BARE International",
      description:
       "A maior rede internacional de avaliadores de cliente mistério, com missões em dezenas de países e uma área própria dedicada a quem quer começar.",
      url: "https://www.bareinternational.com/evaluators/",
     },
     {
      name: "Secret View",
      description:
       "Plataforma global com mais de 75 mil avaliadores registados e missões ativas em Portugal, com registo direto online.",
      url: "https://www.secretview.io/en",
     },
     {
      name: "Globis Survey",
      description:
       "Rede internacional com uma página dedicada a \"tornares-te cliente mistério\", sem entrevista prévia.",
      url: "https://www.globis-survey.com/en/become-a-mystery-shopper/",
     },
     {
      name: "Ipsos",
      description:
       "Um dos maiores institutos de estudos de mercado do mundo, com uma prática dedicada a mystery shopping em vários setores.",
      url: "https://www.ipsos.com/en-us/mystery-shopping-0",
     },
    ],
   },
   {
    category: "Agências e institutos em Portugal",
    companies: [
     {
      name: "SGS Portugal",
      description:
       "Multinacional de inspeção e certificação com missões de cliente mistério em retalho, banca, automóvel e restauração.",
      url: "https://www.sgs.com/en-pt/services/mystery-shopping",
     },
     {
      name: "DEKRA Portugal",
      description:
       "Auditorias e avaliações de cliente mistério em diversos setores, com plataforma própria de registo de avaliadores.",
      url: "https://www.dekra.pt/pt/cliente-misterio-auditorias/",
     },
     {
      name: "IMR — Instituto de Marketing Research",
      description:
       "Instituto português de estudos de mercado com ofertas regulares para avaliadores de cliente mistério em todo o país.",
      url: "https://www.imr.pt/pt/ofertas-de-emprego/cliente-misterio",
     },
     {
      name: "Intercampus",
      description: "Agência portuguesa de investigação de mercado com painel próprio de clientes mistério.",
      url: "https://intercampus.pt/clientes_misterio/",
     },
     {
      name: "QSP Marketing",
      description: "Consultora portuguesa de marketing e research que recruta avaliadores para estudos de mystery shopper.",
      url: "https://qspmarketing.pt/research-tecnicas/mystery-shopper/",
     },
     {
      name: "Consulmark",
      description: "Empresa de estudos de mercado sediada em Lisboa, com serviço dedicado de mystery shopping.",
      url: "https://www.consulmark.pt/?produtos=mystery-shopping",
     },
     {
      name: "SmartSkills",
      description: "A recrutar e formar avaliadores em Portugal desde 2006, com centenas de missões já realizadas.",
      url: "https://smartskills.pt/en/servicos/8/Mystery-Shopping-Audit",
     },
     {
      name: "Triangulu",
      description: "Agência portuguesa de research com serviço de cliente mistério para marcas de retalho e serviços.",
      url: "https://www.triangulu.pt/servicos/clientemisterio/",
     },
    ],
   },
  ],
  quiz: [],
 },
];

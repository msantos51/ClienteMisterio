/*
 * DESCRIÇÃO DO FICHEIRO: Dados completos do curso de Cliente Mistério — conteúdo teórico e questionários de cada módulo.
 */

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type CourseModule = {
  id: number;
  title: string;
  description: string;
  content: string[];
  quiz: QuizQuestion[];
};

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Módulo 1 — Enquadramento do Cliente Mistério",
    description: "Conceito, objetivos e intervenientes do Mystery Shopping.",
    content: [
      "O Cliente Mistério (Mystery Shopping) é uma metodologia de avaliação da qualidade do serviço em que um avaliador se faz passar por um cliente comum para observar, registar e reportar a experiência real de atendimento. O objetivo principal é medir o cumprimento de padrões de serviço definidos pela marca ou empresa contratante.",
      "Esta técnica é utilizada em todo o mundo por empresas de diversos setores — desde o retalho à banca, da restauração ao turismo — como ferramenta para identificar pontos fortes e áreas de melhoria na experiência do cliente. Ao contrário dos inquéritos de satisfação, o Mystery Shopping oferece uma visão objetiva e padronizada do que realmente acontece no ponto de contacto com o cliente.",
      "Os principais benefícios para as empresas incluem: identificação de falhas no atendimento, verificação do cumprimento de procedimentos internos, benchmarking entre lojas ou unidades, e recolha de dados para formação de equipas. Para o avaliador, os benefícios incluem remuneração por missão, flexibilidade de horários, desenvolvimento de competências de observação e análise, e acesso a experiências diversificadas em diferentes setores.",
      "Num projeto de Cliente Mistério existem três intervenientes principais: a marca ou empresa que contrata o serviço e define os padrões a avaliar; a agência ou plataforma que recruta, forma e coordena os avaliadores; e o avaliador (shopper) que executa a missão no terreno, recolhe as evidências e submete o relatório. A comunicação e o alinhamento entre estes três atores são essenciais para o sucesso do projeto.",
      "Existem diversos tipos de projetos: visitas presenciais a lojas, restaurantes ou serviços; contactos telefónicos (mystery calling); avaliações online (mystery e-mailing ou web); e auditorias de conformidade. Cada tipo tem as suas especificidades em termos de preparação, execução e reporte.",
    ],
    quiz: [
      {
        id: "m1q1",
        question: "Qual é o principal objetivo do Cliente Mistério?",
        options: [
          "Realizar compras com desconto",
          "Medir o cumprimento de padrões de serviço definidos pela marca",
          "Substituir os inquéritos de satisfação ao cliente",
          "Avaliar os preços praticados pela concorrência",
        ],
        correctIndex: 1,
      },
      {
        id: "m1q2",
        question: "Quais são os três intervenientes principais num projeto de Cliente Mistério?",
        options: [
          "Cliente final, fornecedor e distribuidor",
          "Marca/empresa, agência/plataforma e avaliador",
          "Gestor de loja, colaborador e cliente",
          "Diretor comercial, marketing e recursos humanos",
        ],
        correctIndex: 1,
      },
      {
        id: "m1q3",
        question: "Qual das seguintes NÃO é uma vantagem do Mystery Shopping para as empresas?",
        options: [
          "Identificação de falhas no atendimento",
          "Benchmarking entre unidades",
          "Redução direta dos custos operacionais",
          "Recolha de dados para formação de equipas",
        ],
        correctIndex: 2,
      },
      {
        id: "m1q4",
        question: "O que distingue o Mystery Shopping dos inquéritos de satisfação tradicionais?",
        options: [
          "É mais barato de implementar",
          "Oferece uma visão objetiva e padronizada da experiência real",
          "Não requer qualquer preparação prévia",
          "É realizado exclusivamente online",
        ],
        correctIndex: 1,
      },
      {
        id: "m1q5",
        question: "Qual destes é um tipo válido de projeto de Cliente Mistério?",
        options: [
          "Mystery calling (contacto telefónico)",
          "Mystery pricing (comparação de preços)",
          "Mystery recruiting (avaliação de candidatos)",
          "Mystery advertising (avaliação de publicidade)",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Módulo 2 — Mercado e Oportunidades",
    description: "Setores com maior procura, modelos de colaboração e critérios de seleção.",
    content: [
      "O mercado de Cliente Mistério em Portugal e na Europa tem vindo a crescer de forma consistente, impulsionado pela crescente exigência dos consumidores e pela necessidade das empresas de monitorizar a qualidade do serviço de forma contínua. Os setores com maior procura incluem: retalho (moda, eletrónica, supermercados), restauração e hotelaria, banca e seguros, telecomunicações, saúde e farmácias, automóvel, e serviços públicos.",
      "Existem três modelos principais de colaboração para avaliadores: trabalhar com agências especializadas (como a MSPA, Ipsos, 4Service, entre outras) que gerem carteiras de clientes e distribuem missões; utilizar plataformas digitais que funcionam como marketplace de missões, permitindo aos avaliadores candidatar-se diretamente; ou colaborar diretamente com empresas que têm programas internos de Mystery Shopping.",
      "Cada modelo tem vantagens e desafios. As agências oferecem maior volume e estabilidade, mas podem ter requisitos mais exigentes e prazos mais apertados. As plataformas oferecem flexibilidade e variedade, mas a concorrência entre avaliadores é maior. A colaboração direta pode ser mais lucrativa, mas exige capacidade de prospeção e negociação comercial.",
      "Para aumentar a taxa de aceitação em missões, o avaliador deve: manter um perfil completo e atualizado; responder rapidamente às oportunidades; cumprir prazos de entrega consistentemente; produzir relatórios de alta qualidade; diversificar a sua disponibilidade geográfica e horária; e construir uma reputação sólida junto das agências e plataformas.",
      "As áreas mais promissoras para novos avaliadores são o retalho alimentar e não alimentar, a restauração rápida, e os serviços de telecomunicações, uma vez que apresentam elevado volume de missões e rotatividade de avaliadores. À medida que o avaliador ganha experiência, pode aceder a missões mais complexas e melhor remuneradas, como auditorias no setor financeiro ou avaliações de hotéis de luxo.",
    ],
    quiz: [
      {
        id: "m2q1",
        question: "Qual dos seguintes setores tem tipicamente maior volume de missões de Cliente Mistério?",
        options: [
          "Construção civil",
          "Retalho e restauração",
          "Agricultura",
          "Indústria pesada",
        ],
        correctIndex: 1,
      },
      {
        id: "m2q2",
        question: "Quais são os três modelos principais de colaboração para avaliadores?",
        options: [
          "Freelancer, part-time e full-time",
          "Agências, plataformas digitais e cliente direto",
          "Online, presencial e telefónico",
          "Nacional, regional e local",
        ],
        correctIndex: 1,
      },
      {
        id: "m2q3",
        question: "O que deve um avaliador fazer para aumentar a taxa de aceitação em missões?",
        options: [
          "Aceitar apenas missões bem remuneradas",
          "Trabalhar exclusivamente com uma agência",
          "Manter perfil completo, responder rápido e entregar com qualidade",
          "Evitar missões em setores que não conhece",
        ],
        correctIndex: 2,
      },
      {
        id: "m2q4",
        question: "Qual é a principal vantagem das plataformas digitais de Mystery Shopping?",
        options: [
          "Remuneração mais elevada por missão",
          "Flexibilidade e variedade de missões disponíveis",
          "Formação gratuita incluída",
          "Garantia de missões mensais",
        ],
        correctIndex: 1,
      },
      {
        id: "m2q5",
        question: "Para um avaliador iniciante, quais áreas são mais acessíveis?",
        options: [
          "Auditorias bancárias e avaliações de hotéis de luxo",
          "Retalho alimentar, restauração rápida e telecomunicações",
          "Indústria farmacêutica e dispositivos médicos",
          "Consultoria estratégica e serviços jurídicos",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Módulo 3 — Perfil, Conduta e Ética Profissional",
    description: "Requisitos do avaliador, confidencialidade e boas práticas.",
    content: [
      "O avaliador de Cliente Mistério deve reunir um conjunto específico de competências e qualidades pessoais. A discrição é fundamental — o avaliador deve ser capaz de se comportar como um cliente comum sem levantar suspeitas. O rigor na observação e no registo garante que os dados recolhidos são fiáveis. A imparcialidade evita que opiniões pessoais contaminem a avaliação. E a consistência assegura que diferentes visitas são avaliadas com os mesmos critérios.",
      "A confidencialidade é um pilar ético central nesta atividade. O avaliador nunca deve revelar a sua identidade ou função durante ou após a missão. Não deve partilhar informações sobre os projetos, marcas, locais avaliados ou resultados obtidos com terceiros, incluindo familiares, amigos ou nas redes sociais. A quebra de confidencialidade pode resultar na exclusão permanente de programas de avaliação.",
      "Os conflitos de interesse devem ser identificados e declarados antes de aceitar uma missão. Um avaliador não deve avaliar estabelecimentos onde trabalha, já trabalhou, tem familiares empregados, ou tem qualquer relação pessoal ou comercial. Da mesma forma, não deve aceitar missões de marcas com as quais tem uma ligação emocional forte (positiva ou negativa) que possa comprometer a objetividade.",
      "Durante a avaliação, o avaliador deve seguir boas práticas de comportamento: agir de forma natural e coerente com o perfil definido no briefing; não forçar situações artificiais para testar limites; não provocar os colaboradores; respeitar as regras do estabelecimento; e manter uma postura ética em todas as interações. O objetivo é avaliar o serviço em condições normais, não criar cenários excecionais.",
      "A pontualidade, o profissionalismo e a honestidade são valores inegociáveis. O avaliador deve reportar exatamente o que observou, sem embelezar, minimizar ou inventar situações. Relatórios fraudulentos comprometem a integridade de todo o sistema de avaliação e prejudicam tanto as empresas como os outros avaliadores.",
    ],
    quiz: [
      {
        id: "m3q1",
        question: "Qual é a qualidade mais importante de um avaliador durante uma missão?",
        options: [
          "Capacidade de negociação",
          "Discrição — comportar-se como cliente comum",
          "Conhecimento técnico do produto",
          "Capacidade de liderança",
        ],
        correctIndex: 1,
      },
      {
        id: "m3q2",
        question: "O que deve um avaliador fazer se tiver um familiar a trabalhar no estabelecimento a avaliar?",
        options: [
          "Realizar a avaliação mas não avaliar esse familiar",
          "Declarar o conflito de interesse e não aceitar a missão",
          "Pedir ao familiar para se ausentar durante a visita",
          "Realizar a avaliação normalmente sem comunicar",
        ],
        correctIndex: 1,
      },
      {
        id: "m3q3",
        question: "A confidencialidade no Cliente Mistério implica:",
        options: [
          "Não revelar resultados nos primeiros 30 dias",
          "Partilhar informações apenas com familiares próximos",
          "Nunca revelar a identidade, projetos, marcas ou resultados a terceiros",
          "Utilizar pseudónimo nas redes sociais ao discutir missões",
        ],
        correctIndex: 2,
      },
      {
        id: "m3q4",
        question: "Durante uma avaliação, o avaliador deve:",
        options: [
          "Testar os limites dos colaboradores com perguntas difíceis",
          "Agir de forma natural e coerente com o perfil do briefing",
          "Reclamar para verificar como a equipa reage",
          "Identificar-se como avaliador se questionado",
        ],
        correctIndex: 1,
      },
      {
        id: "m3q5",
        question: "O que acontece em caso de submissão de relatórios fraudulentos?",
        options: [
          "O relatório é simplesmente rejeitado sem consequências",
          "O avaliador recebe um aviso informal",
          "Compromete a integridade do sistema e pode levar a exclusão permanente",
          "A agência corrige os dados automaticamente",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Módulo 4 — Metodologia de Avaliação e Critérios de Qualidade",
    description: "O que avaliar, indicadores frequentes e como evitar enviesamentos.",
    content: [
      "A avaliação de Cliente Mistério abrange múltiplas dimensões da experiência do cliente. As áreas mais comuns de avaliação incluem: qualidade do atendimento (saudação, simpatia, conhecimento do produto, proatividade); processos operacionais (tempos de espera, procedimentos de caixa, gestão de filas); produto ou serviço (apresentação, disponibilidade, conformidade com o anunciado); conformidade (cumprimento de normas legais, regulamentares ou internas); e experiência global do cliente (ambiente, limpeza, sinalética, acessibilidade).",
      "Os indicadores e métricas mais frequentes em projetos de Mystery Shopping incluem: tempo de espera até ser atendido; tempo total da interação; taxa de cumprimento de scripts de atendimento; taxa de cross-selling ou up-selling; qualidade da apresentação pessoal dos colaboradores; estado de limpeza e organização do espaço; disponibilidade de produtos-chave; e Net Promoter Score (NPS) percebido pelo avaliador.",
      "Para garantir a qualidade da avaliação, é essencial seguir rigorosamente o guião (checklist) fornecido no briefing. Cada item deve ser avaliado de acordo com os critérios definidos, sem interpretações subjetivas. Quando o guião indica 'O colaborador cumprimentou o cliente nos primeiros 30 segundos', o avaliador deve registar factualmente se isso aconteceu ou não, e não a sua opinião sobre a qualidade do cumprimento.",
      "Os enviesamentos mais comuns que um avaliador deve evitar são: o efeito halo (uma primeira impressão positiva ou negativa influencia toda a avaliação); a tendência central (evitar respostas extremas, classificando tudo como 'médio'); o viés de confirmação (procurar evidências que confirmem uma expectativa prévia); e o viés de recência (dar mais peso ao que aconteceu no final da visita). Para minimizar estes enviesamentos, o avaliador deve focar-se em factos observáveis, registar informações imediatamente após a visita e seguir a checklist ponto por ponto.",
      "A calibração entre avaliadores é outro fator de qualidade. Dois avaliadores diferentes, no mesmo local e nas mesmas condições, devem produzir avaliações semelhantes. Isto só é possível quando os critérios são claros, os avaliadores estão bem formados e o guião é suficientemente específico para minimizar a ambiguidade.",
    ],
    quiz: [
      {
        id: "m4q1",
        question: "Quais são as principais dimensões avaliadas no Cliente Mistério?",
        options: [
          "Preço, localização e marca",
          "Atendimento, processos, produto/serviço, conformidade e experiência global",
          "Volume de vendas, margem e rotação de stock",
          "Design da loja, música ambiente e temperatura",
        ],
        correctIndex: 1,
      },
      {
        id: "m4q2",
        question: "O que é o 'efeito halo' numa avaliação?",
        options: [
          "Quando o avaliador é reconhecido pelo colaborador",
          "Quando uma primeira impressão influencia toda a avaliação",
          "Quando o estabelecimento tem boa iluminação",
          "Quando o avaliador repete a mesma visita várias vezes",
        ],
        correctIndex: 1,
      },
      {
        id: "m4q3",
        question: "Como deve o avaliador registar se 'o colaborador cumprimentou nos primeiros 30 segundos'?",
        options: [
          "Avaliar a qualidade e entusiasmo do cumprimento",
          "Registar factualmente se aconteceu ou não, conforme o critério definido",
          "Dar uma classificação de 1 a 5 com base na sua perceção",
          "Ignorar se o colaborador estava ocupado com outro cliente",
        ],
        correctIndex: 1,
      },
      {
        id: "m4q4",
        question: "O que é a 'tendência central' enquanto enviesamento?",
        options: [
          "Dar mais peso à experiência na zona central da loja",
          "Classificar tudo como 'médio', evitando extremos",
          "Focar-se apenas no atendimento ao balcão",
          "Avaliar apenas os aspetos mais importantes",
        ],
        correctIndex: 1,
      },
      {
        id: "m4q5",
        question: "O que garante a calibração entre avaliadores?",
        options: [
          "Que todos avaliem o mesmo dia e hora",
          "Que critérios claros, boa formação e guiões específicos minimizem ambiguidade",
          "Que usem o mesmo dispositivo para registo",
          "Que todos tenham a mesma opinião sobre o serviço",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Módulo 5 — Preparação da Missão",
    description: "Análise do briefing, planeamento logístico e gestão de riscos.",
    content: [
      "A preparação é a fase mais crítica de uma missão de Cliente Mistério. Uma preparação deficiente compromete a qualidade da avaliação e pode levar à rejeição do relatório. O primeiro passo é a leitura atenta e completa do briefing, que contém: os objetivos da missão, o perfil que o avaliador deve assumir, a checklist de itens a avaliar, os requisitos de evidência (fotos, talões, etc.), os prazos de execução e entrega, e quaisquer instruções especiais.",
      "A análise do briefing deve ser feita com tempo suficiente antes da visita. O avaliador deve: compreender cada item da checklist e o que é esperado em cada resposta; memorizar o cenário/persona a representar (por exemplo, 'cliente interessado em comprar um smartphone até 300€'); identificar eventuais dúvidas e esclarecê-las com a agência antes da visita; e preparar perguntas ou interações específicas que o briefing exija.",
      "O planeamento logístico envolve: definir o melhor horário para a visita (considerando os requisitos do briefing e a afluência esperada); planear o trajeto e estacionamento; calcular o tempo necessário para a avaliação e para o deslocamento; prever custos (deslocação, consumos obrigatórios, estacionamento); e garantir que tem todos os materiais necessários (telemóvel carregado, dinheiro, cartão, etc.).",
      "A gestão de riscos implica antecipar situações que podem invalidar a missão: o estabelecimento pode estar fechado por férias ou obras; o produto/serviço a avaliar pode estar indisponível; o avaliador pode ser reconhecido se já visitou o local recentemente; condições meteorológicas adversas podem afetar a deslocação; ou um imprevisto pessoal pode impedir a visita no período definido.",
      "Para cada risco identificado, o avaliador deve ter um plano alternativo: verificar horários de funcionamento antes de sair; ter uma segunda data dentro do prazo; comunicar antecipadamente com a agência se houver qualquer impedimento; e nunca forçar uma visita em condições comprometidas, pois é preferível reagendar do que submeter uma avaliação inválida.",
    ],
    quiz: [
      {
        id: "m5q1",
        question: "Qual é a fase mais crítica de uma missão de Cliente Mistério?",
        options: [
          "A submissão do relatório",
          "A preparação prévia da missão",
          "O contacto com a agência após a visita",
          "A escolha do estabelecimento a avaliar",
        ],
        correctIndex: 1,
      },
      {
        id: "m5q2",
        question: "O que deve o avaliador fazer se tiver dúvidas sobre o briefing?",
        options: [
          "Interpretar da melhor forma e prosseguir com a missão",
          "Perguntar a outros avaliadores nos fóruns online",
          "Esclarecer as dúvidas com a agência antes da visita",
          "Ignorar os pontos confusos e focar-se no resto",
        ],
        correctIndex: 2,
      },
      {
        id: "m5q3",
        question: "Qual dos seguintes NÃO é um elemento típico do briefing?",
        options: [
          "Checklist de itens a avaliar",
          "Perfil/persona a representar",
          "Lista de salários dos colaboradores do estabelecimento",
          "Prazos de execução e entrega",
        ],
        correctIndex: 2,
      },
      {
        id: "m5q4",
        question: "O que deve o avaliador fazer se o estabelecimento estiver fechado no dia previsto?",
        options: [
          "Submeter o relatório como 'local encerrado'",
          "Visitar outro estabelecimento da mesma marca sem autorização",
          "Reagendar dentro do prazo e comunicar com a agência se necessário",
          "Cancelar a missão e aguardar nova atribuição",
        ],
        correctIndex: 2,
      },
      {
        id: "m5q5",
        question: "Por que razão é importante calcular custos antes da missão?",
        options: [
          "Para negociar uma remuneração maior com a agência",
          "Para avaliar a rentabilidade da missão (deslocação, consumos, estacionamento)",
          "Para pedir reembolso de todas as despesas pessoais",
          "Não é necessário — todos os custos são cobertos pela agência",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 6,
    title: "Módulo 6 — Execução no Terreno",
    description: "Abordagem natural, técnicas de observação e gestão de imprevistos.",
    content: [
      "A execução no terreno é o momento em que o avaliador coloca em prática toda a preparação. A naturalidade é o fator-chave: o avaliador deve entrar no estabelecimento e comportar-se exatamente como faria um cliente comum. Isto inclui o ritmo de deslocação, a forma como observa os produtos, o tom de voz ao interagir com os colaboradores, e até a linguagem corporal. Qualquer comportamento fora do normal pode levantar suspeitas e comprometer a missão.",
      "As técnicas de observação eficaz incluem: observação periférica (notar detalhes sem olhar diretamente ou fixamente); memorização estruturada (associar observações à checklist mentalmente); ancoragem temporal (registar mentalmente os tempos — 'entrei às 14h32, fui abordado às 14h35'); e scan ambiental (avaliar rapidamente limpeza, organização, sinalética e estado geral do espaço nos primeiros momentos).",
      "A recolha de informação deve ser feita sem comprometer a discrição. Nunca tirar notas visíveis durante a visita. Utilizar o telemóvel apenas de forma natural (como qualquer cliente faria para consultar algo). Se necessário fotografar, fazê-lo discretamente e apenas quando o briefing o exige e as condições o permitem. Memorizar os detalhes mais importantes e registá-los imediatamente após sair do estabelecimento.",
      "A gestão de imprevistos requer flexibilidade e bom senso. Situações comuns incluem: rutura de stock do produto que deveria avaliar (adaptar a interação mantendo os objetivos da avaliação); alterações de equipa (o colaborador-alvo não está presente — avaliar quem o substituiu); filas longas ou sobrelotação (manter a naturalidade e incluir estes dados no relatório); e indisponibilidade de serviço (registar a situação e contactar a agência para orientação).",
      "Regras fundamentais durante a execução: nunca revelar que é avaliador, mesmo que suspeite que foi identificado; não prolongar artificialmente a visita além do razoável; não criar situações artificiais para 'testar' os colaboradores; manter uma atitude cordial e respeitosa em todas as interações; e, em caso de dúvida sobre como proceder, optar sempre pela naturalidade e contactar a agência posteriormente.",
    ],
    quiz: [
      {
        id: "m6q1",
        question: "Qual é o fator-chave durante a execução no terreno?",
        options: [
          "Velocidade na recolha de informação",
          "Naturalidade — comportar-se como um cliente comum",
          "Confrontar os colaboradores com situações difíceis",
          "Tirar o maior número de fotografias possível",
        ],
        correctIndex: 1,
      },
      {
        id: "m6q2",
        question: "O que é a 'ancoragem temporal' na observação?",
        options: [
          "Visitar o local sempre à mesma hora",
          "Registar mentalmente os tempos exatos dos eventos (entrada, abordagem, etc.)",
          "Limitar a visita a um tempo máximo definido",
          "Comparar o tempo de espera com visitas anteriores",
        ],
        correctIndex: 1,
      },
      {
        id: "m6q3",
        question: "Como deve o avaliador tomar notas durante a visita?",
        options: [
          "Num caderno discreto dentro do bolso",
          "Num formulário impresso levado para a loja",
          "Não tirar notas visíveis — memorizar e registar após sair",
          "Gravar áudio no telemóvel durante toda a visita",
        ],
        correctIndex: 2,
      },
      {
        id: "m6q4",
        question: "Se o produto a avaliar está em rutura de stock, o avaliador deve:",
        options: [
          "Cancelar a missão imediatamente",
          "Adaptar a interação mantendo os objetivos da avaliação",
          "Reclamar com o gerente para testar a resposta",
          "Comprar um produto alternativo e reportar como se fosse o original",
        ],
        correctIndex: 1,
      },
      {
        id: "m6q5",
        question: "Se o avaliador suspeita que foi identificado como mystery shopper, deve:",
        options: [
          "Confirmar a sua identidade e pedir desculpa",
          "Abandonar o local imediatamente",
          "Nunca revelar a sua identidade e manter a naturalidade",
          "Pedir para falar com o gerente",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 7,
    title: "Módulo 7 — Recolha e Gestão de Evidências",
    description: "Tipos de evidência, organização e checklist pós-visita.",
    content: [
      "As evidências são a prova tangível de que a missão foi realizada e de que as observações reportadas são verídicas. Os tipos de evidência mais comuns incluem: talões de compra ou recibos (prova de que a transação ocorreu); fotografias (do exterior, interior, produto, expositor ou situação específica); registos de data e hora (que comprovam o momento da visita); notas manuscritas pós-visita (detalhes de interações e observações); e, em alguns projetos, gravações áudio autorizadas.",
      "Cada projeto define quais evidências são obrigatórias e quais são opcionais. O briefing especifica claramente: que tipo de evidência recolher; em que formato (foto, scan, ficheiro digital); que informação deve constar (data, hora, valor, nome do colaborador se visível); e prazo para submissão. O não cumprimento dos requisitos de evidência é uma das principais causas de rejeição de relatórios.",
      "A organização das evidências deve começar imediatamente após a visita. O avaliador deve: nomear ficheiros de forma clara (ex.: 'modulo_data_local_tipo'); verificar a qualidade das fotografias (legíveis, bem enquadradas, sem informação pessoal exposta); guardar os originais dos talões em local seguro; e criar uma cópia de segurança digital de toda a documentação.",
      "A validação da informação recolhida envolve: cruzar as evidências com a checklist do briefing (todos os itens estão cobertos?); verificar se os dados são coerentes entre si (as horas no talão coincidem com o relatório?); garantir que não há lacunas que possam levar a questões da equipa de validação; e confirmar que todas as evidências obrigatórias foram recolhidas.",
      "A checklist pós-visita é uma ferramenta essencial: confirmar que tem o talão/recibo; verificar que as fotos foram tiradas e estão legíveis; rever mentalmente cada ponto da checklist do briefing; registar por escrito as observações enquanto a memória é fresca (idealmente nos primeiros 15 minutos); anotar a hora exata de entrada e saída; e identificar qualquer aspeto invulgar que deva ser comunicado à agência.",
    ],
    quiz: [
      {
        id: "m7q1",
        question: "Qual é a principal função das evidências no Cliente Mistério?",
        options: [
          "Servir como recordação pessoal da visita",
          "Provar que a missão foi realizada e as observações são verídicas",
          "Decorar o relatório com imagens",
          "Demonstrar competência fotográfica do avaliador",
        ],
        correctIndex: 1,
      },
      {
        id: "m7q2",
        question: "Qual é uma das principais causas de rejeição de relatórios?",
        options: [
          "Relatório demasiado longo",
          "Uso de linguagem informal",
          "Não cumprimento dos requisitos de evidência",
          "Avaliação com pontuações muito baixas",
        ],
        correctIndex: 2,
      },
      {
        id: "m7q3",
        question: "Quando deve o avaliador registar as observações por escrito?",
        options: [
          "No dia seguinte, com calma",
          "Idealmente nos primeiros 15 minutos após sair do local",
          "Uma semana antes do prazo de entrega",
          "Durante a visita, no telemóvel",
        ],
        correctIndex: 1,
      },
      {
        id: "m7q4",
        question: "O que deve o avaliador verificar nas fotografias recolhidas?",
        options: [
          "Que tenham filtros artísticos aplicados",
          "Que sejam legíveis, bem enquadradas e sem informação pessoal exposta",
          "Que incluam o rosto dos colaboradores",
          "Que tenham a marca de água da agência",
        ],
        correctIndex: 1,
      },
      {
        id: "m7q5",
        question: "A checklist pós-visita serve para:",
        options: [
          "Planear a próxima missão",
          "Calcular o tempo total gasto na missão",
          "Garantir que todas as evidências e dados foram recolhidos antes de submeter",
          "Comunicar o resultado diretamente à marca avaliada",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 8,
    title: "Módulo 8 — Elaboração do Relatório e Submissão",
    description: "Estrutura do relatório, respostas objetivas e requisitos de qualidade.",
    content: [
      "O relatório é o produto final e mais visível do trabalho do avaliador. É através dele que a marca ou empresa toma decisões sobre formação, processos e gestão de equipas. Um relatório eficaz assenta em três pilares: factos (o que aconteceu objetivamente), contexto (as circunstâncias envolventes) e evidência (provas que suportam as observações).",
      "A estrutura típica de um relatório de Cliente Mistério inclui: dados da visita (data, hora, local, duração); respostas a perguntas fechadas (sim/não, escalas numéricas, escolha múltipla); respostas a perguntas abertas (descrições narrativas de situações observadas); classificação geral da experiência; e anexos (evidências fotográficas, talões, etc.).",
      "Nas respostas a perguntas fechadas, o avaliador deve ser preciso e coerente com os critérios definidos. Se o briefing define que 'cumprimentar' significa 'contacto verbal de saudação nos primeiros 30 segundos', a resposta deve basear-se estritamente nesse critério. Não há espaço para 'quase cumprimentou' ou 'cumprimentou com pouco entusiasmo' — ou cumpriu o critério factual ou não cumpriu.",
      "Nas respostas abertas, a qualidade do texto é determinante. O avaliador deve: descrever o que aconteceu de forma cronológica e factual; incluir detalhes relevantes (o que foi dito, como foi dito, a reação do colaborador); evitar opiniões pessoais não solicitadas; usar linguagem clara e profissional; e manter a extensão adequada — nem demasiado curto (falta de detalhe) nem demasiado longo (informação irrelevante).",
      "A submissão deve respeitar os prazos definidos (tipicamente 12 a 48 horas após a visita). Antes de submeter, o avaliador deve: rever todo o relatório para erros ou contradições; verificar que todas as evidências estão anexadas; confirmar que respondeu a todos os itens obrigatórios; e ler uma última vez as respostas abertas para garantir clareza. Relatórios fora de prazo, incompletos ou com informação contraditória são as três principais razões de rejeição ou pedido de revisão.",
    ],
    quiz: [
      {
        id: "m8q1",
        question: "Quais são os três pilares de um relatório eficaz?",
        options: [
          "Opinião, sugestão e recomendação",
          "Factos, contexto e evidência",
          "Introdução, desenvolvimento e conclusão",
          "Dados, gráficos e tabelas",
        ],
        correctIndex: 1,
      },
      {
        id: "m8q2",
        question: "Nas respostas a perguntas fechadas, o avaliador deve:",
        options: [
          "Usar a sua interpretação pessoal do critério",
          "Basear-se estritamente no critério factual definido no briefing",
          "Optar sempre pela resposta mais favorável ao estabelecimento",
          "Incluir nuances como 'quase cumpriu' ou 'cumpriu parcialmente'",
        ],
        correctIndex: 1,
      },
      {
        id: "m8q3",
        question: "Qual é o prazo típico para submissão de um relatório?",
        options: [
          "Uma semana após a visita",
          "No mês seguinte à visita",
          "12 a 48 horas após a visita",
          "Imediatamente durante a visita",
        ],
        correctIndex: 2,
      },
      {
        id: "m8q4",
        question: "Nas respostas abertas, o avaliador deve evitar:",
        options: [
          "Detalhes sobre o que foi dito",
          "Descrição cronológica dos eventos",
          "Opiniões pessoais não solicitadas",
          "Referências a tempos e duração",
        ],
        correctIndex: 2,
      },
      {
        id: "m8q5",
        question: "Quais são as três principais razões de rejeição de relatórios?",
        options: [
          "Erros ortográficos, formatação incorreta e falta de imagens",
          "Relatórios fora de prazo, incompletos ou com informação contraditória",
          "Avaliações muito negativas, falta de elogios e tom agressivo",
          "Uso de telemóvel antigo, fotos de baixa resolução e ficheiros grandes",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 9,
    title: "Módulo 9 — Remuneração, Reembolsos e Rentabilidade",
    description: "Pagamentos, cálculo de rentabilidade e estratégias de rendimento.",
    content: [
      "A remuneração no Cliente Mistério funciona tipicamente por missão ou projeto. Cada missão tem um valor fixo definido previamente, que pode variar entre 5€ e 150€+ dependendo da complexidade, duração, setor e requisitos. Além da remuneração base, muitos projetos incluem reembolso de despesas obrigatórias (consumo num restaurante, compra de um produto, estacionamento), desde que devidamente documentadas.",
      "O modelo de pagamento varia entre agências e plataformas: algumas pagam por transferência bancária mensal (agregando todas as missões do mês); outras pagam por projeto após validação do relatório; e algumas plataformas utilizam carteiras digitais ou métodos de pagamento online. O prazo de pagamento típico situa-se entre 15 e 60 dias após a validação do relatório.",
      "O cálculo de rentabilidade é essencial para que a atividade seja sustentável. O avaliador deve considerar: o valor da remuneração; o tempo total investido (preparação + deslocação + execução + relatório); custos de deslocação (combustível, portagens, transportes públicos, estacionamento); custos de consumo quando não totalmente reembolsados; e impostos aplicáveis. Uma missão de 20€ que exige 3 horas e 15€ de deslocação pode não ser rentável isoladamente.",
      "As estratégias para aumentar o rendimento incluem: otimização de rotas (agrupar várias missões na mesma zona/dia); recorrência (tornar-se avaliador regular de determinados projetos, reduzindo tempo de preparação); especialização (focar-se em setores de maior valor, como banca, automóvel ou hotelaria); volume (aumentar o número de missões por semana/mês); e evolução (aceder a missões de maior complexidade e melhor remuneração com a experiência acumulada).",
      "A gestão fiscal é igualmente importante. Em Portugal, os rendimentos de Cliente Mistério devem ser declarados. Consoante o volume e regularidade, o avaliador pode trabalhar como prestador de serviços independente (recibos verdes) ou como atividade ocasional. Recomenda-se consultar um contabilista para definir o enquadramento mais adequado e otimizar a carga fiscal.",
    ],
    quiz: [
      {
        id: "m9q1",
        question: "Como funciona tipicamente a remuneração no Cliente Mistério?",
        options: [
          "Salário fixo mensal",
          "Por missão ou projeto, com valor fixo definido previamente",
          "Comissão sobre as vendas do estabelecimento avaliado",
          "Pagamento por hora de trabalho",
        ],
        correctIndex: 1,
      },
      {
        id: "m9q2",
        question: "Que custos deve o avaliador considerar no cálculo de rentabilidade?",
        options: [
          "Apenas o tempo de execução no local",
          "Remuneração vs. tempo total, deslocação, consumos e impostos",
          "Apenas o custo de deslocação",
          "O preço dos produtos que comprou para avaliar",
        ],
        correctIndex: 1,
      },
      {
        id: "m9q3",
        question: "Qual destas é uma estratégia para aumentar o rendimento?",
        options: [
          "Aceitar apenas missões acima de 50€",
          "Trabalhar exclusivamente ao fim de semana",
          "Otimizar rotas agrupando várias missões na mesma zona/dia",
          "Negociar descontos nos estabelecimentos avaliados",
        ],
        correctIndex: 2,
      },
      {
        id: "m9q4",
        question: "Qual é o prazo típico de pagamento após validação?",
        options: [
          "Imediato",
          "15 a 60 dias",
          "6 meses",
          "No final do ano fiscal",
        ],
        correctIndex: 1,
      },
      {
        id: "m9q5",
        question: "Em termos fiscais, os rendimentos de Cliente Mistério em Portugal:",
        options: [
          "Estão isentos de declaração",
          "São automaticamente tributados pela agência",
          "Devem ser declarados pelo avaliador",
          "Só são tributáveis acima de 10.000€ anuais",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 10,
    title: "Módulo 10 — Desenvolvimento Profissional e Plano de Ação",
    description: "Construção de reputação, evolução e plano prático de 30 dias.",
    content: [
      "A construção de uma reputação sólida como avaliador de Cliente Mistério assenta em três pilares: consistência (manter a qualidade em todas as missões, independentemente do valor), qualidade (produzir relatórios detalhados, precisos e bem escritos) e cumprimento de prazos (entregar sempre dentro do prazo definido, preferencialmente antes). Avaliadores com reputação elevada são os primeiros a ser contactados para novas missões e têm acesso prioritário a projetos premium.",
      "A evolução profissional no Cliente Mistério segue uma trajetória natural: começa-se com missões simples (retalho, restauração rápida), progride-se para missões de complexidade média (telecomunicações, saúde), e acede-se eventualmente a missões premium (banca, automóvel, hotelaria de luxo, auditorias complexas). Cada nível exige maior preparação, mais detalhe no relatório e oferece melhor remuneração.",
      "Para acelerar esta evolução, o avaliador deve: investir em formação contínua (cursos de atendimento ao cliente, técnicas de observação, escrita profissional); solicitar feedback das agências sobre os seus relatórios; analisar os seus erros e áreas de melhoria; diversificar os setores e tipos de missão; e construir uma rede de contactos profissionais no setor.",
      "O plano de ação prático para os primeiros 30 dias inclui: Semana 1 — registar-se em 3 a 5 plataformas/agências, completar os perfis e realizar a primeira missão; Semana 2 — realizar 2 a 3 missões, focando na qualidade dos relatórios e no cumprimento de prazos; Semana 3 — analisar o feedback recebido, ajustar a abordagem e aumentar o volume para 3 a 4 missões; Semana 4 — consolidar a rotina, calcular a rentabilidade real e definir objetivos para o mês seguinte.",
      "As métricas de progresso a acompanhar são: número de missões realizadas por semana/mês; taxa de aceitação de relatórios (objetivo: >95%); pontuação média de qualidade (se disponível pela agência); rendimento líquido mensal (após custos); tempo médio por missão (preparação + execução + relatório); e número de agências/plataformas ativas. O acompanhamento regular destas métricas permite identificar tendências, otimizar a atividade e definir metas realistas de crescimento.",
    ],
    quiz: [
      {
        id: "m10q1",
        question: "Quais são os três pilares da reputação de um avaliador?",
        options: [
          "Rapidez, volume e disponibilidade",
          "Consistência, qualidade e cumprimento de prazos",
          "Experiência, formação e networking",
          "Discrição, simpatia e aparência profissional",
        ],
        correctIndex: 1,
      },
      {
        id: "m10q2",
        question: "Qual é a trajetória típica de evolução no Cliente Mistério?",
        options: [
          "Missões online → missões presenciais → auditorias",
          "Missões simples (retalho) → média complexidade → premium (banca, hotelaria luxo)",
          "Missões nacionais → internacionais → globais",
          "Missões individuais → em equipa → como coordenador",
        ],
        correctIndex: 1,
      },
      {
        id: "m10q3",
        question: "Na primeira semana do plano de 30 dias, o avaliador deve:",
        options: [
          "Realizar o máximo de missões possível",
          "Registar-se em 3 a 5 plataformas, completar perfis e fazer a primeira missão",
          "Focar-se apenas na formação teórica",
          "Contactar diretamente as marcas para oferecer serviços",
        ],
        correctIndex: 1,
      },
      {
        id: "m10q4",
        question: "Qual é a taxa de aceitação de relatórios que um avaliador deve almejar?",
        options: [
          "Acima de 50%",
          "Acima de 75%",
          "Acima de 95%",
          "100% em todas as circunstâncias",
        ],
        correctIndex: 2,
      },
      {
        id: "m10q5",
        question: "Que métrica NÃO é mencionada como indicador de progresso?",
        options: [
          "Número de missões por semana/mês",
          "Número de seguidores nas redes sociais",
          "Taxa de aceitação de relatórios",
          "Rendimento líquido mensal após custos",
        ],
        correctIndex: 1,
      },
    ],
  },
];

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
      "O Cliente Mistério é uma metodologia de avaliação da qualidade do serviço. O avaliador atua como cliente comum para observar e reportar a experiência real de atendimento, medindo o cumprimento de padrões de serviço.",
      "Oferece vantagens distintas dos inquéritos tradicionais: visão objetiva do ponto de contacto, dados padronizados e fiáveis para decisões empresariais.",
      "Benefícios para empresas: identificar falhas no atendimento, verificar cumprimento de procedimentos, benchmarking entre lojas, formação de equipas. Benefícios para avaliadores: remuneração por missão, flexibilidade, desenvolvimento de competências.",
      "Três atores principais: a marca (define padrões), a agência (recruta e coordena), o avaliador (executa e relata). Comunicação clara é essencial.",
      "Tipos de projetos: visitas presenciais, mystery calling (telefónico), avaliações online, auditorias de conformidade.",
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
      "Mercado em crescimento: Retalho, restauração, banca, telecomunicações, saúde, automóvel e serviços públicos procuram avaliadores com frequência.",
      "Três modelos de colaboração: Agências especializadas (volume e estabilidade), plataformas digitais (flexibilidade), colaboração direta com empresas (maior rentabilidade).",
      "Vantagens e desvantagens: Agências oferecem estabilidade mas requisitos exigentes. Plataformas oferecem variedade mas com maior concorrência. Direto é mais lucrativo mas exige negociação.",
      "Para ter mais missões: Manter perfil atualizado, responder rápido, cumprir prazos, qualidade de relatórios, variar disponibilidade, construir reputação.",
      "Iniciar em retalho, restauração rápida ou telecomunicações. Com experiência, aceder a projetos premium (banca, hotelaria de luxo) com melhor remuneração.",
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
      "Competências essenciais: Discrição (comportar-se naturalmente), rigor na observação e registo, imparcialidade (sem opiniões pessoais), consistência (mesmos critérios em todas as visitas).",
      "Confidencialidade é crítica: Nunca revelar identidade, projetos, marcas avaliadas ou resultados. Não partilhar em redes sociais ou com terceiros. Quebra resulta em exclusão permanente.",
      "Conflitos de interesse: Declarar antes de aceitar. Não avaliar onde trabalha ou tem familiares. Evitar marcas com ligação emocional forte que prejudique objetividade.",
      "Comportamento durante avaliação: Agir naturalmente conforme briefing, não forçar situações artificiais, não provocar colaboradores, respeitar regras do local.",
      "Valores inegociáveis: Pontualidade, profissionalismo, honestidade. Reportar apenas factos observados. Fraude compromete todo o sistema.",
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
      "Áreas avaliadas: Qualidade de atendimento, processos operacionais, produto/serviço, conformidade legal, experiência global (ambiente, limpeza, sinalética).",
      "Indicadores comuns: Tempo de espera até atendimento, tempo total da interação, cumprimento de scripts, cross-selling, apresentação pessoal, limpeza, disponibilidade de produtos-chave, NPS.",
      "Seguir rigorosamente a checklist do briefing. Registar factos, não opiniões. Se o critério é 'cumprimentar em 30 segundos', responder sim ou não baseado no facto observado, não na qualidade do cumprimento.",
      "Enviesamentos a evitar: Efeito halo (primeira impressão domina), tendência central (tudo médio), viés de confirmação (procurar provas que confirmem expectativa), viés de recência (dar peso ao final). Focar em factos, registar imediatamente após visita.",
      "Calibração entre avaliadores: Dois avaliadores no mesmo local devem ter avaliações semelhantes. Isto exige critérios claros, boa formação e guiões específicos.",
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
      "Preparação é crítica. Briefing contém: objetivos, perfil a assumir, checklist, requisitos de evidência, prazos e instruções especiais.",
      "Análise do briefing: Compreender cada item, memorizar persona, esclarecer dúvidas com agência, preparar perguntas específicas.",
      "Planeamento logístico: Definir melhor horário, planear trajeto e estacionamento, calcular tempo total (preparação + deslocamento + avaliação), prever custos, garantir materiais (telemóvel carregado, dinheiro, cartão).",
      "Gestão de riscos: Antecipar estabelecimento fechado, produto indisponível, reconhecimento, condições meteorológicas, imprevisto pessoal.",
      "Plano B para cada risco: Verificar horários antes de sair, ter segunda data no prazo, comunicar impedimentos à agência, nunca forçar visita em condições comprometidas.",
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
      "Naturalidade é crítica: Comportar-se como cliente comum — ritmo, tom de voz, linguagem corporal. Qualquer comportamento fora do normal levanta suspeitas.",
      "Técnicas de observação: Observação periférica (notar detalhes sem olhar fixamente), memorização estruturada (associar à checklist), ancoragem temporal (registar horas mentalmente), scan ambiental (limpeza, organização, sinalética).",
      "Recolha discreta: Não tirar notas visíveis. Usar telemóvel naturalmente. Fotografar discretamente se briefing exigir. Memorizar e registar após sair.",
      "Gerir imprevistos com flexibilidade: Produto em rutura — adaptar mantendo objetivos. Colaborador-alvo ausente — avaliar substituto. Fila/sobrelotação — incluir dados. Serviço indisponível — contactar agência.",
      "Regras fundamentais: Nunca revelar identidade, não prolongar visita artificialmente, não criar situações artificiais, manter cordialidade, contactar agência em dúvidas.",
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
      "Tipos de evidência: Talões/recibos (prova da transação), fotografias (exterior, interior, produto), registos de hora, notas manuscritas, gravações áudio (se autorizadas).",
      "Briefing especifica: Que evidência recolher, formato (foto, scan, digital), informação necessária (data, hora, valor), prazo. Não cumprir requisitos = rejeição.",
      "Organização imediata: Nomear ficheiros claramente (ex.: 'modulo_data_local_tipo'), verificar qualidade de fotos (legíveis, sem dados pessoais), guardar talões originais, cópia de segurança digital.",
      "Validação: Cruzar evidências com checklist, verificar coerência de dados, sem lacunas, todas as obrigatórias recolhidas.",
      "Checklist pós-visita: Talão presente, fotos legíveis, revisar briefing, registar observações em 15 minutos, hora de entrada/saída, aspetos invulgares comunicar à agência.",
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
      "Relatório é o produto final. Três pilares: Factos (objetivos), contexto (circunstâncias), evidência (provas).",
      "Estrutura: Dados da visita (data, hora, local, duração), respostas fechadas (sim/não, escalas), respostas abertas (descrição narrativa), classificação geral, anexos.",
      "Respostas fechadas: Precisão baseada no critério definido. Se critério é 'cumprimentar em 30 segundos', sim ou não — sem 'quase' ou 'com pouco entusiasmo'.",
      "Respostas abertas: Cronológicas e factuais. Detalhes relevantes (o que foi dito, reação do colaborador). Evitar opiniões pessoais. Linguagem clara e profissional. Extensão adequada.",
      "Submissão: Respeitar prazos (12-48 horas). Rever erros/contradições, anexar evidências, itens obrigatórios, clareza final. Fora de prazo, incompletos ou contraditórios = rejeição.",
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
      "Remuneração por missão: 5€ a 150€+ (depende complexidade, setor, requisitos). Reembolso de despesas obrigatórias quando documentadas (consumo, compra, estacionamento).",
      "Modelos de pagamento: Transferência mensal, por projeto após validação, carteiras digitais. Prazo típico: 15-60 dias após validação.",
      "Rentabilidade essencial: Considerar remuneração, tempo total (preparação + deslocação + execução + relatório), custos de deslocação, consumos não reembolsados, impostos. Missão 20€/3 horas + 15€ deslocação pode não ser rentável isoladamente.",
      "Aumentar rendimento: Agrupar várias missões na mesma zona (otimizar rotas), tornar-se regular em projetos, especializar em setores de valor (banca, hotelaria), aumentar volume, evoluir para missões premium.",
      "Gestão fiscal em Portugal: Rendimentos devem ser declarados. Pode ser prestador independente (recibos verdes) ou atividade ocasional. Consultar contabilista para otimização.",
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
      "Três pilares da reputação: Consistência (qualidade em todas as missões), qualidade (relatórios detalhados e precisos), cumprimento de prazos (entregar dentro do prazo). Avaliadores com boa reputação: contactados primeiro, acesso a projetos premium.",
      "Evolução natural: Começa com missões simples (retalho) → complexidade média (telecomunicações) → premium (banca, hotelaria, auditorias). Cada nível: mais preparação, detalhe, melhor remuneração.",
      "Acelerar evolução: Formação contínua (atendimento, observação, escrita), feedback das agências, analisar erros, diversificar setores, construir rede de contactos.",
      "Plano 30 dias — Semana 1: registar 3-5 plataformas, completar perfis, primeira missão. Semana 2: 2-3 missões, qualidade + prazos. Semana 3: feedback, ajustar, 3-4 missões. Semana 4: consolidar rotina, calcular rentabilidade, definir objetivos.",
      "Métricas a acompanhar: Número de missões/semana, taxa aceitação relatórios (>95%), qualidade média, rendimento líquido/mês, tempo médio/missão, agências ativas. Permite otimizar e crescer.",
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

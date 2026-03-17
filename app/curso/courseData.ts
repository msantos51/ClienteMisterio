/*
 * DESCRIÇÃO DO FICHEIRO: Dados completos do curso de Cliente Mistério — conteúdo por tópicos e questionários de cada módulo.
 */

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type ContentTopic = {
  heading: string;
  points: string[];
};

export type CourseModule = {
  id: number;
  title: string;
  description: string;
  content: ContentTopic[];
  quiz: QuizQuestion[];
};

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Módulo 1 — Enquadramento do Cliente Mistério",
    description: "Conceito, objetivos e intervenientes do Mystery Shopping.",
    content: [
      {
        heading: "O que é o Cliente Mistério?",
        points: [
          "Metodologia em que um avaliador se faz passar por cliente comum para observar e reportar a experiência real de atendimento.",
          "Mede o cumprimento de padrões de serviço definidos pela marca ou empresa.",
          "Oferece uma visão objetiva e padronizada — ao contrário dos inquéritos de satisfação tradicionais.",
          "Utilizado mundialmente em setores como retalho, banca, restauração, turismo e saúde.",
        ],
      },
      {
        heading: "Benefícios para empresas e avaliadores",
        points: [
          "Empresas: identificação de falhas, verificação de procedimentos, benchmarking entre unidades, dados para formação.",
          "Avaliadores: remuneração por missão, flexibilidade de horários, desenvolvimento de competências de observação.",
          "Acesso a experiências diversificadas em diferentes setores e contextos de atendimento.",
        ],
      },
      {
        heading: "Intervenientes principais",
        points: [
          "Marca/empresa — contrata o serviço e define os padrões a avaliar.",
          "Agência/plataforma — recruta, forma e coordena os avaliadores.",
          "Avaliador (shopper) — executa a missão, recolhe evidências e submete o relatório.",
          "O alinhamento entre os três atores é essencial para o sucesso do projeto.",
        ],
      },
      {
        heading: "Tipos de projetos",
        points: [
          "Visitas presenciais a lojas, restaurantes ou serviços.",
          "Mystery calling — contactos telefónicos para avaliar atendimento remoto.",
          "Mystery e-mailing/web — avaliações de canais digitais.",
          "Auditorias de conformidade — verificação de normas legais ou internas.",
        ],
      },
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
      {
        heading: "Setores com maior procura",
        points: [
          "Retalho (moda, eletrónica, supermercados) — elevado volume de missões.",
          "Restauração e hotelaria — avaliação de experiência completa.",
          "Banca, seguros e telecomunicações — missões de maior valor.",
          "Saúde, farmácias, automóvel e serviços públicos — nichos em crescimento.",
        ],
      },
      {
        heading: "Modelos de colaboração",
        points: [
          "Agências especializadas (MSPA, Ipsos, 4Service…) — maior volume e estabilidade, requisitos mais exigentes.",
          "Plataformas digitais (marketplace) — flexibilidade e variedade, maior concorrência entre avaliadores.",
          "Cliente direto — potencialmente mais lucrativo, exige capacidade de prospeção comercial.",
        ],
      },
      {
        heading: "Como aumentar a taxa de aceitação",
        points: [
          "Manter perfil completo e atualizado em todas as plataformas.",
          "Responder rapidamente às oportunidades de missão.",
          "Cumprir prazos de entrega de forma consistente.",
          "Produzir relatórios de alta qualidade.",
          "Diversificar disponibilidade geográfica e horária.",
        ],
      },
      {
        heading: "Áreas mais acessíveis para iniciantes",
        points: [
          "Retalho alimentar e não alimentar — grande rotatividade de avaliadores.",
          "Restauração rápida — missões simples e frequentes.",
          "Telecomunicações — volume elevado de avaliações em loja.",
          "Com experiência, evolui-se para banca, automóvel e hotelaria de luxo.",
        ],
      },
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
      {
        heading: "Qualidades essenciais do avaliador",
        points: [
          "Discrição — comportar-se como cliente comum sem levantar suspeitas.",
          "Rigor — observar e registar com precisão para dados fiáveis.",
          "Imparcialidade — não deixar opiniões pessoais contaminar a avaliação.",
          "Consistência — aplicar os mesmos critérios em todas as visitas.",
        ],
      },
      {
        heading: "Confidencialidade",
        points: [
          "Nunca revelar a identidade ou função durante ou após a missão.",
          "Não partilhar informações sobre projetos, marcas ou resultados com terceiros.",
          "Proibido discutir missões em redes sociais, mesmo sem nomear marcas.",
          "Quebra de confidencialidade pode resultar em exclusão permanente.",
        ],
      },
      {
        heading: "Conflitos de interesse",
        points: [
          "Não avaliar locais onde trabalha, já trabalhou ou tem familiares empregados.",
          "Não aceitar missões de marcas com ligação emocional forte (positiva ou negativa).",
          "Declarar qualquer conflito antes de aceitar uma missão.",
        ],
      },
      {
        heading: "Boas práticas durante a avaliação",
        points: [
          "Agir de forma natural e coerente com o perfil definido no briefing.",
          "Não forçar situações artificiais nem provocar colaboradores.",
          "Respeitar as regras do estabelecimento.",
          "Reportar exatamente o que observou — sem embelezar, minimizar ou inventar.",
          "Relatórios fraudulentos comprometem todo o sistema e levam a exclusão.",
        ],
      },
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
      {
        heading: "Dimensões da avaliação",
        points: [
          "Atendimento — saudação, simpatia, conhecimento do produto, proatividade.",
          "Processos operacionais — tempos de espera, procedimentos de caixa, gestão de filas.",
          "Produto/serviço — apresentação, disponibilidade, conformidade com o anunciado.",
          "Conformidade — cumprimento de normas legais, regulamentares ou internas.",
          "Experiência global — ambiente, limpeza, sinalética, acessibilidade.",
        ],
      },
      {
        heading: "Indicadores e métricas frequentes",
        points: [
          "Tempo de espera até ser atendido e tempo total da interação.",
          "Taxa de cumprimento de scripts de atendimento.",
          "Taxa de cross-selling ou up-selling.",
          "Apresentação pessoal dos colaboradores.",
          "Estado de limpeza e organização do espaço.",
          "Disponibilidade de produtos-chave.",
        ],
      },
      {
        heading: "Seguir o guião com rigor",
        points: [
          "Avaliar cada item conforme os critérios definidos no briefing, sem interpretações subjetivas.",
          "Exemplo: se o critério diz 'cumprimentou nos primeiros 30 segundos', registar se aconteceu ou não — factualmente.",
          "Não há espaço para 'quase cumpriu' — ou cumpriu o critério ou não cumpriu.",
        ],
      },
      {
        heading: "Enviesamentos a evitar",
        points: [
          "Efeito halo — uma primeira impressão (boa ou má) influencia toda a avaliação.",
          "Tendência central — classificar tudo como 'médio', evitando extremos.",
          "Viés de confirmação — procurar evidências que confirmem uma expectativa prévia.",
          "Viés de recência — dar mais peso ao que aconteceu no final da visita.",
          "Solução: focar em factos, registar imediatamente e seguir a checklist ponto por ponto.",
        ],
      },
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
      {
        heading: "Importância da preparação",
        points: [
          "A preparação é a fase mais crítica — uma preparação deficiente pode invalidar toda a missão.",
          "O briefing contém tudo o que precisa: objetivos, perfil a assumir, checklist, requisitos de evidência e prazos.",
          "Ler o briefing completo com tempo suficiente antes da visita.",
        ],
      },
      {
        heading: "Análise do briefing",
        points: [
          "Compreender cada item da checklist e o que é esperado em cada resposta.",
          "Memorizar o cenário/persona (ex.: 'cliente interessado num smartphone até 300€').",
          "Identificar dúvidas e esclarecê-las com a agência antes da visita.",
          "Preparar perguntas ou interações específicas que o briefing exija.",
        ],
      },
      {
        heading: "Planeamento logístico",
        points: [
          "Definir o melhor horário (considerando requisitos do briefing e afluência).",
          "Planear trajeto e estacionamento.",
          "Calcular tempo necessário (avaliação + deslocamento).",
          "Prever custos: deslocação, consumos obrigatórios, estacionamento.",
          "Garantir materiais: telemóvel carregado, dinheiro/cartão disponível.",
        ],
      },
      {
        heading: "Gestão de riscos",
        points: [
          "Estabelecimento fechado (férias/obras) — verificar horários antes de sair.",
          "Produto/serviço indisponível — ter alternativa prevista.",
          "Avaliador reconhecido — não repetir visitas recentes ao mesmo local.",
          "Imprevisto pessoal — comunicar antecipadamente com a agência.",
          "Regra: é preferível reagendar do que submeter uma avaliação comprometida.",
        ],
      },
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
      {
        heading: "Naturalidade é a chave",
        points: [
          "Entrar e comportar-se exatamente como um cliente comum.",
          "Atenção ao ritmo de deslocação, tom de voz e linguagem corporal.",
          "Qualquer comportamento fora do normal pode comprometer a missão.",
        ],
      },
      {
        heading: "Técnicas de observação",
        points: [
          "Observação periférica — notar detalhes sem olhar diretamente ou fixamente.",
          "Memorização estruturada — associar observações aos pontos da checklist.",
          "Ancoragem temporal — registar mentalmente tempos exatos ('entrei às 14h32, fui abordado às 14h35').",
          "Scan ambiental — avaliar rapidamente limpeza, organização e sinalética nos primeiros momentos.",
        ],
      },
      {
        heading: "Recolha discreta de informação",
        points: [
          "Nunca tirar notas visíveis durante a visita.",
          "Usar o telemóvel apenas de forma natural (como qualquer cliente faria).",
          "Fotografar discretamente e só quando o briefing o exige.",
          "Memorizar detalhes e registá-los imediatamente após sair do local.",
        ],
      },
      {
        heading: "Gestão de imprevistos",
        points: [
          "Rutura de stock — adaptar a interação mantendo os objetivos da avaliação.",
          "Colaborador-alvo ausente — avaliar quem o substituiu.",
          "Filas ou sobrelotação — manter naturalidade e incluir no relatório.",
          "Nunca revelar que é avaliador, mesmo que suspeite que foi identificado.",
          "Em caso de dúvida: optar pela naturalidade e contactar a agência depois.",
        ],
      },
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
      {
        heading: "Tipos de evidência",
        points: [
          "Talões de compra ou recibos — prova de que a transação ocorreu.",
          "Fotografias — exterior, interior, produto, expositor ou situações específicas.",
          "Registos de data e hora — comprovam o momento exato da visita.",
          "Notas pós-visita — detalhes de interações e observações.",
          "Em alguns projetos: gravações áudio autorizadas.",
        ],
      },
      {
        heading: "Requisitos definidos pelo projeto",
        points: [
          "O briefing especifica que evidências são obrigatórias vs. opcionais.",
          "Define formato (foto, scan, ficheiro digital), informação necessária (data, hora, valor).",
          "O não cumprimento dos requisitos de evidência é uma das principais causas de rejeição.",
        ],
      },
      {
        heading: "Organização e validação",
        points: [
          "Nomear ficheiros de forma clara (ex.: 'modulo_data_local_tipo').",
          "Verificar qualidade das fotografias — legíveis, bem enquadradas, sem dados pessoais.",
          "Guardar originais dos talões em local seguro.",
          "Criar cópia de segurança digital de toda a documentação.",
          "Cruzar evidências com a checklist: todos os itens estão cobertos?",
        ],
      },
      {
        heading: "Checklist pós-visita",
        points: [
          "Confirmar que tem o talão/recibo.",
          "Verificar que as fotos foram tiradas e estão legíveis.",
          "Rever mentalmente cada ponto da checklist do briefing.",
          "Registar observações por escrito nos primeiros 15 minutos.",
          "Anotar hora exata de entrada e saída.",
          "Identificar aspetos invulgares a comunicar à agência.",
        ],
      },
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
      {
        heading: "O relatório como produto final",
        points: [
          "É através do relatório que a marca toma decisões sobre formação e processos.",
          "Três pilares: factos (o que aconteceu), contexto (circunstâncias) e evidência (provas).",
        ],
      },
      {
        heading: "Estrutura típica",
        points: [
          "Dados da visita — data, hora, local, duração.",
          "Perguntas fechadas — sim/não, escalas numéricas, escolha múltipla.",
          "Perguntas abertas — descrições narrativas de situações observadas.",
          "Classificação geral da experiência.",
          "Anexos — evidências fotográficas, talões, etc.",
        ],
      },
      {
        heading: "Respostas fechadas vs. abertas",
        points: [
          "Fechadas: ser preciso e basear-se estritamente no critério factual definido.",
          "Não existe 'quase cumprimentou' — ou cumpriu o critério ou não.",
          "Abertas: descrever cronológica e factualmente o que aconteceu.",
          "Incluir detalhes relevantes: o que foi dito, como, a reação do colaborador.",
          "Evitar opiniões pessoais não solicitadas. Usar linguagem clara e profissional.",
        ],
      },
      {
        heading: "Submissão e prazos",
        points: [
          "Prazo típico: 12 a 48 horas após a visita.",
          "Antes de submeter: rever erros, verificar evidências, confirmar itens obrigatórios.",
          "Três principais razões de rejeição: fora de prazo, incompleto ou informação contraditória.",
        ],
      },
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
      {
        heading: "Como funciona a remuneração",
        points: [
          "Pagamento por missão/projeto — valor fixo definido previamente (5€ a 150€+).",
          "Varia conforme complexidade, duração, setor e requisitos.",
          "Muitos projetos incluem reembolso de despesas obrigatórias (consumo, estacionamento).",
        ],
      },
      {
        heading: "Modelos de pagamento",
        points: [
          "Transferência bancária mensal (agregando missões do mês).",
          "Pagamento por projeto após validação do relatório.",
          "Carteiras digitais ou métodos de pagamento online.",
          "Prazo típico: 15 a 60 dias após validação.",
        ],
      },
      {
        heading: "Cálculo de rentabilidade",
        points: [
          "Considerar: remuneração, tempo total (preparação + deslocação + execução + relatório).",
          "Custos: combustível, portagens, transportes, estacionamento, consumos não reembolsados.",
          "Exemplo: missão de 20€ com 3 horas e 15€ de deslocação pode não ser rentável isoladamente.",
          "Impostos aplicáveis devem ser considerados no cálculo final.",
        ],
      },
      {
        heading: "Estratégias para aumentar o rendimento",
        points: [
          "Otimização de rotas — agrupar várias missões na mesma zona/dia.",
          "Recorrência — tornar-se avaliador regular de projetos específicos.",
          "Especialização — focar em setores de maior valor (banca, automóvel, hotelaria).",
          "Volume — aumentar o número de missões por semana/mês.",
          "Gestão fiscal: declarar rendimentos, considerar recibos verdes se atividade regular.",
        ],
      },
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
      {
        heading: "Construção de reputação",
        points: [
          "Consistência — manter qualidade em todas as missões, independentemente do valor.",
          "Qualidade — relatórios detalhados, precisos e bem escritos.",
          "Cumprimento de prazos — entregar sempre dentro do prazo, preferencialmente antes.",
          "Avaliadores com boa reputação têm acesso prioritário a projetos premium.",
        ],
      },
      {
        heading: "Trajetória de evolução",
        points: [
          "Nível 1: missões simples — retalho, restauração rápida.",
          "Nível 2: complexidade média — telecomunicações, saúde.",
          "Nível 3: missões premium — banca, automóvel, hotelaria de luxo, auditorias.",
          "Cada nível exige mais preparação e detalhe, mas oferece melhor remuneração.",
        ],
      },
      {
        heading: "Plano de ação — 30 dias",
        points: [
          "Semana 1: registar-se em 3-5 plataformas/agências, completar perfis, realizar a 1.ª missão.",
          "Semana 2: realizar 2-3 missões focando na qualidade dos relatórios.",
          "Semana 3: analisar feedback, ajustar abordagem, aumentar para 3-4 missões.",
          "Semana 4: consolidar rotina, calcular rentabilidade real, definir objetivos para o mês seguinte.",
        ],
      },
      {
        heading: "Métricas de progresso a acompanhar",
        points: [
          "Número de missões realizadas por semana/mês.",
          "Taxa de aceitação de relatórios (objetivo: >95%).",
          "Pontuação média de qualidade (se disponível pela agência).",
          "Rendimento líquido mensal (após todos os custos).",
          "Tempo médio por missão (preparação + execução + relatório).",
          "Número de agências/plataformas ativas.",
        ],
      },
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

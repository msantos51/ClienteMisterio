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
  keywords?: string[];
  practicalTip?: string;
  warning?: string;
  benefit?: string;
};

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Módulo 1 — Enquadramento do Cliente Mistério",
    description: "Conceito, objetivos e intervenientes do Mystery Shopping.",
    keywords: ["Mystery Shopping", "Avaliação de Serviço", "Cliente Anónimo", "Qualidade", "Padrões"],
    practicalTip: "Pensa no Cliente Mistério como um 'inspetor invisível' que ajuda as marcas a melhorar. Tu és esse inspetor!",
    warning: "Confidencialidade é SAGRADA. Nunca comentes as tuas avaliações em redes sociais ou conversas casuais.",
    benefit: "Ganhas flexibilidade total, remuneras por cada missão e ainda ajudas as marcas a melhorar o serviço.",
    content: [
      "O que é Cliente Mistério? É uma profissão moderna em crescimento! Atuas como cliente normal para avaliar a qualidade real do serviço. Observas, registas e reportas tudo sem revelar que estás a avaliar. É como um jogo onde tens uma missão secreta!",
      "Por que é diferente dos questionários normais? Porque tu experimentas de verdade! Não é uma pergunta teórica. É a experiência real do cliente. As empresas adoram porque obtêm dados honestos e concretos.",
      "Ganha-se com isto? Sim! Para empresas: descobrem problemas reais, medem se os procedimentos funcionam, comparam lojas entre si e formam as equipas. Para ti: remuneração por missão, trabalhas quando queres e ganhas experiência valiosa.",
      "Os 3 heróis desta história: A marca (diz o que quer saber), a agência (encontra-te a ti e coordena), tu (fazes a magia acontecer). Todos trabalham juntos!",
      "Tipos de missões: Visitas normais às lojas, telefonemas (mystery calling), avaliações online, inspeções de conformidade. Há sempre algo diferente!",
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
    keywords: ["Retalho", "Restauração", "Banca", "Plataformas", "Agências", "Oportunidades"],
    practicalTip: "Começa por setores acessíveis como retalho e restauração. Depois evolui para banca e hotelaria quando tiveres experiência!",
    warning: "Nem todas as plataformas pagam bem. Compara as condições e remuneração ANTES de te registares.",
    benefit: "O mercado está em crescimento — há MUITAS oportunidades e demanda por avaliadores de qualidade.",
    content: [
      "Mercado em fogo! Retalho, restauração, banca, telecomunicações, farmácias, hotelaria, automóvel... Todas querem saber o que o cliente pensa. Há procura constante de avaliadores!",
      "3 maneiras de trabalhar: Agências (é tipo um intermediário que te arranja trabalho), Plataformas digitais (tipo Uber do mystery shopping) ou direto com as marcas (melhor lucro, mas precisa de negociação).",
      "Vantagens vs Desvantagens: Agências = segurança + volume de missões, mas regras mais apertadas. Plataformas = variedade + flexibilidade, mas muita concorrência. Direto = lucro máximo, mas tu é que tens de negociar.",
      "Abre o teu potencial: Perfil completo e atualizado, Respostas rápidas, Qualidade impecável nos relatórios, Mais missões para ti! É uma engrenagem simples.",
      "Caminho típico: Começa no retalho ou restauração rápida (fácil). Depois Telecomunicações/Banca (intermédio). Por fim, Hotelaria de luxo ou auditorias (premium, melhor pago).",
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
    keywords: ["Discrição", "Confidencialidade", "Integridade", "Ética", "Profissionalismo"],
    practicalTip: "Imagina que és um espião do bom, mas em vez de salvar o mundo, estás a ajudar as marcas a melhorar!",
    warning: "Confidencialidade é INVIOLÁVEL. Se revelares uma avaliação, seras banido permanentemente. Não vale a pena!",
    benefit: "Ao manteres padrões éticos altos, constrói-se uma reputação excelente e recebes missões melhores.",
    content: [
      "O perfil ideal: Discrição (ninguém pode saber que estás a avaliar), rigor (regista tudo com precisão), imparcialidade (sem deixar opiniões pessoais contaminar), consistência (mesmos critérios sempre). Basicamente, és um observador invisível!",
      "Confidencialidade = Profissão intacta: Nunca, NUNCA contes ao teu amigo que foste avaliar a Starbucks. Não comentes no Instagram, no Whatsapp, na família. Isto é sagrado. Quebra = BAN permanente da profissão.",
      "Conflitos de interesse: Trabalhas na loja a avaliar? Tens um familiar lá? Amas muito a marca? Declara ANTES de aceitar. Não vale a pena arriscar.",
      "Durante a missão: Comporta-te como cliente normal. Sem criar situações artificiais, sem provocar ninguém, sem fazer anotações visíveis. É como estar incognito!",
      "Valores que não se negociam: Estar a horas (sempre!), ser profissional (sempre!), ser honesto (sempre!). Só reporta factos, não inventas nada. Fraude = fim de carreira instantâneo.",
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
    keywords: ["Avaliação", "Critérios", "Indicadores", "Objetividade", "Checklist"],
    practicalTip: "Esqueça a opinião pessoal. Se o critério é 'cumprimento em 30 segundos', é sim ou não — nada de 'quase'!",
    warning: "Cuidado com os 'vieses': primeira impressão, tudo parecer médio, ou dar peso apenas ao final. Observa TUDO!",
    benefit: "Ao segui-lo à risca, os teus relatórios são impecáveis e a taxa de aprovação sobe dramaticamente.",
    content: [
      "O que se avalia? Atendimento (o colaborador aborda-te?), processos (cumprem os procedimentos?), produto/serviço (está de qualidade?), conformidade (segue as regras legais?), experiência (limpeza, ambiente, sinalética). Tudo isto junto = avaliação completa.",
      "Indicadores que encontras sempre: Quanto tempo esperaste até ser atendido? Quanto tempo levou a interação toda? Disse o colaborador a frase de boas-vindas? Ofereceu produtos adicionais? Estava bem apresentado? Estava tudo limpo? E a música, o ambiente? É tudo medível!",
      "Regra de ouro: Segue a checklist como um mapa. Se diz 'cumprimento em 30 segundos', é SIM ou NÃO baseado no facto, não na tua opinião. Não existe 'quase cumpriu'. É preto ou branco!",
      "Cuidado com as armadilhas mentais: Efeito halo (primeira impressão contamina tudo), tendência central (tudo sai 'médio' para não comprometeres), viés de confirmação (procuras provas que confirmem o que já pensas), viés de recência (o final marca mais que o resto). Luta contra isto!",
      "Se 2 avaliadores entram no mesmo sítio: Devem sair com avaliações parecidas. Isto prova que o critério é claro e funciona bem. Diferenças grandes = algo está mal no sistema.",
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
    keywords: ["Briefing", "Planeamento", "Logística", "Riscos", "Preparação"],
    practicalTip: "30 minutos a preparar = evita 30 horas de problemas. Prepara-te bem e tudo corre bem!",
    warning: "Não verifiques horários? Podem estar fechados. Não leves dinheiro? Não podes fazer compra de prova. Planeia!",
    benefit: "Preparação excelente = missão suave, sem stresses, e relatório top-notch que é aprovado de primeira.",
    content: [
      "O briefing é o teu mapa do tesouro: Tem objetivos (o que queremos saber), persona (que tipo de cliente és), checklist (o que observar), evidências (fotos, talões, etc.), prazos (quando entregar) e instruções especiais (coisas únicas deste projeto).",
      "Leitura inteligente: Lê uma vez para compreender. Lê outra para memorizar a persona. Se algo não faz sentido, pergunta à agência ANTES de sair. Não vale improvisar.",
      "Planeamento logístico = sucesso: Que hora é melhor? Como chego lá? Há parque? Quanto tempo leva tudo (preparação + caminho + avaliação + registo)? Quanto me custa? Tenho telemóvel carregado? E dinheiro para compras? Cartão se precisar? Isto não é chato. É o caminho da vitória!",
      "Antecipa os problemas: A loja pode estar fechada, verifica horários. O produto pode não estar, tem plan B. Pode chover, leva guarda-chuva. Tem um imprevisto pessoal, comunica já à agência. Nunca improvises no terreno!",
      "Plano B para tudo: Loja fechada no dia previsto? Reagenda noutro dia (dentro do prazo). Produto indisponível? Adapta a avaliação. Muito barulho ou cheia? Regista de qualquer forma. Só cancela se realmente não conseguir.",
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
    keywords: ["Naturalidade", "Observação", "Discrição", "Improvisos", "Execução"],
    practicalTip: "Sê um cliente normal. Não apareças com um caderno de investigador ou pedindo informação estranha!",
    warning: "Se te identificares como avaliador, a missão fica completamente inútil. Nunca reveles!",
    benefit: "Execução natural e bem feita = dados reais e honestos = relatório que realmente ajuda a marca.",
    content: [
      "Naturalidade é tudo: Comporta-te como cliente comum. Ritmo normal, voz natural, linguagem corporal relaxada. Se fizeres algo estranho, levantam suspeitas. Imagina que és tu mesmo naquele sítio, a fazer uma compra normal.",
      "Como observar sem ser óbvio: Observação do canto do olho (não olhes fixamente), memorização associada (relaciona os detalhes com a checklist para lembrar), marca as horas mentalmente (entrada 10:15, abordagem 10:18, etc.), observa ambiente inteiro (limpeza, organização, sinalética, outros clientes).",
      "Regista de forma discreta: Não sacas caderno e caneta! Usa telemóvel como cliente normal (consultando horários, enviando msg, etc.). Se tiveres de fotografar, faz como quem faz selfies. Não tires notas até sair do local.",
      "E se correr tudo ao contrário? Produto indisponível, adapta mantendo objetivo. Colaborador certo ausente, avalia quem está. Loja cheia, regista de qualquer forma. Sem serviço, contacta agência. Há sempre solução.",
      "Linha vermelha: Nunca revelis identidade, nunca prolongueis artificialmente (parece estranho), nunca criem situações fake (não é espião de Hollywood!), mantém sempre cordialidade, em dúvida contacta agência.",
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
    keywords: ["Evidências", "Documentação", "Fotos", "Talões", "Organização"],
    practicalTip: "Guarda talão legível, tira fotos claras e organiza tudo em 15 minutos após a visita. Depois fica mais difícil!",
    warning: "Fotos desfocadas, talão rasgado ou sem data = rejeição garantida. Qualidade de evidência é crítica!",
    benefit: "Evidências excelentes = relatório aprovado rapidinho = reputação top = mais missões para ti!",
    content: [
      "Tipos de evidência que recolhes: Talões/recibos (prova de que estive lá e comprei algo), fotografias (exterior da loja, interior, produto, etc.), registos de horas (quando cheguei, quando fui atendido), notas escritas (observações), gravação áudio (se o briefing permitir).",
      "O briefing dita as regras: Qual evidência? (talão obrigatório? fotos?), em que formato? (foto, scan, digital?), quais dados? (data, hora, valor?), prazos? Não cumpres = rejeição. É assim mesmo!",
      "Organiza já, enquanto fresco: Nomeia os ficheiros com padrão claro (ex.: '20250320_starbucks_talao_foto'), verifica se fotos estão legíveis (não desfocadas!), sem dados pessoais de terceiros, guarda talão original (não o destruas!), faz backup no computador.",
      "Validação simples: Cruza evidências com checklist (tenho tudo?), verifica se dados batem (talão diz 10:15, eu coloquei 10:15?), nenhuma lacuna, todas as obrigatórias presentes?",
      "Checklist de ouro pós-visita: Tenho o talão legível? Fotos claras e bem focadas? Revê o briefing outra vez? Registei observações nos primeiros 15 minutos? Tenho horas de entrada e saída? Algo invulgar, comunica já à agência.",
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
    keywords: ["Relatório", "Escrita", "Objetividade", "Qualidade", "Submissão"],
    practicalTip: "Escreve como jornalista: factos, contexto, evidências. Sem opinião pessoal. Seca e clara!",
    warning: "Relatório contraditório (checklist diz um coisa, texto diz outra) = rejeição. Coerência é essencial!",
    benefit: "Relatórios de qualidade = taxa de aprovação >95% = convidado para missões melhores e mais bem pagas.",
    content: [
      "O relatório é o teu produto: É o que a marca recebe. Tem de ser perfeito. 3 pilares: Factos (o que observei), contexto (circunstâncias da visita), evidência (provas que recolhi). Isto é ouro!",
      "Estrutura padrão: Dados da visita (data, hora, local, quanto tempo durou), respostas fechadas (SIM/NÃO, escalas de 1-5), respostas abertas (descrição cronológica do que aconteceu), classificação global, anexos (fotos, talão, etc.).",
      "Respostas fechadas: Sem meio-termo! Se o critério é 'cumprimento em 30 segundos', é SIM ou NÃO. Não existe 'quase', 'com entusiasmo limitado' ou 'mais ou menos'. Factual!",
      "Respostas abertas: Cronológicas (1º isto aconteceu, depois aquilo) e factuais (o que foi DITO, como REAGIU). Sem opiniões tipo 'serviço péssimo' ou 'colaborador simpático'. Apenas observações mensuráveis. Linguagem clara, extensão adequada (nem muita, nem pouca).",
      "Entrega impecável: Prazo 12-48 horas (não tardes!). Reve tudo antes (erros, contradições entre checklist e texto), anexa TODAS as evidências obrigatórias, itens mandatórios todos preenchidos. Submete e pronto. Está pronto para review!",
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
    keywords: ["Remuneração", "Rentabilidade", "Pagamentos", "Custos", "Lucro"],
    practicalTip: "Calcula a rentabilidade: (remuneração - custos) / horas totais. Se for <6€/hora, pode não valer a pena.",
    warning: "Nem todas as despesas são reembolsadas. Lê o briefing. Consumo não obrigatório = vem do teu bolso!",
    benefit: "Bem gerido, isto é um rendimento extra legítimo e flexível. Desde moeda de bolso a rendimento significativo!",
    content: [
      "Quanto se ganha? Varia MUITO: 5€ a 150€+ por missão. Depende de complexidade (simples vs auditoria), setor (retalho vs banca), requisitos (só observar vs fazer compra+relatório+foto). Reembolsos de despesas obrigatórias: compras, consumos, estacionamento (se documentados).",
      "Como funciona o pagamento? Varia: transferência mensal, por projeto após validação, carteiras digitais. Prazo típico: 15-60 dias após a agência validar. Sim, pode demorar. Prepara-te para isto!",
      "Cálculo da rentabilidade: é simples! Remuneração (20€) menos custos (combustível 10€ + estacionamento 5€ + consumo não reembolsado 3€) = lucro real (2€). Tempo total: preparação 30min + deslocação 30min + execução 30min + relatório 45min = 2h 15min. Lucro/hora = 2€/2.25h = 0.88€/hora. Não vale a pena! Precisa ser mais de 6€/hora (minimum).",
      "Aumenta o rendimento: Agrupa missões na mesma zona (mesma manhã, várias lojas), torna-te regular em projetos (agência confia em ti), especializa em setores de valor (banca, hotelaria premium = mais dinheiro), aumenta volume (mais missões), evolui para premium (auditorias, consultoria).",
      "Impostos em Portugal: Tens de declarar! Podes ser prestador independente (recibos verdes), atividade ocasional, ou integrar uma empresa. Consulta contabilista para não dares tiros nos pés.",
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
    keywords: ["Carreira", "Reputação", "Desenvolvimento", "Plano de Ação", "Crescimento"],
    practicalTip: "Guarda histórico de todas as missões e feedback. Isto é ouro — mostra tua evolução!",
    warning: "Sem estratégia clara, ficas preso em missões simples e mal pagas. Define objetivos claros!",
    benefit: "Com reputação excelente, és convidado para melhores projetos, ganhas mais e tens segurança de trabalho.",
    content: [
      "Pilares de uma reputação ouro: Consistência (mesma qualidade SEMPRE), qualidade dos relatórios (detalhados e precisos), cumprimento de prazos (nunca em cima da hora). Resultado? Contactam-te primeiro, recebes convites para projetos premium, ganhas mais!",
      "Caminho de evolução típico: Começar simples (retalho, restauração fast-food). Depois complexidade média (telecomunicações, farmácias). Depois premium (banca, hotelaria de luxo, auditorias). Cada salto = mais tempo de preparação, mais detalhe, remuneração 3-5x maior!",
      "Acelera a evolução: Formação contínua (estuda observação, escrita, sectores), pede feedback das agências (porque foi rejeitado?), analisa erros (e não repetes), diversifica setores (conhecimento é poder), constrói rede (contactos = oportunidades).",
      "Plano de 30 dias. Começa AGORA: Semana 1: Regista em 3-5 plataformas, completa perfis 100%, faz 1ª missão com calma. Semana 2: 2-3 missões, prioriza qualidade. Semana 3: Pede feedback, ajusta, tenta 3-4 missões. Semana 4: Consolida rotina, calcula rentabilidade real, define objetivos para mês 2.",
      "Métricas que controlam teu crescimento: Quantas missões/semana? Taxa de aprovação superior a 95%? Qualidade média dos relatórios? Rendimento líquido/mês? Tempo médio por missão? Quantas agências te contactam? Acompanha isto religiosamente!",
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

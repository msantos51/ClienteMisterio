/*
 * DESCRIÇÃO DO FICHEIRO: Detalhe expandido de cada módulo — título, descrição curta,
 * subtítulo, objetivos de aprendizagem, aplicações práticas, caso real, duração e
 * recursos. É a única fonte de dados de curso importada pela página pública /o-curso:
 * ao contrário de courseData.ts, nunca inclui o conteúdo teórico completo nem as
 * respostas dos quizzes, para nada disso ficar no bundle de uma página sem autenticação.
 * As chaves seguem os ids de courseData.ts.
 */

export const expandedModuleData = {
  1: {
    title: "O lado invisível do serviço",
    description: "O que é ser cliente mistério, quem paga a fatura e porque é que a tua opinião, bem escrita, vale dinheiro.",
    subtitle: "O que é, quem paga e porque é que isto existe",
    learningObjectives: [
      "Explicar o que é cliente mistério e em que se distingue de um inquérito de satisfação",
      "Identificar os três intervenientes e o papel de cada um no ciclo da missão",
      "Reconhecer os formatos de missão e o que cada um exige",
      "Compreender o impacto real de um relatório na vida das equipas avaliadas",
    ],
    practicalApplications: [
      "Ler uma oferta de missão e perceber imediatamente o que a marca quer medir",
      "Antecipar o ciclo entre a visita e o pagamento em cada plataforma",
      "Aplicar a regra \"se não consegues provar, não escreves\" desde a primeira visita",
    ],
    realWorldExample:
      "Uma cadeia de 80 lojas jurava, de mão no coração, que 100% dos clientes eram cumprimentados à entrada. Os relatórios dos avaliadores diziam outra coisa: 40%. A direção não gostou nada da notícia — ninguém gosta de ouvir que o espelho mente — mas formou as equipas na mesma. Três meses depois, os cumprimentos subiram para 95% e as vendas foram atrás, porque um \"bom dia\" a tempo vale mais do que qualquer promoção na montra. A moral da história: ninguém pediu a um avaliador para ser simpático. Pediram-lhe para contar a verdade, por mais chata que fosse — e foi essa verdade, escrita num café qualquer, que mudou o hábito de 80 equipas.",
    duration: "14 minutos",
    resourcesIncluded: [
      "Mapa dos formatos de missão e do que cada um exige",
      "Glossário essencial: briefing, guião, item, janela horária, evidência",
      "Checklist: como ler uma oferta de missão em 60 segundos",
    ],
  },
  2: {
    title: "O mercado e onde estão as missões",
    description: "Quem opera em Portugal, que setores pagam melhor e como escolher missões que compensam mesmo.",
    subtitle: "Plataformas, setores e a conta que decide se compensa",
    learningObjectives: [
      "Distinguir plataformas internacionais de agências locais e o que esperar de cada uma",
      "Comparar setores por valor, duração típica e exigência",
      "Separar honorário de reembolso em qualquer oferta",
      "Calcular o valor líquido por hora antes de aceitar uma missão",
    ],
    practicalApplications: [
      "Criar a tua lista pessoal de plataformas por ordem de prioridade",
      "Recusar missões que não passam no teu mínimo por hora, sem hesitar",
      "Agrupar missões por zona para duplicar o rendimento horário",
    ],
    realWorldExample:
      "Um avaliador viu \"missão de 25 €\" e já se imaginava a pagar o café do mês. Fez a conta a sério: 40 minutos de carro, 30 de visita, 40 a escrever o relatório e 6 € em combustível. Resultado — uns modestos 10 €/hora, o mesmo que ganharia a passear o cão de alguém. No dia seguinte fez diferente: aceitou mais duas missões na mesma zona, no mesmo trajeto, e o valor por hora quase duplicou sem mudar uma única missão de sítio. A lição não é \"aceita tudo\" nem \"recusa tudo\" — é fazer a conta antes de dizer que sim. As plataformas não avisam disto; a folha de cálculo, sim.",
    duration: "16 minutos",
    resourcesIncluded: [
      "Tabela de setores com intervalos de honorário praticados em Portugal",
      "Calculadora de valor líquido por hora (folha de cálculo)",
      "Sinais de alerta: como identificar plataformas fraudulentas",
    ],
  },
  3: {
    title: "Perfil, conduta e ética",
    description: "Discrição, imparcialidade e confidencialidade: as três regras que te mantêm no jogo (e as linhas que nunca se passam).",
    subtitle: "Discrição, imparcialidade, confidencialidade e linhas vermelhas",
    learningObjectives: [
      "Comportar-se como cliente comum sem levantar suspeitas em qualquer setor",
      "Aplicar as três regras de ouro em situações concretas",
      "Identificar conflitos de interesse antes de aceitar a missão",
      "Tratar dados pessoais de colaboradores em conformidade com o RGPD",
    ],
    practicalApplications: [
      "Ter uma resposta pronta e natural para o \"anda a fazer um estudo?\"",
      "Ajustar o tempo de permanência ao contexto de cada tipo de espaço",
      "Separar simpatia de cumprimento na hora de responder ao formulário",
    ],
    realWorldExample:
      "Um avaliador entrou num café decidido a não esquecer nada — e para isso levou um bloco de notas, pousado bem à vista em cima da mesa, como um inspetor de restaurante de série de televisão. O empregado reparou, ficou tenso, o atendimento mudou por completo e o relatório saiu inutilizável: media a reação a um bloco de notas, não a um cliente normal. A missão foi anulada e teve de ser refeita por outro avaliador, com o telemóvel discretamente no bolso e a memória a trabalhar até à porta. Fica a lição, meio a rir meio a sério: o teu instrumento de trabalho mais eficaz não tem capa nem caneta — é a tua cara de cliente banal, a pedir um galão como qualquer pessoa.",
    duration: "18 minutos",
    resourcesIncluded: [
      "Guião de respostas discretas para situações delicadas",
      "Checklist de conflitos de interesse antes de aceitar uma missão",
      "Resumo prático de RGPD para avaliadores",
    ],
  },
  4: {
    title: "Avaliar sem opinar",
    description: "Transformar o que viste em dados objetivos: factos, tempos e critérios em vez de \"gostei\" e \"foi simpático\".",
    subtitle: "Facto contra opinião, cronometragem, escalas e enviesamentos",
    learningObjectives: [
      "Aplicar o teste da câmara a qualquer frase do relatório",
      "Registar tempos, quantidades e sequências de forma fiável",
      "Interpretar escalas e descritores antes da visita",
      "Reconhecer e neutralizar os quatro enviesamentos mais comuns",
    ],
    practicalApplications: [
      "Reescrever qualquer opinião como observação verificável",
      "Cronometrar de forma discreta com duas ou três âncoras temporais",
      "Usar corretamente o \"não aplicável\" sem distorcer os dados da marca",
    ],
    realWorldExample:
      "Dois avaliadores fizeram check-in no mesmo hotel, no mesmo dia, quase à mesma hora. Um escreveu \"serviço excelente, adorei\" e ficou muito satisfeito consigo mesmo. O outro escreveu \"9 minutos de espera no balcão, com dois rececionistas visíveis mas apenas um a atender\" — e nem sequer achou que tinha sido um mau serviço, só descreveu o que viu. O primeiro relatório voltou para trás com um simples \"não avaliável\"; o segundo foi aprovado sem uma única pergunta e gerou uma ação de reforço de equipa na receção. A diferença entre os dois nunca foi o hotel: foi que um escreveu como fã e o outro como testemunha. É esse segundo avaliador que as agências voltam a chamar.",
    duration: "22 minutos",
    resourcesIncluded: [
      "Banco de 30 frases: opinião vs. facto, lado a lado",
      "Guia de leitura de escalas e descritores",
      "Ficha dos quatro enviesamentos e respetivos antídotos",
    ],
  },
  5: {
    title: "Preparar a missão",
    description: "Ler o briefing como um profissional, montar o teu cenário e memorizar o essencial sem apontamentos à vista.",
    subtitle: "Briefing, cenário credível e memorização sem apontamentos",
    learningObjectives: [
      "Extrair os seis pontos críticos de qualquer briefing",
      "Construir um cenário credível e sustentável a partir do teu perfil real",
      "Aplicar o método 3×3 de memorização",
      "Executar a checklist de pré-visita sem falhas",
    ],
    practicalApplications: [
      "Preparar duas ou três perguntas naturais que testam o que a marca quer medir",
      "Preparar uma saída limpa de qualquer visita",
      "Registar notas nos 10 minutos seguintes à saída",
    ],
    realWorldExample:
      "Um avaliador leu o briefing na diagonal — \"já percebi a ideia geral\" — e foi direito à loja de eletrodomésticos. A visita correu bem, o cenário funcionou, até fez uma pergunta simpática sobre garantias. Só que ao abrir o formulário em casa, já sem a loja à frente, descobriu um campo obrigatório: número exato de colaboradores em sala durante a visita. Ele tinha reparado vagamente que \"havia lá pessoal\", o que, tecnicamente, não é uma resposta que passe em nenhum formulário do mundo. Teve de admitir que não sabia e o relatório ficou incompleto — missão perdida por um detalhe que estava escrito a preto e branco duas páginas antes da que ele leu. Desde então, lê tudo antes de sair de casa, mesmo o que parece só \"burocracia\".",
    duration: "20 minutos",
    resourcesIncluded: [
      "Modelo de cartão mental de 5 pontos por missão",
      "Checklist imprimível de pré-visita",
      "Exemplos de cenários por setor",
    ],
  },
  6: {
    title: "Execução no terreno",
    description: "Entrar, observar, cronometrar e sair sem ser apanhado — com o que muda em cada setor e o que fazer quando corre mal.",
    subtitle: "Rotina de visita, observação em movimento e gestão de imprevistos",
    learningObjectives: [
      "Aproveitar os primeiros 30 segundos, onde se decide grande parte do formulário",
      "Observar em movimento usando pontos de paragem naturais",
      "Adaptar a execução às particularidades de cada setor",
      "Reagir corretamente a loja fechada, identificação ou perda de evidência",
    ],
    practicalApplications: [
      "Fotografar o exterior antes de entrar, sem levantar suspeitas",
      "Ajustar o tempo de permanência ao tipo de estabelecimento",
      "Comunicar imprevistos à agência no próprio dia",
    ],
    realWorldExample:
      "Hora de almoço, restaurante de centro comercial a abarrotar, fila até à porta. Um avaliador com fome real e paciência a esgotar podia perfeitamente ter escrito \"demorou uma eternidade, quase fui embora\". Em vez disso, foi marcando as horas discretamente pelo relógio do telemóvel: entrada às 13h04, pedido feito às 13h09, tabuleiro na mesa às 13h16. Sete minutos de espera pelo pedido, numa hora de ponta com três caixas abertas — um número que qualquer gestor de operações entende ao segundo, sem precisar de adivinhar o que \"uma eternidade\" quer dizer. O hambúrguer, já agora, estava quente; as batatas, mornas — e isso também foi escrito, com a mesma frieza cirúrgica. Fome satisfeita, relatório aprovado, dois problemas resolvidos num só almoço.",
    duration: "24 minutos",
    resourcesIncluded: [
      "Rotina de visita em 3 momentos, aplicável a qualquer setor",
      "Fichas específicas: restauração, retalho, banca, farmácia, automóvel e hotelaria",
      "Protocolo de imprevistos: o que fazer e o que comunicar",
    ],
  },
  7: {
    title: "Provas à prova de dúvida",
    description: "Talões, fotografias, gravações e nomes: o que recolher, como guardar e até onde a lei te deixa ir.",
    subtitle: "Talões, fotografias, gravações e limites legais",
    learningObjectives: [
      "Identificar o que conta como evidência válida em cada tipo de missão",
      "Fotografar espaços e documentos sem expor pessoas",
      "Saber quando é (e quando não é) legítimo gravar",
      "Organizar e guardar evidências pelo período exigido",
    ],
    practicalApplications: [
      "Fotografar o talão imediatamente, antes de desbotar",
      "Obter o nome do colaborador sem perguntar de forma artificial",
      "Nomear ficheiros de forma a encontrá-los dois meses depois",
    ],
    realWorldExample:
      "Cinco semanas depois de duas visitas quase idênticas, a mesma agência mandou o mesmo pedido a dois avaliadores: \"precisamos da fotografia da entrada da loja, para uma auditoria interna\". O primeiro tinha uma pasta chamada `2026-03-14_MarcaX_Braga_M4172`, com o `talao.jpg` e a `montra.jpg` arrumadinhos lá dentro — respondeu em dois minutos, do sofá, sem sequer se levantar. O segundo tinha tudo espalhado por uma galeria de fotos com quatrocentas imagens de férias, aniversários e ecrãs de telemóvel partido pelo meio — nunca encontrou a foto certa e acabou por perder o pagamento da missão. A pasta bem nomeada não parece grande coisa no dia da visita; cinco semanas depois, é a diferença entre \"aqui está\" e \"deixa-me só verificar uma coisa\" — dita pela quinta vez.",
    duration: "19 minutos",
    resourcesIncluded: [
      "Tabela de evidências exigidas por tipo de missão",
      "Convenção de nomes de ficheiros e estrutura de pastas",
      "Nota prática sobre gravação de imagem e som em Portugal",
    ],
  },
  8: {
    title: "O relatório aprovado à primeira",
    description: "Estrutura, tom e nível de detalhe — e os erros que fazem chumbar relatórios que davam missões perfeitas.",
    subtitle: "Estrutura, justificações, tom neutro e revisão final",
    learningObjectives: [
      "Construir as três camadas do relatório: respostas, justificações e narrativa",
      "Justificar respostas negativas com facto, hora e identificação funcional",
      "Escrever em registo neutro, sem adjetivos vagos",
      "Executar a revisão final em cinco pontos antes de submeter",
    ],
    practicalApplications: [
      "Aplicar o padrão \"o que aconteceu + quando + quem + o que faltou\"",
      "Verificar a coerência entre horas, respostas e talão",
      "Submeter dentro do prazo, sempre no mesmo dia",
    ],
    realWorldExample:
      "Primeira tentativa de relatório: \"não falou da promoção\". Três palavras, escritas em trinta segundos entre duas séries na Netflix. Voltou da agência no dia seguinte com um pedido de esclarecimento — a marca queria saber quando, com quem e que promoção. Segunda tentativa, já com mais calma: \"Às 11h27, o colaborador (crachá: Rui) registou a compra e não mencionou a promoção '2ª unidade a 50%' afixada na montra e no expositor de entrada.\" Mesma visita, mesmo facto, seis vezes mais palavras e zero opiniões — e desta vez o relatório foi aprovado sem perguntas e ainda gerou uma ação de formação na loja. A frase curta poupou trinta segundos de escrita e custou um dia inteiro de espera. Vale a pena fazer a conta.",
    duration: "22 minutos",
    resourcesIncluded: [
      "Modelo de relatório por setor, pré-estruturado",
      "Checklist de revisão final em 5 pontos",
      "Análise comentada de relatórios aprovados e rejeitados",
    ],
  },
  9: {
    title: "Quanto ganhas e quanto sobra",
    description: "Honorários, reembolsos, custos e impostos: as contas reais para saberes o que rende cada missão.",
    subtitle: "Honorários, reembolsos, custos reais e obrigações fiscais",
    learningObjectives: [
      "Separar honorário de reembolso em qualquer oferta",
      "Calcular o valor líquido por hora incluindo deslocação e relatório",
      "Compreender limites e regras de reembolso",
      "Conhecer o enquadramento como trabalhador independente em Portugal",
    ],
    practicalApplications: [
      "Manter um registo mensal de missões, honorários, custos e tempo",
      "Planear rotas para reduzir o custo de deslocação por missão",
      "Organizar recibos e comprovativos para efeitos fiscais",
    ],
    realWorldExample:
      "Uma avaliadora contou a uma amiga, toda contente, que tinha \"ganho 45 € num almoço\". A amiga, mais desconfiada de contas, perguntou: \"ganhaste ou gastaste e depois devolveram-te?\". Foi ver o extrato com calma: dos 45 €, 30 € eram reembolso da refeição — dinheiro que já era seu, só voltou por outra porta — e 15 € eram honorário a sério, o que ganhou pelo trabalho de observar e escrever o relatório. Não é pouco, mas é a terça parte do número que andava a contar aos amigos ao jantar. Desde essa conversa, mantém uma folha simples com duas colunas bem separadas, e já não confunde \"recebi\" com \"ganhei\" — uma confusão que engana até quem faz isto há anos.",
    duration: "18 minutos",
    resourcesIncluded: [
      "Folha de cálculo de rentabilidade mensal",
      "Guia prático de recibos verdes para avaliadores",
      "Lista de custos a considerar em cada missão",
    ],
  },
  10: {
    title: "Plano de ação de 30 dias",
    description: "Do registo nas plataformas às primeiras missões pagas — e como subir para as que pagam melhor.",
    subtitle: "Plano semana a semana, das inscrições às missões premium",
    learningObjectives: [
      "Executar um registo completo em 5 a 8 plataformas",
      "Construir um perfil que passa nos filtros automáticos",
      "Planear as primeiras missões para construir classificação",
      "Definir uma estratégia de especialização por setor",
    ],
    practicalApplications: [
      "Responder a convites em menos de uma hora",
      "Submeter todos os relatórios no próprio dia",
      "Analisar os resultados do primeiro mês e escolher o caminho",
    ],
    realWorldExample:
      "Um avaliador registou-se em oito plataformas numa tarde só, cheio de energia — e depois passou a primeira semana a olhar para o telemóvel sem receber praticamente nenhum convite. Quase desistiu, convencido de que \"isto não funciona\". Em vez de desistir, foi completar o que tinha deixado a meio: zona geográfica, disponibilidade, idiomas, uma apresentação curta em vez do campo em branco. Aceitou três missões simples, cumpriu os prazos religiosamente e submeteu tudo no próprio dia. Na segunda semana, sem fazer mais nada de especial, os convites passaram de zero para doze. Não foi sorte nem favoritismo — foi o sistema a notar, finalmente, que ali havia um perfil completo e fiável, coisa mais rara do que parece.",
    duration: "20 minutos",
    resourcesIncluded: [
      "Plano de 30 dias, semana a semana",
      "Modelo de apresentação de perfil para plataformas",
      "Checklist de documentos necessários para o registo",
    ],
  },
  11: {
    title: "Certificado de conclusão",
    description: "Concluíste o curso. Emite o teu certificado nominal e leva-o contigo para as candidaturas.",
    subtitle: "Certificado nominal em PDF e próximos passos",
    learningObjectives: [
      "Consolidar o método completo aprendido ao longo do curso",
      "Emitir o certificado nominal de conclusão",
      "Usar o certificado nas candidaturas às plataformas",
    ],
    practicalApplications: [
      "Anexar o certificado ao perfil em todas as plataformas",
      "Definir a primeira missão a realizar esta semana",
    ],
    realWorldExample:
      "Duas candidaturas chegaram à mesma agência no mesmo dia, para a mesma zona. Uma dizia apenas \"tenho disponibilidade e gosto de atendimento ao cliente\". A outra tinha o mesmo texto, mais um PDF anexado: certificado nominal, com data, a dizer sem rodeios que aquela pessoa sabe o que é um briefing, um item de guião e um prazo. Quem revê candidaturas todos os dias não tem tempo para adivinhar quem é sério — e escolhe pelo sinal mais óbvio que tem à frente. Perfis com formação comprovada recebem, em média, mais convites nas primeiras semanas do que perfis genéricos sem qualquer credencial. Um PDF não faz o trabalho por ti no terreno, mas é ele que te abre a porta para o poderes fazer.",
    duration: "5 minutos",
    resourcesIncluded: [
      "Certificado nominal em PDF, com data de conclusão",
      "Guia rápido: primeiros passos depois do curso",
    ],
  },
};

export type ExpandedModuleInfo = (typeof expandedModuleData)[keyof typeof expandedModuleData];

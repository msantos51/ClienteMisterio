/*
 * DESCRIÇÃO DO FICHEIRO: Dados completos do curso de Cliente Mistério — conteúdo teórico e questionários de cada módulo.
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
 evaluationExamples?: EvaluationExample[];
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
  "O que é Cliente Mistério? É uma profissão moderna em crescimento! Atuas como cliente normal para avaliar a qualidade real do serviço. Observas, registas e reportas tudo — sem revelar que estás a avaliar. É como um jogo onde tens uma missão secreta! A sua origem remonta aos anos 1940 nos EUA, mas tornou-se mainstream apenas nos anos 2000.",
  "Por que é diferente dos questionários normais? Porque tu EXPERIMENTAS de verdade! Não é uma pergunta teórica — é a experiência real do cliente. As empresas adoram porque obtêm dados honestos e concretos, sem enviesamentos de questionários enviados por email.",
  "Ganha-se com isto? Sim! Para empresas: descobrem problemas reais, medem se os procedimentos funcionam, comparam lojas entre si e formam as equipas. Para ti: remuneração por missão, trabalhas quando queres e ganhas experiência valiosa.",
  "Os 3 heróis desta história: A marca (diz o que quer saber — 'queremos saber se os colaboradores cumprimentam'), a agência (encontra-te a ti e coordena — 'encontrei 20 avaliadores'), tu (fazes a magia acontecer — 'fui e avaliei').",
  "Tipos de missões: Visitas normais às lojas (mystery shopping presencial), telefonemas (mystery calling — ligar e ver como atendem), avaliações online (websites, apps), inspeções de conformidade (cumprem a lei?), avaliações de delivery (como chegou o produto?), auditorias de imagem (limpeza, uniformes, sinalética).",
  "Quem participa nisto? Empresas de retalho (Carrefour, Continente), restauração (Burger King, McDonald's), banca (Caixa, BPI), telecomunicações (MEO, Vodafone), farmácias, hotéis, agências de viagem. Basicamente, qualquer setor com contacto com cliente.",
  "Como funciona a mecânica? 1) Marca submete briefing ('queremos 50 avaliações em Lisboa'), 2) Agência publica em plataforma, 3) Tu aplicas, 4) Agência aprova teu perfil, 5) Tu executas missão, 6) Submetes relatório com evidências, 7) Agência valida e paga.",
  "Exemplos de questões que marcas querem responder: 'O colaborador da loja oferece produtos adicionais?' (telefonista diz que o produto X tem garantia extra?), 'Quanto tempo espera o cliente até ser atendido?' (entro à 10:00, sou abordado às 10:03 — 3 minutos), 'O sítio está limpo? (observo se há pó, lixo, organização)', 'O colaborador conhece os produtos?' (pergunto 'qual a diferença entre estes dois modelos').",
  "Impacto real das avaliações: Uma loja descobre que só 40% dos clientes são cumprimentados (deveria ser 100%) → forma a equipa → em 3 meses sobe para 95% → vendinhas aumentam 15%. Cliente Mistério MUDA as empresas!",
  "A responsabilidade é ENORME — estás a avaliar PESSOAS reais: O teu relatório pode influenciar diretamente a carreira dos colaboradores avaliados. Informação incorreta ou fabricada pode causar: não promoção de um colaborador merecedor, perda de prémios ou bónus, não renovação de contrato, e em casos graves, até despedimento. Por isso, cada dado que colocas no relatório DEVE ser rigorosamente verdadeiro e verificável. As marcas confirmam tudo — muitas têm câmaras de videovigilância que cruzam com o teu relatório. Se escreveres que o colaborador não te cumprimentou mas as câmaras mostram que sim, perdes toda a credibilidade.",
  "Avaliações multi-fase — nem sempre é só uma visita: Alguns projetos envolvem várias etapas sequenciais. Por exemplo: Fase 1 — submeter um formulário online e aguardar contacto. Fase 2 — receber e avaliar a chamada telefónica de resposta. Fase 3 — visitar o local fisicamente e avaliar o serviço presencial. Fase 4 — aguardar e avaliar o follow-up pós-visita (chamada, SMS, email). Cada fase é avaliada separadamente mas faz parte do mesmo projeto. Isto permite às marcas mapear TODA a jornada do cliente, desde o primeiro contacto até ao pós-venda.",
  "Avaliações setoriais especializadas: Cada setor tem particularidades únicas. No retalho de eletrónica, avalia-se o conhecimento técnico dos colaboradores sobre produtos. No setor automóvel, avalia-se o tempo de resposta a pedidos online (tipicamente 3 horas úteis) e a qualidade do acompanhamento. Na restauração, avalia-se desde o empratamento até à temperatura da comida. No fitness, avalia-se desde o primeiro contacto telefónico até à experiência da aula. Em lojas de bricolage, avalia-se se o colaborador faz diagnóstico de necessidades e sugere serviços complementares (instalação, entrega). Cada setor exige formação específica!",
  "Fluxo real para iniciantes — passo a passo sem complicação: (1) Registas-te numa plataforma ou agência com dados reais, IBAN e perfil completo. (2) Recebes notificações quando as marcas abrem candidaturas para novas avaliações. (3) Candidatas-te às missões que encaixam no teu perfil e zona. (4) Se fores selecionado, recebes um briefing detalhado com cenário, objetivos, perguntas obrigatórias, tempo de execução e regras de reembolso. (5) Fazes a avaliação conforme o briefing, sem improvisos. (6) Submetes o relatório com evidências dentro do prazo. (7) A agência valida e aprova pagamento. Este é o ciclo profissional do Cliente Mistério.",
  "O que é exatamente o briefing? É o teu manual de operação da missão. Normalmente inclui: contexto da marca, personagem que deves interpretar (ex.: cliente que procura plano de internet), pontos obrigatórios a observar, perguntas que tens de fazer, limites de tempo, o que podes ou não comprar, condições de remuneração fixa e variável, valor máximo de reembolso, tipo de comprovativos exigidos e prazo de submissão. Quanto melhor leres o briefing, maior a taxa de aprovação dos teus relatórios.",
  "Como estudar este curso para render 8 horas: recomenda-se 10 módulos x 35 minutos de leitura ativa + 10 blocos de 10 minutos de exercícios práticos + 90 minutos para simulações completas + 40 minutos para revisão final dos erros mais comuns. Resultado: cerca de 8 horas de formação prática e orientada para execução real.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Identificar Oportunidade Perdida",
   scenario: "Estás numa loja de roupa. Entras, procuras uma camiseta de uma marca específica. O colaborador aborda-te, mostra o produto, mas não sugere complementos (calças, cintos, acessórios).",
   correctApproach: "Registar: 'Cliente abordado em 2min, apresentou produto solicitado, NÃO ofereceu complementos nem sugestões adicionais. Oportunidade de venda não aproveitada.'",
   incorrectApproach: "Registar: 'Atendimento péssimo, o colaborador devia ter ofertado mais coisas. Não gostei muito.' (opinião, não facto)"
  },
  {
   title: "Exemplo 2: Avaliar Conformidade com Protocolo",
   scenario: "Entras numa farmácia. Segundo o briefing, cada cliente deve receber um folheto informativo sobre promoções atuais. Tu não recebes nada.",
   correctApproach: "Registar: 'Solicitei recomendação para dor de cabeça. Colaboradora ofereceu medicamento e explicou modo de uso, MAS NÃO entregou folheto de promoções. Não cumpriu item 5 do protocolo.'",
   incorrectApproach: "Registar: 'Esqueceu-se de dar o folheto' (falta contexto, pode parecer um erro seu, não da marca)"
  },
  {
   title: "Exemplo 3: Múltiplas Observações Cronológicas",
   scenario: "Avaliação de uma padaria. Entras às 09:15. Filas nos caixas. Observas higiene, atendimento, apresentação dos colaboradores.",
   correctApproach: "Registar: '09:15 - Entrada. Loja com ~12 clientes, 2 filas. Uniforme limpo? SIM. Colaborador A (caixa) - asseado, atento, rosto visível (máscara ao queixo). Tempo de espera: 4min. Cumprimento: SIM. Produto: fresco (pão ainda quente). Ambiente: limpo mas faltava limpar janelas (pó visível).'",
   incorrectApproach: "Registar: 'Tudo bem. Gostei. Atendimento rápido e produtos frescos.' (muito vago, sem métricas)"
  }
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
  "Mercado em fogo! Retalho (Carrefour, Continente, Intermarché), restauração (Burger King, Telepizza, cafés), banca (Caixa, Millennium), telecomunicações (Vodafone, MEO, NOS), farmácias (Farmácia do Dr. Ahorro), hotelaria (hotéis 3-5 estrelas), automóvel (concessionários), seguros. Todas querem saber o que o cliente pensa. Há procura constante de avaliadores!",
  "3 maneiras de trabalhar: Agências (intermediária como a Teseo, BMS Mystery Shopping — coordenam tudo), Plataformas digitais (apps como a Spotec, Streev — tipo Uber do mystery shopping), Direto com as marcas (contactas a marca diretamente — melhor lucro, mas precisa de negociação).",
  "Vantagens vs Desvantagens: Agências = segurança + volume de missões + suporte, mas regras mais apertadas + comissão da agência. Plataformas = variedade + flexibilidade + autonomia, mas muita concorrência + menos remuneração. Direto = lucro máximo, mas tu é que negoceias + precisa de rede.",
  "Remuneração por setor: Retalho/Restauração simples (5-15€), Telecomunicações/Banca (15-40€), Hotelaria (30-75€), Auditorias complexas (75-150€+). Tudo depende da complexidade e tempo exigido.",
  "Critérios que agências usam para selecionar: Localização geográfica (precisam de alguém em Braga? Tu és em Lisboa = menos útil), disponibilidade (podes fazer missões quando?), experiência prévia (tens histórico?), especialização (conheces setores específicos?), fiabilidade (tens bons ratings?).",
  "Abre o teu potencial: Perfil COMPLETO (foto legível, CV, experiências) e ATUALIZADO → Respostas rápidas (dentro de 4 horas) → Qualidade impecável nos relatórios (95%+ aprovação) → Mais missões para ti! É uma engrenagem simples.",
  "Caminho típico de evolução: Mês 1-2: Retalho ou restauração rápida (fácil, menos pago, constroem experiência e ratings). Mês 3-4: Telecomunicações/Farmácia (intermédio, mais pago, requer mais detalhe). Mês 5+: Hotelaria de luxo, Banca, Auditorias (premium, muito pago, exigem perfecionismo).",
  "Como aproveitar ao máximo? Especializa-te (ex.: setores automóvel = aprende tudo de carros), trabalha com múltiplas plataformas simultaneamente (não depender de uma só), aceita missões em clusters geográficos (várias no mesmo dia = menos custos), constrói histórico excelente (leva 3-6 meses mas depois convites vêm sozinhos).",
  "Variedade de formatos de missão — adaptabilidade é chave: O mercado não se limita a visitas presenciais a lojas. Existem avaliações 100% online (submeter formulários em websites e avaliar a resposta da empresa), avaliações telefónicas (ligar e avaliar o atendimento), avaliações de apps (usar a aplicação móvel da marca e avaliar a experiência), avaliações de follow-up (avaliar se a empresa faz acompanhamento pós-venda). Cada formato paga de forma diferente e exige competências distintas. Avaliadores versáteis que dominam múltiplos formatos têm acesso a muito mais oportunidades.",
  "Projetos por 'packs' e avaliações múltiplas: Muitas agências organizam projetos em packs — por exemplo, avaliar várias secções diferentes de uma grande loja numa única visita, ou avaliar múltiplas lojas da mesma marca num determinado período. Nestes projetos, a remuneração pode ser calculada por secção avaliada (tipicamente 4-5€ por secção). Quanto mais secções avaliares corretamente numa visita, mais ganhas. Isto incentiva eficiência e planeamento — podes transformar uma ida a um centro comercial em várias avaliações rentáveis.",
  "O setor automóvel e pós-venda — oportunidade crescente: O setor automóvel é um dos mais interessantes para avaliadores experientes. Inclui avaliações de concessionários (experiência de compra de veículos), oficinas (qualidade do serviço de manutenção) e leads online (tempo e qualidade de resposta a pedidos feitos no website). Estas avaliações são tipicamente mais bem pagas porque exigem conhecimento específico e cenários mais complexos. É comum ter de utilizar dados fictícios (nome, email, dados de veículo) fornecidos pela agência para simular um cliente real.",
  "Como escolher boas oportunidades logo no início: usa uma grelha simples com 5 critérios (remuneração líquida, tempo total, distância, grau de dificuldade e previsibilidade de pagamento). Pontua cada missão de 1 a 5 e aceita primeiro as que somarem 18+ pontos. Isto evita missões pouco rentáveis e acelera a tua evolução.",
  "Remuneração inteligente = olhar para lucro por hora, não apenas valor bruto: uma missão de 12€ que exige 25 minutos e 2 km pode ser melhor do que uma missão de 25€ que exige 2 horas, compra obrigatória e deslocação longa. Profissionais experientes calculam sempre: (pagamento + reembolso - custos) / tempo total investido.",
  "Sazonalidade do mercado: períodos de campanhas comerciais (regresso às aulas, Black Friday, Natal, saldos, lançamentos de serviços) costumam aumentar volume de missões. Mantém calendário mensal de disponibilidade e ativa alertas nas plataformas para responder rapidamente quando surgem vagas com melhor remuneração.",
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
  "O perfil ideal: Discrição (ninguém pode saber que estás a avaliar — sem levantar suspeitas), rigor (regista tudo com precisão — não inventas dados), imparcialidade (sem deixar opiniões pessoais contaminar a avaliação), consistência (aplicar mesmos critérios em todas as missões). Basicamente, és um observador invisível! Uma boa psicologia ajuda — capacidade de ouvir, observar sem ser óbvio.",
  "Confidencialidade = Profissão intacta: Nunca, NUNCA contes ao teu amigo que foste avaliar a Starbucks. Não comentes no Instagram, no WhatsApp, na família, no trabalho. Isto é SAGRADO. Exemplos de infrações: 'Estive ontem na Starbucks da Colombo a avaliar' = BAN. 'Aquele restaurante tem problemas com higiene' (contaste a teu amigo) = BAN. Quebra = BAN permanente da profissão + possível ação legal.",
  "Conflitos de interesse — declarar logo! Trabalhas naquela loja a avaliar? Tens um familiar lá? Tens amizade com o gerente? Amas obsessivamente a marca? Declara ANTES de aceitar. Não vale a pena arriscar — agências têm sistemas de verificação (cruzam dados, consultam públicos, etc.).",
  "Durante a missão: Comporta-te como cliente normal. Ritmo natural, voz de cliente comum, linguagem corporal relaxada. Sem criar situações artificiais (não pedes 'testes' de produtos para testar equipa), sem provocar ninguém (não reclaas por nada para ver como reagem), sem fazer anotações visíveis (é MUITO suspeito ter caderno). É como estar incognito em contexto real!",
  "Valores que não se negociam: Estar a horas (sempre — não é por estar em casa que podes atrasar 30min na missão), ser profissional (sempre — roupa apropriada, atitude civil), ser honesto (sempre — fraude = fim de carreira instantâneo). Só reporta FACTOS observados, não inventas dados. Exemplo: 'Produto A não estava em stock' é válido. 'Produto A deveria estar mas provavelmente o gerente escondeu' é INVENÇÃO.",
  "Gestão de presença: Não apareças 'muito bem vestido' numa avaliação a uma loja de fast-food (fica estranho). Não vejas o telemóvel constantemente durante avaliação (é suspeito). Não percorras a loja 10x procurando detalhes (é óbvio). Comporta-te como cliente que entra, compra, sai. Natural!",
  "Situações sensíveis: Se vires algo ilegal (violação de segurança, fraude), reporta à agência, NÃO vás já denunciar. Se te sentes em perigo (estabelecimento em zona perigosa, comportamento agressivo), contacta agência e podes abandonar. Se identificam-te, mantém compostura, nunca confirmes nem negues.",
  "Feedback vs Crítica: Não é teu trabalho 'aconselhar' a marca. Só observas e reportas. Não escreves 'deveriam melhorar isto' — escreves 'observei isto, o protocolo pedia aquilo, não aconteceu'.",
  "Critérios de exclusão que DEVES respeitar — são inegociáveis: Não podes avaliar um estabelecimento se: (1) Trabalhas ou já trabalhaste para o grupo/empresa a avaliar. (2) Tens um familiar ou amigo próximo que trabalhe lá. (3) Conheces pessoalmente algum colaborador do local (vizinho, colega, amigo). (4) Trabalhas para a concorrência direta. (5) És cliente habitual reconhecível naquele local específico. (6) Vais acompanhado (deves ir sempre SOZINHO). Estas regras existem para garantir imparcialidade absoluta. Se descobres alguma destas situações já depois de aceitares a missão, declara IMEDIATAMENTE à agência — nunca avances com a avaliação comprometida.",
  "E se te perguntarem 'É cliente mistério?': Isto pode acontecer — alguns colaboradores mais atentos podem suspeitar. A resposta é SEMPRE negar de forma natural e convincente. Diz que não conheces essa metodologia e não sabes do que se trata. Comporta-te como se nunca tivesses ouvido falar em Cliente Mistério. Após sair da visita, informa IMEDIATAMENTE a agência por email sobre a situação. A agência decidirá se a avaliação continua válida. Nunca, sob nenhuma circunstância, confirmes que és avaliador — isso invalida completamente a missão e pode comprometer todo o projeto.",
  "Postura neutra e imparcial — o 'mind reset': Antes de cada visita, faz um reset mental para estado neutro. Não deves ter opinião prévia ou expectativas baseadas na tua experiência pessoal com a marca. Clientes extremamente simpáticos tendem a influenciar os colaboradores a terem uma atitude mais positiva; clientes pouco simpáticos provocam o efeito inverso. A tua postura deve ser educada, discreta e amável — nem demasiado entusiasta nem fria. O objetivo é que o teu comportamento NÃO influencie o comportamento do colaborador avaliado. Avalia o que acontece naturalmente, não o que provocas.",
  "Código de conduta em 5 princípios: verdade factual, confidencialidade absoluta, imparcialidade, pontualidade e rastreabilidade das evidências. Se um relatório não consegue ser auditado por terceiros (agência ou marca), ele não é profissional. Escreve sempre para que outra pessoa consiga reconstruir a visita só com o teu registo.",
  "Gestão emocional no terreno: poderás encontrar atendimento excelente ou fraco, mas o teu papel é manter neutralidade operacional. Evita recompensar simpatia com notas mais altas e evita penalizar antipatia com exagero. O foco é comportamento observável face ao protocolo, não afinidade pessoal.",
  "Ética também é cumprir limites legais: gravações de áudio, captação de imagens e recolha de dados pessoais só podem ocorrer quando explicitamente autorizadas no briefing e dentro da legislação aplicável. Em caso de dúvida, para a recolha e pede validação da agência antes de avançar.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Conflito de Interesse Óbvio",
   scenario: "Recebes uma missão para avaliar uma loja onde tens um amigo que trabalha. A tentação é: 'Há uma só avaliação, o meu amigo nem sabe que eu sou avaliador, vai ficar bem.'",
   correctApproach: "Declara o conflito IMEDIATAMENTE à agência: 'Tenho conhecidos que trabalham neste local. Não posso fazer missão imparcial.' Rejeita a missão. A agência aprecia honestidade.",
   incorrectApproach: "Fazes a avaliação mesmo assim. Agência descobre (confrontam colaboradores, cruzam dados) → BAN + possível ação legal contra ti por fraude."
  },
  {
   title: "Exemplo 2: Tentação de Revelar Informação",
   scenario: "Amigo pergunta: 'Estiveste numa avaliação? Qual era a loja? Qual foi o resultado?' Tu sentes vontade de contar porque é apenas com 'alguém de confiança'.",
   correctApproach: "Responder: 'Não posso contar detalhes de missões — confidencialidade total. É regra sagrada da profissão.' Fim de conversa.",
   incorrectApproach: "Contas: 'Era na Starbucks, a higiene estava horrível.' Amigo conta a outro, alguém trabalha lá e descobre → agência investiga → BAN."
  },
  {
   title: "Exemplo 3: Como Ser Discreto numa Avaliação",
   scenario: "Estás a avaliar uma loja. Tens de observar: limpeza, atendimento, produtos. Mas não queres ser óbvio.",
   correctApproach: "Entras como cliente normal (vês horários no telemóvel, procuras um produto, deslocas-te naturalmente). Observas enquanto exploras a loja (vês pó? organização? sinalética? enquanto passeias). Falas com colaborador (natural, como cliente comum). Compras (para ter talão). Sais. Anotações só após sair.",
   incorrectApproach: "Entras com caderno, tiras notas visíveis, fotografas de forma óbvia, fazes perguntas estranhas ('Há quanto tempo aquele pó está ali?'), ficas a 'observar' um colaborador → muito suspeito."
  }
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
  "O que se avalia? 5 dimensões principais: (1) Atendimento - o colaborador aborda-te? Como? Rapidez?, (2) Processos - cumprem os procedimentos definidos pela marca?, (3) Produto/Serviço - está de qualidade? Está disponível?, (4) Conformidade - segue as regras legais? Sinalética correta?, (5) Experiência - limpeza, ambiente, musica, temperatura, sinalética. Tudo isto junto = avaliação holística.",
  "Indicadores que encontras sempre: Tempo até ser abordado (cronometrado mentalmente), duração total da interação, apresentação pessoal do colaborador (uniforme, higiene, comportamento), oferecimento de produtos complementares, conhecimento de produto (colaborador sabe responder perguntas?), processo de pagamento (rápido? seguro?), limpeza geral (piso, balcão, superfícies), conformidade regulatória (GDPR placards? sinalética obrigatória?).",
  "Regra de ouro: Segue a checklist como um mapa GPS. Se diz 'cumprimento em 30 segundos', é SIM ou NÃO baseado no FACTO exato, não na tua opinião ('o colaborador parecia apressado mas disse olá'). Não existe 'quase cumpriu', 'cumpriu com reservas', 'parcialmente'. É preto ou branco! Se esperaste 35 segundos = NÃO cumpriu (o critério era 30).",
  "Cuidado com as armadilhas mentais — os 'vieses cognitivos': (1) Efeito halo = primeira impressão contamina tudo ('o colaborador foi educado no cumprimento, logo avalio tudo como bom'), (2) Tendência central = tudo sai 'médio' para não comprometeres ('para ser 'seguro', dou 3/5 em tudo'), (3) Viés de confirmação = procuras provas que confirmem o que já pensas ('acho a marca cara, logo procuro 'evidências' que confirmem'), (4) Viés de recência = o final marca mais que o resto ('começo terrível, fim excelente, mas lembras-te só do fim'). Luta contra isto!",
  "Como evitar vieses: Observa de forma estruturada (segue checklist item a item), não formules conclusões até fim, registra tempos EXATOS (não 'esperou muito'), só compares com critério definido (não com tua experiência em outra loja).",
  "Se 2 avaliadores entram no mesmo sítio, MESMA hora, MESMA situação: Devem sair com avaliações PARECIDAS (não idênticas, mas ~90% overlap). Isto prova que o critério é claro. Se um diz 'excelente' e outro 'péssimo' = critério está vago e precisa clarificação pela agência.",
  "Exemplo prático de calibração: Briefing diz 'colaborador deve conhecer 80% dos produtos'. Avaliador A interpreta '80% significa responder corretamente a todas as 5 perguntas que fiz = 5/5 = 100%'. Avaliador B interpreta '80% significa mais ou menos sabe'. Problema? Critério está vago. Solução? Agência define melhor: 'responder corretamente a ≥4/5 perguntas = SIM'.",
  "Escala de avaliação — alguns briefings usam: Escalas 1-5 (1=nunca, 5=sempre), SIM/NÃO (mais objetivo), N/A (não aplicável), Crítico/Importante/Menor (prioridade de problema). Seja qual for, segue exatamente a definição.",
  "Escalas de avaliação na prática — vais encontrar várias: Na realidade, cada marca define as suas escalas. As mais comuns são: (1) Binária simples — SIM/NÃO/N.A. (a mais objetiva, sem margem para ambiguidade). (2) Escala de cumprimento — 'Comportamento não observado / Aplicação moderada ou inconsistente / Aplicação forte e consistente / N.A.' (3) Parcial — SIM/PARCIALMENTE/NÃO/N.A. (permite registar cumprimento parcial de critérios). (4) Reincidência — algumas marcas adicionam a opção 'Reincidência Negativa' para situações que já foram identificadas em avaliações anteriores e continuam sem ser corrigidas. Independentemente da escala, a REGRA é a mesma: marca exatamente o que observaste, sem inflacionar nem deflacionar.",
  "Avaliações por etapas do atendimento — a jornada completa: Muitas marcas estruturam a avaliação em etapas sequenciais da jornada do cliente: (1) Acolhimento e Abordagem — o colaborador reconheceu a tua presença? Cumprimentou? Ofereceu ajuda proativamente? (2) Diagnóstico de Necessidades — fez perguntas para entender o que precisas? Ouviu atentamente? (3) Apresentação e Aconselhamento — sugeriu produtos adequados? Explicou características e diferenças? Demonstrou conhecimento? (4) Venda Complementar — ofereceu produtos ou serviços adicionais? Sugeriu acessórios, garantias, serviços de instalação? (5) Fecho e Despedida — agradeceu? Despediu-se de forma simpática? Convidou a voltar? Cada etapa é avaliada separadamente, o que permite à marca identificar EXATAMENTE onde estão os pontos fortes e fracos.",
  "Avaliação de múltiplas secções na mesma visita: Em lojas grandes (retalho, bricolage, supermercados), é comum teres de avaliar 2 a 4 secções diferentes na mesma deslocação. REGRA CRÍTICA: cada avaliação de secção é INDEPENDENTE. Não deves ser atendido pelo mesmo colaborador em secções diferentes. Não deves mencionar numa interação que fizeste ou vais fazer outra. E não podes abandonar a loja sem completar TODAS as secções atribuídas. Cada secção tem o seu cenário específico — tens de os memorizar e aplicar corretamente sem os confundir. Confundir cenários = visita invalidada.",
  "Transforma critérios em checklist operacional: antes da visita, converte cada requisito do briefing em perguntas objetivas de SIM/NÃO ou métrica temporal. Exemplo: 'Cumprimentou em até 30 segundos?', 'Identificou necessidade?', 'Apresentou benefício?', 'Fez fecho de venda?'. Assim reduces esquecimentos e aumentas consistência entre missões.",
  "Escalas de avaliação pedem ancoragem: quando uma plataforma usa notas de 1 a 5, define previamente o que significa cada nível para manter coerência. Exemplo: 1 = não cumpriu; 3 = cumpriu parcialmente; 5 = cumpriu integralmente com qualidade. Sem ancoragem, o mesmo comportamento pode receber notas diferentes em dias diferentes.",
  "Validação cruzada dos dados: sempre que possível, confirma horários com talão, confirma nomes em crachá/recibo e confirma tempos com relógio do telemóvel. Esta triangulação protege-te de erros de memória e aumenta credibilidade em auditorias de qualidade.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Evitar o Efeito Halo",
   scenario: "Entras numa farmácia. Colaboradora te cumprimenta com sorriso enorme e educação perfeita. Depois, quando perguntasobre medicamentos, ela não sabe responder a 2 de 5 perguntas.",
   correctApproach: "Separar avaliações: 'Cumprimento: 10/10, educação: excelente. Conhecimento de produto: 3/5 (respondeu corretamente apenas 3 de 5 perguntas sobre medicamentos). Não deixar que a excelente primeira impressão contamine a avaliação de conhecimento.'",
   incorrectApproach: "'Colaboradora excelente, muito atenciosa, tudo perfeito.' (primeira impressão contaminou tudo, ignoraste que não sabia responder a perguntas)"
  },
  {
   title: "Exemplo 2: Evitar Tendência Central",
   scenario: "Avalia 10 critérios. Alguns foram excelentes (cumprimento, ambiente), alguns falharam (não ofereceu complementos, produto indisponível). Sentes vontade de meter 3/5 em tudo para 'não comprometeres'.",
   correctApproach: "Avaliar cada item individualmente, honestamente: 'Cumprimento: SIM (em 25 seg). Oferecimento de complementos: NÃO. Limpeza: SIM. Indisponibilidade: produto A não estava. Cada um recebe avaliação exata.'",
   incorrectApproach: "Dar 3/5 a tudo porque 'no geral foi 'ok''. Agência recebe dados inúteis — não sabe onde melhorar."
  },
  {
   title: "Exemplo 3: Ser Objetivo em Tempos",
   scenario: "Entas à loja. Esperas. Nem tens relógio, então 'acho que esperei mais ou menos 3-4 minutos'.",
   correctApproach: "Usar telemóvel discretamente: anotar hora entrada (10:15), hora de abordagem (10:18). Diferença = 3min exato. Registar: 'Tempo até abordagem: 3 minutos.' Factual.",
   incorrectApproach: "'Esperou algum tempo' ou 'esperou mais de 5 minutos' (vago, baseado em sensação)"
  }
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
  "O briefing é o teu mapa do tesouro. Contem: (1) OBJETIVOS - 'queremos saber se cumprimentam em 30seg' ou 'mede tempo de espera', (2) PERSONA - 'és um homem 30-40 anos, que vem comprar roupa casual', (3) CHECKLIST - lista exata de itens a observar/avaliar, (4) EVIDÊNCIAS - 'precisa talão + foto do exterior + selfie no interior' ou 'apenas talão', (5) PRAZOS - 'execute entre 15-20 Março' e 'entreguem até dia 25', (6) INSTRUÇÕES ESPECIAIS - 'o gerente está de baixa, avaliar apenas collaboradores presentes' ou 'tira fotos de sinalética específica'.",
  "Leitura inteligente do briefing: 1ª vez = compreender o big picture. 2ª vez = memorizar persona (nome, idade, comportamento esperado, o que compraria, como falaria). 3ª vez = detalhe (checklist item por item, prazos, evidências exatas, instruções especiais). Se algo não faz sentido ou está confuso, pergunta à agência ANTES de sair (não depois!). Escreve perguntas ('Qual é o endereço exato? A loja tem parque? Tenho de fazer compra obrigatória ou apenas observar?'). Não vale improvisar no terreno — cria erros.",
  "Planeamento logístico = sucesso: (1) Que hora é melhor ir? (Horário de pico vs vazio? Produto pode estar esgotado em certos horários?), (2) Como chego lá? (Google Maps, transportes, duração), (3) Há parque? (Preço?, Gratuito?, Longe?), (4) Quanto tempo total? (30min prep + 30min deslocação + 45min na loja + 30min relatório = 2h 15min total), (5) Custo previsto? (Combustível/transportes + parque + consumo obrigatório = totalizo para saber se compensa), (6) Tenho tudo? (Telemóvel 100% bateria + dinheiro em numerário + cartão de crédito se precisar + documentação).",
  "Checklist de preparação de 30 minutos ANTES de sair: [ ] Briefing relido e compreendido? [ ] Dúvidas esclarecidas com agência? [ ] Horários da loja verificados? [ ] Rota planeada (endereço, tempo, custos)? [ ] Dinheiro/cartão levados? [ ] Roupa apropriada para persona? [ ] Telemóvel 100% + dados ativados? [ ] Documentos/credenciais se necessário? [ ] Fotocópia de briefing comigo? [ ] Plan B definido (loja fechada? produto indisponível?). Se tudo OK, executa!",
  "Antecipa os problemas comuns: (1) Loja pode estar fechada → verifica horários antes (liga, consulta Google, street view para confirmar). (2) Produto pode não estar → tem plan B (avalia com substituto similar ou reporta indisponibilidade). (3) Pode chover → leva guarda-chuva (não ficou encharcado pela chuva é observação também). (4) Tens imprevisto pessoal → comunica JÁ à agência (mudanças de data, cancelamento). (5) Trânsito → sai mais cedo ou agenda diferente dia.",
  "Plano B para tudo (nunca canceles sem tentar!): (1) Loja fechada no dia previsto? → Reagenda para dia seguinte (verifica que está dentro do prazo). (2) Produto específico indisponível? → Adapta avaliação usando alternativa similar (ex.: o café pedido não existe, pedes outro café). (3) Loja muito cheia/barulhenta? → Continua a avaliar de qualquer forma (regista que estava cheia). (4) Colaborador esperado ausente? → Avalia quem está presente (agência aceitará). (5) Impressora do talão avariada? → Fotografa o ecrã/recibo digital se possível. Só cancelas se realmente IMPOSSÍVEL (loja destruída por incêndio, quarentena por COVID, TU tens acidente).",
  "Preparação de identidade/persona: Se o briefing define persona específica (ex.: 'mulher 25-35, procura roupa para trabalho'), alinha tua apresentação (roupa casual profissional, atitude de cliente típico, linguagem apropriada). Se é 'cliente anónimo', apenas comporta-te normal. Nunca tenhas disfarce obviamente falso — desfazem-se logo.",
  "Gestão de ansiedade: Primeira missão? Normal estar nervoso. Respira! Lembra-te: agência confia em ti (senão não te atribuíam), colaboradores não suspeitam (é cliente comum), só observas factos (nada artificial). Após 5-10 missões, fica automático. Primeiro dia? Faz uma missão fácil, simples, perto de casa. Ganha confiança. Depois aumenta complexidade.",
  "Questões formativas ANTES da visita — a nova tendência: Muitas agências exigem que respondas a um questionário formativo ANTES de poderes realizar a missão. Este questionário testa se compreendeste o briefing corretamente: os cenários a aplicar, as secções a avaliar, os comprovativos a recolher, as perguntas a colocar. Só após feedback positivo da equipa de coordenação é que podes avançar. Isto protege-te (evita erros no terreno) e protege a agência (garante qualidade). Leva estas questões a sério — são a tua 'licença' para executar.",
  "Apps e plataformas de relatório — prepara ANTES: Muitos projetos utilizam apps como Mobiaudit ou plataformas como Shopmetrics para preenchimento dos relatórios. IMPORTANTE: descarrega e configura a app ANTES da visita. Faz login, verifica que tens acesso ao relatório, configura as definições corretas (por exemplo, modo de exibição 'Section-by-Section' para ver as secções no topo do ecrã). Algumas avaliações exigem que preenches parte do relatório DURANTE a visita, de forma discreta no telemóvel. Pratica a navegação na app para não perderes tempo no terreno.",
  "Vouchers e métodos de pagamento — ativa antes de sair: Em projetos de restauração e serviços, é comum receberes vouchers para pagar a refeição ou serviço avaliado. Estes vouchers devem ser SEMPRE ativados em casa, antes de te deslocares. Se tiveres mais do que uma visita no mesmo mês, só podes ativar um voucher de cada vez, e as visitas devem ser realizadas em dias diferentes. Não indiques proactivamente que tens voucher ou app — espera que o colaborador pergunte o método de pagamento. Sem voucher ativado = pagas do bolso sem garantia de reembolso.",
  "Planeamento pré-missão em 15 minutos: revê briefing, define objetivo principal, prepara roteiro de interação, verifica documentos necessários, confirma horário de menor risco de fila e planeia saída para registo imediato das notas. Este ritual reduz falhas e aumenta a qualidade dos relatórios.",
  "Prepara personagens plausíveis: quando o cenário exige perfil específico (ex.: cliente que procura crédito, plano de saúde ou manutenção automóvel), define história curta e coerente — necessidade, orçamento e prazo de decisão. Histórias simples são mais naturais e evitam contradições durante perguntas do colaborador.",
  "Checklist logística obrigatória: bateria do telemóvel acima de 60%, internet ativa, app/plataforma com sessão iniciada, método de pagamento disponível, espaço para fotos, bloco de notas digital pronto e rota de deslocação confirmada. Pequenas falhas logísticas podem inviabilizar toda a missão.",
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
  "Naturalidade é tudo: Comporta-te como cliente comum. Ritmo normal, voz natural, linguagem corporal relaxada. Se fizeres algo estranho, levantam suspeitas. Imagina que és tu mesmo naquele sítio, a fazer uma compra normal. Dica: vê como outros clientes se comportam e imita.",
  "A sequência ideal de uma visita: (1) Entrada — olha à volta naturalmente e começa a observar ambiente e limpeza. (2) Exploração — passeia pela loja como cliente comum, observando produtos, sinalética e disposição. (3) Busca de colaborador — faz uma abordagem natural ('Olá, procuro...') ou aguarda que te abordem. (4) Interação — conversa de forma natural e faz perguntas reais de cliente (produto, preço, disponibilidade). (5) Transação — compra (se for obrigatório) ou agradece de forma natural. (6) Saída — termina a visita com naturalidade, sem pressa.",
  "Como observar sem ser óbvio: (1) Observação de canto de olho — evita fixar diretamente pessoas ou detalhes por muito tempo. (2) Memorização por padrão — relaciona detalhes com a checklist para recordar melhor ('uniforme, cumprimento, limpeza'). (3) Ancoragem de horário — marca mentalmente as horas exatas (entrada, abordagem, saída). (4) Observação total — avalia a loja como um todo: balcão, clientes, ambiente, sons, temperatura e iluminação.",
  "Técnica de memorização eficaz: Após sair, senta-te numa cafetaria perto durante 10min e mentalmente 'revive' a missão cronologicamente. Lembra-te de cada momento, fala com eles na mente, reforça memória. Depois escreve notas rápidas (sem detalhe ainda). No dia seguinte (máximo 24h) expande para relatório completo.",
  "Regista de forma discreta: evita usar caderno e caneta dentro da loja, porque pode parecer suspeito. Usa o telemóvel como qualquer cliente (consultar horários, enviar mensagem, tirar foto de um produto). Se precisares de fotografar, faz de forma natural. Evita notas visíveis até sair do local e prioriza memorização durante a visita.",
  "E se correr tudo ao contrário durante a execução? (1) Produto indisponível — adapta a missão com alternativa semelhante ou pergunta quando haverá reposição. (2) Colaborador esperado ausente — avalia quem está presente e explica no relatório. (3) Loja muito cheia/barulhenta — mantém a avaliação e regista esse contexto. (4) Sem serviço (feriado não comunicado, greve) — contacta a agência de imediato e reporta o cenário. (5) Máquina do talão avariada — recolhe comprovativo alternativo (foto de ecrã ou recibo digital, se existir). (6) Pessoa quer conversar contigo pessoalmente — responde com educação e mantém um comportamento natural.",
  "Linha vermelha (nunca faças): (1) Nunca reveles a tua identidade como avaliador. (2) Nunca prolongues artificialmente a visita sem necessidade. (3) Nunca cries situações falsas para testar reações. (4) Nunca percas cordialidade, mesmo quando o atendimento é fraco. (5) Em caso de dúvida, contacta a agência antes de tomar uma decisão arriscada.",
  "Dicas de ouro para parecer cliente normal: (1) Visita a loja a horas normais (não vai à meia noite). (2) Veste-te apropriado para contexto (não vás de smoking a padaria). (3) Preço que compres deve fazer sentido (não compras 5 unidades do mesmo produto = estranho). (4) Comportamento alinhado com persona — se és 'homem de negócios', comporta-te como tal. (5) Tempo de visita apropriado — 5min de compra rápida vs 30min de exploração, ambos legítimos. (6) Fala com colaborador se natural (não forçado, mas também não evites).",
  "A abordagem proativa é um conceito central em muitas avaliações: uma das métricas mais analisadas é se o colaborador te aborda sem pedido de ajuda. Procedimento típico: diriges-te à secção, demonstras interesse nos produtos e esperas até 5 minutos por abordagem. Se não existir colaborador na secção, esperas até surgir alguém e repetes a observação. Só depois desse período procuras ajuda. O objetivo é avaliar iniciativa da equipa. Se fores abordado, memoriza a primeira frase usada.",
  "Cenários atribuídos: nas avaliações por cenário, recebes instruções específicas sobre o que simular. Não inventes o teu próprio cenário e segue exatamente o que foi atribuído. O cenário define o comportamento esperado do colaborador e serve de base para comparação com o protocolo da marca. Apresenta o cenário com linguagem natural, sem recitar o briefing, e partilha a informação de forma progressiva para permitir diagnóstico.",
  "Avaliar sem compra vs. com compra obrigatória: Nem todas as avaliações exigem compra. Em avaliações de abordagem proativa, por exemplo, podes ser instruído a apenas observar se és abordado e depois dizer 'obrigado, estou só a ver' e seguir para a próxima secção. Noutras, tens de fazer uma compra obrigatória (refeição num restaurante, produto numa loja) para avaliar todo o processo até ao pagamento. Verifica SEMPRE o briefing: se a compra é obrigatória, o valor é tipicamente reembolsado (guarda o talão!). Se não é obrigatória, não compres só para 'parecer mais natural' — pode gerar custos desnecessários.",
  "Follow-up pós-visita — avaliação que continua depois de saíres: Alguns projetos incluem avaliação de follow-up. Após a tua visita ou interação, a empresa deverá contactar-te (por chamada, SMS, WhatsApp ou email) dentro de um período definido (tipicamente 24 horas). Deves avaliar: se o contacto foi feito dentro do prazo, o profissionalismo do contacto, se te fizeram perguntas relevantes, se tentaram concretizar a venda ou marcar novo encontro. Mantém o telemóvel ativo e atento a chamadas desconhecidas. Se te perguntarem se queres avançar com a compra/adesão, responde que ainda estás a pensar — nunca te comprometas.",
  "Execução com linha temporal: organiza mentalmente a visita em fases (entrada, abordagem, diagnóstico, recomendação, fecho, despedida). Esta estrutura ajuda a captar pontos críticos sem perder naturalidade e facilita depois a escrita cronológica do relatório.",
  "Técnica de observação discreta 3x3: em cada fase, observa 3 elementos de ambiente (limpeza, organização, sinalética) e 3 elementos de atendimento (tempo, clareza, proatividade). Em poucos minutos recolhes dados robustos sem parecer que estás a auditar o local.",
  "Gestão de imprevistos em campo: se o cenário não puder ser executado (loja fechada, sistema indisponível, colaborador ausente), recolhe evidências mínimas, não inventes interação e comunica de imediato à agência com hora, local e descrição objetiva. Missões interrompidas podem ser remarcadas e ainda assim valorizadas quando bem documentadas.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Como Ser Natural Observando",
   scenario: "Estás numa loja de roupa. Precisas observar: limpeza, atendimento, conhecimento do colaborador. Mas não queres ser óbvio.",
   correctApproach: "Entras normalmente, observas 'ao passear' pela loja (vês pó? organização? preços claros?) sem parar fixamente em nada. Abordas colaborador naturalmente ('Olá, procuro uma camiseta em XL'). Enquanto interages, observas: cumprimento? oferece ajuda? conhece stock? É natural porque faz parte da conversa normal."
,
   incorrectApproach: "Entras com caderno, tiras notas visíveis, tiras fotos de pó no chão, fixas-te num colaborador para 'observar', fazes perguntas estranhas tipo 'há quanto tempo aquele pó está ali?' = Muito óbvio, levantam suspeitas."
  },
  {
   title: "Exemplo 2: Adaptação a Imprevisto",
   scenario: "Vens para avaliar quanto tempo demoras a ser atendido. Quando chegas, a loja está EXTREMAMENTE cheia — filas imensas. Sentes vontade de sair.",
   correctApproach: "Fica! Entra fila como cliente normal. Observa: quantos colaboradores estão ativos? Estão a correr? Qual é o tempo de espera REAL? Registas tudo. O contexto 'loja cheia' é IMPORTANTE para agência — quer saber se atendem bem mesmo sob pressão. Relatório: 'Local com ~30 clientes, 2 caixas ativas. Espera: 8min. Colaboradores: afobados mas educados.'"
,
   incorrectApproach: "Sais da loja porque 'não consegues fazer avaliação' ou porque 'não é hora de pico normal'. Perdes a oportunidade de recolher dados valiosos (agência quer saber como funcionam em picos!)."
  },
  {
   title: "Exemplo 3: Gerir Quando Te Reconhecem",
   scenario: "Estás numa loja a avaliar. Um colaborador (que conheces pessoalmente) te reconhece e diz 'Olá! Há quanto não te vejo!'",
   correctApproach: "Responde naturalmente, educadamente: 'Olá! Tudo bem? Sim, faz tempo!' Comporta-te como cliente comum. Continua a avaliar. Depois, INFORMA AGÊNCIA no relatório: 'Nota: reconhecido por [nome]. Não foi comunicado que era avaliação, comportamento foi natural' — agência decide se descarta."
,
   incorrectApproach: "Sais discretamente para não ser visto, ou tentas fingir que não o conheces (fica estranho), ou pior — confessas 'Estou a fazer avaliação'. A avaliação fica inútil se a pessoa souber."
  }
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
  "Tipos de evidência que recolhes: (1) Talões/recibos — prova de que estive lá + data/hora/valor (CRÍTICO), (2) Fotografias — exterior da loja, interior (layout, limpeza, sinalética), produto (cores, estado, preço visível), colaboradores (uniforme, apresentação), sinalética obrigatória. (3) Registos de horas — entrada, abordagem, duração, saída. (4) Notas escritas — observações, comportamentos. (5) Gravação áudio — APENAS se briefing permite (raro).",
  "O briefing dita as regras — SEGUE À RISCA: Qual evidência exata? ('talão+foto exterior+selfie interior' vs 'apenas talão'). Formato? (JPG, PDF, digitalizado?). Dados visíveis? (data, hora, valor?). Prazos? ('24h' vs '5 dias'). Não cumpres exatamente = rejeição automática, sem exceções!",
  "Organiza evidências JÁ, máximo 15min após sair: (1) Nomeia ficheiros com padrão — '20250320_Starbucks_Lisboa_talao.jpg'. (2) Verifica fotos — legíveis, bem focadas, sem pessoas involuntárias. (3) Talão — protege de água/rasgões. Guarda original + scan digital. (4) Dados de horas — coloca em ficheiro seguro. (5) Faz backup — copia para computador (telemóvel pode perder). (6) Pasta por missão — 'M001_Starbucks_20250320'.",
  "Validação de evidências ANTES de submeter: (1) Cruza com briefing — tenho TUDO? (2) Dados consistentes — talão diz 10:15, registei 10:18 de abordagem? Bate? (3) Nenhuma lacuna — briefing pediu 5 fotos, tenho 5? (4) Obrigatórias presentes — talão é obrigatório? Tenho? (5) Qualidade ok — fotos nítidas? Talão legível? (6) Privacidade — removi faces involuntárias de terceiros?",
  "Fotografia de qualidade — dicas: (1) LUZ — natural ou LED branca (não flash se reflectir). (2) FOCO — macro para detalhe, ou normal para geral. (3) ENQUADRAMENTO — capta o relevante (produto inteiro, sinalética legível). (4) ÂNGULO — de frente, não de cima (distorce). (5) SEM PESSOAS — evita rostos (privacidade). (6) TIMESTAMP — telemóvel marca hora automaticamente.",
  "O talão — joia da coroa: (1) DATA E HORA visível. (2) VALOR — prova transação real. (3) PRODUTOS — alinha com persona/briefing? (4) LOCAL/LOJA — qual sucursal? (5) PAGAMENTO — dinheiro/cartão? (6) CONSERVAÇÃO — protege de danos. Se não consegues talão, fotografa ecrã ou pede recibo alternativo.",
  "Cronologia exata — exemplo: 'Chegada 10:15. Exploração 10:15-10:20. Abordagem 10:20. Espera: 0min. Interação 10:20-10:28 (8min). Pagamento 10:28. Saída 10:29. Total em loja: 14min.' Cada minuto conta!",
  "Situações especiais: (1) Sem talão (serviço)? Pede recibo alternativo. Se impossível, documenta no relatório. (2) Sinalética/conformidade? Foto no contexto de análise. (3) Múltiplas compras? Talão deve refletir tudo ou múltiplos documentados. (4) Dados sensíveis em foto? Remove/pixela antes de submeter.",
  "Comprovativos obrigatórios por tipo de avaliação — sê meticuloso: Cada tipo de projeto exige evidências específicas. Em restauração: foto da fachada, foto da refeição completa ANTES de comer (de cima, com todos os componentes visíveis), e talão na íntegra. Em retalho: foto da fachada ou identificador interior (mapa de loja, cartaz). Em avaliações online: printscreen de TODOS os passos do processo (formulários, confirmações, emails trocados), SEMPRE com data e hora visível no ecrã do computador. Em avaliações de fitness/serviços: registo de chamadas recebidas/realizadas, printscreen da compra do voucher, foto da fachada no dia da visita, documentação entregue pelo estabelecimento. Sem TODOS os comprovativos exigidos, a visita NÃO será aceite — mesmo que o relatório esteja perfeito.",
  "Screenshots e evidências digitais — regras de ouro: Para avaliações online ou que envolvam processos digitais, os screenshots são CRÍTICOS. Regras: (1) A data e hora do computador devem ser SEMPRE visíveis no canto do ecrã. (2) Todos os dados preenchidos em formulários devem estar legíveis. (3) O email de confirmação automática deve ser guardado como prova da hora de envio. (4) Todas as respostas recebidas (emails, SMS, WhatsApp) devem ser documentadas com data, hora, remetente e conteúdo. (5) Guarda TODOS os emails trocados — mesmo os de cortesia. A agência usa estes timestamps para calcular tempos de resposta ao segundo.",
  "Fotografia de refeições — parece simples mas tem regras: Se avalias restauração, a fotografia da refeição é evidência obrigatória. Deve ser tirada de CIMA (vista aérea) para que todos os componentes do prato e do tabuleiro sejam visíveis. Tira a foto ANTES de começar a comer. Nos cenários de take-away, destapa todos os recipientes antes de fotografar para que o empratamento seja visível. Se algum produto não está conforme o pedido (hambúrguer mal passado, batatas moles, ingredientes em falta), tira foto específica dessa não conformidade. Estas fotos são usadas pela marca para avaliar a qualidade operacional da cozinha — são tão importantes como o teu relatório escrito.",
  "Evidência útil é evidência auditável: cada ficheiro deve permitir verificar contexto (local, momento e relação com o critério avaliado). Evita fotos desfocadas, cortes excessivos ou documentos sem dados essenciais. Organiza os anexos por ordem cronológica para facilitar validação da equipa de qualidade.",
  "Padrão de nomeação recomendado para anexos: AAAA-MM-DD_missao-local_tipo-evidencia_sequencia (ex.: 2026-03-26_porto-centro_talao_01). Este padrão reduz erros de upload, acelera revisão e ajuda-te a localizar provas rapidamente em caso de contestação.",
  "Proteção de dados pessoais: guarda comprovativos apenas pelo período definido pela agência e evita partilhar ficheiros em canais informais. Quando terminares o ciclo de validação/pagamento, elimina cópias desnecessárias para reduzir risco de exposição de informação sensível.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Organização Perfeita de Evidências",
   scenario: "Fizeste 3 missões num dia. 3 talões, múltiplas fotos, notas. Como não ficar caótico?",
   correctApproach: "Por cada missão: pasta 'Missao1_Carrefour_20250320' com 'talao.jpg', 'exterior.jpg', 'interior_limpeza.jpg', 'produto.jpg', 'notas.txt' (horas + observações). Mesmo para Missão 2 e 3. Ao submeter, arquiva. Resultado: zero confusão, fácil revisar.",
   incorrectApproach: "Fotos todas em 'Imagens', nomes genéricos 'IMG_001'. Talões soltos na secretária. Notas em 3 blocos. Ao submeter: qual foto é de qual loja? Onde estão talões? CAOS."
  },
  {
   title: "Exemplo 2: Garantir Qualidade de Foto",
   scenario: "Foto ao talão sai desfocada — valor ilegível. Próxima tem reflexo de luz. Como resolver?",
   correctApproach: "Talão em superfície plana. Telemóvel perpendicular (não inclinado). Luz natural junto janela ou LED branca. Tira 3-4 fotos de segurança. Escolhe melhor. Se valor ainda não se lê, modo macro com zoom. Resultado: talão legível, documentado.",
   incorrectApproach: "Tiras 1 foto rápida, má, submetes mesmo. Agência rejeita: 'ilegível'. Relatório volta para ti."
  },
  {
   title: "Exemplo 3: Validação Cruzada",
   scenario: "Talão mostra 10:15, tu registaste 'abordagem 10:20', mas talão marca 10:18. Qual certo?",
   correctApproach: "Talão registra pagamento (10:18), não abordagem. Tu certo — abordado às 10:20 (2min depois). Corrige registo: 'Entrada 10:15. Abordagem 10:18 (conforme talão). Saída 10:22.'",
   incorrectApproach: "Ignoras discrepância. Agência questiona integridade. Relatório rejeitado. Reputação afetada."
  }
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
  "O relatório é o teu produto final: É o que a marca recebe e usa para tomar decisões. Tem de ser PERFEITO. 3 pilares: (1) FACTOS — o que observei exatamente (não interpretações), (2) CONTEXTO — circunstâncias da visita (loja cheia? dia específico? evento?), (3) EVIDÊNCIA — provas que recolhi (fotos, talão, tempos). Isto é OURO!",
  "Estrutura padrão de relatório: (1) CABEÇALHO — data da visita, hora, local exato, endereço, nº missão, persona utilizada. (2) DADOS DA VISITA — duração total em loja, hora entrada, hora saída, caracterização local (cheia/vazia?). (3) RESPOSTAS FECHADAS — checklist SIM/NÃO, escalas 1-5, N/A. Uma por uma, sem interpretação. (4) RESPOSTAS ABERTAS — descrição cronológica detalhada (1º isto, depois aquilo), comportamentos observados, diálogos relevantes. (5) CLASSIFICAÇÃO GLOBAL — pontuação final se aplicável. (6) ANEXOS — fotos, talão, documentação.",
  "Respostas fechadas — BINÁRIA, SEM AMBIGUIDADE: Critério: 'Colaborador cumprimentou em 30 segundos'. Resposta: SIM ou NÃO. Não existe 'quase' (32 segundos NÃO é SIM), 'com entusiasmo limitado' (cumprimento débil é SIM se verbal), 'mais ou menos'. É FACTUAL ABSOLUTO! Se espera-te 35seg = NÃO cumpriu. Simples.",
  "Respostas abertas — CRONOLÓGICAS, OBJECTIVAS, ESPECÍFICAS: (1) Ordem temporal — '10:15 entro, 10:18 sou abordado por Maria, ela diz \"Olá, que posso ajudar?\", pergunto de camiseta XL, ela mostra 3 opções, oferece cores, demora 8min total, pago às 10:26'. (2) Sem opiniões — NÃO escreves 'serviço péssimo' (opinião), escreves 'colaboradora respondeu apenas a 2 de 5 perguntas técnicas' (facto). NÃO escreves 'simpática' (subjetivo), escreves 'sorriu durante interação' (observável). (3) Apenas mensuráveis — tempos, descrições, comportamentos, palavras ditas, não interpretações.",
  "Linguagem — CLARA, PROFISSIONAL, SEM FLOREADOS: Bom: 'Colaborador abordou cliente em 3 minutos. Pergunta: conheces diferenças entre estes modelos? Resposta: não soube detalhar. Resultado: critério não cumprido.' Mau: 'O colaborador foi meio lento a vir, e quando chegou não percebeu muito bem a pergunta, coitado.' Reescreve SEMPRE!",
  "Contradições — O PECADO MORTAL: Checklist diz 'Critério X = SIM' mas texto diz 'Não conseguiu responder'. ERRO FATAL! Agência ve inconsistência, questiona integridade, rejeita. SEMPRE sincroniza checklist com texto. Se descobres erro durante escrita, CORRIGE ambos!",
  "Prazo de entrega — NÃO DEMORES: Típico é 12-48 horas após missão. Não significa 'submetes 40h depois'. Significa 'submetes no dia seguinte MAX'. Cada hora conta — memória perde detalhe. Relatórios velhos (>48h) parecem menos credíveis ('porque esperou tanto?'). Entrega rápida = qualidade aparentemente melhor.",
  "Checklist FINAL antes de submeter: [ ] Data/hora/local precisos? [ ] Respostas fechadas todas preenchidas? [ ] Texto aberto corresponde às respostas fechadas? [ ] Nenhuma contradição? [ ] Linguagem clara/profissional? [ ] Erros ortográficos ou gramática? [ ] TODAS as evidências obrigatórias anexadas? [ ] Ficheiro nomeado corretamente? [ ] Tamanhos de imagem aceitáveis (não +5MB)? Se tudo OK, SUBMETE!",
  "Regras de escrita profissional — aprende com os melhores: O discurso do relatório deve ser SEMPRE na 1ª pessoa do singular e no passado ('Dirigi-me à secção...', 'O colaborador cumprimentou-me...'). Respeita o acordo ortográfico vigente. Evita gírias, abreviações e emojis. O upload de anexos deve ser em formato JPG, JPEG ou PNG (PDFs raramente aceites para fotos). Estas regras parecem simples mas são a diferença entre um relatório profissional e um amador — e as agências notam imediatamente.",
  "Justificação obrigatória de penalizações: Quando avalias negativamente um critério (NÃO, PARCIALMENTE, ou pontuação baixa), és OBRIGADO a justificar no campo de comentários associado. A justificação deve ser factual e específica: 'O colaborador não sugeriu produtos complementares durante os 8 minutos de interação' é correto. 'O colaborador não se esforçou' é vago e inaceitável. As agências rejeitam relatórios com penalizações não justificadas — e com razão, porque a marca precisa de saber EXATAMENTE o que correu mal para poder formar as equipas.",
  "Pontos positivos e pontos de melhoria — o resumo final: Muitos relatórios pedem que identifiques explicitamente os pontos fortes da visita e os pontos de melhoria. Os pontos de melhoria devem corresponder a TODAS as questões que penalizaste — não podes ter uma questão avaliada negativamente que não apareça nos pontos de melhoria. Os pontos positivos destacam o que correu bem e ajudam a marca a reconhecer boas práticas. Algumas marcas pedem ainda comentários sobre a concorrência — deves observar quais os estabelecimentos vizinhos com mais e menos movimento e indicar no campo apropriado.",
  "Gravação progressiva do relatório — previne perdas: Muitas plataformas de relatório NÃO gravam automaticamente o teu progresso. Se o computador falhar, a internet cair ou a sessão expirar, podes perder TUDO o que escreveste. REGRA: grava o relatório a cada secção que completares. Nas apps móveis, se precisares de interromper, clica em 'guardar/home' antes de sair — o teu progresso fica salvo e podes continuar mais tarde. Esta dica parece básica mas evita uma das frustrações mais comuns de avaliadores: ter de reescrever um relatório inteiro porque se esqueceram de guardar.",
  "Estrutura de relatório profissional: abre com contexto da missão, descreve sequência cronológica dos factos, responde cada critério do briefing com evidência associada e fecha com síntese objetiva de conformidades/não conformidades. Clareza e objetividade aumentam a aprovação na primeira submissão.",
  "Escrita de alto padrão: usa frases curtas, verbos de observação (vi, ouvi, recebi, esperei), dados mensuráveis (horas, tempos, quantidades) e evita adjetivos vagos como 'péssimo' ou 'ótimo' sem prova. Um bom relatório permite decisão de gestão sem necessidade de interpretação adicional.",
  "Rotina de revisão antes de enviar: confirma se todos os campos obrigatórios estão preenchidos, verifica ortografia, valida coerência entre respostas e anexos e faz uma última leitura com foco em neutralidade. Cinco minutos de revisão podem evitar rejeição, retrabalho e atraso no pagamento.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Resposta Aberta Excelente",
   scenario: "Briefing pede descrição cronológica de atendimento. Como escrever bem?",
   correctApproach: "'Chegada 10:15. Loja com ~20 clientes, 1 caixa ocupada. Abordagem: 10:18 por colaborador Carlos, disse \"Olá! Bem-vindo\". Perguntei: \"Qual a diferença entre modelo A e B?\" Resposta: \"Modelo A é mais rápido em processamento, B é mais barato\". Resposta incompleta (não mencionou bateria nem garantia, conforme formação esperada). Transação: comprei modelo A por 299€, taxa de 10% oferecida. Pagamento: 10:28. Saída: 10:30. Total em loja: 15min.'"
,
   incorrectApproach: "'Atendimento bom. Colaborador conhecedor. Resolveu bem a questão. Ambiente agradável. Gostei.' (Vago, opinião, nenhum facto concreto)"
  },
  {
   title: "Exemplo 2: Evitar Contradições",
   scenario: "Na checklist marca 'Oferecimento de complementos: SIM'. No texto escreve 'Colaborador não ofereceu qualquer produto adicional'.",
   correctApproach: "Corrige ANTES de submeter! Decisão: observaste que ofereceu ou não? Se SIM ofereceu, escreve no texto: 'Colaborador ofereceu complemento — capa protetora — cliente recusou.' Se NÃO ofereceu, muda checklist para NÃO. Uma ou outra, sincronizadas."
,
   incorrectApproach: "Submetes com contradição. Agência descobre, rejeita, questiona credibilidade. Perde-se tempo."
  },
  {
   title: "Exemplo 3: Remover Opinião, Manter Facto",
   scenario: "Escreveste: 'Colaborador simpático mas incompetente.' Como corrigir?",
   correctApproach: "Substitui por: 'Colaborador manteve contacto visual durante conversa e sorriu (comportamento positivo). Respondeu corretamente apenas 1 de 4 perguntas técnicas (conhecimento limitado).' — Factos, não opiniões."
,
   incorrectApproach: "Deixas como está. Agência pode ver como subjetivo/enviesado."
  }
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
  "Quanto se ganha por missão? Varia MUITO: 5-20€ (retalho simples), 20-50€ (telecomunicações/farmácia), 50-100€ (banca/hotelaria), 100-200€+ (auditorias complexas). Depende de: (1) Complexidade (observação simples vs auditoria exigente), (2) Setor (retalho vs banca = grande diferença), (3) Requisitos (só observar vs compra+foto+relatório), (4) Tempo exigido, (5) Localização (Lisboa >€ que Aldeia). Reembolsos: compras OBRIGATÓRIAS (talão incluso), consumos obrigatórios (café se briefing pede), estacionamento (documentado). Compras pessoais ou consumos não obrigatórios = TU pagas!",
  "Como funciona o pagamento? Varia por plataforma: (1) Transferência bancária mensal (agências tipo BMS), (2) Por projeto após validação (plataformas tipo Spotec), (3) Carteiras digitais (PayPal, wise). Prazo: 15-60 dias após agência validar relatório. Sim, demora. Não contes com dinheiro imediat—planeija cash flow! Quanto mais rápido submetes relatório, mais cedo começa contagem de dias.",
  "Cálculo exato da rentabilidade — FERRAMENTA CRÍTICA: Fórmula: (Remuneração - Custos Reais) / Horas Totais = €/hora. EXEMPLO: Missão 25€. Custos: combustível 8€ + estacionamento 3€ + café não reembolsado 2€ = 13€ total. Lucro real = 25-13 = 12€. Tempo: prep 30min + deslocação 25min + execução 40min + relatório 1h = 2h 35min. Rentabilidade: 12€ / 2.58h = 4.65€/hora. PROBLEMA: <6€/hora! Pode não valer. Mínimo recomendado: 8€/hora (acima salário mínimo considerando outras responsabilidades).",
  "Decisões inteligentes de aceitar/rejeitar: (1) <4€/hora = REJEITA (não compensa). (2) 4-6€/hora = CONSIDERA (se estás perto, pode valer para experiência). (3) 6-10€/hora = ACEITA (normal, aceitável). (4) >10€/hora = PRIORITÁRIO (boas missões, sempre aceita). Não é só dinheiro — experiência, portfolio, ratings também valem, especialmente no início!",
  "Aumenta rendimento ESTRATEGICAMENTE: (1) Agrupa missões — mesma zona (ex.: 3 lojas em Cascais num dia = economiza combustível + tempo), (2) Torna-te REGULAR em projetos (agência preferida contata-te primeiro com missões premium), (3) Especializa em setores de valor (banca, hotelaria, automóvel = remuneração 3-5x maior que retalho), (4) Aumenta volume gradualmente (10 missões/mês depois 20 depois 50), (5) Evolui para premium (auditorias certificadas, consultoria de qualidade = 150€+ por missão).",
  "Reembolsos — DOCUMENTAR TUDO: (1) Compra obrigatória: Talão é PROVA. Fotografa claro, valores legíveis. (2) Estacionamento: Recibo de máquina, fotografia é prova. (3) Consumo obrigatório: Incluído no talão da compra (ex.: cappuccino na Starbucks que foste avaliar). (4) NÃO reembolsa: transporte público da tua casa (responsabilidade tua), refeições pessoais, roupa, combustível em certos contratos. LÊ BRIEFING SEMPRE!",
  "Impacto fiscal em Portugal: (1) <20k€/ano = atividade ocasional (IRS simples, sem IVA). (2) 20-75k€ = regime real (recibos verdes, tens despesas dedutíveis: combustível, telemóvel, internet, seguros). (3) >75k€ ou pretendes expandir = abres empresa/unipessoal (mais complexo mas maior credibilidade). RECOMENDAÇÃO: Consulta contabilista (custa 50-100€ uma vez, economiza erros futuros). Declaras sempre, senão conseguem auditar-te! Não compensa fraude.",
  "Planeamento financeiro — mentalidade profissional: (1) Calcula ROI de cada missão (lucro vs tempo investido). (2) Faz orçamento mensal mínimo ('preciso de 100€/mês = quantas missões?'). (3) Guarda 30% do ganho para impostos (imposto seguro). (4) Reinveste em qualidade (melhor câmara, carro, telemóvel = mais missões). (5) Diversifica (não depender 100% de 1 plataforma). (6) Negocia — após 6 meses de bom histórico, pede remuneração melhor para próximos projetos. Agências negociam com profissionais comprovados!",
  "Remuneração variável por desempenho — o nome do colaborador vale dinheiro: Em muitos projetos, a tua remuneração pode variar conforme a qualidade da informação que recolhes. Exemplo real: em avaliações de grandes lojas, o pagamento por secção pode ser de 4€ se NÃO obtiveres o nome do colaborador avaliado, mas sobe para 5€ se o conseguires obter. Parece pouco, mas em 4 secções são 4€ a mais. O nome do colaborador é CRÍTICO porque permite à marca dar feedback personalizado e formação específica. Dica: observa discretamente o crachá ou placa de identificação; se não conseguires ver, no final da interação pergunta naturalmente ('Como se chama? Caso precise de ajuda novamente, sei a quem procurar').",
  "Visita invalidada = ZERO remuneração (e possível débito): Se a tua visita for considerada inválida por incumprimento dos parâmetros definidos (cenário errado, horário fora do estipulado, localização errada, comprovativo em falta, ou pergunta mistério não colocada), os honorários NÃO serão pagos. Em projetos com voucher ou reembolso de refeição, poderás ter de devolver o valor à agência. Isto parece severo, mas é a realidade do mercado — as marcas pagam pela informação, e informação recolhida fora dos parâmetros não tem valor. Por isso, verifica e re-verifica TODOS os parâmetros antes de executar.",
  "Cartões SIM e contactos dedicados — profissionalismo: Muitos projetos exigem que utilizes números de telefone diferentes para cada avaliação (para que a empresa avaliada não reconheça o número em avaliações futuras). A solução é ter vários cartões SIM pré-pagos de diferentes operadoras. Podes pedir cartões gratuitamente nos websites das operadoras — chegam em 2 a 5 dias à tua morada. Quanto mais cartões tiveres, mais projetos podes aceitar. Envia o novo número à agência para cada projeto. Este investimento de tempo (pedir cartões) traduz-se diretamente em mais oportunidades de trabalho.",
  "Distingue sempre três blocos financeiros: fee da missão (pagamento pelo trabalho), reembolso (devolução de compra exigida) e custos operacionais (deslocação, estacionamento, tempo improdutivo). Só com esta separação consegues medir rentabilidade real por missão e por semana.",
  "Cria um painel mensal simples: número de missões concluídas, taxa de aprovação, valor faturado, valor reembolsado, custos totais e lucro líquido por hora. Este controlo transforma atividade ocasional em operação profissional e ajuda a negociar melhores condições.",
  "Gestão de tesouraria para iniciantes: como algumas plataformas pagam a 30/45/60 dias, reserva fundo de caixa para suportar compras de missões reembolsáveis sem pressionar finanças pessoais. Nunca aceites volume de missões que comprometa liquidez no curto prazo.",
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
  "Pilares de uma reputação OURO — A TRÍADE DE OURO: (1) CONSISTÊNCIA — sempre a mesma qualidade, nunca inconsistências ('porque esta missão está tão melhor que a anterior?'), (2) QUALIDADE — relatórios detalhados, precisos, com evidências perfeitas (taxa aprovação >95%), (3) CUMPRIMENTO DE PRAZOS — entregar SEMPRE no prazo (idealmente antes!), nunca atrasos. Resultado? Agências contactam-te primeiro, recebes convites exclusivos para projetos premium pagos 3-5x mais que mediocres!",
  "Caminho de evolução TÍPICO — O ROADMAP: MÊS 1-2: Retalho simples (Carrefour, Mini Preço, cafés) ou fast-food (Burger King, Telepizza). Aprendes processo, ganhas confiança, construis portfolio. €5-15/missão. MÊS 3-4: Telecomunicações, Farmácias, Seguros. Mais complexo, mais detalhado, mais pago. €15-40/missão. MÊS 5+: BANCA, Hotelaria de luxo, Auditorias certificadas. Exigem excelência, mas remuneração €75-200+/missão. É o topo!",
  "Como ACELERAR evolução — ESTRATÉGIA AGRESSIVA: (1) Formação contínua — lê sobre observação comportamental, técnicas de escrita, specifiquidades de setores (ex.: banca exige conhecimento de produtos). (2) Pede feedback — quando rejeitam relatório, PERGUNTA: 'porque não aprovaram? O que posso melhorar?'. (3) Analisa erros próprios — mantém log de 'erros cometi isto, não repito'. (4) Diversifica setores — trabalha em múltiplos setores, ganha versatilidade. (5) Networking — conecta-te com outros avaliadores (fóruns online), aprende com experiências deles, troca dicas.",
  "PLANO CONCRETO DE 30 DIAS — EXECUTÁVEL: SEM: Regista em 3-5 plataformas (BMS, Spotec, Teseo, NasoQ, outras), completa perfis 100% (foto legível, CV descritivo, áreas de interesse), faz 1ª missão escolhida — retalho simples, perto de casa, baixa pressão. Objetivo: ganhar confiança. SEMANA 2: Faz 2-3 missões, PRIORIZA QUALIDADE >QUANTIDADE. Cada relatório revisão tripla. Recolhe feedback, marca erros. SEMANA 3: Pede feedback explícito das agências (emails: 'como posso melhorar?'). Tenta 3-4 missões com ânimo de melhorar. SEMANA 4: Consolida rotina pessoal (horário ideal? zona geográfica preferida?), calcula rentabilidade REAL de tudo, reúne métricas (quantas aceites? taxa aprovação?), define OBJETIVO para mês 2 (ex.: 10 missões/mês, 8€/hora mínimo, aproveitar setor telecomunicações).",
  "MÉTRICAS QUE DEFINEM SUCESSO — DASHBOARD PESSOAL: (1) Número de missões/semana (objetivo inicial: 2-3, depois 5, depois 10+). (2) Taxa de ACEITAÇÃO oferecido vs executado (almejar >90%). (3) Taxa de APROVAÇÃO relatórios — almejar >95% (essencial!). (4) Qualidade média — feedback da agência ('excelente' vs 'aceitável'). (5) Rendimento líquido/mês após custos (é o que importa, não €bruto). (6) Tempo médio por missão (tentar reduzir de 2h para 1.5h com experiência). (7) Quantas agências te contactam PROATIVAMENTE (sinal de boa reputação). (8) Taxa de retorno — quantas vezes a mesma agência te chama (fidelização = bom sinal).",
  "EVOLUÇÃO DE RATINGS E REPUTAÇÃO — CONSTRUÇÃO LENTA E SEGURA: Mês 1: Rating 4.5/5 (normal iniciante, esperado). Mês 2-3: 4.7/5 (melhoramento visível, agências notam). Mês 4+: 4.9/5 (elite, contactam-te com prioridade). Rating 5/5 é raro (quase impossível sem perfeção absoluta). Acima de 4.7? Já abrem portas! Rating afeta ofertas que recebe — mau rating = missões low-value, bom rating = convites premium.",
  "QUANDO ESCALAR PARA PREMIUM — SINAIS DE PRONTIDÃO: (1) 100+ missões completadas com >95% aprovação. (2) Agências pedem-te 'por nome' (ex.: 'queremos O João para este projeto bancário'). (3) Dominas 2-3 setores tecnicamente. (4) Capaz de 2-3 missões/dia sem comprometer qualidade. (5) Feedback consistentemente positivo. Se tens estes sinais? NEGOCIA! Peça remuneração melhor, missões premium, exclusividade. Mereces!",
  "LIÇÕES FINAIS — O VERDADEIRO SUCESSO: Mystery Shopping não é enriquecer rápido. É construir carreira flexível, ganho extra legitimado, com potencial real de crescimento. Profissionais com 5 anos de experiência ganham €500-1000/mês de forma autónoma. Há exemplos de avaliadores que evoluíram para CONSULTORES DE QUALIDADE (guiam outras agências, ganham €200+/dia). Depende de ti: começar, persistir, evoluir. A estrutura está aqui. Mão à obra!",
  "A importância do manual formativo — a tua bíblia de cada projeto: Cada projeto sério vem acompanhado de um manual formativo completo. Este documento contém TUDO o que precisas saber: introdução ao projeto, datas e horários permitidos, objetivos específicos da avaliação, cenários a aplicar, comprovativos obrigatórios, instruções de preenchimento do relatório, e contactos da equipa de coordenação. Lê o manual formativo como quem estuda para um exame — sublinha, toma notas, memoriza os pontos-chave. Avaliadores que não leem o manual cometem erros evitáveis e acabam com visitas invalidadas. Avaliadores que o dominam entregam relatórios impecáveis desde o primeiro projeto.",
  "Especialização setorial — torna-te o perito que as agências procuram: À medida que acumulas experiência, começa a construir especialização em 2-3 setores. Por exemplo: se dominas avaliações de restauração (conheces os processos de empratamento, serviço de bebidas, higiene alimentar, gestão de pedidos especiais), tornas-te o avaliador que as agências chamam PRIMEIRO para projetos nesse setor. Se dominas o setor automóvel (compreendes serviços de pós-venda, leads online, processos de marcação), abres portas para projetos premium muito bem pagos. A especialização cria VALOR — e valor traduz-se em melhor remuneração e mais oportunidades.",
  "Gestão de múltiplas plataformas e projetos simultâneos: Avaliadores experientes trabalham tipicamente com 3 a 5 agências/plataformas em simultâneo. Isto exige organização rigorosa: (1) Calendário partilhado com TODAS as missões agendadas (datas, horários, locais). (2) Pasta organizada por projeto com briefing, manual formativo e comprovativos. (3) Lista de contactos de coordenadores por projeto. (4) Controlo financeiro — quanto faturaste, quanto te devem, prazos de pagamento. (5) Gestão de cartões SIM — qual número está associado a qual projeto. Esta organização é o que separa avaliadores amadores de profissionais. Investe tempo em criar o teu sistema desde o início.",
  "Plano de evolução em 90 dias: Dias 1-30 foco em consistência (entregar no prazo e sem correções), Dias 31-60 foco em qualidade analítica (relatórios mais detalhados e evidências impecáveis), Dias 61-90 foco em especialização (setor escolhido + candidaturas premium). Esta progressão aumenta convites diretos de coordenadores.",
  "Portefólio profissional do avaliador: mantém registo das tipologias de missão concluídas, indicadores de desempenho (aprovação, pontualidade, retrabalho) e áreas de especialidade. Um portefólio bem estruturado facilita entrada em projetos de maior valor e abre portas em múltiplas agências.",
  "Aprendizagem contínua: reserva bloco semanal para rever feedback recebido, estudar novos briefings e treinar escrita objetiva. O diferencial dos melhores avaliadores não é fazer mais missões, é entregar qualidade estável em qualquer cenário de avaliação.",
 ],
 evaluationExamples: [
  {
   title: "Exemplo 1: Como Pedir Feedback Para Melhorar",
   scenario: "A agência rejeitou teu relatório. Como aproveitar para crescer?",
   correctApproach: "Email: 'Olá, vi que o relatório da Starbucks foi rejeitado. Gostaria de entender porquê para não repetir o erro. Podiam dar feedback específico? (ex.: falta de detalhe? dados inconsistentes? linguagem inadequada?). Agradeço o investimento na minha evolução.' Resultado: recebes feedback, melhoras, próximo relatório melhor."
,
   incorrectApproach: "Ignoras a rejeição, submetes outro relatório similar, volta a ser rejeitado. Ciclo negativo, frustração, abandono."
  },
  {
   title: "Exemplo 2: Decisão Aceitar ou Rejeitar Missão",
   scenario: "Agência oferece missão: 18€, 1h30min de execução total, 35km de deslocação. Aceitavas?",
   correctApproach: "Calcula: 18€ - (combustível ~7€ + estacionamento 2€ + café 1€) = 8€ lucro. 1.5h execução. Mas tem deslocação 35km = 1h total (ida+volta). Total 2h30min. Rentabilidade: 8€/2.5h = 3.2€/hora. REJEITA — abaixo do mínimo recomendado 6€/hora."
,
   incorrectApproach: "Aceita porque 'preciso de experiência'. Depois de fazer, percebe que foi mal. Melhor: no mês 1 aceitas para aprender, mês 2+ aprendes a dizer 'não'."
  },
  {
   title: "Exemplo 3: Plano de Evolução Real",
   scenario: "Estás no fim do mês 1. Tens 8 missões feitas, taxa aprovação 92%. Como procedes mês 2?",
   correctApproach: "Análise: 92% é bom, mas precisa >95%. Próximo mês: (1) Foco em qualidade, não quantidade — 5 missões mas PERFEITAS. (2) Pede feedback específico de 2 agências. (3) Tenta 1 setor novo (telecomunicações, farmácia) para diversificar. (4) Revê cada relatório rejeitado (entende padrão de erro). (5) Objetivos mês 2: 10 missões com 97%+ aprovação, pelo menos 2 de setores novos."
,
   incorrectApproach: "Quer 'ganhar mais rápido', tenta 20 missões em mês 2, qualidade cai para 85% aprovação, reputação destrói-se. Mano a reparar leva 3-4 meses."
  }
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

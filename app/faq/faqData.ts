/*
 * DESCRIÇÃO DO FICHEIRO: Fonte única das perguntas frequentes — usada pela
 * página (acordeão, pesquisa e agrupamento por tema) e pelo layout
 * (JSON-LD FAQPage), para nunca divergirem.
 */

export type FaqCategoryId = "curso" | "pagamentos" | "missoes" | "certificado";

export const faqCategories: { id: FaqCategoryId; label: string }[] = [
  { id: "curso", label: "Curso" },
  { id: "missoes", label: "Missões" },
  { id: "pagamentos", label: "Pagamentos" },
  { id: "certificado", label: "Certificado" },
];

export const faqs: { slug: string; category: FaqCategoryId; q: string; a: string }[] = [
  {
    slug: "experiencia",
    category: "curso",
    q: "Preciso de experiência anterior?",
    a: "Não. O curso foi desenhado para começar do zero. Se tens atenção ao detalhe e sabes escrever um parágrafo claro, tens o suficiente para começar.",
  },
  {
    slug: "duracao",
    category: "curso",
    q: "Quanto tempo demora a fazer o curso?",
    a: "Em média, cerca de 4 horas, distribuídas pelos 10 módulos. Podes fazê-lo num fim-de-semana ou ao longo de várias semanas — o acesso é vitalício.",
  },
  {
    slug: "legalidade",
    category: "missoes",
    q: "Isto é legal em Portugal?",
    a: "Sim. Mystery shopping é uma atividade legítima e regulada como qualquer outra prestação de serviços. As marcas pagam às plataformas para auditarem o seu próprio atendimento e tu prestas esse serviço como independente.",
  },
  {
    slug: "carro",
    category: "missoes",
    q: "É preciso ter carro?",
    a: "Depende da tua zona. Em cidades como Lisboa ou Porto, transportes públicos chegam. Fora dos centros, carro alarga muito as missões disponíveis — mas não é obrigatório.",
  },
  {
    slug: "pagamento",
    category: "pagamentos",
    q: "Como recebo o pagamento das missões?",
    a: "Diretamente da plataforma que te atribui a missão, normalmente por transferência bancária após aprovação do relatório. O módulo 10 explica como emitir recibos verdes.",
  },
  {
    slug: "reembolso",
    category: "pagamentos",
    q: "Há reembolso se não gostar?",
    a: "Sim. Tens 14 dias para pedir reembolso integral, sem questões. Acreditamos no produto — só queremos que aprendas, não que pagues sem usar.",
  },
  {
    slug: "certificado",
    category: "certificado",
    q: "O certificado é reconhecido?",
    a: "O certificado é emitido pelo Cliente Mistério e comprova as competências adquiridas. As plataformas em Portugal aceitam-no como prova de formação, mas o que conta sobretudo é o teu desempenho nas missões.",
  },
];

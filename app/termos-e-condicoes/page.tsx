/*
 * DESCRIÇÃO DO FICHEIRO: Página de Termos e Condições com novo design.
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições | Cliente Mistério",
  description: "Leia os termos e condições de utilização do portal Cliente Mistério.",
};

const sections = [
  {
    number: "1",
    title: "Aceitação dos Termos",
    content: "Ao aceder, adquirir ou utilizar o curso disponibilizado no portal Cliente Mistério, o utilizador concorda em aceitar integralmente estes termos e condições. Se não concorda com alguma parte destes termos, por favor não prossiga com a compra ou utilização do curso.",
  },
  {
    number: "2",
    title: "Serviço Fornecido",
    content: "O portal Cliente Mistério comercializa um curso online de formação para quem pretende iniciar a atividade de cliente mistério. O curso inclui módulos de aprendizagem, materiais de apoio e, após conclusão, a emissão de um certificado de participação. O serviço é fornecido em formato digital, acessível através da plataforma online.",
  },
  {
    number: "3",
    title: "Certificado de Conclusão",
    content: "Após a conclusão do curso, o utilizador recebe um certificado de participação. O certificado não possui validade legal nem é reconhecido por qualquer entidade reguladora. O certificado serve exclusivamente como comprovativo de que o utilizador frequentou e concluiu o curso. O certificado não substitui qualquer formação profissional certificada, acreditada ou regulamentada por lei.",
  },
  {
    number: "4",
    title: "Compra e Pagamento",
    content: "A aquisição do curso é feita mediante pagamento único, processado de forma segura através da plataforma de pagamentos Stripe. Após confirmação do pagamento, o acesso ao curso é ativado de forma imediata. Não são oferecidos reembolsos após o acesso ao curso ter sido disponibilizado, salvo nos casos previstos na legislação do consumidor em vigor.",
  },
  {
    number: "5",
    title: "Responsabilidades do Utilizador",
    content: "O utilizador é integralmente responsável pela confidencialidade das suas credenciais de acesso e pela segurança da sua conta. O utilizador compromete-se a não partilhar o acesso ao curso com terceiros, não reproduzir ou distribuir os conteúdos, não utilizar a plataforma para fins ilegais e informar imediatamente sobre qualquer uso não autorizado da sua conta.",
  },
  {
    number: "6",
    title: "Propriedade Intelectual",
    content: "Todo o conteúdo presente no portal e no curso, incluindo textos, gráficos, logos, imagens, vídeos e software, é propriedade de Cliente Mistério ou dos seus fornecedores de conteúdo e está protegido pelas leis de propriedade intelectual. O utilizador é autorizado a aceder ao conteúdo apenas para uso pessoal e não comercial.",
  },
  {
    number: "7",
    title: "Limitação de Responsabilidade",
    content: "Cliente Mistério não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do acesso ou uso do portal ou do curso. O portal não garante resultados profissionais ou de emprego decorrentes da frequência do curso.",
  },
  {
    number: "8",
    title: "Privacidade e Dados Pessoais",
    content: "O tratamento de dados pessoais no portal segue a legislação em vigor, nomeadamente o Regulamento Geral sobre a Proteção de Dados (RGPD). Os dados recolhidos são utilizados exclusivamente para a gestão da conta, acesso ao curso e emissão do certificado.",
  },
  {
    number: "9",
    title: "Modificações dos Termos",
    content: "Cliente Mistério reserva-se o direito de modificar estes termos e condições a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação. Recomenda-se a consulta periódica desta página.",
  },
  {
    number: "10",
    title: "Lei Aplicável",
    content: "Estes termos e condições são regidos pelas leis de Portugal. Qualquer disputa decorrente do uso do portal ou da aquisição do curso será resolvida nos tribunais competentes de Portugal.",
  },
  {
    number: "11",
    title: "Contacto",
    content: "Se tiver dúvidas sobre estes termos e condições ou sobre o curso, por favor contacte-nos através da página de contacto do portal.",
  },
];

export default function TermosECondicoes() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-label">Política & Regulamento</span>
          </div>

          <div>
            <h1 className="h1">Termos e Condições de Utilização</h1>
            <p className="mt-3 text-body-sm">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="space-y-6">

          {sections.map((section) => (
            <div key={section.number} className="rounded-lg bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <span className="h4 text-teal-600">{section.number}</span>
                </div>
                <h2 className="h3">{section.title}</h2>
              </div>
              <p className="text-body">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

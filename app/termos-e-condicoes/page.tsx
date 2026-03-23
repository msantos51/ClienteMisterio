/*
 * DESCRIÇÃO DO FICHEIRO: Página de Termos e Condições da aplicação.
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições | Cliente Mistério",
  description: "Leia os termos e condições de utilização do portal Cliente Mistério.",
};

export default function TermosECondicoes() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      <div>
        <h1 className="text-4xl font-bold">Termos e Condições</h1>
        <p className="mt-2 text-white/60">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
        <p className="text-white/80">
          Ao aceder, adquirir ou utilizar o curso disponibilizado no portal Cliente Mistério, o utilizador concorda em aceitar integralmente estes termos e condições. Se não concorda com alguma parte destes termos, por favor não prossiga com a compra ou utilização do curso.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Serviço Fornecido</h2>
        <p className="text-white/80">
          O portal Cliente Mistério comercializa um curso online de formação para quem pretende iniciar a atividade de cliente mistério. O curso inclui módulos de aprendizagem, materiais de apoio e, após conclusão, a emissão de um certificado de participação. O serviço é fornecido em formato digital, acessível através da plataforma online.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. Certificado de Conclusão</h2>
        <p className="text-white/80">
          Após a conclusão do curso, o utilizador recebe um certificado de participação. É expressamente declarado que:
        </p>
        <ul className="list-inside list-disc space-y-2 text-white/80">
          <li>O certificado <strong>não possui validade legal</strong> nem é reconhecido por qualquer entidade reguladora ou organismo oficial.</li>
          <li>O certificado serve <strong>exclusivamente como comprovativo</strong> de que o utilizador frequentou e concluiu o curso oferecido pelo portal Cliente Mistério.</li>
          <li>O certificado não substitui qualquer formação profissional certificada, acreditada ou regulamentada por lei.</li>
          <li>O Cliente Mistério não garante que o certificado seja aceite por terceiros, empresas ou entidades empregadoras como qualificação profissional.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Compra e Pagamento</h2>
        <p className="text-white/80">
          A aquisição do curso é feita mediante pagamento único, processado de forma segura através da plataforma de pagamentos Stripe. Após confirmação do pagamento, o acesso ao curso é ativado de forma imediata. O utilizador concorda que:
        </p>
        <ul className="list-inside list-disc space-y-2 text-white/80">
          <li>O pagamento é processado de forma segura e encriptada.</li>
          <li>Não são oferecidos reembolsos após o acesso ao curso ter sido disponibilizado, salvo nos casos previstos na legislação do consumidor em vigor.</li>
          <li>Os preços apresentados incluem IVA à taxa legal em vigor, quando aplicável.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Responsabilidades do Utilizador</h2>
        <p className="text-white/80">
          O utilizador é integralmente responsável pela confidencialidade das suas credenciais de acesso e pela segurança da sua conta. O utilizador compromete-se a:
        </p>
        <ul className="list-inside list-disc space-y-2 text-white/80">
          <li>Não partilhar o acesso ao curso com terceiros.</li>
          <li>Não reproduzir, distribuir ou comercializar os conteúdos do curso sem autorização expressa.</li>
          <li>Não utilizar a plataforma para fins ilegais ou prejudiciais.</li>
          <li>Não tentar obter acesso não autorizado ao sistema.</li>
          <li>Informar imediatamente sobre qualquer uso não autorizado da sua conta.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Propriedade Intelectual</h2>
        <p className="text-white/80">
          Todo o conteúdo presente no portal e no curso, incluindo textos, gráficos, logos, imagens, vídeos e software, é propriedade de Cliente Mistério ou dos seus fornecedores de conteúdo e está protegido pelas leis de propriedade intelectual. O utilizador é autorizado a aceder ao conteúdo apenas para uso pessoal e não comercial, no âmbito da sua aprendizagem individual.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. Limitação de Responsabilidade</h2>
        <p className="text-white/80">
          Cliente Mistério não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do acesso ou uso do portal ou do curso, incluindo, mas não limitado a, perda de dados, lucros cessantes ou interrupção do serviço. O portal não garante resultados profissionais ou de emprego decorrentes da frequência do curso.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Privacidade e Dados Pessoais</h2>
        <p className="text-white/80">
          O tratamento de dados pessoais no portal segue a legislação em vigor, nomeadamente o Regulamento Geral sobre a Proteção de Dados (RGPD). Os dados recolhidos são utilizados exclusivamente para a gestão da conta, acesso ao curso e emissão do certificado. Para informações detalhadas sobre como os seus dados são processados, consulte a nossa política de privacidade.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">9. Modificações dos Termos</h2>
        <p className="text-white/80">
          Cliente Mistério reserva-se o direito de modificar estes termos e condições a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação. Recomenda-se a consulta periódica desta página.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">10. Lei Aplicável</h2>
        <p className="text-white/80">
          Estes termos e condições são regidos pelas leis de Portugal. Qualquer disputa decorrente do uso do portal ou da aquisição do curso será resolvida nos tribunais competentes de Portugal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">11. Contacto</h2>
        <p className="text-white/80">
          Se tiver dúvidas sobre estes termos e condições ou sobre o curso, por favor contacte-nos através da página de contacto do portal.
        </p>
      </section>
    </div>
  );
}

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
          Ao aceder e utilizar o portal Cliente Mistério, o utilizador concorda em aceitar integralmente estes termos e condições. Se não concorda com alguma parte destes termos, por favor não utilize o portal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Serviço Fornecido</h2>
        <p className="text-white/80">
          O portal Cliente Mistério é um portal de participação cidadã e informação pública que permite aos utilizadores aceder a informações públicas e participar em iniciativas de interesse público. O serviço é fornecido "tal qual está" sem garantias de qualquer tipo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. Responsabilidades do Utilizador</h2>
        <p className="text-white/80">
          O utilizador é integralmente responsável pela confidencialidade das suas credenciais de acesso e pela segurança da sua conta. O utilizador compromete-se a:
        </p>
        <ul className="list-inside list-disc space-y-2 text-white/80">
          <li>Não utilizar a plataforma para fins ilegais ou prejudiciais</li>
          <li>Não tentar obter acesso não autorizado ao sistema</li>
          <li>Não publicar conteúdo ofensivo, discriminatório ou ilegal</li>
          <li>Respeitar os direitos de propriedade intelectual de terceiros</li>
          <li>Informar imediatamente sobre qualquer uso não autorizado da sua conta</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Propriedade Intelectual</h2>
        <p className="text-white/80">
          Todo o conteúdo presente no portal, incluindo textos, gráficos, logos, imagens e software, é propriedade de Cliente Mistério ou dos seus fornecedores de conteúdo e está protegido pelas leis de propriedade intelectual. O utilizador é autorizado a visualizar e copiar o conteúdo apenas para uso pessoal e não comercial.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Limitação de Responsabilidade</h2>
        <p className="text-white/80">
          Cliente Mistério não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do acesso ou uso do portal, incluindo, mas não limitado a, perda de dados, lucros cessantes ou interrupção do serviço.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Privacidade e Dados Pessoais</h2>
        <p className="text-white/80">
          O tratamento de dados pessoais no portal segue a legislação em vigor. Para informações detalhadas sobre como os seus dados são processados, consulte a nossa política de privacidade.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. Modificações dos Termos</h2>
        <p className="text-white/80">
          Cliente Mistério reserva-se o direito de modificar estes termos e condições a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Lei Aplicável</h2>
        <p className="text-white/80">
          Estes termos e condições são regidos pelas leis de Portugal. Qualquer disputa decorrente do uso do portal será resolvida nos tribunais competentes de Portugal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">9. Contacto</h2>
        <p className="text-white/80">
          Se tiver dúvidas sobre estes termos e condições, por favor contacte-nos através da página de contacto do portal.
        </p>
      </section>
    </div>
  );
}

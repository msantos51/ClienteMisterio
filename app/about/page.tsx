/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/about/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import CheckoutButton from '../components/CheckoutButton';

export default function AboutPage() {
  const courseAdvantages = [
    'Checklists práticos para não esqueceres detalhes',
    'Técnicas para pareceres um cliente normal (sem te denunciares)',
    'Relatórios claros e bem avaliados pelas empresas',
    'Estratégias para conseguir mais avaliações e aumentar o rendimento',
  ];

  return (
    <section className="space-y-8 sm:space-y-12 pb-4">
      {/* Mantém a estrutura de duas colunas sem cartão branco para seguir o estilo da landing page. */}
      <article className="grid w-full gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Preserva o conteúdo da página e ajusta a hierarquia para texto branco com destaques amarelos. */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#F66856" }}>
            Sobre a Cliente Mistério
          </p>

          <h1 className="text-3xl font-semibold leading-tight home-title-highlight-text sm:text-4xl lg:text-5xl">
            Atua com método e consistência
          </h1>

          <p className="max-w-2xl text-sm sm:text-base leading-6 sm:leading-7">
            Um Cliente Mistério é um cliente "normal" contratado para avaliar serviços
            (atendimento, rapidez, qualidade e cumprimento de regras) e, ao mesmo tempo, gerar
            rendimento extra por cada avaliação realizada.
          </p>

          <p className="max-w-2xl text-sm sm:text-base leading-6 sm:leading-7">
            Quanto melhor e mais consistente fores, mais convites costumas receber para novas
            visitas e análises.
          </p>

          <p className="max-w-2xl text-sm sm:text-base leading-6 sm:leading-7">
            Neste curso, vais aprender do básico ao avançado como fazer visitas sem falhas,
            entregar relatórios profissionais e aumentar a tua taxa de aprovação para
            transformares isto num extra mensal realista.
          </p>

        </div>

      </article>

      {/* Mantém a secção de vantagens sem caixa branca, reforçando o contraste de texto. */}
      <article className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold home-title-highlight-text lg:text-4xl">Vantagens do curso</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7">
            Estrutura prática para melhorares a qualidade das avaliações e aumentares o teu
            rendimento com consistência.
          </p>
        </div>

        <ul className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-2">
          {courseAdvantages.map((advantage, index) => (
            <li
              key={advantage}
              className="group rounded-2xl border border-white/30 p-3 sm:p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F66856]"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="mt-0.5 inline-flex h-5 sm:h-6 w-5 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#F66856] text-xs font-bold text-black">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base leading-6 sm:leading-7">{advantage}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      {/* Preço e CTA */}
      <article className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 sm:p-8 text-center">
        <div className="space-y-1 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Acesso Completo ao Curso</p>
          <p className="text-5xl font-bold" style={{ color: "#F66856" }}>19,99€</p>
          <p className="text-sm text-gray-400">Pagamento único · Acesso vitalício</p>
        </div>
        <CheckoutButton label="Comprar Curso Completo" />
      </article>
    </section>
  );
}

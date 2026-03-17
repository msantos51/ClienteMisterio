/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/about/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import Image from 'next/image';

export default function AboutPage() {
  const courseAdvantages = [
    'Checklists práticos para não esqueceres detalhes',
    'Técnicas para pareceres um cliente normal (sem te denunciares)',
    'Relatórios claros e bem avaliados pelas empresas',
    'Estratégias para conseguir mais avaliações e aumentar o rendimento',
  ];

  const highlightMetrics = [
    { value: '4', label: 'Vantagens principais do curso' },
    { value: '100%', label: 'Foco em aplicação prática no terreno' },
  ];

  return (
    <section className="space-y-12 pb-4">
      {/* Mantém a estrutura de duas colunas sem cartão branco para seguir o estilo da landing page. */}
      <article className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Preserva o conteúdo da página e ajusta a hierarquia para texto branco com destaques amarelos. */}
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] home-title-highlight-text">
            Sobre a Cliente Mistério
          </p>

          <h1 className="text-4xl font-semibold leading-tight home-title-highlight-text lg:text-5xl">
            Aprende a atuar como cliente real com método e consistência.
          </h1>

          <p className="max-w-2xl text-base leading-7">
            Um Cliente Mistério é um cliente “normal” contratado para avaliar serviços
            (atendimento, rapidez, qualidade e cumprimento de regras) e, ao mesmo tempo, gerar
            rendimento extra por cada avaliação realizada.
          </p>

          <p className="max-w-2xl text-base leading-7">
            Quanto melhor e mais consistente fores, mais convites costumas receber para novas
            visitas e análises.
          </p>

          <p className="max-w-2xl text-base leading-7">
            Neste curso, vais aprender do básico ao avançado como fazer visitas sem falhas,
            entregar relatórios profissionais e aumentar a tua taxa de aprovação para
            transformares isto num extra mensal realista.
          </p>

          {/* Exibe métricas curtas para reforçar visualmente os benefícios sem alterar conteúdo. */}
          <div className="grid gap-3 sm:grid-cols-2">
            {highlightMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/30 px-4 py-3"
              >
                <p className="text-2xl font-bold home-title-highlight-text">{metric.value}</p>
                <p className="text-sm font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usa imagem existente do projeto para manter coerência com os recursos atuais. */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border-2 border-white/40" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 p-3">
            <Image
              src="/images/IMG_2622.png"
              alt="Formação de cliente mistério"
              width={900}
              height={1200}
              className="h-[430px] w-full rounded-2xl object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8 rounded-xl bg-black/65 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] home-title-highlight-text">
                Curso estruturado
              </p>
              <p className="text-sm font-medium">
                Do básico ao avançado com foco em resultados reais.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Mantém a secção de vantagens sem caixa branca, reforçando o contraste de texto. */}
      <article className="w-full">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold home-title-highlight-text lg:text-4xl">Vantagens do curso</h2>
          <p className="mt-3 text-base leading-7">
            Estrutura prática para melhorares a qualidade das avaliações e aumentares o teu
            rendimento com consistência.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {courseAdvantages.map((advantage, index) => (
            <li
              key={advantage}
              className="group rounded-2xl border border-white/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F6C25B]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F6C25B] text-xs font-bold text-black">
                  {index + 1}
                </span>
                <p className="text-base leading-7">{advantage}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

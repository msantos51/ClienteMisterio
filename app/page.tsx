/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal — design "Carvão & Carmim",
 * layout editorial de agência focado em conversão.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

/* ---------- Ícones reutilizáveis ---------- */
const ArrowIcon = ({ size = 15 }: { size?: number }) => (
  <svg className={styles.arrow} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---------- Botão de compra ligado ao Stripe (replica CheckoutButton) ---------- */
function BuyButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

  const handleCheckout = () => {
    if (!paymentLink) return;
    const session =
      typeof window !== "undefined" ? localStorage.getItem("vp_session") : null;
    if (session) {
      window.location.href = paymentLink;
    } else {
      router.push("/login?checkout=1");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={!paymentLink}
      className={className}
      title={!paymentLink ? "Payment link não configurado" : undefined}
    >
      {children}
    </button>
  );
}

/* ---------- Dados ---------- */
const pillars = [
  {
    title: "Vês o que ninguém vê",
    desc: "Aprendes a ler uma loja em 30 segundos: tempos, guiões, linguagem corporal, higiene. Depois do curso, nunca mais entras num café da mesma maneira.",
    accent: true,
    icon: (
      <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Método, não sorte",
    desc: "Dez módulos com o processo completo: preparar a visita, executar sem levantar suspeitas, guardar provas e entregar um relatório que passa à primeira.",
    accent: false,
    icon: (
      <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5" />
        <path d="M15 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5" />
        <path d="M9 3h6v18H9z" />
      </svg>
    ),
  },
  {
    title: "Pago por missão",
    desc: "Entre 5 € e 150 € por visita, além da refeição, das compras ou da estadia reembolsadas. Escolhes quando, onde e quantas. Sem chefe e sem horário.",
    accent: false,
    icon: (
      <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const categories = [
  {
    name: "Restauração",
    pay: "20–60 €",
    note: "refeição incluída",
    icon: (
      <>
        <path d="M6 2v7a3 3 0 0 0 6 0V2" />
        <path d="M9 12v10" />
        <path d="M19 2c.6 3.5.6 7 0 10.5-1 .5-2 1-2 3.5v6" />
      </>
    ),
  },
  {
    name: "Retalho e moda",
    pay: "10–40 €",
    note: "30 a 60 minutos",
    icon: (
      <>
        <path d="M3 3h18l-2 4H5z" />
        <path d="M5 7v14h14V7" />
        <path d="M9 12h6" />
      </>
    ),
  },
  {
    name: "Hotelaria",
    pay: "80–150 €",
    note: "estadia paga",
    icon: (
      <>
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 21v-8h6v8" />
        <path d="M2 21h20" />
      </>
    ),
  },
  {
    name: "Banca e seguros",
    pay: "15–50 €",
    note: "atendimento e conformidade",
    icon: (
      <>
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v9M19 10v9M9 10v9M15 10v9" />
        <path d="M3 21h18" />
      </>
    ),
  },
  {
    name: "Farmácias e saúde",
    pay: "10–30 €",
    note: "visitas rápidas",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    name: "Telecom e automóvel",
    pay: "15–40 €",
    note: "presencial, telefone e online",
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
];

const modules = [
  { n: "01", t: "O lado invisível do serviço", d: "O que é mesmo um cliente mistério, quem paga a fatura e porque é que a tua opinião vale dinheiro.", time: "14 min" },
  { n: "02", t: "O mercado e onde estão as missões", d: "Quem opera em Portugal, que setores pagam melhor e como escolher missões que compensam.", time: "16 min" },
  { n: "03", t: "Perfil, conduta e ética", d: "Discrição, imparcialidade e confidencialidade — as três regras que te mantêm no jogo.", time: "18 min" },
  { n: "04", t: "Avaliar sem opinar", d: "Transformar o que viste em dados objetivos: factos, tempos e critérios em vez de \"gostei\".", time: "22 min" },
  { n: "05", t: "Preparar a missão", d: "Ler o briefing como um profissional, montar o cenário e memorizar o essencial sem apontamentos.", time: "20 min" },
  { n: "06", t: "Execução no terreno", d: "Entrar, observar, cronometrar e sair sem ser apanhado. Restauração, retalho, banca e hotelaria.", time: "24 min" },
  { n: "07", t: "Provas à prova de dúvida", d: "Talões, fotos, gravações e nomes: o que recolher, como guardar e o que a lei permite.", time: "19 min" },
  { n: "08", t: "O relatório aprovado à primeira", d: "Estrutura, tom e nível de detalhe. Os erros que fazem chumbar relatórios — e como evitá-los.", time: "22 min" },
  { n: "09", t: "Quanto ganhas e quanto sobra", d: "Honorários, reembolsos, custos e impostos. Contas reais para saberes o que rende cada missão.", time: "18 min" },
  { n: "10", t: "Plano de ação de 30 dias", d: "Inscrições nas plataformas, primeiro perfil, primeiras missões e como subir de nível.", time: "20 min" },
];

const steps = [
  { n: "Passo 01", t: "Compras uma vez", d: "Pagamento único de 24,99 €. Acesso imediato e vitalício, em qualquer dispositivo, com atualizações incluídas." },
  { n: "Passo 02", t: "Aprendes o método", d: "Dez módulos com casos reais, formulários-tipo e um quiz no fim de cada um para fixares o essencial." },
  { n: "Passo 03", t: "Registas-te nas plataformas", d: "Damos-te a lista das empresas que operam em Portugal e o guião para criares um perfil que é escolhido." },
  { n: "Passo 04", t: "Aceitas missões e recebes", d: "Escolhes onde, quando e quantas vezes. Cada missão é paga depois de o relatório ser aprovado." },
];

export default function HomePage() {
  const [showBuyBar, setShowBuyBar] = useState(false);
  const finalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = finalRef.current;
      let finalVisible = false;
      if (el) {
        const r = el.getBoundingClientRect();
        finalVisible = r.top < window.innerHeight && r.bottom > 0;
      }
      setShowBuyBar(window.scrollY > 600 && !finalVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={styles.hero} id="home">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>O único curso do género em Portugal</div>
            <h1 className={`${styles.display} ${styles.displayXl} ${styles.heroTitle}`}>
              Avalia lojas.
              <br />
              Recebe por isso<span className={styles.dot}>.</span>
            </h1>
            <p className={`${styles.lead} ${styles.heroSub}`}>
              Entras como cliente comum, sais com um relatório que vale dinheiro. Ensinamos-te o
              método completo — observar, documentar e reportar como um profissional — em dez
              módulos diretos ao assunto, com certificado no fim.
            </p>

            <div className={styles.heroCta}>
              <BuyButton className={`${styles.btn} ${styles.btnPrimary}`}>
                Começar agora
                <ArrowIcon />
              </BuyButton>
              <a href="/o-curso" className={`${styles.btn} ${styles.btnGhost}`}>
                Ver o programa
              </a>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.heroAvatars}>
                <span>AP</span>
                <span>RC</span>
                <span>MF</span>
                <span>JS</span>
              </div>
              <span>
                <strong>+500 alunos</strong> já avaliam em Portugal &nbsp;·&nbsp;{" "}
                <strong>4,9/5</strong> de satisfação
              </span>
            </div>
          </div>

          {/* Visual do hero — relatório de missão estilizado */}
          <div className={styles.heroVisual}>
            <span className={styles.heroFrame} aria-hidden />
            <div className={styles.heroPanel}>
              <div className={styles.heroPanelTop}>
                <span className={styles.heroPanelLabel}>Missão #4172 · Cafetaria</span>
                <span className={styles.heroPanelBadge}>Aprovado</span>
              </div>

              <div className={styles.heroRows}>
                <div className={styles.heroRow}>
                  <span>Tempo até ser abordado</span>
                  <span className={styles.heroRowVal}>1 min 42 s</span>
                </div>
                <div className={styles.heroRow}>
                  <span>Cumprimento inicial</span>
                  <span className={`${styles.heroRowVal} ${styles.heroRowOk}`}>Cumprido</span>
                </div>
                <div className={styles.heroRow}>
                  <span>Sugestão de complemento</span>
                  <span className={`${styles.heroRowVal} ${styles.heroRowBad}`}>Não cumprido</span>
                </div>
                <div className={styles.heroRow}>
                  <span>Higiene do balcão</span>
                  <span className={`${styles.heroRowVal} ${styles.heroRowOk}`}>9 / 10</span>
                </div>
                <div className={styles.heroRow}>
                  <span>Evidências anexadas</span>
                  <span className={styles.heroRowVal}>Talão + 3 fotos</span>
                </div>
              </div>

              <div className={styles.heroPayout}>
                <span className={styles.heroPayoutLabel}>Pagamento da missão</span>
                <span className={styles.heroPayoutValue}>35,00 €</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          PILARES (sobrepostos ao hero)
          ============================================================ */}
      <section className={styles.pillars}>
        <div className={styles.wrap}>
          <div className={styles.pillarsGrid}>
            <span className={styles.pillarsFrame} aria-hidden />
            {pillars.map((p) => (
              <article
                key={p.title}
                className={`${styles.pillar} ${p.accent ? styles.pillarAccent : ""}`}
              >
                {p.icon}
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <div className={styles.pillarRule} />
                <p className={styles.pillarDesc}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SETORES
          ============================================================ */}
      <section className={styles.section} id="categorias">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                O que vais avaliar<span className={styles.dot}>.</span>
              </h2>
              <p className={styles.headKicker}>Trabalhas quando queres, onde queres</p>
            </div>
            <p className={styles.headSub}>
              As plataformas de mystery shopping em Portugal cobrem dezenas de setores. Depois do
              curso escolhes as missões que encaixam na tua zona, no teu horário e no teu perfil.
            </p>
          </div>

          <div className={styles.cats}>
            {categories.map((c) => (
              <div className={styles.cat} key={c.name}>
                <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {c.icon}
                </svg>
                <div className={styles.catBody}>
                  <h3 className={styles.catName}>{c.name}</h3>
                  <p className={styles.catPay}>
                    <strong>{c.pay}</strong> · {c.note}
                  </p>
                </div>
                <svg className={styles.catArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NÚMEROS
          ============================================================ */}
      <section className={styles.strip}>
        <div className={styles.wrap}>
          <div className={styles.stripGrid}>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>10</div>
              <div className={styles.stripLabel}>Módulos práticos</div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>
                <em>5–150</em> €
              </div>
              <div className={styles.stripLabel}>Por missão concluída</div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>100%</div>
              <div className={styles.stripLabel}>Online e sem horários</div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>+500</div>
              <div className={styles.stripLabel}>Alunos em Portugal</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CURRÍCULO
          ============================================================ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="curso">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>O programa</div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                Do zero à primeira missão paga<span className={styles.dot}>.</span>
              </h2>
            </div>
            <p className={styles.headSub}>
              Cada módulo é curto, prático e termina com um quiz. Sem enchimento, sem teoria a mais
              — só o que precisas para entrar numa loja e sair com um relatório aprovado.
            </p>
          </div>

          <div className={styles.modules}>
            {modules.map((m) => (
              <div className={styles.module} key={m.n}>
                <div className={styles.moduleNum}>{m.n}</div>
                <div>
                  <h3 className={styles.moduleTitle}>{m.t}</h3>
                  <p className={styles.moduleDesc}>{m.d}</p>
                </div>
                <span className={styles.moduleTime}>{m.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMO FUNCIONA
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                Como funciona<span className={styles.dot}>.</span>
              </h2>
              <p className={styles.headKicker}>Sem agências, sem comissões, sem mensalidades</p>
            </div>
            <p className={styles.headSub}>
              Compras uma vez, aprendes ao teu ritmo e candidatas-te diretamente às plataformas. O
              dinheiro da missão é todo teu.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepDesc}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <section className={styles.sectionTight} id="comprar" ref={finalRef}>
        <div className={styles.wrap}>
          <div className={styles.final}>
            <div className={styles.finalInner}>
              <div className={`${styles.eyebrow} ${styles.finalEyebrow}`}>Pronto para começar</div>
              <h2 className={styles.finalTitle}>
                A próxima missão paga pode ser tua.
              </h2>
              <p className={styles.finalSub}>
                Acesso imediato e vitalício. Atualizações futuras incluídas. Sem mensalidades, sem
                agências e sem letra pequena.
              </p>

              <ul className={styles.finalList}>
                <li><CheckIcon size={14} /> 10 módulos</li>
                <li><CheckIcon size={14} /> Certificado</li>
                <li><CheckIcon size={14} /> Acesso vitalício</li>
                <li><CheckIcon size={14} /> 14 dias de reembolso</li>
              </ul>

              <div className={styles.finalCta}>
                <BuyButton className={`${styles.btn} ${styles.finalBtn}`}>
                  Comprar agora
                  <ArrowIcon />
                </BuyButton>
                <div className={styles.finalPriceTag}>
                  <s>64,99 €</s>
                  <strong>24,99 €</strong> · pagamento único
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BARRA DE COMPRA FIXA
          ============================================================ */}
      <div
        className={`${styles.buyBar} ${showBuyBar ? styles.buyBarVisible : ""}`}
        aria-hidden={!showBuyBar}
      >
        <span className={styles.buyBarPrice}>
          <s>64,99 €</s>
          <strong>24,99 €</strong>
        </span>
        <BuyButton className={`${styles.btn} ${styles.buyBarBtn}`}>
          Comprar curso
          <ArrowIcon size={13} />
        </BuyButton>
      </div>
    </div>
  );
}

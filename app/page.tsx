/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal — redesign editorial focado em conversão.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

/* ---------- Reusable inline icons ---------- */
const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg className={styles.arrow} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---------- Buy button bound to Stripe checkout (replicates CheckoutButton logic) ---------- */
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

/* ---------- Data ---------- */
const categories = [
  {
    name: "Restaurantes",
    pay: "20–60€",
    note: "refeição incluída",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 2v6a4 4 0 0 0 8 0V2" />
        <path d="M10 2v20" />
        <path d="M20 2c.5 4 .5 8 0 12-1 .5-2 1-2 4v4" />
      </svg>
    ),
  },
  {
    name: "Lojas retalho",
    pay: "10–40€",
    note: "30–60 min",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 3h18l-2 4H5z" />
        <path d="M5 7v13h14V7" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    name: "Hotéis",
    pay: "80–150€",
    note: "estadia paga",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 21v-8h6v8" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    name: "Bancos",
    pay: "15–50€",
    note: "atendimento",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="1" />
        <path d="M3 11h18" />
        <path d="M7 16h4" />
      </svg>
    ),
  },
  {
    name: "Farmácias",
    pay: "10–30€",
    note: "ágil",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    name: "Telecom",
    pay: "15–40€",
    note: "presencial",
    icon: (
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
];

const modules = [
  { n: "01", t: "O que é Cliente Mistério", d: "Enquadramento da profissão, mercado em Portugal, perfil do avaliador.", time: "14 min" },
  { n: "02", t: "Princípios de observação", d: "Discrição, neutralidade e atenção ao detalhe — como observar sem ser notado.", time: "18 min" },
  { n: "03", t: "Como avaliar atendimento", d: "Critérios objetivos: cumprimento, tempo, conhecimento, postura, despedida.", time: "22 min" },
  { n: "04", t: "Restaurantes e cafés", d: "Caso prático completo: do menu ao pagamento, com formulário-tipo.", time: "26 min" },
  { n: "05", t: "Retalho e produto", d: "Avaliar lojas físicas, exposição, conhecimento de produto e processo de venda.", time: "20 min" },
  { n: "06", t: "Hotelaria", d: "Check-in, quarto, F&B, check-out — o relatório que as cadeias exigem.", time: "24 min" },
  { n: "07", t: "Serviços (banca, telecom, saúde)", d: "Sectores regulados: o que pedem, o que evitar, como documentar.", time: "19 min" },
  { n: "08", t: "O relatório que paga", d: "Escrita clara, factual, com evidência. Erros comuns que reprovam relatórios.", time: "21 min" },
  { n: "09", t: "Plataformas em Portugal", d: "Lista completa de empresas e portais, como registar-te e o que esperar.", time: "16 min" },
  { n: "10", t: "Fiscal e relacionamento", d: "Recibos verdes, faturação, como manter-te ativo e a receber missões.", time: "17 min" },
];

const earnings = [
  { type: "Café / pastelaria", detail: "~20 min · consumo incluído", amount: "5 — 15" },
  { type: "Restaurante", detail: "45–90 min · refeição paga + valor", amount: "20 — 60" },
  { type: "Loja de retalho", detail: "30–60 min · interação com produto", amount: "10 — 40" },
  { type: "Banco / telecom", detail: "Atendimento presencial ou telefónico", amount: "15 — 50" },
  { type: "Hotel · estadia avaliada", detail: "1 noite · check-in a check-out", amount: "80 — 150" },
];

const steps = [
  { n: "01", t: "Compras o curso", d: "Pagamento único de 24,99€. Acesso imediato a todos os módulos, em qualquer dispositivo." },
  { n: "02", t: "Aprendes", d: "10 módulos práticos com casos reais, formulários-tipo e quiz de validação no fim de cada um." },
  { n: "03", t: "Registas-te nas plataformas", d: "Damos-te a lista completa das empresas que operam em Portugal e como fazer o registo certo." },
  { n: "04", t: "Aceitas missões e ganhas", d: "Escolhes onde, quando e quantas vezes. Cada missão é paga após o relatório ser aprovado." },
];

const faqs = [
  {
    q: "Isto é legal em Portugal?",
    a: "Sim. Mystery shopping é uma atividade legítima e regulada como qualquer outra prestação de serviços. As marcas pagam às plataformas para auditarem o seu próprio atendimento e tu prestas esse serviço como independente.",
  },
  {
    q: "Preciso de experiência anterior?",
    a: "Não. O curso foi desenhado para começar do zero. Se tens atenção ao detalhe e sabes escrever um parágrafo claro, tens o suficiente para começar.",
  },
  {
    q: "Quanto tempo demora a fazer o curso?",
    a: "Em média, cerca de 4 horas, distribuídas pelos 10 módulos. Podes fazê-lo num fim-de-semana ou ao longo de várias semanas — o acesso é vitalício.",
  },
  {
    q: "Como recebo o pagamento das missões?",
    a: "Diretamente da plataforma que te atribui a missão, normalmente por transferência bancária após aprovação do relatório. O módulo 10 explica como emitir recibos verdes.",
  },
  {
    q: "É preciso ter carro?",
    a: "Depende da tua zona. Em cidades como Lisboa ou Porto, transportes públicos chegam. Fora dos centros, carro alarga muito as missões disponíveis — mas não é obrigatório.",
  },
  {
    q: "Há reembolso se não gostar?",
    a: "Sim. Tens 14 dias para pedir reembolso integral, sem questões. Acreditamos no produto — só queremos que aprendas, não que pagues sem usar.",
  },
  {
    q: "O certificado é reconhecido?",
    a: "O certificado é emitido pelo Cliente Mistério e comprova as competências adquiridas. As plataformas em Portugal aceitam-no como prova de formação, mas o que conta sobretudo é o teu desempenho nas missões.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
            <div className={styles.eyebrow}>O único curso em Portugal</div>
            <h1 className={`${styles.display} ${styles.displayXl} ${styles.heroTitle}`}>
              Avalia lojas.
              <br />
              Recebe por <em>isso</em>.
            </h1>
            <p className={`${styles.lead} ${styles.heroSub}`}>
              Aprende, de forma metódica e discreta, a avaliar serviços como um profissional — e a ser remunerado por cada visita. 10 módulos, certificado, acesso vitalício.
            </p>

            <div className={styles.heroCta}>
              <BuyButton className={`${styles.btn} ${styles.btnPrimary}`}>
                Começar agora — <span className={styles.priceStrike}>64,99€</span>
                <strong>24,99€</strong>
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
                <strong>+500 alunos</strong> já avaliam e ganham em Portugal &nbsp;·&nbsp; <strong>4.9★</strong>
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroChip}>Missão paga · há 2h</div>

            <div className={`${styles.mock} ${styles.mockMission}`}>
              <div className={styles.mockHead}>
                <span className={styles.mockTag}>Missão #047</span>
                <span className={styles.mockPay}>+ 35,00 €</span>
              </div>
              <h3 className={styles.mockTitle}>Café Lisboa — Chiado</h3>
              <p className={styles.mockSub}>Avaliar atendimento e tempo de espera</p>

              <div className={styles.mockCheck}>
                <span className={`${styles.mockBox} ${styles.mockBoxOn}`}>
                  <CheckIcon />
                </span>
                Cumprimento à entrada
              </div>
              <div className={styles.mockCheck}>
                <span className={`${styles.mockBox} ${styles.mockBoxOn}`}>
                  <CheckIcon />
                </span>
                Tempo de espera &lt; 4 min
              </div>
              <div className={`${styles.mockCheck} ${styles.mockCheckLast}`}>
                <span className={styles.mockBox} />
                Conhecimento do menu
              </div>

              <div className={styles.mockRate}>
                <span className={styles.mockStars}>★★★★★</span>
                <span className={styles.mockRateLabel}>Avaliação geral</span>
              </div>
            </div>

            <div className={`${styles.mock} ${styles.mockModule}`}>
              <div className={styles.mockRow}>
                <span className={styles.mockNum}>03</span>
                <div>
                  <h3 className={styles.mockTitle} style={{ fontSize: 15 }}>
                    Como avaliar serviço
                  </h3>
                  <p className={styles.mockSub} style={{ margin: 0 }}>
                    Módulo · 12 min
                  </p>
                </div>
              </div>
              <div className={styles.mockProgress}>
                <span className={styles.mockProgressBar} />
              </div>
              <div className={styles.mockProgressLabel}>
                <span>Progresso do curso</span>
                <span>
                  <strong>3 / 10</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          STATS STRIP
          ============================================================ */}
      <section className={styles.strip}>
        <div className={styles.wrap}>
          <div className={styles.stripGrid}>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>10</div>
              <div className={styles.stripLabel}>
                Módulos práticos
                <br />
                do enquadramento à entrega
              </div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>
                <em>5–150</em>€
              </div>
              <div className={styles.stripLabel}>
                Por missão concluída
                <br />
                conforme tipo e duração
              </div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>100%</div>
              <div className={styles.stripLabel}>
                Online, sem horários
                <br />
                acesso vitalício
              </div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>+500</div>
              <div className={styles.stripLabel}>
                Alunos em Portugal
                <br />
                continente e ilhas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORIES
          ============================================================ */}
      <section className={styles.section} id="categorias">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>O que vais avaliar</div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                Restaurantes, lojas, hotéis &mdash; e mais.
              </h2>
            </div>
            <p className={styles.headSub}>
              As plataformas de mystery shopping em Portugal cobrem dezenas de setores. Depois do curso, escolhes as missões que se adequam ao teu ritmo e à tua zona.
            </p>
          </div>

          <div className={styles.cats}>
            {categories.map((c) => (
              <div className={styles.cat} key={c.name}>
                {c.icon}
                <div>
                  <h3 className={styles.catName}>{c.name}</h3>
                  <p className={styles.catPay}>
                    <strong>{c.pay}</strong> · {c.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CURRICULUM
          ============================================================ */}
      <section className={styles.sectionTight} id="curso">
        <div className={styles.wrap}>
          <div className={styles.curr}>
            <div className={styles.currInner}>
              <div className={styles.head}>
                <div>
                  <div className={`${styles.eyebrow} ${styles.currEyebrow}`}>
                    O programa · 10 módulos
                  </div>
                  <h2 className={`${styles.display} ${styles.displayLg} ${styles.currDisplay}`}>
                    Do zero à primeira missão paga.
                  </h2>
                </div>
                <p className={`${styles.headSub} ${styles.currSub}`}>
                  Conteúdo prático em vídeo + PDFs descarregáveis. Cada módulo termina com um quiz; no final recebes o certificado.
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
          </div>
        </div>
      </section>

      {/* ============================================================
          EARNINGS
          ============================================================ */}
      <section className={styles.section} id="ganhos">
        <div className={styles.wrap}>
          <div className={styles.earn}>
            <div className={styles.earnCopy}>
              <div className={styles.eyebrow}>Quanto se ganha</div>
              <h2 className={`${styles.display} ${styles.displayMd}`} style={{ marginBottom: 24 }}>
                De <em className={styles.italic} style={{ color: "var(--accent)" }}>5</em> a{" "}
                <em className={styles.italic} style={{ color: "var(--accent)" }}>150€</em> por missão.
              </h2>
              <p className={styles.lead} style={{ marginBottom: 28 }}>
                O valor depende do tipo, da duração e do nível de detalhe. Há quem faça 2 missões por mês como complemento; outros constroem uma rotina semanal.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0 }}>
                <strong style={{ color: "#111827" }}>Importante:</strong> não prometemos rendimento garantido. Os valores variam por região e disponibilidade.
              </p>
            </div>

            <div>
              <div className={styles.earnTable}>
                <div className={`${styles.earnRow} ${styles.earnRowHead}`}>
                  <span>Tipo de missão</span>
                  <span>Pagamento típico</span>
                </div>
                {earnings.map((e) => (
                  <div className={styles.earnRow} key={e.type}>
                    <div>
                      <div className={styles.earnType}>{e.type}</div>
                      <div className={styles.earnDetail}>{e.detail}</div>
                    </div>
                    <div className={styles.earnAmount}>
                      {e.amount} <em>€</em>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.earnNote}>
                Em média, um aluno ativo recupera o valor do curso na{" "}
                <strong>primeira ou segunda missão</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Como funciona</div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>Quatro passos simples.</h2>
            </div>
            <p className={styles.headSub}>
              Sem agências, sem comissões, sem mensalidades. Compras uma vez, aprendes ao teu ritmo, e candidatas-te diretamente às plataformas.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <div>
                  <h3 className={styles.stepTitle}>{s.t}</h3>
                </div>
                <p className={styles.stepDesc}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Testemunhos</div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                +500 pessoas já passaram por aqui.
              </h2>
            </div>
            <p className={styles.headSub}>
              Histórias reais de alunos que começaram do zero e fizeram da avaliação um complemento — ou uma rotina.
            </p>
          </div>

          <div className={styles.featQuote}>
            <p className={styles.featQuoteText}>
              No primeiro mês já tinha completado quatro missões. Recuperei o investimento na primeira.
            </p>
            <div className={styles.featAuthor}>
              <span className={styles.featAvatar}>AP</span>
              <div>
                <div className={styles.featName}>Ana Pereira</div>
                <div className={styles.featRole}>Lisboa · aluna desde Março</div>
              </div>
              <span className={styles.featRating}>★★★★★</span>
            </div>
          </div>

          <div className={styles.quotes}>
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                Curso bem estruturado, direto ao ponto. Já realizei mais de 10 missões e o suporte tem sido excelente em qualquer dúvida.
              </p>
              <div className={styles.quoteAuthor}>
                <span className={styles.quoteAvatar}>MF</span>
                <div>
                  <div className={styles.quoteName}>Maria Ferreira</div>
                  <div className={styles.quoteRole}>Braga</div>
                </div>
                <span className={styles.quoteRating}>★★★★★</span>
              </div>
            </div>
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                Procurava complemento ao salário e isto era exatamente o que faltava em Portugal. O módulo do relatório vale, sozinho, o preço.
              </p>
              <div className={styles.quoteAuthor}>
                <span className={styles.quoteAvatar}>RC</span>
                <div>
                  <div className={styles.quoteName}>Rui Cardoso</div>
                  <div className={styles.quoteRole}>Porto</div>
                </div>
                <span className={styles.quoteRating}>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className={styles.section} id="faq">
        <div className={styles.wrap} style={{ maxWidth: 880 }}>
          <div className={`${styles.head} ${styles.headSingle}`}>
            <div>
              <div className={styles.eyebrow}>Perguntas frequentes</div>
              <h2 className={`${styles.display} ${styles.displayLg}`}>
                Tudo o que precisas de saber.
              </h2>
            </div>
          </div>

          <div className={styles.faq}>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`} key={f.q}>
                  <button
                    type="button"
                    className={styles.faqQ}
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span>{f.q}</span>
                    <span className={styles.faqIcon} aria-hidden />
                  </button>
                  <div className={styles.faqA}>
                    <div className={styles.faqAInner}>{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className={styles.section} id="comprar" ref={finalRef}>
        <div className={styles.wrap}>
          <div className={styles.final}>
            <div className={styles.finalInner}>
              <div className={`${styles.eyebrow} ${styles.finalEyebrow}`}>Pronto para começar</div>
              <h2 className={styles.finalTitle}>
                A próxima missão paga pode ser <em>tua</em>.
              </h2>
              <p className={styles.finalSub}>
                Acesso imediato. Atualizações futuras incluídas. Sem mensalidades, sem agências, sem letra pequena.
              </p>

              <ul className={styles.finalList}>
                <li><CheckIcon size={18} /> 10 módulos práticos</li>
                <li><CheckIcon size={18} /> Certificado incluído</li>
                <li><CheckIcon size={18} /> Acesso vitalício</li>
                <li><CheckIcon size={18} /> 14 dias de reembolso</li>
              </ul>

              <div className={styles.finalCta}>
                <BuyButton className={`${styles.btn} ${styles.finalBtn}`}>
                  Comprar agora
                  <ArrowIcon />
                </BuyButton>
                <div className={styles.finalPriceTag}>
                  <s>64,99€</s>
                  <strong>24,99€</strong> · pagamento único
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STICKY BUY BAR
          ============================================================ */}
      <div
        className={`${styles.buyBar} ${showBuyBar ? styles.buyBarVisible : ""}`}
        aria-hidden={!showBuyBar}
      >
        <span className={styles.buyBarPrice}>
          <s>64,99€</s>
          <strong>24,99€</strong>
        </span>
        <BuyButton className={`${styles.btn} ${styles.buyBarBtn}`}>
          Comprar curso
          <ArrowIcon size={14} />
        </BuyButton>
      </div>
    </div>
  );
}

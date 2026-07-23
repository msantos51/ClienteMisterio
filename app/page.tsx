/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal — versão simplificada, focada em conversão.
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

/* ---------- Floating-card icons (hero visual) ---------- */
const BagIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ReportIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg className={styles.catIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

const steps = [
  { n: "01", t: "Compras o curso", d: "Pagamento único de 24,99€. Acesso imediato a todos os módulos, em qualquer dispositivo." },
  { n: "02", t: "Aprendes", d: "10 módulos práticos com casos reais, formulários-tipo e quiz de validação no fim de cada um." },
  { n: "03", t: "Registas-te nas plataformas", d: "Damos-te a lista completa das empresas que operam em Portugal e como fazer o registo certo." },
  { n: "04", t: "Aceitas missões e ganhas", d: "Escolhes onde, quando e quantas vezes. Cada missão é paga após o relatório ser aprovado." },
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

          {/* Hero visual — composição profissional com cartões flutuantes */}
          <div className={styles.heroVisual}>
            <span className={styles.heroRing} aria-hidden />
            <div className={styles.heroStage}>
              <svg
                className={styles.heroArt}
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Avaliador profissional"
              >
                <defs>
                  <linearGradient id="cmSkin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f8cda8" />
                    <stop offset="1" stopColor="#efb790" />
                  </linearGradient>
                </defs>
                {/* shirt + blazer (shoulders, clipped by the circular stage) */}
                <path d="M56 300 C56 232 96 196 150 196 C204 196 244 232 244 300 Z" fill="#ffffff" />
                <path d="M150 236 L118 205 C86 220 64 255 62 300 L150 300 Z" fill="#4f46e5" />
                <path d="M150 236 L182 205 C214 220 236 255 238 300 L150 300 Z" fill="#4338ca" />
                <path d="M150 236 L120 206 L150 216 Z" fill="#eef0ff" />
                <path d="M150 236 L180 206 L150 216 Z" fill="#e3e5ff" />
                {/* neck */}
                <path d="M134 176 h32 v16 c0 12 -32 12 -32 0 Z" fill="url(#cmSkin)" />
                <path d="M134 188 c8 8 24 8 32 0 v4 c-6 8 -26 8 -32 0 Z" fill="#e29f76" opacity=".5" />
                {/* hair (behind head) */}
                <ellipse cx="150" cy="112" rx="54" ry="58" fill="#2f2a4d" />
                {/* head */}
                <ellipse cx="150" cy="130" rx="46" ry="52" fill="url(#cmSkin)" />
                {/* brows */}
                <path d="M126 118 q10 -5 20 -1" stroke="#2f2a4d" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M154 117 q10 -4 20 1" stroke="#2f2a4d" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* eyes */}
                <circle cx="134" cy="133" r="4.2" fill="#2f2a4d" />
                <circle cx="166" cy="133" r="4.2" fill="#2f2a4d" />
                {/* cheeks */}
                <circle cx="122" cy="150" r="7" fill="#ff8a6b" opacity=".32" />
                <circle cx="178" cy="150" r="7" fill="#ff8a6b" opacity=".32" />
                {/* smile */}
                <path d="M136 153 q14 14 28 0" stroke="#2f2a4d" strokeWidth="3.4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div className={`${styles.floatCard} ${styles.floatMissions}`}>
              <span className={styles.floatIcon}>
                <BagIcon />
              </span>
              <div className={styles.floatText}>
                <strong className={styles.floatNum}>3 Novas missões</strong>
                <span className={styles.floatLabel}>disponíveis</span>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatPayment}`}>
              <span className={`${styles.floatIcon} ${styles.floatIconMint}`}>
                <CheckIcon size={15} />
              </span>
              <div className={styles.floatText}>
                <strong className={styles.floatStrong}>Pagamento recebido</strong>
                <span className={styles.floatAmount}>+ 35,00 €</span>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatReport}`}>
              <span className={`${styles.floatIcon} ${styles.floatIconAmber}`}>
                <ReportIcon />
              </span>
              <div className={styles.floatText}>
                <strong className={styles.floatNum}>1 relatório</strong>
                <span className={styles.floatLabel}>por preencher</span>
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

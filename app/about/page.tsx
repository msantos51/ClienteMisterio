"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const CheckIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

/* ---------- Conteúdo vindo da antiga página inicial ---------- */
const pillars = [
  {
    title: "Vês o que ninguém vê",
    desc: "Aprendes a ler uma loja em 30 segundos: tempos, guiões, linguagem corporal, higiene. Depois do curso, nunca mais entras num café da mesma maneira.",
    accent: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

function BuyButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const router = useRouter();
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  const handleCheckout = () => {
    if (!paymentLink) return;
    const session = typeof window !== "undefined" ? localStorage.getItem("vp_session") : null;
    if (session) { window.location.href = paymentLink; }
    else { router.push("/login?checkout=1"); }
  };
  return (
    <button type="button" onClick={handleCheckout} disabled={!paymentLink} className={className}>
      {children}
    </button>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  const advantages = [
    t.about.advantage1,
    t.about.advantage2,
    t.about.advantage3,
    t.about.advantage4,
  ];

  const features = [
    t.about.feature1,
    t.about.feature2,
    t.about.feature3,
    t.about.feature4,
    t.about.feature5,
  ];

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>{t.about.badge}</div>
            <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>
              {t.about.title}{" "}
              <em className={styles.italic}>{t.about.titleHighlight}</em>
            </h1>
            <p className={`${styles.lead} ${styles.heroSub}`}>
              {t.about.description1}
            </p>
          </div>
        </div>
      </header>

      {/* ============================================================
          CONTENT
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {/* Left column — advantages */}
            <div>
              <div className={styles.eyebrow}>{t.about.advantagesTitle}</div>
              <p className={styles.advDesc}>{t.about.advantagesDesc}</p>
              <div className={styles.advList}>
                {advantages.map((adv, i) => (
                  <div key={i} className={styles.adv}>
                    <span className={styles.advNum}>{i + 1}</span>
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
              <p className={styles.bodyText}>{t.about.description2}</p>
              <p className={styles.bodyText}>{t.about.description3}</p>
            </div>

            {/* Right column — pricing card */}
            <div className={styles.card}>
              <div className={`${styles.eyebrow} ${styles.cardEyebrow}`}>{t.about.courseTitle}</div>
              <div className={styles.price}>
                <span className={styles.priceOriginal}>64,99€</span>
                {t.about.price}
              </div>
              <div className={styles.priceNote}>{t.about.paymentInfo}</div>
              <div className={styles.featureList}>
                {features.map((feat) => (
                  <div key={feat} className={styles.featureItem}>
                    <span className={styles.check}>
                      <CheckIcon size={11} />
                    </span>
                    {feat}
                  </div>
                ))}
              </div>
              <BuyButton className={`${styles.btn} ${styles.btnDark}`}>
                {t.about.buyCourseButton}
                <ArrowIcon />
              </BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PILARES
          ============================================================ */}
      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Porque é diferente</div>
              <h2 className={styles.displayLg}>
                O que levas contigo<span className={styles.dot}>.</span>
              </h2>
            </div>
            <p className={styles.headSub}>
              Não é uma lista de conselhos soltos: é o método que as agências usam, explicado passo
              a passo e pronto a aplicar já na primeira visita.
            </p>
          </div>

          <div className={styles.pillars}>
            {pillars.map((p) => (
              <article
                key={p.title}
                className={`${styles.pillar} ${p.accent ? styles.pillarAccent : ""}`}
              >
                <span className={styles.pillarIcon}>{p.icon}</span>
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
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Setores</div>
              <h2 className={styles.displayLg}>
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
    </div>
  );
}

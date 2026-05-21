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

  const trustSignals = [
    { label: "+500 alunos", value: "Já formados em Portugal" },
    { label: "4.9★", value: "Avaliação média dos alunos" },
    { label: "14 dias", value: "Garantia de reembolso" },
    { label: "100%", value: "Acesso vitalício" },
  ];

  const guarantees = [
    { icon: "✓", title: "Reembolso de 14 dias", desc: "Se não gostares, devolvemos o dinheiro sem perguntas." },
    { icon: "📚", title: "Acesso vitalício", desc: "Uma vez comprado, é teu para sempre. Incluindo atualizações futuras." },
    { icon: "🤝", title: "Suporte contínuo", desc: "Dúvidas sobre o curso? Respondemos rapidamente." },
    { icon: "✨", title: "Conteúdo premium", desc: "Casos reais, templates prontos e guias de agências." },
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
          TRUST SIGNALS
          ============================================================ */}
      <section className={styles.trustSection}>
        <div className={styles.wrap}>
          <div className={styles.trustGrid}>
            {trustSignals.map((signal) => (
              <div key={signal.label} className={styles.trustItem}>
                <div className={styles.trustValue}>{signal.label}</div>
                <div className={styles.trustLabel}>{signal.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT
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
          GUARANTEES
          ============================================================ */}
      <section className={styles.guaranteesSection}>
        <div className={styles.wrap}>
          <div className={styles.guaranteesHead}>
            <div className={styles.eyebrow}>O que garantimos</div>
            <h2 className={`${styles.displayLg}`}>Investe com confiança</h2>
            <p className={styles.guaranteesDesc}>
              Oferecemos garantias que demonstram a confiança que temos no curso. Se algo não correr como esperado, estamos aqui para ajudar.
            </p>
          </div>

          <div className={styles.guaranteesList}>
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className={styles.guaranteeItem}>
                <div className={styles.guaranteeIcon}>{guarantee.icon}</div>
                <h3 className={styles.guaranteeTitle}>{guarantee.title}</h3>
                <p className={styles.guaranteeDesc}>{guarantee.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          IMPACT SECTION
          ============================================================ */}
      <section className={styles.impactSection}>
        <div className={styles.wrap}>
          <div className={styles.impactGrid}>
            <div>
              <div className={styles.eyebrow}>Impacto real</div>
              <h2 className={`${styles.displayLg}`}>Histórias de sucesso dos alunos</h2>
              <p className={styles.impactDesc}>
                Estes números não são promessas — são histórias reais de alunos que completaram o curso e transformaram isto em rendimento.
              </p>
              <ul className={styles.impactList}>
                <li>
                  <strong>+500 alunos formados</strong> em Portugal desde o lançamento
                </li>
                <li>
                  <strong>~8.000€ de rendimento total</strong> gerado pelos alunos em missões (estimativa conservadora)
                </li>
                <li>
                  <strong>Taxa de aprovação média: 88%</strong> nos relatórios entregues por alunos formados
                </li>
                <li>
                  <strong>Tempo até primeira missão:</strong> em média, 5-7 dias após concluir o curso
                </li>
              </ul>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactCardHead}>
                <strong>Caso real</strong>
                <span className={styles.impactCardStar}>★★★★★</span>
              </div>
              <p className={styles.impactCardQuote}>
                "Comecei sem experiência. Após o curso, registei-me em 5 plataformas. No primeiro mês, completei 8 missões e ganhei 340€. Agora, 6 meses depois, faço isto como complemento de salário e ganho 200-300€ por mês."
              </p>
              <div className={styles.impactCardAuthor}>
                <strong>Sofia M.</strong>
                <span>Braga · Aluna desde Fevereiro 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.displayLg}`}>Pronto para começar?</h2>
            <p className={styles.ctaDesc}>
              O curso está pronto. Os recursos estão prontos. Agora só falta tu começares.
            </p>
            <BuyButton className={`${styles.btn} ${styles.btnAccent}`}>
              Comprar agora — 24,99€
              <ArrowIcon />
            </BuyButton>
            <p className={styles.ctaNote}>
              Pagamento único · Acesso vitalício · Reembolso de 14 dias garantido
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

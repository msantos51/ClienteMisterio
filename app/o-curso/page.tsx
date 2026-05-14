"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import { courseModules as courseData } from "../curso/courseData";
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

/* Benefit icons */
const benefitIcons = [
  /* Beginners */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  /* Practical */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  /* Earn */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  /* Career */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  /* Tests */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  /* Community */ (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
];

export default function CoursePage() {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: { authenticated: boolean }) => {
        if (!cancelled) setIsLoggedIn(Boolean(data?.authenticated));
      })
      .catch(() => { if (!cancelled) setIsLoggedIn(false); });
    return () => { cancelled = true; };
  }, []);

  const pricingFeatures = [
    t.coursePage.pricingFeature1,
    t.coursePage.pricingFeature2,
    t.coursePage.pricingFeature3,
    t.coursePage.pricingFeature4,
    t.coursePage.pricingFeature5,
  ];

  const benefits = [
    { title: t.coursePage.benefitBeginners, desc: t.coursePage.benefitBeginnersDesc },
    { title: t.coursePage.benefitPractical, desc: t.coursePage.benefitPracticalDesc },
    { title: t.coursePage.benefitEarn, desc: t.coursePage.benefitEarnDesc },
    { title: t.coursePage.benefitCareer, desc: t.coursePage.benefitCareerDesc },
    { title: t.coursePage.benefitTests, desc: t.coursePage.benefitTestsDesc },
    { title: t.coursePage.benefitCommunity, desc: t.coursePage.benefitCommunityDesc },
  ];

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            {/* Left — copy */}
            <div>
              <div className={styles.eyebrow}>{t.coursePage.badge}</div>
              <h1 className={`${styles.displayLg} ${styles.heroTitle}`}
                dangerouslySetInnerHTML={{ __html: t.coursePage.title }} />
              <p className={`${styles.lead} ${styles.heroSub}`}>
                {t.coursePage.description}
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>10</div>
                  <div className={styles.statLabel}>{t.coursePage.statsModules}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}><em>5–150</em>€</div>
                  <div className={styles.statLabel}>{t.coursePage.statsEarnings}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>∞</div>
                  <div className={styles.statLabel}>{t.coursePage.statsAccess}</div>
                </div>
              </div>
            </div>

            {/* Right — pricing card */}
            <div className={styles.card}>
              <div className={styles.cardBadge}>{t.coursePage.pricingBadge}</div>
              <div className={styles.cardTitle}>{t.coursePage.pricingTitle}</div>
              <div className={styles.cardPriceRow}>
                <span className={styles.cardOrig}>{t.coursePage.pricingOriginal}</span>
                <span className={styles.cardPrice}>{t.coursePage.pricingPrice}</span>
              </div>
              <div className={styles.cardPayment}>{t.coursePage.pricingPayment}</div>

              <div className={styles.featureList}>
                {pricingFeatures.map((item) => (
                  <div key={item} className={styles.featureItem}>
                    <span className={styles.check}><CheckIcon size={11} /></span>
                    {item}
                  </div>
                ))}
              </div>

              <BuyButton className={`${styles.btn} ${styles.btnDark}`} >
                {t.coursePage.buyButton}
                <ArrowIcon />
              </BuyButton>
              <p className={styles.secureNote}>{t.coursePage.paymentSecure}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          BENEFITS
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Vantagens</div>
              <h2 className={styles.displayLg}>{t.coursePage.benefitsTitle}</h2>
            </div>
            <p className={styles.headSub}>
              Do zero à primeira missão paga, com estrutura, casos reais e certificado incluído.
            </p>
          </div>
          <div className={styles.benefits}>
            {benefits.map((b, i) => (
              <div key={b.title} className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  {benefitIcons[i]}
                </div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CURRICULUM
          ============================================================ */}
      <section className={styles.sectionTight}>
        <div className={styles.wrap}>
          <div className={styles.curr}>
            <div className={styles.currInner}>
              <div className={styles.currHead}>
                <div>
                  <div className={`${styles.eyebrow} ${styles.currEyebrow}`}>
                    {t.coursePage.modulesTitle}
                  </div>
                  <h2 className={`${styles.displayLg} ${styles.currDisplay}`}>
                    Do zero à primeira missão <em className={styles.italic}>paga</em>.
                  </h2>
                </div>
                <p className={styles.currSub}>
                  Vídeo + PDFs descarregáveis. Cada módulo termina com um quiz; no final recebes o certificado.
                </p>
              </div>

              <div className={styles.modules}>
                {courseData.map((module) => (
                  <div className={styles.module} key={module.id}>
                    <div className={styles.moduleNum}>
                      {String(module.id).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className={styles.moduleTitle}>{module.title}</h3>
                      <p className={styles.moduleDesc}>{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA (only shown when not logged in)
          ============================================================ */}
      {!isLoggedIn && (
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.final}>
              <div className={styles.finalInner}>
                <div className={`${styles.eyebrow} ${styles.finalEyebrow}`}>Pronto para começar</div>
                <h2 className={styles.finalTitle}>
                  Começa a ganhar com <em>cada visita</em>.
                </h2>
                <p className={styles.finalSub}>{t.coursePage.ctaText}</p>
                <div className={styles.finalCta}>
                  <BuyButton className={`${styles.btn} ${styles.btnAccent} ${styles.btnBlock}`}>
                    {t.coursePage.buyButton}
                    <ArrowIcon />
                  </BuyButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

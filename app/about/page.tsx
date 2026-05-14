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
    </div>
  );
}

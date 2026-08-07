/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal.
 * Hero com proposta de valor à esquerda e moldura com o olho da marca à
 * direita, sobre fundo claro (classe `on-light`), seguido dos três passos
 * do processo ligados por uma curva ascendente.
 */

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useCourseAccess } from "@/app/lib/useCourseAccess";
import { courseModules } from "./curso/courseData";
import { faqs } from "./faq/faqData";
import styles from "./page.module.css";

const CheckIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Ícone do olho da marca (mesma geometria do logo-mark.svg), recolorido
   para se destacar sobre o painel claro da ilustração do hero. */
const EyeMark = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" aria-hidden>
    <path
      d="M 48 256 C 48 256 160 146 256 146 C 352 146 464 256 464 256 C 464 256 352 366 256 366 C 160 366 48 256 48 256 Z"
      fill="currentColor"
    />
    <circle cx="256" cy="230" r="64" fill="#ffffff" />
    <rect x="222" y="270" width="68" height="66" rx="20" fill="#ffffff" />
  </svg>
);

/* As 4 perguntas mais representativas da FAQ, uma por tema. */
const homeFaqSlugs = ["duracao", "pagamento", "legalidade", "certificado"];

/* ---------- Ícones dos nós do processo ---------- */
const StepIcons = [
  /* 01 — inscrição */ (
    <svg key="signup" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  ),
  /* 02 — módulos */ (
    <svg key="modules" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z" />
      <path d="M9 7h7M9 11h5" />
    </svg>
  ),
  /* 03 — missões */ (
    <svg key="missions" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
];

export default function HomePage() {
  const { t } = useLanguage();
  const { loading, hasAccess, nextModuleId } = useCourseAccess();

  const primaryCta = !loading && hasAccess
    ? { href: "/curso", label: nextModuleId ? `Continuar no módulo ${nextModuleId}` : "Continuar o curso" }
    : { href: "/o-curso", label: t.home.ctaPrimary };

  const steps = [
    { title: t.home.step1, desc: t.home.step1Desc },
    { title: t.home.step2, desc: t.home.step2Desc },
    { title: t.home.step3, desc: t.home.step3Desc },
  ];

  return (
    <div className={`${styles.page} on-light`}>
      {/* ----------------------------------------------------------
          HERO — proposta de valor à esquerda, moldura com o olho à direita
          ---------------------------------------------------------- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{t.home.badge}</p>
            <h1 className={styles.title}>
              {t.home.titleLine1}
              <br />
              {t.home.titleLine2}.
            </h1>
            <p className={styles.subtitle}>{t.home.subtitle}</p>
            <p className={styles.valueProp}>
              <CheckIcon />
              {t.home.heroGuarantee}
            </p>

            <div className={styles.ctaRow}>
              <Link href={primaryCta.href} className={styles.ctaPrimary}>
                {primaryCta.label}
              </Link>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden>
            <div className={styles.heroArtFrame}>
              <EyeMark className={styles.heroArtIcon} />
              <div className={styles.heroArtCard}>
                <span className={styles.heroArtCardLine} style={{ width: "72%" }} />
                <span className={styles.heroArtCardLine} style={{ width: "48%" }} />
                <span className={styles.heroArtCardToggle}>
                  <span className={styles.heroArtCardDot} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------
          PROCESSO — três nós ligados por uma curva ascendente
          ---------------------------------------------------------- */}
      <section className={styles.process} id="processo">
        <div className={styles.processInner}>
          <svg
            className={styles.track}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="cmTrack" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#6a4ade" stopOpacity="0.12" />
                <stop offset="45%" stopColor="#6a4ade" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6a4ade" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path
              d="M 0,91 C 0.8,88 1.5,84.4 2.5,84.4 C 17,84.4 22,46.8 36.5,46.8 C 51,46.8 56,15.6 70.5,15.6 C 82,15.6 92,9 100,3"
              fill="none"
              stroke="url(#cmTrack)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li
                className={styles.step}
                key={step.title}
                style={
                  {
                    "--node-y": `clamp(0px, ${[10, 4.5, 0][i]}vh, ${[86, 38, 0][i]}px)`,
                  } as React.CSSProperties
                }
              >
                <span className={`${styles.node} ${i === 2 ? styles.nodeFilled : ""}`} aria-hidden>
                  {StepIcons[i]}
                </span>
                <span className={styles.stepIndex}>{`0${i + 1}`}</span>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------------
          O QUE APRENDES — grelha resumida dos 10 módulos
          ---------------------------------------------------------- */}
      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>{t.home.modulesEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.home.modulesTitle}</h2>
            <p className={styles.sectionSub}>{t.home.modulesSub}</p>
          </div>
          <div className={styles.modulesGrid}>
            {courseModules
              .filter((m) => m.id <= 10)
              .map((module) => (
                <div key={module.id} className={styles.moduleCard}>
                  <span className={styles.moduleCardNum}>{String(module.id).padStart(2, "0")}</span>
                  <span className={styles.moduleCardTitle}>{module.title}</span>
                </div>
              ))}
          </div>
          <Link href="/o-curso#programa" className={styles.sectionLink}>
            {t.home.modulesCta}
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ----------------------------------------------------------
          PREÇO — reaproveita os valores já usados em /o-curso
          ---------------------------------------------------------- */}
      <section className={`${styles.section} ${styles.sectionPrice} full-section full-section-scroll`}>
        <div className={styles.sectionInner}>
          <div className={styles.priceCard}>
            <p className={styles.priceEyebrow}>{t.home.pricingEyebrow}</p>
            <h2 className={styles.priceTitle}>{t.home.pricingTitle}</h2>
            <div className={styles.priceRow}>
              <span className={styles.priceAmount}>{t.coursePage.pricingPrice}</span>
              <span className={styles.priceMeta}>
                {t.coursePage.pricingPayment} · {t.coursePage.pricingLifetime}
              </span>
            </div>
            <p className={styles.priceUrgency}>{t.coursePage.pricingUrgency}</p>
            <ul className={styles.priceFeatures}>
              {[
                t.coursePage.pricingFeature1,
                t.coursePage.pricingFeature2,
                t.coursePage.pricingFeature3,
              ].map((feature) => (
                <li key={feature}>
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={primaryCta.href} className={styles.priceCta}>
              {t.home.pricingCta}
            </Link>
            <p className={styles.priceSecure}>{t.coursePage.paymentSecure}</p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------
          FAQ CURTO — 4 perguntas + link para a FAQ completa
          ---------------------------------------------------------- */}
      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>{t.home.faqEyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.home.faqTitle}</h2>
          </div>
          <dl className={styles.faqList}>
            {homeFaqSlugs.map((slug) => {
              const item = faqs.find((f) => f.slug === slug);
              if (!item) return null;
              return (
                <div key={slug} className={styles.faqItem}>
                  <dt className={styles.faqQ}>{item.q}</dt>
                  <dd className={styles.faqA}>{item.a}</dd>
                </div>
              );
            })}
          </dl>
          <Link href="/faq" className={styles.sectionLink}>
            {t.home.faqCta}
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ----------------------------------------------------------
          CTA FINAL
          ---------------------------------------------------------- */}
      <section className={`${styles.section} ${styles.sectionFinal} full-section full-section-scroll`}>
        <div className={styles.sectionInner}>
          <div className={styles.finalCta}>
            <h2 className={styles.finalCtaTitle}>{t.home.finalCtaTitle}</h2>
            <p className={styles.finalCtaDesc}>{t.home.finalCtaDesc}</p>
            <Link href={primaryCta.href} className={styles.ctaPrimary}>
              {t.home.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal.
 * Hero com proposta de valor à esquerda e ícone de destaque à direita,
 * seguido dos três passos do processo ligados por uma curva ascendente.
 */

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./page.module.css";

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

  const steps = [
    { title: t.home.step1, desc: t.home.step1Desc },
    { title: t.home.step2, desc: t.home.step2Desc },
    { title: t.home.step3, desc: t.home.step3Desc },
  ];

  return (
    <div className={`${styles.page} full-section`}>
      {/* ----------------------------------------------------------
          HERO — proposta de valor à esquerda, destaque à direita
          ---------------------------------------------------------- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{t.home.badge}</p>
            <h1 className={styles.title}>
              {t.home.titleLine1}
              <br />
              <span className={styles.titleAccent}>
                {t.home.titleLine2}
                <span className={styles.dot}>.</span>
              </span>
            </h1>
            <p className={styles.subtitle}>{t.home.subtitle}</p>

            <div className={styles.ctaRow}>
              <Link href="/login" className={styles.ctaPrimary}>
                {t.home.ctaPrimary}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden>
            <div className={styles.heroArtGlow} />
            <div className={styles.heroArtRing}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 7h12l1 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 7Z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
                <path d="m9.5 12.5 1.7 1.7L15 10.5" />
              </svg>
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
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="45%" stopColor="#ffffff" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
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
                    "--node-y": `clamp(0px, ${[13, 6, 0][i]}vh, ${[106, 48, 0][i]}px)`,
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
    </div>
  );
}

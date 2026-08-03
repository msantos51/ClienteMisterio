/*
 * DESCRIÇÃO DO FICHEIRO: Landing page principal — versão de ecrã único.
 * Mostra apenas a proposta de valor e os três passos do processo; todo o
 * restante conteúdo vive nas páginas /about, /o-curso, /faq e /catalogo.
 */

"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./page.module.css";

/* ---------- Ícones dos nós do processo ---------- */
const StepIcons = [
  /* 01 — inscrição */ (
    <svg key="signup" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1Z" />
      <path d="M4 22v-7" />
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

  const steps = [t.home.step1, t.home.step2, t.home.step3];

  return (
    <div className={styles.page}>
      <section className={styles.stage}>
        <div className={styles.wrap}>
          {/* ----------------------------------------------------------
              PROPOSTA DE VALOR
              ---------------------------------------------------------- */}
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{t.home.badge}</p>
            <h1 className={styles.title}>
              {t.home.titleLine1}
              <br />
              {t.home.titleLine2}
              <span className={styles.dot}>.</span>
            </h1>
          </div>

          {/* ----------------------------------------------------------
              PROCESSO — três nós ligados por uma curva ascendente
              ---------------------------------------------------------- */}
          <div className={styles.process}>
            <svg
              className={styles.track}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="cmTrack" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ef3e4d" stopOpacity="0.25" />
                  <stop offset="45%" stopColor="#ef3e4d" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <path
                d="M 0,95 C 8,86 11,84.4 16.7,84.4 C 31,84.4 36,46.8 50,46.8 C 64,46.8 69,15.6 83.3,15.6 C 90,15.6 95,11 100,6"
                fill="none"
                stroke="url(#cmTrack)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <ol className={styles.steps}>
              {steps.map((label, i) => (
                <li
                  className={styles.step}
                  key={label}
                  style={{ "--node-y": `${[106, 48, 0][i]}px` } as React.CSSProperties}
                >
                  <span className={styles.ghost} aria-hidden>
                    {i + 1}
                  </span>
                  <span className={styles.node} aria-hidden>
                    {StepIcons[i]}
                  </span>
                  <span className={styles.stepIndex}>{`0${i + 1}`}</span>
                  <h2 className={styles.stepTitle}>{label}</h2>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

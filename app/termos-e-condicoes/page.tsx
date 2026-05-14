"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./page.module.css";

export default function TermosECondicoes() {
  const { t, language } = useLanguage();

  const sections = t.termsAndConditions as Array<{
    number: string;
    title: string;
    content: string;
  }>;

  const dateLocale = language === "pt" ? "pt-PT" : "en-GB";
  const headerLabel = language === "pt" ? "Política & Regulamento" : "Policy & Regulations";
  const pageTitle = language === "pt" ? "Termos e Condições" : "Terms and Conditions";
  const lastUpdatedText = language === "pt" ? "Última atualização:" : "Last updated:";

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{headerLabel}</div>
          <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>
            {pageTitle}
          </h1>
          <div className={styles.heroDate}>
            {lastUpdatedText} {new Date().toLocaleDateString(dateLocale)}
          </div>
        </div>
      </header>

      {/* ============================================================
          SECTIONS
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sections}>
            {sections.map((section) => (
              <div key={section.number} className={styles.termSection}>
                <div className={styles.termHeader}>
                  <div className={styles.termNum}>{section.number}</div>
                  <h2 className={styles.termTitle}>{section.title}</h2>
                </div>
                <p className={styles.termContent}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

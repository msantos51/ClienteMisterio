/*
 * DESCRIÇÃO DO FICHEIRO: Página de Perguntas Frequentes (FAQ) — conteúdo movido da página inicial.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { faqs } from "./faqData";

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <section className={`${styles.hero} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Perguntas frequentes</div>
          <h1 className={styles.title}>Tudo o que precisas de saber.</h1>
          <p className={styles.sub}>
            Reunimos as dúvidas mais comuns sobre o curso, os pagamentos e as missões. Não encontras a
            tua resposta? <Link href="/contactos" className={styles.subLink}>Fala connosco</Link>.
          </p>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.contentSection} full-section full-section-scroll`}>
        <div className={styles.faq}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            const questionId = `faq-question-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`} key={f.q}>
                <h2 className={styles.faqQHeading}>
                  <button
                    type="button"
                    id={questionId}
                    className={styles.faqQ}
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                  >
                    <span>{f.q}</span>
                    <span className={styles.faqIcon} aria-hidden />
                  </button>
                </h2>
                <div
                  className={styles.faqA}
                  id={panelId}
                  role="region"
                  aria-labelledby={questionId}
                >
                  <div className={styles.faqAInner}>{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
            <p className={styles.ctaSub}>
              Acesso imediato, certificado incluído e 14 dias de reembolso.
            </p>
          </div>
          <Link href="/o-curso" className={styles.ctaBtn}>
            Ver o programa
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}

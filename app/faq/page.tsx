/*
 * DESCRIÇÃO DO FICHEIRO: Página de Perguntas Frequentes (FAQ) — conteúdo movido da página inicial.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const faqs = [
  {
    q: "Isto é legal em Portugal?",
    a: "Sim. Mystery shopping é uma atividade legítima e regulada como qualquer outra prestação de serviços. As marcas pagam às plataformas para auditarem o seu próprio atendimento e tu prestas esse serviço como independente.",
  },
  {
    q: "Preciso de experiência anterior?",
    a: "Não. O curso foi desenhado para começar do zero. Se tens atenção ao detalhe e sabes escrever um parágrafo claro, tens o suficiente para começar.",
  },
  {
    q: "Quanto tempo demora a fazer o curso?",
    a: "Em média, cerca de 4 horas, distribuídas pelos 10 módulos. Podes fazê-lo num fim-de-semana ou ao longo de várias semanas — o acesso é vitalício.",
  },
  {
    q: "Como recebo o pagamento das missões?",
    a: "Diretamente da plataforma que te atribui a missão, normalmente por transferência bancária após aprovação do relatório. O módulo 10 explica como emitir recibos verdes.",
  },
  {
    q: "É preciso ter carro?",
    a: "Depende da tua zona. Em cidades como Lisboa ou Porto, transportes públicos chegam. Fora dos centros, carro alarga muito as missões disponíveis — mas não é obrigatório.",
  },
  {
    q: "Há reembolso se não gostar?",
    a: "Sim. Tens 14 dias para pedir reembolso integral, sem questões. Acreditamos no produto — só queremos que aprendas, não que pagues sem usar.",
  },
  {
    q: "O certificado é reconhecido?",
    a: "O certificado é emitido pelo Cliente Mistério e comprova as competências adquiridas. As plataformas em Portugal aceitam-no como prova de formação, mas o que conta sobretudo é o teu desempenho nas missões.",
  },
];

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Perguntas frequentes</div>
          <h1 className={styles.title}>Tudo o que precisas de saber.</h1>
          <p className={styles.sub}>
            Reunimos as dúvidas mais comuns sobre o curso, os pagamentos e as missões. Não encontras a
            tua resposta? <Link href="/contact" className={styles.subLink}>Fala connosco</Link>.
          </p>
        </div>
      </header>

      <main className={styles.wrap}>
        <div className={styles.faq}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`} key={f.q}>
                <button
                  type="button"
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{f.q}</span>
                  <span className={styles.faqIcon} aria-hidden />
                </button>
                <div className={styles.faqA}>
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
      </main>
    </div>
  );
}

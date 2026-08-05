/*
 * DESCRIÇÃO DO FICHEIRO: Página de Perguntas Frequentes (FAQ) — pesquisa,
 * agrupamento por tema e âncoras diretas por pergunta (ex.: /faq#reembolso).
 */

"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Accordion from "@/app/components/ui/Accordion";
import styles from "./page.module.css";
import { faqCategories, faqs } from "./faqData";

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function FaqPage() {
  return (
    <Suspense fallback={null}>
      <FaqPageContent />
    </Suspense>
  );
}

function FaqPageContent() {
  const [query, setQuery] = useState("");
  const [openByCategory, setOpenByCategory] = useState<Record<string, number | null>>({
    [faqCategories[0].id]: 0,
  });
  const hasHandledHash = useRef(false);

  const normalizedQuery = normalize(query.trim());

  const groups = useMemo(() => {
    return faqCategories
      .map((category) => ({
        category,
        items: faqs.filter(
          (faq) =>
            faq.category === category.id &&
            (normalizedQuery === "" ||
              normalize(faq.q).includes(normalizedQuery) ||
              normalize(faq.a).includes(normalizedQuery))
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [normalizedQuery]);

  const hasResults = groups.length > 0;

  // Deep link (ex.: /faq#reembolso): abre a pergunta e leva a vista até lá.
  useEffect(() => {
    if (hasHandledHash.current) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const target = faqs.find((faq) => faq.slug === hash);
    if (!target) return;

    hasHandledHash.current = true;
    const categoryItems = faqs.filter((faq) => faq.category === target.category);
    const indexInCategory = categoryItems.findIndex((faq) => faq.slug === hash);
    if (indexInCategory === -1) return;

    // Sincroniza com window.location.hash (indisponível no servidor) depois
    // do mount, para abrir a pergunta de um link direto (ex.: /faq#reembolso).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenByCategory((prev) => ({ ...prev, [target.category]: indexInCategory }));

    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
  }, []);

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

          <div className={styles.searchWrap}>
            <label htmlFor="faq-search" className="sr-only">
              Pesquisar nas perguntas frequentes
            </label>
            <SearchIcon />
            <input
              id="faq-search"
              type="search"
              className={styles.searchInput}
              placeholder="Pesquisar (ex.: reembolso, certificado, carro...)"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.contentSection} full-section full-section-scroll`}>
        {!hasResults && (
          <p className={styles.noResults}>
            Não encontrámos nenhuma pergunta com &ldquo;{query}&rdquo;.{" "}
            <Link href="/contactos" className={styles.subLink}>Fala connosco</Link> e respondemos diretamente.
          </p>
        )}

        {groups.map(({ category, items }) => (
          <div key={category.id} className={styles.group}>
            <h2 className={styles.groupTitle} id={`faq-${category.id}`}>{category.label}</h2>
            <Accordion
              idPrefix={`faq-${category.id}`}
              className={styles.faq}
              items={items.map((f) => ({ question: f.q, answer: f.a }))}
              itemIds={items.map((f) => f.slug)}
              openIndex={openByCategory[category.id] ?? null}
              onToggle={(index) =>
                setOpenByCategory((prev) => ({
                  ...prev,
                  [category.id]: prev[category.id] === index ? null : index,
                }))
              }
              itemClassName={styles.faqItem}
              openItemClassName={styles.faqItemOpen}
              questionHeadingClassName={styles.faqQHeading}
              questionButtonClassName={styles.faqQ}
              icon={<span className={styles.faqIcon} aria-hidden />}
              panelClassName={styles.faqA}
              panelInnerClassName={styles.faqAInner}
            />
            <p className={styles.groupCta}>
              Ainda tens dúvidas sobre {category.label.toLowerCase()}?{" "}
              <Link href="/contactos" className={styles.subLink}>Fala connosco</Link>
            </p>
          </div>
        ))}

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

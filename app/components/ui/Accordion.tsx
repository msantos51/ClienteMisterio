/*
 * DESCRIÇÃO DO FICHEIRO: Acordeão acessível reutilizável (Fase 0, ponto
 * 6): pergunta num <h2> dentro do botão, `aria-controls`/`aria-expanded`
 * ligados ao painel, painel com `role="region"` + `aria-labelledby`.
 * Controlado de fora (`openIndex`/`onToggle`) para o comportamento de
 * "só um aberto de cada vez" (ou não) ficar à responsabilidade da
 * página, como já acontecia em /faq.
 */

import type { ReactNode } from "react";

export type AccordionItem = {
  question: ReactNode;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  idPrefix: string;
  className?: string;
  itemClassName?: string;
  openItemClassName?: string;
  questionHeadingClassName?: string;
  questionButtonClassName?: string;
  icon?: ReactNode;
  panelClassName?: string;
  panelInnerClassName?: string;
};

export default function Accordion({
  items,
  openIndex,
  onToggle,
  idPrefix,
  className,
  itemClassName,
  openItemClassName,
  questionHeadingClassName,
  questionButtonClassName,
  icon,
  panelClassName,
  panelInnerClassName,
}: AccordionProps) {
  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `${idPrefix}-question-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div
            key={questionId}
            className={[itemClassName, isOpen && openItemClassName].filter(Boolean).join(" ")}
          >
            <h2 className={questionHeadingClassName}>
              <button
                type="button"
                id={questionId}
                className={questionButtonClassName}
                onClick={() => onToggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{item.question}</span>
                {icon}
              </button>
            </h2>
            <div className={panelClassName} id={panelId} role="region" aria-labelledby={questionId}>
              <div className={panelInnerClassName}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

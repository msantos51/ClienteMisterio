/*
 * DESCRIÇÃO DO FICHEIRO: Secção de ecrã inteiro reutilizável (Fase 0,
 * ponto 6). Envolve `.full-section`/`.full-section-scroll` (ver
 * globals.css, Parte 14) — a única barra de scroll continua a ser a da
 * página, nunca uma por secção.
 */

import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  /** Aplica `.full-section` (min-height ≈ ecrã visível). Default: true. */
  fullBleed?: boolean;
  /** Aplica `.full-section-scroll` (alinha ao topo se exceder o ecrã). Default: true. */
  allowOverflow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

export default function Section({
  fullBleed = true,
  allowOverflow = true,
  className,
  children,
  ...rest
}: SectionProps) {
  const classes = [
    fullBleed && "full-section",
    fullBleed && allowOverflow && "full-section-scroll",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
}

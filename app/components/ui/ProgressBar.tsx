/*
 * DESCRIÇÃO DO FICHEIRO: Barra de progresso acessível reutilizável (Fase
 * 0, ponto 6; Fase 1, ponto 14): `role="progressbar"` com
 * `aria-valuenow/min/max` e `aria-label` — antes disto, as barras de
 * /curso e /dashboard eram só uma `<div>` colorida sem semântica para
 * leitores de ecrã.
 */

import type { CSSProperties, ReactNode } from "react";

type ProgressBarProps = {
  value: number;
  max?: number;
  label: string;
  trackClassName?: string;
  fillClassName?: string;
  fillStyle?: CSSProperties;
  children?: ReactNode;
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  trackClassName,
  fillClassName,
  fillStyle,
  children,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(max, value));
  const percent = max > 0 ? (clamped / max) * 100 : 0;

  return (
    <div
      className={trackClassName}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
    >
      <div className={fillClassName} style={{ width: `${percent}%`, ...fillStyle }} />
      {children}
    </div>
  );
}

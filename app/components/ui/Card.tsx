/*
 * DESCRIÇÃO DO FICHEIRO: Cartão reutilizável (Fase 0, ponto 6). Envolve a
 * classe global `.card` (ver globals.css) — sem estilos novos.
 */

import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  variant?: "default" | "dark" | "accent-left";
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export default function Card({ variant = "default", className, children, ...rest }: CardProps) {
  const variantClass = variant === "default" ? "" : variant;
  const classes = ["card", variantClass, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

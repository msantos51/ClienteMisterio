/*
 * DESCRIÇÃO DO FICHEIRO: Rótulo pequeno com régua, usado acima de um
 * título de secção (Fase 0, ponto 6). Ver `.ui-eyebrow` em globals.css —
 * consolida um padrão que estava duplicado em vários page.module.css.
 */

import type { HTMLAttributes, ReactNode } from "react";

type EyebrowProps = {
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLParagraphElement>, "className">;

export default function Eyebrow({ className, children, ...rest }: EyebrowProps) {
  return (
    <p className={["ui-eyebrow", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </p>
  );
}

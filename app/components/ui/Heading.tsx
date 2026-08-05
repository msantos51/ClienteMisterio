/*
 * DESCRIÇÃO DO FICHEIRO: Título com escala tipográfica consistente (Fase
 * 0, ponto 6). Envolve as classes utilitárias `.h1`-`.h5` já existentes
 * em globals.css — o nível HTML (`level`) é independente do tamanho
 * visual (`size`), para nunca teres de escolher entre hierarquia
 * semântica correta e o tamanho que a página precisa.
 */

import type { HTMLAttributes, ReactNode } from "react";

type Level = 1 | 2 | 3 | 4 | 5;

type HeadingProps = {
  level?: Level;
  size?: Level;
  inverse?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export default function Heading({ level = 2, size, inverse, className, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5";
  const sizeLevel = size ?? level;
  const sizeClass = inverse && sizeLevel === 2 ? "section-title-inverse" : `h${sizeLevel}`;

  return (
    <Tag className={[sizeClass, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </Tag>
  );
}

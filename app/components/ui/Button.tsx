/*
 * DESCRIÇÃO DO FICHEIRO: Botão reutilizável (Fase 0, ponto 6). Envolve as
 * classes globais `.button`/`.primary`/`.secondary` já existentes em
 * globals.css — não introduz estilos novos, só evita repetir a
 * composição de classes em cada página. Renderiza <a> (via next/link)
 * quando recebe `href`, ou <button> caso contrário.
 */

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "lg";

type SharedProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

function buildClassName({
  variant = "primary",
  size,
  fullWidth,
  className,
}: Pick<SharedProps, "variant" | "size" | "fullWidth" | "className">) {
  return ["button", variant, size, fullWidth ? "fullwidth" : "", className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: Props) {
  const { variant, size, fullWidth, className, children, ...rest } = props;
  const classes = buildClassName({ variant, size, fullWidth, className });

  if ("href" in props && props.href) {
    const { href: _href, ...anchorRest } = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)}>
      {children}
    </button>
  );
}

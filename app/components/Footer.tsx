/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa o Footer da aplicação, incluindo links úteis e legais.
 */

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-transparent px-3 py-4 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span className="font-black uppercase tracking-[0.25em] text-[color:var(--foreground)]">
              CM
            </span>
            <span className="text-white/60">
              Portal de participação cidadã e informação pública.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/termos-e-condicoes"
              className="text-white/80 transition-colors hover:text-white"
            >
              Termos e Condições
            </Link>
            <Link
              href="/contact"
              className="text-white/80 transition-colors hover:text-white"
            >
              Contacto
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white/60">
            &copy; {currentYear} Cliente Mistério. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

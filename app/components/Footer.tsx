/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa o Footer da aplicação, incluindo links úteis e legais.
 */

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-transparent px-3 py-8 sm:px-6 md:px-10 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo / Brand */}
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[color:var(--foreground)] sm:text-sm sm:tracking-[0.35em]">
              CM
            </p>
            <p className="mt-2 text-xs text-white/60">
              Portal de participação cidadã e informação pública.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs">
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
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          <p>&copy; {currentYear} Cliente Mistério. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

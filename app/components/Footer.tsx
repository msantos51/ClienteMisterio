/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa o Footer da aplicação, incluindo links úteis e legais.
 */

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-[#E8EAED] px-3 py-4 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start gap-3 text-xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span className="font-black uppercase tracking-[0.25em] text-black">
              CM
            </span>
            <span className="text-black/60">
              O único curso de Cliente Mistério em Portugal.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/termos-e-condicoes"
              className="text-black/70 transition-colors hover:text-black"
            >
              Termos e Condições
            </Link>
            <Link
              href="/contact"
              className="text-black/70 transition-colors hover:text-black"
            >
              Contacto
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-black/50">
            &copy; {currentYear} Cliente Mistério. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer-mini">
      <div className="footer-mini-inner flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
        <span className="footer-mini-text">
          &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
        </span>
        <Link href="/termos-e-condicoes" className="footer-mini-link">
          {t.footer.termsLink}
        </Link>
        <Link href="/privacidade" className="footer-mini-link">
          Privacidade
        </Link>
        <a
          href="https://www.livroreclamacoes.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-mini-link"
        >
          Livro de Reclamações
        </a>
      </div>
    </footer>
  );
}

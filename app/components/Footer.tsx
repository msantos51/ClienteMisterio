"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const siteMapLinks = [
    { href: "/", label: t.footer.homeLink },
    { href: "/o-curso", label: t.footer.courseLink },
    { href: "/faq", label: t.footer.faqLink },
    { href: "/sobre", label: t.footer.aboutLink },
    { href: "/contactos", label: t.footer.contactLabel },
  ];

  const legalLinks = [
    { href: "/termos-e-condicoes", label: t.footer.termsLink },
    { href: "/privacidade", label: t.footer.privacyLink },
    { href: "/cookies", label: t.footer.cookiesLink },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <div className="site-footer-brand">
            Cliente Mistério<span className="text-[color:var(--color-white)]">.</span>
          </div>
          <p className="site-footer-tagline">{t.footer.tagline}</p>
        </div>

        <div>
          <div className="site-footer-heading">{t.footer.quickLinksLabel}</div>
          <nav className="site-footer-links" aria-label={t.footer.quickLinksLabel}>
            {siteMapLinks.map((link) => (
              <Link key={link.href} href={link.href} className="site-footer-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="site-footer-heading">{t.footer.legalLabel}</div>
          <nav className="site-footer-links" aria-label={t.footer.legalLabel}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="site-footer-link">
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.livroreclamacoes.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              Livro de Reclamações
            </a>
          </nav>
        </div>

        <div>
          <div className="site-footer-heading">{t.footer.contactLabel}</div>
          <nav className="site-footer-links" aria-label={t.footer.contactLabel}>
            <a href={`mailto:${t.contact.email}`} className="site-footer-link">
              {t.contact.email}
            </a>
            <Link href="/contactos" className="site-footer-link">
              {t.footer.contactLink}
            </Link>
          </nav>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span className="footer-mini-text">
          &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
        </span>
      </div>
    </footer>
  );
}

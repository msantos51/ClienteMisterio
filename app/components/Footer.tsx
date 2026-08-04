"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.footer.homeLink },
    { href: "/about", label: t.nav.about },
    { href: "/o-curso", label: t.footer.courseLink },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.footer.contactLabel },
  ];

  return (
    <footer className="footer-expanded">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-10 py-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-[18px] font-bold tracking-[-0.03em] text-white">
              Cliente Mistério<span className="text-[color:var(--color-red-bright)]">.</span>
            </span>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h2 className="footer-heading">{t.footer.quickLinksLabel}</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">{t.footer.contactLabel}</h2>
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <a href={`mailto:${t.contact.email}`} className="footer-link">
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="footer-link">
                  {t.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">{t.footer.socialLabel}</h2>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/clientemisterio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.linkedinLabel}
                className="footer-social-icon"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/clientemisterio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.instagramLabel}
                className="footer-social-icon"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-mini-inner flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 py-6 text-center">
          <span className="footer-mini-text">
            &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
          </span>
          <Link href="/termos-e-condicoes" className="footer-mini-link">
            {t.footer.termsLink}
          </Link>
        </div>
      </div>
    </footer>
  );
}

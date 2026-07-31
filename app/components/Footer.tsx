"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  const footerSections = [
    {
      title: t.footer.productLabel,
      links: [
        { label: t.footer.courseLink, href: "/o-curso" },
        { label: t.footer.certificateLink, href: "/dashboard" },
        { label: t.footer.faqLink, href: "/faq" },
        { label: t.footer.platformsLink, href: "/catalogo" },
      ],
    },
    {
      title: t.footer.companyLabel,
      links: [
        { label: t.footer.aboutLink, href: "/about" },
        { label: t.footer.blogLink, href: "#" },
        { label: t.footer.contactLink, href: "/contact" },
        { label: t.footer.statusLink, href: "#" },
      ],
    },
    {
      title: t.footer.legalLabel,
      links: [
        { label: t.footer.termsLink, href: "/termos-e-condicoes" },
        { label: t.footer.privacyLink, href: "#" },
        { label: t.footer.cookiesLink, href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Halo vermelho discreto no canto superior direito. */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-red) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* Main Footer Content */}
        <div className="mb-[var(--sp-3xl)] grid grid-cols-1 gap-[var(--sp-2xl)] sm:grid-cols-2 lg:grid-cols-5 lg:gap-[var(--sp-lg)]">
          {/* Brand Column */}
          <div className="footer-column lg:col-span-1">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--color-primary-red)] text-[13px] font-bold text-white">
                CM
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[16px] font-bold tracking-tight text-white">
                  Cliente Mistério<span className="text-[color:var(--color-primary-red)]">.</span>
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-white/60">
                  Formação Pro
                </span>
              </span>
            </div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.5px] text-[color:var(--color-red-on-dark)]">
              {t.footer.madeWith}
            </p>
            <p className="text-[15px] leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div className="footer-column" key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer-column lg:col-span-1">
            <h4>{t.footer.newsletterLabel}</h4>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form flex-col">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                aria-label={t.footer.newsletterLabel}
              />
              <button type="submit" className="w-full">
                {newsletterSubmitted ? "✓ " + t.footer.newsletterButton : t.footer.newsletterButton}
              </button>
            </form>
            {/* Social Links */}
            <div className="footer-socials mt-6">
              {[
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  path: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.725h3.554v1.378c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.738 1.395 3.738 4.393v5.562zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.194 0 1.926.753 1.949 1.708 0 .95-.755 1.708-1.997 1.708zm1.583 11.597H3.731V9.627h3.189v10.825zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  ),
                },
                {
                  href: "https://twitter.com",
                  label: "X (Twitter)",
                  path: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.91 6.75H2.42l7.728-8.835L1.24 2.25h6.972l4.682 6.191 5.344-6.191zM17.41 20.452h1.835L6.628 3.97H4.611l12.799 16.482z" />
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    {s.path}
                  </svg>
                </a>
              ))}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-bottom-text mb-0">
            &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <Link
              href="/termos-e-condicoes"
              className="footer-bottom-text transition-colors hover:text-white"
            >
              {t.footer.termsLink}
            </Link>
            <Link
              href="#"
              className="footer-bottom-text transition-colors hover:text-white"
            >
              {t.footer.privacyLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

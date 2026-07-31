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
    <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--background-deep)] px-3 py-16 text-white sm:px-6 md:px-10">
      {/* Halo Turkish Red discreto no canto superior direito. */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #e20e17 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--brand)] text-[13px] font-extrabold text-white">
                CM
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold tracking-tight text-white">
                  Cliente Mistério<span className="text-[color:var(--brand)]">.</span>
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Formação Pro
                </span>
              </span>
            </div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--brand)]">{t.footer.madeWith}</p>
            <p className="text-xs leading-6 text-white/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 inline-block border-b-2 border-[color:var(--brand)] pb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/55 transition-colors hover:text-[color:var(--brand-500)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 inline-block border-b-2 border-[color:var(--brand)] pb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              {t.footer.newsletterLabel}
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full rounded-[var(--radius-md)] border border-white/12 bg-white/[0.04] px-3 py-2.5 text-xs text-white placeholder:text-white/35 focus:border-[color:var(--brand)] focus:outline-none"
                aria-label={t.footer.newsletterLabel}
              />
              <button
                type="submit"
                className="btn-primary btn-block !py-2.5 !text-[11px]"
              >
                {newsletterSubmitted ? "✓ " + t.footer.newsletterButton : t.footer.newsletterButton}
              </button>
            </form>
            {/* Social Links */}
            <div className="mt-6 flex gap-2.5">
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:border-[color:var(--brand)] hover:text-white"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:border-[color:var(--brand)] hover:text-white"
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

        {/* Divider */}
        <div className="my-10 border-t border-white/8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-4 text-[11px] uppercase tracking-[0.1em] text-white/40 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <Link href="/termos-e-condicoes" className="transition-colors hover:text-white">
              {t.footer.termsLink}
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              {t.footer.privacyLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

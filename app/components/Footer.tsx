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
        { label: t.nav.resources, href: "/recursos" },
        { label: t.footer.faqLink, href: "/#faq" },
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
    <footer className="border-t border-white/20 bg-[#E8EAED] px-3 py-12 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-start gap-3">
              <span className="font-black uppercase tracking-[0.25em] text-black text-sm">
                CM
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-black">{t.footer.madeWith}</p>
              </div>
            </div>
            <p className="text-xs leading-6 text-black/60">
              {t.footer.tagline}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-black">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-black/60 transition-colors hover:text-black"
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-black">
              {t.footer.newsletterLabel}
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full rounded border border-black/20 bg-white px-3 py-2 text-xs text-black placeholder:text-black/40 focus:border-black focus:outline-none"
                aria-label={t.footer.newsletterLabel}
              />
              <button
                type="submit"
                className="w-full rounded bg-black px-3 py-2 text-xs font-semibold text-white transition-opacity hover:bg-black/90"
              >
                {newsletterSubmitted ? "✓ " + t.footer.newsletterButton : t.footer.newsletterButton}
              </button>
            </form>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black/60 transition-colors hover:text-black"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.725h3.554v1.378c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.738 1.395 3.738 4.393v5.562zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.194 0 1.926.753 1.949 1.708 0 .95-.755 1.708-1.997 1.708zm1.583 11.597H3.731V9.627h3.189v10.825zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black/60 transition-colors hover:text-black"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.91 6.75H2.42l7.728-8.835L1.24 2.25h6.972l4.682 6.191 5.344-6.191zM17.41 20.452h1.835L6.628 3.97H4.611l12.799 16.482z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black/60 transition-colors hover:text-black"
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
        <div className="my-8 border-t border-black/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-black/50 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} Cliente Mistério. {t.footer.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <Link href="/termos-e-condicoes" className="transition-colors hover:text-black">
              {t.footer.termsLink}
            </Link>
            <Link href="#" className="transition-colors hover:text-black">
              {t.footer.privacyLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

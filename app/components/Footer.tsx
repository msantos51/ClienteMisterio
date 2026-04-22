"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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
              {t.footer.tagline}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/termos-e-condicoes"
              className="text-black/70 transition-colors hover:text-black"
            >
              {t.footer.termsLink}
            </Link>
            <Link
              href="/contact"
              className="text-black/70 transition-colors hover:text-black"
            >
              {t.footer.contactLink}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-black/50">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

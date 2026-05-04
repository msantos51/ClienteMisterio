"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonClass = (isActive: boolean) =>
    `flex items-center justify-center gap-2 px-5 py-2 rounded-lg border-2 font-semibold transition-all ${
      isActive
        ? "border-[#22a094] bg-teal-100 text-gray-900 shadow-md scale-105"
        : "border-teal-200 text-gray-700 hover:bg-teal-50 hover:scale-105"
    }`;

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-label="Português"
        aria-pressed={language === "pt"}
        className={buttonClass(language === "pt")}
        title="Português"
      >
        <svg viewBox="0 0 600 400" className="h-8 w-12" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="400" fill="#006600" />
          <rect x="300" width="300" height="400" fill="#FF0000" />
          <circle cx="300" cy="200" r="100" fill="#FFFF00" />
          <circle cx="300" cy="200" r="70" fill="#0033A0" />
        </svg>
        <span className="hidden sm:inline text-sm">PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        className={buttonClass(language === "en")}
        title="English"
      >
        <svg viewBox="0 0 60 40" className="h-8 w-12" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
          <path d="M30,0 L30,40 M0,20 L60,20" stroke="#FFFFFF" strokeWidth="12" />
          <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="8" />
        </svg>
        <span className="hidden sm:inline text-sm">EN</span>
      </button>
    </div>
  );
}

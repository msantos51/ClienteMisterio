"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-label="Português"
        aria-pressed={language === "pt"}
        className={`flex h-7 w-10 items-center justify-center overflow-hidden rounded-sm border-2 transition-all ${
          language === "pt"
            ? "border-[#22a094] opacity-100 shadow-sm"
            : "border-transparent opacity-60 hover:opacity-100"
        }`}
        title="Português"
      >
        <svg viewBox="0 0 600 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="400" fill="#006600" />
          <rect x="240" width="360" height="400" fill="#FF0000" />
          <circle cx="240" cy="200" r="80" fill="#FFFF00" stroke="#000" strokeWidth="2" />
          <circle cx="240" cy="200" r="55" fill="#0033A0" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        className={`flex h-7 w-10 items-center justify-center overflow-hidden rounded-sm border-2 transition-all ${
          language === "en"
            ? "border-[#22a094] opacity-100 shadow-sm"
            : "border-transparent opacity-60 hover:opacity-100"
        }`}
        title="English"
      >
        <svg viewBox="0 0 60 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
          <path d="M30,0 L30,40 M0,20 L60,20" stroke="#FFFFFF" strokeWidth="10" />
          <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="6" />
        </svg>
      </button>
    </div>
  );
}

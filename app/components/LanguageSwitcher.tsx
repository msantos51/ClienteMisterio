"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonClass = (isActive: boolean) =>
    `flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
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
        <span className="text-3xl">🇵🇹</span>
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
        <span className="text-3xl">🇬🇧</span>
        <span className="hidden sm:inline text-sm">EN</span>
      </button>
    </div>
  );
}

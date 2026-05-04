"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonClass = (isActive: boolean) =>
    `flex items-center justify-center gap-1 px-3 py-1.5 rounded-md border-2 font-medium text-sm transition-all ${
      isActive
        ? "border-[#22a094] bg-teal-50 text-gray-900 shadow-sm"
        : "border-transparent text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-label="Português"
        aria-pressed={language === "pt"}
        className={buttonClass(language === "pt")}
        title="Português"
      >
        <span className="text-lg">🇵🇹</span>
        <span className="hidden sm:inline">PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        className={buttonClass(language === "en")}
        title="English"
      >
        <span className="text-lg">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}

"use client";

import { useLanguage } from "@/app/context/LanguageContext";

function PortugalFlag() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      aria-hidden="true"
    >
      <rect width="10" height="14" fill="#006600" />
      <rect x="10" y="0" width="10" height="14" fill="#FF0000" />
      <circle cx="10" cy="7" r="3" fill="#FFD700" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      aria-hidden="true"
    >
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.8" />
      <path
        d="M10 0V14M0 7H20"
        stroke="#C8102E"
        strokeWidth="1.8"
      />
    </svg>
  );
}

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
        <PortugalFlag />
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
        <UKFlag />
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}

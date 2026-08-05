"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Language } from "@/app/lib/translations";
import { getTranslation } from "@/app/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "clientemisterio_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Começa sempre em "pt" — igual no servidor e no primeiro render do
  // cliente, para não haver mismatch de hidratação. Se a preferência
  // guardada for diferente, o efeito abaixo atualiza o estado depois do
  // mount (um re-render normal, não uma trocas de tipo de elemento — o
  // Provider é sempre o mesmo, para o React nunca desmontar/remontar
  // cabeçalho, main e rodapé a cada carregamento de página).
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (stored && (stored === "pt" || stored === "en")) {
      // Sincroniza com localStorage (indisponível no servidor) depois do
      // mount, de propósito: é o padrão de hidratação descrito acima.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: getTranslation(language) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default Portuguese context when used outside LanguageProvider (e.g., during SSR)
    return {
      language: "pt" as Language,
      setLanguage: () => {},
      t: getTranslation("pt"),
    };
  }
  return context;
}

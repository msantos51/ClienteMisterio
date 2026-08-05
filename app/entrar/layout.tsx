import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Inicia sessão na tua conta Cliente Mistério para aceder ao curso e às tuas missões.",
  alternates: { canonical: "/entrar" },
  openGraph: {
    title: "Entrar | Cliente Mistério",
    description: "Inicia sessão na tua conta Cliente Mistério para aceder ao curso e às tuas missões.",
    url: "/entrar",
  },
};

export default function EntrarLayout({ children }: { children: React.ReactNode }) {
  return children;
}

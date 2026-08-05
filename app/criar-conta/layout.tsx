import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Conta",
  description: "Cria a tua conta gratuita para aceder ao curso de Cliente Mistério em Portugal.",
  alternates: { canonical: "/criar-conta" },
  openGraph: {
    title: "Criar Conta | Cliente Mistério",
    description: "Cria a tua conta gratuita para aceder ao curso de Cliente Mistério em Portugal.",
    url: "/criar-conta",
  },
};

export default function CriarContaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

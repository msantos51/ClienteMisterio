import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Cliente Mistério recolhe, usa e protege os teus dados pessoais, em conformidade com o RGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

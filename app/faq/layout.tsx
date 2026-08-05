import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas frequentes sobre ser cliente mistério em Portugal",
  description:
    "Tira dúvidas sobre o curso de Cliente Mistério: preço, módulos, certificado, missões disponíveis em Portugal e prazos de pagamento.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Perguntas frequentes sobre ser cliente mistério em Portugal",
    description:
      "Tira dúvidas sobre o curso de Cliente Mistério: preço, módulos, certificado, missões disponíveis em Portugal e prazos de pagamento.",
    url: "/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

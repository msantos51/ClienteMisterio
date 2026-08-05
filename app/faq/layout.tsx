import type { Metadata } from "next";
import { faqs } from "./faqData";
import { siteUrl } from "../lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq` },
  ],
};

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

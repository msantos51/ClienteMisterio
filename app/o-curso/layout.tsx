import type { Metadata } from "next";
import { siteUrl, siteName } from "../lib/site";

const title = "O Curso: 10 módulos + certificado | Cliente Mistério — 24,99€";
const description =
  "Curso completo de Cliente Mistério em Portugal: 10 módulos, casos reais, quiz por módulo e certificado de conclusão. Pagamento único de 24,99€, acesso vitalício.";

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Curso Cliente Mistério",
  description,
  provider: {
    "@type": "Organization",
    name: siteName,
    sameAs: siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "24.99",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/o-curso`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT4H",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "O Curso", item: `${siteUrl}/o-curso` },
  ],
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/o-curso" },
  openGraph: {
    title,
    description,
    url: "/o-curso",
  },
};

export default function OCursoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

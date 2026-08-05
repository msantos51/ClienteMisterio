import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Fala com a equipa do Cliente Mistério para dúvidas sobre o curso, o certificado ou o processo de pagamento.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Cliente Mistério",
    description:
      "Fala com a equipa do Cliente Mistério para dúvidas sobre o curso, o certificado ou o processo de pagamento.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

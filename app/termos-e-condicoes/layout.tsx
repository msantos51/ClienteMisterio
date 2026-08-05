import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Termos e condições de utilização do curso e do site Cliente Mistério.",
  alternates: { canonical: "/termos-e-condicoes" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Termos e Condições | Cliente Mistério",
    description:
      "Termos e condições de utilização do curso e do site Cliente Mistério.",
    url: "/termos-e-condicoes",
  },
};

export default function TermosLayout({ children }: { children: React.ReactNode }) {
  return children;
}

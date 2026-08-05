import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O que faz um cliente mistério? Método, ética e rendimento",
  description:
    "Descobre o que faz um cliente mistério em Portugal: método de avaliação, boas práticas éticas e como transformar visitas em rendimento extra.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "O que faz um cliente mistério? Método, ética e rendimento",
    description:
      "Descobre o que faz um cliente mistério em Portugal: método de avaliação, boas práticas éticas e como transformar visitas em rendimento extra.",
    url: "/sobre",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

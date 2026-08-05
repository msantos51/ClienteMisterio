import type { Metadata } from "next";

const title = "O Curso: 10 módulos + certificado | Cliente Mistério — 24,99€";
const description =
  "Curso completo de Cliente Mistério em Portugal: 10 módulos, casos reais, quiz por módulo e certificado de conclusão. Pagamento único de 24,99€, acesso vitalício.";

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
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Que dados guardamos no teu browser e porquê — o Cliente Mistério não usa cookies de rastreio nem scripts de terceiros.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

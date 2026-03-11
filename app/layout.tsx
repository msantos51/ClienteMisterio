/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/layout.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import AppShell from "./components/AppShell";
import "./globals.css";

// Define a fonte principal com estilo geométrico para reforçar o visual editorial.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Mantém as fontes auxiliares para áreas técnicas sem quebrar compatibilidade.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Centraliza metadados globais do website.
export const metadata: Metadata = {
  title: "Cliente Mistério",
  description: "Portal de participação cidadã e informação pública.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} bg-[color:var(--background)] text-[color:var(--foreground)] antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

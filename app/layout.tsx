/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/layout.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "./components/AppShell";
import "./globals.css";

// Mantém as fontes auxiliares para áreas técnicas sem quebrar compatibilidade.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Centraliza metadados globais do website.
export const metadata: Metadata = {
  title: "Cliente Mistério",
  description: "Portal de participação cidadã e informação pública.",
  metadataBase: new URL("https://clientemisterio.onrender.com"),
  openGraph: {
    title: "Cliente Mistério",
    description: "Portal de participação cidadã e informação pública.",
    type: "website",
  },
};

// Otimiza viewport para melhor experiência mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[color:var(--background)] text-[color:var(--foreground)] antialiased`}
        style={{ fontFamily: "Basenji, sans-serif" }}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import AppShell from "./components/AppShell";
import "./globals.css";

const siteUrl = process.env.APP_BASE_URL?.trim() || "https://clientemisterio.onrender.com";
const siteName = "Cliente Mistério";
const siteDescription =
  "O único curso de Cliente Mistério em Portugal. Aprende, de forma metódica e discreta, a avaliar serviços e a ser remunerado.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Curso online em Portugal`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "cliente mistério",
    "mystery shopper",
    "curso",
    "Portugal",
    "avaliação de serviços",
    "rendimento extra",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
      </head>
      <body
        className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased"
        style={{ fontFamily: "Google Sans, sans-serif" }}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

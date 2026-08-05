import type { Metadata, Viewport } from "next";
import AppShell from "./components/AppShell";
import { creatoDisplay } from "./fonts";
import { siteUrl, siteName } from "./lib/site";
import "./globals.css";

const siteDescription =
  "O curso de Cliente Mistério em Portugal. Aprende, de forma metódica e discreta, a avaliar serviços e a ser remunerado.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Curso de Cliente Mistério em Portugal | Ganha dinheiro a avaliar lojas",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
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
  themeColor: "#6a4ade",
};

// TODO: acrescentar `logo` (URL de imagem real) e `sameAs` (redes sociais
// reais) quando existirem — não inventar dados de marca não confirmados.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={creatoDisplay.variable}>
      <body className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

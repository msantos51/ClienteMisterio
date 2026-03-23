import type { Metadata, Viewport } from "next";
import AppShell from "./components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cliente Mistério",
  description: "O único curso de Cliente Mistério em Portugal — aprende a ganhar enquanto avalias serviços.",
  metadataBase: new URL("https://clientemisterio.onrender.com"),
  openGraph: {
    title: "Cliente Mistério",
    description: "O único curso de Cliente Mistério em Portugal — aprende a ganhar enquanto avalias serviços.",
    type: "website",
  },
};

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
        className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased"
        style={{ fontFamily: "CreatoDisplay, sans-serif" }}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

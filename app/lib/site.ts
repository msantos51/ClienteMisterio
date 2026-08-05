/*
 * DESCRIÇÃO DO FICHEIRO: Fonte única do URL de produção do site.
 * Usado por layout.tsx, sitemap.ts e robots.ts para gerar canonical,
 * og:url e sitemap sempre a apontar para o domínio real — nunca para o
 * domínio de alojamento (onrender.com). Define NEXT_PUBLIC_SITE_URL (ou o
 * legado APP_BASE_URL) nas variáveis de ambiente de produção.
 */

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.APP_BASE_URL?.trim();

// TODO: definir NEXT_PUBLIC_SITE_URL (idealmente https://clientemisterio.pt,
// com domínio próprio configurado + HSTS) nas variáveis de ambiente de
// produção. Enquanto não estiver definida, usa-se um valor local neutro
// para nunca publicar o domínio de alojamento (onrender.com) em canonical,
// og:url ou sitemap.
export const siteUrl = configuredUrl || "http://localhost:3000";

export const siteName = "Cliente Mistério";

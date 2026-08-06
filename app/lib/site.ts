/*
 * DESCRIÇÃO DO FICHEIRO: Fonte única do URL de produção do site.
 * Usado por layout.tsx, sitemap.ts e robots.ts para gerar canonical,
 * og:url e sitemap sempre a apontar para o domínio real — nunca para o
 * domínio de alojamento (Railway). Define NEXT_PUBLIC_SITE_URL (ou o
 * legado APP_BASE_URL) nas variáveis de ambiente de produção com o
 * domínio real (https://clientemisterio.com).
 */

// Sem NEXT_PUBLIC_SITE_URL/APP_BASE_URL definidas, cai para o domínio
// público que o Railway atribui automaticamente ao serviço — pior para a
// marca do que o domínio próprio, mas nunca deixa canonical/sitemap/og:url
// apontarem para localhost em produção.
const railwayPublicDomain = process.env.RAILWAY_PUBLIC_DOMAIN?.trim();

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.APP_BASE_URL?.trim() ||
  (railwayPublicDomain ? `https://${railwayPublicDomain}` : undefined);

// TODO: confirmar NEXT_PUBLIC_SITE_URL=https://clientemisterio.com nas
// variáveis de ambiente do Railway (Settings > Variables) e voltar a fazer
// deploy — é o único fallback acima que garante o domínio de marca correto
// em vez do subdomínio *.up.railway.app.
export const siteUrl = configuredUrl || "http://localhost:3000";

export const siteName = "Cliente Mistério";

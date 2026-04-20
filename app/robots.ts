/*
 * DESCRIÇÃO DO FICHEIRO: Define políticas de indexação para motores de busca, protegendo áreas técnicas e privadas.
 */

import type { MetadataRoute } from "next";

const siteUrl = process.env.APP_BASE_URL?.trim() || "https://clientemisterio.onrender.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/o-curso", "/contact", "/termos-e-condicoes", "/login", "/account"],
      disallow: ["/api", "/api-docs", "/dashboard", "/curso", "/checkout", "/reset-password", "/forgot-password"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

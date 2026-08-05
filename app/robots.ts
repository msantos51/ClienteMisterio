/*
 * DESCRIÇÃO DO FICHEIRO: Define políticas de indexação para motores de busca, protegendo áreas técnicas e privadas.
 */

import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/o-curso", "/contact", "/termos-e-condicoes", "/privacidade", "/login"],
      disallow: ["/api", "/api-docs", "/dashboard", "/curso", "/account", "/checkout", "/reset-password", "/forgot-password"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

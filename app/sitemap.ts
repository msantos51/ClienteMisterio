/*
 * DESCRIÇÃO DO FICHEIRO: Gera sitemap.xml dinâmico com as páginas públicas para apoiar SEO do site.
 */

import type { MetadataRoute } from "next";

const siteUrl = process.env.APP_BASE_URL?.trim() || "https://clientemisterio.onrender.com";

const publicPaths = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/o-curso", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/login", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/account", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/termos-e-condicoes", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

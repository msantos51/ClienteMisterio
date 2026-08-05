/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `next.config.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  async redirects() {
    // Rotas normalizadas para pt-PT (ver ponto 27 do plano de SEO): os
    // caminhos antigos passam a 301 permanente para o novo endereço.
    return [
      { source: "/about", destination: "/sobre", permanent: true },
      { source: "/contact", destination: "/contactos", permanent: true },
      { source: "/login", destination: "/entrar", permanent: true },
      { source: "/account", destination: "/criar-conta", permanent: true },
      { source: "/registo", destination: "/criar-conta", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

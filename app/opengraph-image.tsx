/*
 * DESCRIÇÃO DO FICHEIRO: Imagem Open Graph 1200x630 gerada dinamicamente
 * (next/og) para a home e como fallback de qualquer rota sem imagem própria.
 * Sem dependências novas — usa a API nativa do Next.js.
 */

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cliente Mistério — Curso online em Portugal";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#5a3dc7",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
          Cliente Mistério
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          <span>Avalia lojas.</span>
          <span>Recebe dinheiro.</span>
        </div>
        <div style={{ fontSize: 32, marginTop: 32, opacity: 0.9 }}>
          O curso de Cliente Mistério em Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}

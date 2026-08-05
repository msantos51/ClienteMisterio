/*
 * DESCRIÇÃO DO FICHEIRO: Imagem Open Graph 1200x630 para /o-curso, com o
 * preço do curso — gerada dinamicamente (next/og), sem dependências novas.
 */

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "O Curso de Cliente Mistério — 10 módulos + certificado, 24,99€";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#5a3dc7",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
            Cliente Mistério
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, marginTop: 24, lineHeight: 1.05 }}>
            O Curso de Cliente Mistério
          </div>
          <div style={{ fontSize: 30, marginTop: 24, opacity: 0.9 }}>
            10 módulos + certificado · Casos reais · Quiz por módulo
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>24,99€</div>
          <div style={{ fontSize: 26, opacity: 0.85 }}>pagamento único · acesso vitalício</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

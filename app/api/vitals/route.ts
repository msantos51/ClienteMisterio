/*
 * DESCRIÇÃO DO FICHEIRO: Recebe as métricas de Core Web Vitals enviadas por
 * app/components/WebVitals.tsx (Fase 3, ponto 35). Regista-as nos logs do
 * servidor para diagnóstico de performance em produção — sem tabela nova
 * na base de dados, para não introduzir uma migração sem uso confirmado.
 */

import { NextResponse } from "next/server";

type VitalsPayload = {
  id?: string;
  name?: string;
  value?: number;
  rating?: string;
  navigationType?: string;
  page?: string;
};

const knownMetrics = new Set(["TTFB", "FCP", "LCP", "FID", "CLS", "INP"]);

export async function POST(request: Request) {
  let payload: VitalsPayload;

  try {
    payload = (await request.json()) as VitalsPayload;
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  if (
    typeof payload.name !== "string" ||
    !knownMetrics.has(payload.name) ||
    typeof payload.value !== "number"
  ) {
    return new NextResponse(null, { status: 400 });
  }

  console.log("[web-vitals]", {
    name: payload.name,
    value: Math.round(payload.value * 100) / 100,
    rating: payload.rating,
    page: payload.page,
    navigationType: payload.navigationType,
  });

  return new NextResponse(null, { status: 204 });
}

/*
 * DESCRIÇÃO DO FICHEIRO: Instrumentação de Core Web Vitals (Fase 3, ponto
 * 35). Usa o hook nativo do Next.js (que já embrulha a biblioteca
 * `web-vitals`, sem dependência nova) e envia cada métrica para
 * /api/vitals via sendBeacon — não bloqueia a navegação nem falha
 * visivelmente se o pedido não chegar a horas.
 */

"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify({
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      navigationType: metric.navigationType,
      page: window.location.pathname,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/vitals", body);
    } else {
      fetch("/api/vitals", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  });

  return null;
}

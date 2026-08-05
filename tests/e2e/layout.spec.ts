/*
 * DESCRIÇÃO DO FICHEIRO: Teste de regressão do bug de layout da Fase 0
 * (ponto 3): garante que nenhum texto fica cortado pelo rodapé e que não
 * existe scrollbar interna, em três resoluções de referência.
 */

import { test, expect } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 360, height: 640 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const routes = ["/", "/o-curso", "/faq", "/contactos"];

for (const viewport of viewports) {
  for (const route of routes) {
    test(`${route} @ ${viewport.name} (${viewport.width}x${viewport.height}): rodapé só aparece no fim, sem scroll interno`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(route);

      // O rodapé é um elemento normal do fluxo (não fixed/sticky) e tem de
      // estar visível ao fazer scroll até ao fim do documento. Espera a
      // hidratação assentar antes de interagir, para não apanhar o
      // elemento a meio de uma re-renderização.
      const footer = page.locator("footer");
      await expect(footer).toBeAttached();
      await footer.scrollIntoViewIfNeeded();
      await expect(footer).toBeVisible();

      // Nenhum elemento interno (main, secções) deve ter a sua própria
      // scrollbar vertical — o scroll é sempre da página.
      const internalScrollers = await page.evaluate(() => {
        const candidates = Array.from(document.querySelectorAll("main, main > *, section"));
        return candidates
          .filter((el) => {
            const style = window.getComputedStyle(el);
            return (
              (style.overflowY === "auto" || style.overflowY === "scroll") &&
              el.scrollHeight > el.clientHeight + 1
            );
          })
          .map((el) => el.className);
      });

      expect(internalScrollers).toEqual([]);

      // O rodapé tem de estar depois do último bloco de conteúdo do <main>,
      // nunca sobreposto a ele.
      const footerBox = await footer.boundingBox();
      const mainBox = await page.locator("main").boundingBox();
      expect(footerBox).not.toBeNull();
      expect(mainBox).not.toBeNull();
      if (footerBox && mainBox) {
        expect(footerBox.y).toBeGreaterThanOrEqual(mainBox.y + mainBox.height - 1);
      }
    });
  }
}

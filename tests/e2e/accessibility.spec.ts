/*
 * DESCRIÇÃO DO FICHEIRO: Testes de acessibilidade (Fase 7, pontos 60-61):
 * skip link, navegação por teclado no menu, e axe-core em todas as rotas
 * públicas (zero violações críticas/sérias).
 */

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const publicRoutes = [
  "/",
  "/o-curso",
  "/faq",
  "/sobre",
  "/contactos",
  "/termos-e-condicoes",
  "/privacidade",
  "/cookies",
  "/entrar",
  "/criar-conta",
];

test.describe("Skip link", () => {
  test("é o primeiro elemento focável e aponta para o conteúdo", async ({ page }) => {
    await page.goto("/");
    // Garante que é o documento (e não o browser) que tem o foco antes do
    // primeiro Tab — evita falsos negativos em Chrome headless.
    await page.evaluate(() => document.body.focus());
    await page.keyboard.press("Tab");

    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#conteudo");

    await page.keyboard.press("Enter");
    await expect(page.locator("#conteudo")).toBeVisible();
  });
});

test.describe("Menu principal (mobile)", () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test("abre com o botão, fecha com Escape e devolve o foco", async ({ page }) => {
    await page.goto("/");

    // Seletor estável: o aria-label muda dinamicamente ("Abrir" <-> "Fechar")
    // consoante o estado, por desenho — não pode ser usado como localizador.
    const toggle = page.locator(".menu-toggle-button");
    await expect(toggle).toHaveAttribute("aria-label", "Abrir menu principal");
    await toggle.click();

    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation", { name: "Menu principal mobile" })).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
  });

  test("fecha ao clicar fora", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Abrir menu principal" }).click();
    await expect(page.getByRole("navigation", { name: "Menu principal mobile" })).toBeVisible();

    await page.mouse.click(10, 10);

    await expect(page.getByRole("navigation", { name: "Menu principal mobile" })).toBeHidden();
  });
});

for (const route of publicRoutes) {
  test(`axe: ${route} não tem violações críticas ou sérias`, async ({ page }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page })
      .include("body")
      .analyze();

    const seriousOrCritical = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );

    expect(
      seriousOrCritical,
      seriousOrCritical.map((v) => `${v.id}: ${v.description}`).join("\n")
    ).toEqual([]);
  });
}

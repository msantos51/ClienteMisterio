/*
 * DESCRIÇÃO DO FICHEIRO: Testes do formulário de contacto (Fase 7, ponto
 * 60): validação nativa, envio com sucesso e com erro, e anúncio por
 * aria-live. Intercepta /api/contact para não depender de base de dados.
 */

import { test, expect } from "@playwright/test";

test.describe("Formulário de contacto", () => {
  test("impede o envio com campos obrigatórios vazios (validação nativa)", async ({ page }) => {
    await page.goto("/contactos");

    const emailInput = page.locator("#contact-email");
    await page.locator("#contact-name").fill("Ana Teste");
    // Deixa o email vazio propositadamente.
    await page.getByRole("button", { name: /enviar mensagem/i }).click();

    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValid).toBe(false);
  });

  test("mostra mensagem de sucesso numa região aria-live", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Mensagem enviada com sucesso!", reference: "TEST-1" }),
      });
    });

    await page.goto("/contactos");
    await page.locator("#contact-name").fill("Ana Teste");
    await page.locator("#contact-email").fill("ana@example.com");
    await page.locator("#contact-subject").fill("Dúvida sobre o curso");
    await page.locator("#contact-message").fill("Mensagem de teste automatizado.");

    const statusRegion = page.locator('[role="status"][aria-live="polite"]');
    await page.getByRole("button", { name: /enviar mensagem/i }).click();

    await expect(statusRegion).toContainText("Mensagem enviada com sucesso!");
  });

  test("mostra erro sem perder o texto escrito", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Não foi possível enviar a sua mensagem." }),
      });
    });

    await page.goto("/contactos");
    await page.locator("#contact-name").fill("Ana Teste");
    await page.locator("#contact-email").fill("ana@example.com");
    await page.locator("#contact-subject").fill("Dúvida sobre o curso");
    await page.locator("#contact-message").fill("Mensagem que não se pode perder.");

    await page.getByRole("button", { name: /enviar mensagem/i }).click();

    await expect(page.locator('[role="status"][aria-live="polite"]')).toContainText(
      "Não foi possível enviar a sua mensagem."
    );
    // O texto escrito continua no formulário — não há reset em caso de erro.
    await expect(page.locator("#contact-message")).toHaveValue("Mensagem que não se pode perder.");
  });
});

test.describe("Acordeão da FAQ", () => {
  test("aria-expanded e aria-controls ligam pergunta e painel", async ({ page }) => {
    await page.goto("/faq");

    const firstButton = page.locator('[id^="faq-question-"]').first();
    const panelId = await firstButton.getAttribute("aria-controls");
    expect(panelId).toBeTruthy();

    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await firstButton.click();
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    const panel = page.locator(`#${panelId}`);
    await expect(panel).toHaveAttribute("role", "region");
  });
});

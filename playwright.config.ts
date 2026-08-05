/*
 * DESCRIÇÃO DO FICHEIRO: Configuração do Playwright para os testes E2E
 * (Fase 7 do plano de acessibilidade/SEO). Sobe o servidor de produção
 * (`npm run build && npm start`) e corre os testes contra localhost.
 */

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    // Evita que o axe-core capture cores a meio de transições/animações
    // (ex.: fadeIn dos cartões de formulário) — o site já respeita
    // prefers-reduced-motion nativamente (ver globals.css).
    contextOptions: { reducedMotion: "reduce" },
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium",
        },
      },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});

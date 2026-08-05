/*
 * DESCRIÇÃO DO FICHEIRO: Testes de contraste automatizados sobre os tokens
 * de cor (Fase 7, ponto 62) — em vez de verificar apenas o texto realmente
 * renderizado nas páginas (isso já é feito pelo axe-core em
 * accessibility.spec.ts), lê os valores reais das CSS custom properties
 * definidas em app/globals.css e calcula o rácio de contraste WCAG entre
 * os pares texto/fundo documentados no próprio ficheiro. Isto impede que
 * volte a entrar, por exemplo, texto branco sobre o roxo #7c5cff (ver
 * ponto 8 do plano) sem que nenhuma página que use esse par específico
 * precise de existir para o apanhar.
 */

import { test, expect, type Page } from "@playwright/test";

const AA_NORMAL = 4.5;
const AA_LARGE = 3;

const getToken = async (page: Page, name: string) => {
  const value = await page.evaluate(
    (tokenName) => getComputedStyle(document.documentElement).getPropertyValue(tokenName).trim(),
    name
  );
  expect(value, `token ${name} devia estar definido`).not.toBe("");
  return value;
};

// Resolve cores sólidas (hex/rgb) lidas do browser para [r,g,b].
const toRgb = (color: string): [number, number, number] => {
  const hexMatch = color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    const int = parseInt(full, 16);
    return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
  }
  const rgbMatch = color.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const [r, g, b] = rgbMatch[1].split(",").map((n) => parseFloat(n.trim()));
    return [r, g, b];
  }
  throw new Error(`Cor não reconhecida: ${color}`);
};

const relativeLuminance = ([r, g, b]: [number, number, number]) => {
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const [rl, gl, bl] = [channel(r), channel(g), channel(b)];
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
};

const contrastRatio = (fg: string, bg: string) => {
  const l1 = relativeLuminance(toRgb(fg));
  const l2 = relativeLuminance(toRgb(bg));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};

// Pares [texto, fundo, rácio mínimo, descrição] — documentados nos
// comentários de app/globals.css junto à definição de cada token.
const pairsToCheck: [string, string, number, string][] = [
  ["--on-brand", "--surface-brand", AA_NORMAL, "texto principal sobre a superfície roxa"],
  ["--on-brand-2", "--surface-brand", AA_NORMAL, "corpo secundário sobre a superfície roxa"],
  ["--on-brand-3", "--surface-brand", AA_NORMAL, "labels/hints sobre a superfície roxa"],
  ["--on-invert", "--panel-invert-bg", AA_NORMAL, "texto principal sobre painéis invertidos (formulários, dashboard)"],
  ["--on-invert-2", "--panel-invert-bg", AA_NORMAL, "corpo sobre painéis invertidos"],
  ["--on-invert-3", "--panel-invert-bg", AA_LARGE, "labels sobre painéis invertidos (texto pequeno em maiúsculas, tratado como UI)"],
  ["--link-accent", "--panel-invert-bg", AA_NORMAL, "links/acentos de marca sobre painéis invertidos"],
  ["--color-success", "--panel-invert-bg", AA_NORMAL, "estado de sucesso sobre painéis invertidos"],
  ["--color-warning", "--panel-invert-bg", AA_NORMAL, "estado de aviso sobre painéis invertidos"],
  ["--color-danger", "--panel-invert-bg", AA_NORMAL, "estado de erro sobre painéis invertidos"],
];

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`Contraste dos tokens de cor (${colorScheme})`, () => {
    test.use({ colorScheme });

    for (const [fgToken, bgToken, minRatio, description] of pairsToCheck) {
      test(`${fgToken} sobre ${bgToken} cumpre ${minRatio}:1 — ${description}`, async ({ page }) => {
        await page.goto("/");

        const fg = await getToken(page, fgToken);
        const bg = await getToken(page, bgToken);
        const ratio = contrastRatio(fg, bg);

        expect(
          ratio,
          `${fgToken} (${fg}) sobre ${bgToken} (${bg}) em modo ${colorScheme}: ${ratio.toFixed(2)}:1, mínimo exigido ${minRatio}:1`
        ).toBeGreaterThanOrEqual(minRatio);
      });
    }
  });
}

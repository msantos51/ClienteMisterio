# Redesign da Landing Page — Instruções de PR

Este PR substitui a homepage actual (`app/page.tsx`) por um redesign editorial focado em conversão.

## Ficheiros alterados / criados

```
app/
  page.tsx          ← SUBSTITUÍDO
  page.module.css   ← NOVO (CSS scoped, não toca em globals.css)
```

**Só 2 ficheiros.** Não toquei em `globals.css`, `layout.tsx`, `TopNav`, `Footer`, nem em mais nenhum componente. O `CheckoutButton` existente também não é modificado — a lógica do Stripe está replicada inline no `page.tsx` (componente `BuyButton`) para evitar conflitos de estilo.

## O que muda visualmente

- **Hero** asimétrico (texto + mockup tangível de uma missão + cartão de módulo)
- **Strip de stats** sem fundo de card (mais confiante)
- **Grid "O que vais avaliar"** — 6 categorias com pagamento típico
- **Currículo dos 10 módulos** num bloco escuro com numeração editorial em itálico (Basenji)
- **Tabela de ganhos honesta** por tipo de missão
- **Como funciona** em zigzag editorial (não 4 cards iguais)
- **Testemunho destacado** + 2 mais pequenos (não 3 iguais)
- **FAQ** com 7 objeções comuns (acordeão)
- **CTA final escuro** com efeitos radiais
- **Sticky buy-bar** que aparece no scroll

## Como aplicar

### Passo 1 — Criar branch

```bash
git checkout -b redesign/landing-page
```

### Passo 2 — Copiar os 2 ficheiros

A partir desta pasta `pr/`, copia para o teu repo:

```
pr/app/page.tsx          →  app/page.tsx          (SUBSTITUI)
pr/app/page.module.css   →  app/page.module.css   (NOVO)
```

### Passo 3 — Testar localmente

```bash
npm run dev
```

Abre `http://localhost:3000` e verifica:
- O hero rende com os 2 mock cards visíveis (não colapsados)
- Os botões "Comprar agora" funcionam (vão para Stripe se autenticado, senão para `/login?checkout=1`)
- O sticky buy-bar aparece quando scrollas para baixo
- A FAQ abre/fecha
- Mobile (≤ 720px) reorganiza tudo numa coluna

### Passo 4 — Commit + Push + PR

```bash
git add app/page.tsx app/page.module.css
git commit -m "redesign(home): editorial layout focado em conversão"
git push origin redesign/landing-page
```

Depois abre o PR no GitHub UI: https://github.com/msantos51/ClienteMisterio/compare/main...redesign/landing-page

## Dependências externas

**Nada novo.** O redesign usa só:
- Tailwind 4 (já tens) — apenas para estrutura básica em alguns lugares
- CSS Modules (built-in do Next.js)
- Fontes já carregadas: Google Sans (CDN em globals.css), Basenji (font-face em globals.css)
- Variável `--accent` (#22a094) já definida em globals.css

## Notas de design / decisões

1. **Sem i18n por agora.** O texto está hard-coded em PT. Para adicionar EN depois, basta extrair as strings para `t.home.*` no `LanguageContext`.

2. **CSS Module em vez de globals.css.** Mantém o scope local e evita conflitos com as regras globais agressivas que tens (ex.: `button { background: #22a094 ... }` no globals.css). O `.page button { all: unset }` no topo do CSS module faz o reset apenas dentro desta página.

3. **Replicação do `CheckoutButton`.** O componente `<BuyButton>` dentro do `page.tsx` replica a lógica de auth + Stripe payment link. Se preferires reusar o componente original, podes adicionar uma `variant="unstyled"` ao `CheckoutButton.tsx` que ignora `site-pill-button` — mas isso obriga a mais um ficheiro no PR. Como está, o PR fica em 2 ficheiros.

4. **Acessibilidade.** Botões de FAQ têm `aria-expanded`; SVGs decorativos têm `aria-hidden`; sticky buy-bar tem `aria-hidden` quando escondida.

5. **Performance.** O scroll listener é `passive: true`. Não há `requestAnimationFrame` porque o trabalho por evento é mínimo (1 getBoundingClientRect).

## Rollback rápido

Se algo correr mal:

```bash
git checkout main -- app/page.tsx
rm app/page.module.css
```

E voltas à versão actual.

---

## Próximos passos (não bloqueantes)

- [ ] Adicionar tradução EN (extrair strings para `t.home.*`)
- [ ] Substituir mock card no hero por screenshot real de uma missão dentro do dashboard
- [ ] Adicionar logos de marcas avaliadas (banca, hotelaria) à secção de categorias
- [ ] A/B testar o preço no buy-bar (24,99€ vs. 64,99€ → 24,99€)

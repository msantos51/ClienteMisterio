# STYLEGUIDE — Cliente Mistério

Guia rápido do sistema de design do site. Serve para manter consistência
entre páginas e para orientar quem adicionar componentes novos.

## 1. Tokens

Fonte única: `app/globals.css` (`:root`). Nunca uses valores de cor,
espaçamento ou raio soltos num CSS Module — usa sempre a variável.

### Cor

| Token | Valor | Uso |
|---|---|---|
| `--surface-brand` | `#5a3dc7` | Fundo principal do site (roxo escuro — ≥7:1 com texto branco) |
| `--surface-brand-alt` | `#4d34b0` | Fundo alternado entre secções |
| `--color-red` | `#6a4ade` | Acento roxo sobre fundos claros/painéis brancos (≥5,8:1 nos dois sentidos) — **nunca** uses como superfície de página inteira |
| `--color-white` / `--color-black` | — | Texto/painéis invertidos e rodapé |
| `--on-brand`, `--on-brand-2`, `--on-brand-3` | brancos opacos | Texto sobre `--surface-brand`, por ordem decrescente de ênfase — nunca `rgba(255,255,255,x)` solto |
| `--on-invert`, `--on-invert-2`, `--on-invert-3` | cinzentos quase-pretos | Texto sobre painéis brancos (`.on-light`) |

Regra: qualquer bloco branco (formulários, cartões de preço) aplica a
classe `.on-light`, que troca automaticamente todos os tokens de
texto/linha/botão para a escala clara — nunca declares cor a direito
dentro desses blocos.

⚠️ Se testares uma cor nova sobre `--surface-brand` ou sobre um painel
translúcido (`rgba(255,255,255,.05–.14)`), confirma o contraste
**depois** do blend — um painel translúcido clareia o fundo efetivo e
pode empurrar um texto que "parecia OK" para baixo de 4,5:1 (ver
`tests/e2e/accessibility.spec.ts`, que testa isto com axe-core).

### Espaçamento

Escala de 8px: `--sp-xs` (8) a `--sp-5xl` (80). Não uses valores em `px`
soltos para `margin`/`padding` de layout — só a escala.

### Raios

`--radius-xs` a `--radius-pill`. O desenho é tipográfico, não
arredondado — a escala é propositadamente curta.

## 2. Breakpoints

Quatro valores, mobile-first: **640 / 768 / 1024 / 1280**. Não introduzas
`max-width` avulsos (ex.: 720, 760, 860, 980) — se precisares de um
ponto de quebra, primeiro tenta resolver com `clamp()`/grid responsivo;
só uses `@media` nestes quatro valores.

## 3. Quando usar Tailwind vs. CSS Modules

- **Tailwind**: utilitários de layout genéricos (`flex`, `grid`, `gap-*`,
  `px-*`, posicionamento, breakpoints `sm:`/`lg:`). Rápido, sem risco de
  duplicação.
- **CSS Modules** (`page.module.css`): tudo o que é específico de uma
  página/componente — tipografia de hero, cartões com pseudo-elementos,
  animações, grelhas complexas. Usa sempre os tokens do passo 1, nunca
  valores soltos.
- Nunca dupliques a mesma regra visual em dois module.css — se duas
  páginas partilham um padrão (ex.: layout de documento legal em
  `/termos-e-condicoes`, `/privacidade`, `/cookies`), copia o
  `page.module.css` de origem e mantém os nomes de classe iguais, para
  ficar óbvio que é o mesmo padrão.

## 4. Semântica HTML

- Um único `<main>` por documento (já vem do `AppShell`) — páginas nunca
  devem renderizar o seu próprio `<main>`.
- `<header>`/`<section>` podem repetir-se; `<main>` não.
- Listas de itens → `<ul>`/`<ol>`/`<li>`, nunca `<div>` empilhados.
- Perguntas de FAQ / cláusulas legais → `<h2>`/`<h3>` reais dentro do
  elemento interativo, não `<p>`/`<div>` com CSS a simular um título.
- Texto que só existe para leitura (parágrafos de corpo) → `<p>`, não
  `<div>` ou `<span>` soltos.

## 5. Checklist de acessibilidade para componentes novos

Antes de dar como pronto um componente novo, confirma:

- [ ] Todo o texto tem ≥4,5:1 de contraste com o fundo **efetivo**
      (conta os painéis translúcidos por cima) — corre
      `npm run test:e2e` (axe-core) para confirmar.
- [ ] `:focus-visible` visível (herda do sistema global — não uses
      `outline: none` sem substituto).
- [ ] Alvo clicável ≥24×24px (mínimo legal) e idealmente ≥44×44px.
- [ ] Se for interativo e não for `<button>`/`<a>` nativo, tem `role`,
      `aria-*` e comportamento de teclado corretos (Enter/Space, Escape
      a fechar overlays, focus trap se for um modal/menu).
- [ ] SVG puramente decorativo → `aria-hidden="true"`; SVG informativo
      → `<title>` + `role="img"`.
- [ ] Nenhum texto com glifos de seta crus (`←`/`→`) em labels — só em
      SVGs com `aria-hidden`.
- [ ] Anima com `transition`/`animation`? Confirma que
      `@media (prefers-reduced-motion: reduce)` (já global) o desativa.
- [ ] Testado com teclado apenas (Tab/Shift+Tab/Escape), sem rato.

## 6. Dados de marketing / prova social

Nunca inventes números de alunos, avaliações, preços riscados ou
afirmações de exclusividade ("o único curso..."). Se não houver dado
real e verificável, ou remove a afirmação ou marca-a explicitamente
como `[TODO: ...]` no código — nunca a publiques como se fosse real.

## 7. Rotas

URLs em pt-PT (`/sobre`, `/contactos`, `/entrar`, `/criar-conta`, não os
equivalentes em inglês). Uma rota nova pública precisa de:
`layout.tsx` com `title`/`description`/`alternates.canonical`, entrada em
`app/sitemap.ts`, e entrada em `app/robots.ts` (`allow` se pública,
`disallow` se privada/autenticada).

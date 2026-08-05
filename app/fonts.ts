/*
 * DESCRIÇÃO DO FICHEIRO: Tipografia do site.
 * Creato Display — grotesca geométrica, moderna e sóbria — é a única família
 * usada em toda a aplicação. Os ficheiros são locais (public/fonts), pelo que
 * a compilação não depende de nenhum serviço externo de fontes.
 *
 * `next/font/local` gera a variável CSS `--font-creato`, consumida pelo token
 * `--font-body` em app/globals.css.
 */

import localFont from "next/font/local";

export const creatoDisplay = localFont({
  src: [
    {
      // WOFF2, subset latin + diacríticos pt (ver public/fonts/README.md
      // para regenerar a partir dos .otf originais).
      path: "../public/fonts/CreatoDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CreatoDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      // O Bold cobre também os pesos 600/700/800 pedidos pelos módulos CSS,
      // evitando que o browser sintetize um falso negrito.
      path: "../public/fonts/CreatoDisplay-Bold.woff2",
      weight: "600 900",
      style: "normal",
    },
  ],
  variable: "--font-creato",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

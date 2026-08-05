/*
 * DESCRIÇÃO DO FICHEIRO: Página 404 personalizada em português — mantém
 * cabeçalho/rodapé (via RootLayout/AppShell) e sugere caminhos alternativos.
 */

import Link from "next/link";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="full-section container-sm mx-auto flex flex-col items-center gap-6 px-6 py-24 text-center">
      <p className="text-label">Erro 404</p>
      <h1 className="page-title">Esta página não existe.</h1>
      <p className="text-body-lg max-w-[52ch]">
        O endereço que procuras pode ter mudado ou nunca ter existido. Aqui tens alguns
        caminhos úteis para continuares.
      </p>

      <div className="hero-buttons">
        <Link href="/o-curso" className="button primary">
          Ver o curso
        </Link>
        <Link href="/faq" className="button secondary">
          FAQ
        </Link>
        <Link href="/contactos" className="button secondary">
          Contactos
        </Link>
      </div>

      <Link href="/" className="form-link mt-4">
        Voltar à página inicial
      </Link>
    </div>
  );
}

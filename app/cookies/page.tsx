/*
 * DESCRIÇÃO DO FICHEIRO: Política de Cookies. O site usa apenas chaves
 * funcionais em localStorage (sem analytics nem scripts de terceiros), pelo
 * que basta informação clara — sem banner de consentimento (ver ponto 53).
 * Se um dia adicionares analytics, o consentimento tem de ser prévio,
 * granular e recusável com o mesmo número de cliques.
 */

import styles from "./page.module.css";

const sections = [
  {
    number: "01",
    title: "O que são estas chaves de armazenamento",
    content:
      "Este site não usa cookies de rastreio nem scripts de terceiros (analytics, publicidade, redes sociais). Usa apenas armazenamento local do browser (localStorage) para guardar preferências e estado técnico — nunca para seguir a tua atividade noutros sites.",
  },
  {
    number: "02",
    title: "Chaves funcionais utilizadas",
    content:
      "vp_preferences (preferências de conta, como receber newsletter/notificações) e clientemisterio_language (idioma escolhido, PT/EN). A autenticação em si é feita por um cookie de sessão httpOnly, que o JavaScript do browser não consegue ler nem alterar.",
  },
  {
    number: "03",
    title: "Porque não pedimos consentimento",
    content:
      "Nos termos da Diretiva ePrivacy e das orientações da CNPD, cookies e armazenamento estritamente necessários ao funcionamento do serviço (sessão, preferências) estão isentos de consentimento prévio. Não usamos nenhum cookie ou script não essencial.",
  },
  {
    number: "04",
    title: "Como gerir ou apagar estes dados",
    content:
      "Podes limpar o armazenamento local a qualquer momento nas definições do teu browser (dados do site / cookies e dados de site). Terminar sessão remove automaticamente as chaves de sessão.",
  },
  {
    number: "05",
    title: "Alterações futuras",
    content:
      "Se no futuro adicionarmos analytics ou outros scripts não essenciais, o consentimento será pedido antecipadamente, com opções granulares e a possibilidade de recusar com o mesmo número de cliques que aceitar. Esta página será atualizada em conformidade.",
  },
];

export default function CookiesPage() {
  return (
    <div className={styles.page}>
      <header className={`${styles.hero} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Armazenamento local</div>
          <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>Política de Cookies</h1>
          <div className={styles.heroDate}>
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </div>
        </div>
      </header>

      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.sections}>
            {sections.map((section) => (
              <div key={section.number} className={styles.termSection}>
                <div className={styles.termHeader}>
                  <div className={styles.termNum}>{section.number}</div>
                  <h2 className={styles.termTitle}>{section.title}</h2>
                </div>
                <p className={styles.termContent}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

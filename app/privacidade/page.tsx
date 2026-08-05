/*
 * DESCRIÇÃO DO FICHEIRO: Política de privacidade (RGPD). Dados de
 * identificação legal da empresa ainda não confirmados aparecem marcados
 * com TODO — substituir assim que existirem valores reais.
 */

import styles from "./page.module.css";

const sections = [
  {
    number: "01",
    title: "Responsável pelo tratamento",
    content:
      "[TODO: denominação social], com sede em [TODO: morada legal da empresa] e contacto [TODO: email de contacto real], é responsável pelo tratamento dos dados pessoais recolhidos através deste site.",
  },
  {
    number: "02",
    title: "Que dados recolhemos",
    content:
      "Recolhemos os dados que fornece diretamente: nome, email e password (ao criar conta), dados de contacto submetidos no formulário de contacto, e dados de progresso no curso (módulos concluídos, resultados de quiz, certificado). Não recolhemos dados de pagamento — estes são processados diretamente pela Stripe.",
  },
  {
    number: "03",
    title: "Finalidades e bases legais",
    content:
      "Tratamos os seus dados para: (a) criar e gerir a sua conta e dar acesso ao curso — execução de contrato; (b) processar pagamentos através da Stripe — execução de contrato; (c) responder a pedidos de contacto — interesse legítimo; (d) cumprir obrigações legais e fiscais — obrigação legal.",
  },
  {
    number: "04",
    title: "Prazos de conservação",
    content:
      "Os dados da conta são conservados enquanto a conta estiver ativa. Dados de faturação são conservados pelo prazo legal aplicável em Portugal (geralmente 10 anos, nos termos do Código Comercial e legislação fiscal). Pode pedir a eliminação da sua conta a qualquer momento, sujeito às obrigações legais de conservação.",
  },
  {
    number: "05",
    title: "Subcontratantes",
    content:
      "Partilhamos dados estritamente necessários com: Stripe (processamento de pagamentos), o fornecedor de alojamento da aplicação, e o fornecedor de envio de emails transacionais. Todos os subcontratantes estão contratualmente obrigados a proteger os seus dados nos termos do RGPD.",
  },
  {
    number: "06",
    title: "Transferências internacionais",
    content:
      "Alguns subcontratantes (nomeadamente a Stripe) podem processar dados fora do Espaço Económico Europeu. Nesses casos, garantimos que a transferência assenta em mecanismos reconhecidos pelo RGPD, como Cláusulas Contratuais-Tipo aprovadas pela Comissão Europeia.",
  },
  {
    number: "07",
    title: "Os seus direitos",
    content:
      "Tem direito a aceder, retificar, apagar e portar os seus dados, a opor-se e a limitar o tratamento, e a retirar o consentimento a qualquer momento sem afetar a licitude do tratamento anterior. Para exercer estes direitos, contacte-nos através de [TODO: email de contacto real]. Tem também direito a apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.",
  },
  {
    number: "08",
    title: "Cookies",
    content:
      "Para informação sobre os cookies e chaves de armazenamento local utilizados neste site, consulte a nossa Política de Cookies.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className={styles.page}>
      <header className={`${styles.hero} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Proteção de dados</div>
          <h1 className={`${styles.displayLg} ${styles.heroTitle}`}>Política de Privacidade</h1>
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import { courseModules as courseData } from "../curso/courseData";
import { expandedModuleData } from "../curso/courseDataExpanded";
import { useCourseAccess } from "@/app/lib/useCourseAccess";
import { buildCheckoutUrl } from "@/app/lib/checkoutLink";
import styles from "./page.module.css";

type SessionResponse = {
  authenticated: boolean;
  user?: { id: string; email: string };
};

const CheckIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const LockIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

function BuyButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const router = useRouter();
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  const { loading, hasAccess, nextModuleId } = useCourseAccess();

  const handleCheckout = async () => {
    if (!paymentLink) return;
    // A sessão real vive no cookie httpOnly — confirma no servidor antes de
    // decidir entre ir para o Stripe ou pedir login.
    try {
      const response = await fetch("/api/auth/session", { cache: "no-store" });
      const data = response.ok ? ((await response.json()) as SessionResponse) : { authenticated: false };
      if (data.authenticated && data.user) { window.location.href = buildCheckoutUrl(paymentLink, data.user); }
      else { router.push("/entrar?checkout=1"); }
    } catch {
      router.push("/entrar?checkout=1");
    }
  };

  // Quem já tem acesso ao curso não precisa de voltar a comprar — leva
  // diretamente ao leitor de módulos.
  if (!loading && hasAccess) {
    return (
      <Link href="/curso" className={className}>
        {nextModuleId ? `Continuar no módulo ${nextModuleId}` : "Continuar o curso"}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleCheckout} disabled={!paymentLink} className={className}>
      {children}
    </button>
  );
}

/* Passos "Como funciona" — vindos da antiga página inicial. */
const howItWorks = [
  { n: "Passo 01", t: "Compras uma vez", d: "Pagamento único de 24,99 €. Acesso imediato e vitalício, em qualquer dispositivo, com atualizações incluídas." },
  { n: "Passo 02", t: "Aprendes o método", d: "Dez módulos com casos reais, formulários-tipo e um quiz no fim de cada um para fixares o essencial." },
  { n: "Passo 03", t: "Registas-te nas plataformas", d: "Damos-te a lista das empresas que operam em Portugal e o guião para criares um perfil que é escolhido." },
  { n: "Passo 04", t: "Aceitas missões e recebes", d: "Escolhes onde, quando e quantas vezes. Cada missão é paga depois de o relatório ser aprovado." },
];

/* Benefit icons */
const benefitIcons = [
  /* Beginners */ (
    <svg key="beginners" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  /* Practical */ (
    <svg key="practical" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  /* Earn */ (
    <svg key="earn" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  /* Career */ (
    <svg key="career" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  /* Tests */ (
    <svg key="tests" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  /* Community */ (
    <svg key="community" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
];

export default function CoursePage() {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: { authenticated: boolean }) => {
        if (!cancelled) setIsLoggedIn(Boolean(data?.authenticated));
      })
      .catch(() => { if (!cancelled) setIsLoggedIn(false); });
    return () => { cancelled = true; };
  }, []);

  const pricingFeatures = [
    t.coursePage.pricingFeature1,
    t.coursePage.pricingFeature2,
    t.coursePage.pricingFeature3,
    t.coursePage.pricingFeature4,
    t.coursePage.pricingFeature5,
  ];

  const benefits = [
    { title: t.coursePage.benefitBeginners, desc: t.coursePage.benefitBeginnersDesc },
    { title: t.coursePage.benefitPractical, desc: t.coursePage.benefitPracticalDesc },
    { title: t.coursePage.benefitEarn, desc: t.coursePage.benefitEarnDesc },
    { title: t.coursePage.benefitCareer, desc: t.coursePage.benefitCareerDesc },
    { title: t.coursePage.benefitTests, desc: t.coursePage.benefitTestsDesc },
    { title: t.coursePage.benefitCommunity, desc: t.coursePage.benefitCommunityDesc },
  ];

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <header className={`${styles.hero} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            {/* Left — copy */}
            <div>
              <div className={styles.eyebrow}>{t.coursePage.badge}</div>
              <h1 className={`${styles.displayLg} ${styles.heroTitle}`}
                dangerouslySetInnerHTML={{ __html: t.coursePage.title }} />
              <p className={`${styles.lead} ${styles.heroSub}`}>
                {t.coursePage.description}
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>10</div>
                  <div className={styles.statLabel}>{t.coursePage.statsModules}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}><em>5–150</em>€</div>
                  <div className={styles.statLabel}>{t.coursePage.statsEarnings}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>∞</div>
                  <div className={styles.statLabel}>{t.coursePage.statsAccess}</div>
                </div>
              </div>
            </div>

            {/* Right — pricing card */}
            <div className={styles.card}>
              <div className={styles.cardBadge}>{t.coursePage.pricingBadge}</div>
              <div className={styles.cardTitle}>{t.coursePage.pricingTitle}</div>
              <div className={styles.cardPriceRow}>
                <span className={styles.cardPrice}>{t.coursePage.pricingPrice}</span>
              </div>
              <div className={styles.cardPayment}>
                {t.coursePage.pricingPayment}
                <span className={styles.lifetimeChip}>
                  <LockIcon size={12} />
                  {t.coursePage.pricingLifetime}
                </span>
              </div>
              <p className={styles.urgencyNote}>{t.coursePage.pricingUrgency}</p>

              <div className={styles.featureList}>
                {pricingFeatures.map((item) => (
                  <div key={item} className={styles.featureItem}>
                    <span className={styles.check}><CheckIcon size={11} /></span>
                    {item}
                  </div>
                ))}
              </div>

              <BuyButton className={`${styles.btn} ${styles.btnDark}`} >
                {t.coursePage.buyButton}
                <ArrowIcon />
              </BuyButton>
              <p className={styles.secureNote}>{t.coursePage.paymentSecure}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          BENEFITS
          ============================================================ */}
      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Vantagens</div>
              <h2 className={styles.displayLg}>{t.coursePage.benefitsTitle}</h2>
            </div>
            <p className={styles.headSub}>
Dez módulos curtos, casos reais e um plano de 30 dias para saíres daqui com a primeira missão marcada.
            </p>
          </div>
          <div className={styles.benefits}>
            {benefits.map((b, i) => (
              <div key={b.title} className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  {benefitIcons[i]}
                </div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTEMUNHOS — removidos: eram exemplos fictícios apresentados
          como avaliações reais de alunos, o que a política do projeto
          proíbe e as regras Omnibus da UE exigem que sejam verificáveis.
          Repor com testemunhos reais, identificados e com a indicação de
          como foram recolhidos (ver ponto 48/58 do plano).
          ============================================================ */}

      {/* ============================================================
          COMO FUNCIONA
          ============================================================ */}
      <section className={`${styles.sectionSteps} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Como funciona</div>
              <h2 className={styles.displayLg}>
                Do carrinho à primeira missão paga.
              </h2>
              <p className={styles.headKicker}>
                Sem agências, sem comissões, sem mensalidades
              </p>
            </div>
            <p className={styles.headSub}>
              Compras uma vez, aprendes ao teu ritmo e candidatas-te diretamente às plataformas. O
              dinheiro da missão é todo teu.
            </p>
          </div>

          <div className={styles.steps}>
            {howItWorks.map((s) => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepDesc}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CURRICULUM
          ============================================================ */}
      <section id="programa" className={`${styles.sectionTight} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.curr}>
            <div className={styles.currInner}>
              <div className={styles.currHead}>
                <div>
                  <div className={`${styles.eyebrow} ${styles.currEyebrow}`}>
                    {t.coursePage.modulesTitle}
                  </div>
                  <h2 className={`${styles.displayLg} ${styles.currDisplay}`}>
                    Do zero à primeira missão <em className={styles.italic}>paga</em>.
                  </h2>
                </div>
                <p className={styles.currSub}>
Teoria paginada, casos reais comentados e checklists. Cada módulo termina com um quiz; no fim recebes o certificado.
                </p>
              </div>

              <div className={styles.modules}>
                {courseData.map((module) => {
                  const expanded = expandedModuleData[module.id as keyof typeof expandedModuleData];
                  return (
                    <div className={styles.module} key={module.id}>
                      <div className={styles.moduleNum}>
                        {String(module.id).padStart(2, "0")}
                      </div>
                      <div className={styles.moduleContent}>
                        <h3 className={styles.moduleTitle}>{module.title}</h3>
                        <p className={styles.moduleSubtitle}>{expanded?.subtitle}</p>
                        <p className={styles.moduleDesc}>{module.description}</p>

                        {/* Expanded Details */}
                        {expanded && (
                          <details className={styles.moduleDetails}>
                            <summary className={styles.moduleSummary}>
                              Ver detalhes e recursos
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </summary>

                            <div className={styles.moduleExpanded}>
                              {/* Duration */}
                              <div className={styles.expandedItem}>
                                <strong>Duração</strong> {expanded.duration}
                              </div>

                              {/* Learning Objectives */}
                              <div className={styles.expandedItem}>
                                <strong>Objetivos de aprendizagem</strong>
                                <ul className={styles.objectivesList}>
                                  {expanded.learningObjectives.map((obj) => (
                                    <li key={obj}>{obj}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Practical Applications */}
                              <div className={styles.expandedItem}>
                                <strong>Aplicações práticas</strong>
                                <ul className={styles.objectivesList}>
                                  {expanded.practicalApplications.map((app) => (
                                    <li key={app}>{app}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Real World Example */}
                              <div className={styles.expandedItem}>
                                <strong>Caso real</strong>
                                <p className={styles.caseExample}>{expanded.realWorldExample}</p>
                              </div>

                              {/* Resources */}
                              <div className={styles.expandedItem}>
                                <strong>Recursos incluídos</strong>
                                <ul className={styles.resourcesList}>
                                  {expanded.resourcesIncluded.map((res) => (
                                    <li key={res}>{res}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </details>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OBJEÇÕES COMUNS — responde às dúvidas mais frequentes de quem
          ainda não decidiu comprar (ponto 50 do plano). Reaproveita só
          factos já estabelecidos noutras secções desta página e na FAQ
          — nada de números novos inventados.
          ============================================================ */}
      <section className={`${styles.section} full-section full-section-scroll`}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}>Antes de decidires</div>
              <h2 className={styles.displayLg}>As dúvidas mais comuns.</h2>
            </div>
            <p className={styles.headSub}>
              Quatro perguntas que quase toda a gente faz antes de começar.{" "}
              <Link href="/faq" style={{ color: "var(--color-white)", fontWeight: 700, textDecoration: "underline" }}>
                Vê a FAQ completa
              </Link>.
            </p>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>Quanto tempo demora o curso?</h3>
              <p className={styles.benefitDesc}>
                Em média cerca de 4 horas, distribuídas pelos 10 módulos. Podes fazê-lo num
                fim de semana ou ao longo de várias semanas — o acesso é vitalício.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>Quanto se ganha por missão?</h3>
              <p className={styles.benefitDesc}>
                Entre 5€ e 150€, consoante o tipo de missão e a plataforma. O curso ensina-te
                a escolher as que compensam o teu tempo.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>Preciso de experiência ou carro?</h3>
              <p className={styles.benefitDesc}>
                Não. O curso começa do zero. Um carro alarga as missões disponíveis fora dos
                grandes centros, mas não é obrigatório.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3 className={styles.benefitTitle}>E se não for para mim?</h3>
              <p className={styles.benefitDesc}>
                Tens 14 dias para pedir reembolso integral, sem questões — sem risco em
                experimentar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA (only shown when not logged in)
          ============================================================ */}
      {!isLoggedIn && (
        <section className={`${styles.section} full-section full-section-scroll`}>
          <div className={styles.wrap}>
            <div className={styles.final}>
              <div className={styles.finalInner}>
                <div className={`${styles.eyebrow} ${styles.finalEyebrow}`}>Pronto para começar</div>
                <h2 className={styles.finalTitle}>
                  Começa a ganhar com <em>cada visita</em>.
                </h2>
                <p className={styles.finalSub}>{t.coursePage.ctaText}</p>
                <div className={styles.finalCta}>
                  <BuyButton className={`${styles.btn} ${styles.btnAccent} ${styles.btnBlock}`}>
                    {t.coursePage.buyButton}
                    <ArrowIcon />
                  </BuyButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

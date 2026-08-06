/*
 * DESCRIÇÃO DO FICHEIRO: Página do curso de Cliente Mistério com conteúdo teórico, questionários e progresso persistente.
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";

import ProgressBar from "@/app/components/ui/ProgressBar";
import type { PublicCourseModule, PublicQuizQuestion as QuizQuestion } from "./courseData";
import type { TheorySupportContent } from "./courseSupportContent";
import { getModuleIcon } from "./moduleIcons";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./page.module.css";

type ModuleProgress = {
  moduleId: number;
  completed: boolean;
  quizScore: number | null;
  quizAnswers: Record<string, number> | null;
};

type ProgressData = {
  modules: ModuleProgress[];
  totalModules: number;
  completedCount: number;
  progressPercent: number;
};

// Conteúdo do módulo tal como servido por GET /api/course/modules — sem
// correctIndex (a pontuação do quiz é sempre calculada no servidor).
type CourseModuleData = PublicCourseModule & { support: TheorySupportContent | null };

type TheoryPage = {
  title: string;
  blocks: string[];
};


/*
 * DESCRIÇÃO DA FUNÇÃO: Distribui o conteúdo teórico em 4 páginas equilibradas
 * para garantir profundidade antes de iniciar o questionário.
 */
const buildBaseTheoryPages = (content: string[], pageTitles: string[]): TheoryPage[] => {
  const totalBasePages = 4;
  const chunkSize = Math.max(1, Math.ceil(content.length / totalBasePages));

  const pages: TheoryPage[] = [];

  for (let pageIndex = 0; pageIndex < totalBasePages; pageIndex += 1) {
    const start = pageIndex * chunkSize;
    const end = start + chunkSize;
    const pageBlocks = content.slice(start, end);

    if (pageBlocks.length === 0) {
      continue;
    }

    pages.push({
      title: pageTitles[pageIndex] ?? `Página ${pageIndex + 1}`,
      blocks: pageBlocks,
    });
  }

  return pages;
};

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function CursoPage() {
  return (
    <Suspense fallback={null}>
      <CursoPageContent />
    </Suspense>
  );
}

function CursoPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();
  const cp = t.coursePlayer;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [modules, setModules] = useState<CourseModuleData[] | null>(null);
  const courseModules = modules ?? [];
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [theoryPage, setTheoryPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizSubmitError, setQuizSubmitError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloadingCertificate, setIsDownloadingCertificate] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [progressLoadError, setProgressLoadError] = useState<string | null>(null);
  const [modulesLoadError, setModulesLoadError] = useState<string | null>(null);

  const moduleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    moduleContentRef.current?.scrollTo({ top: 0 });
  }, [theoryPage, activeModuleId, quizMode]);

  const loadProgress = useCallback(async () => {
    setAccessDenied(false);
    setProgressLoadError(null);

    try {
      // A autenticação vive só no cookie httpOnly (credentials: "include")
      // — sem estado de sessão em localStorage.
      const response = await fetch("/api/course/progress", { credentials: "include" });

      if (response.status === 401) {
        router.push("/entrar");
        return;
      }

      if (response.status === 403) {
        setAccessDenied(true);
        return;
      }

      if (response.ok) {
        const data = (await response.json()) as ProgressData;
        setProgress(data);
        setIsAuthenticated(true);
        return;
      }

      setProgressLoadError(cp.progressLoadError);
    } catch {
      setProgressLoadError(cp.progressLoadError);
    }
  }, [router, cp.progressLoadError]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const loadModules = useCallback(async () => {
    setModulesLoadError(null);

    try {
      // O conteúdo dos módulos e o quiz (sem respostas certas) só é servido a quem
      // tem sessão e curso pago — a verificação de 401/403 já é feita por loadProgress().
      const response = await fetch(`/api/course/modules?lang=${language}`, { credentials: "include" });

      if (response.ok) {
        const data = (await response.json()) as { modules: CourseModuleData[] };
        setModules(data.modules);
        return;
      }

      if (response.status !== 401 && response.status !== 403) {
        setModulesLoadError(cp.progressLoadError);
      }
    } catch {
      setModulesLoadError(cp.progressLoadError);
    }
  }, [language, cp.progressLoadError]);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  /*
   * DESCRIÇÃO DO EFEITO: Bloqueia o scroll da página principal sempre que um módulo
   * está aberto em modo sobreposto (teoria ou questionário), mantendo o foco no conteúdo.
   */
  useEffect(() => {
    if (!activeModuleId) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModuleId]);

  const getModuleProgress = (moduleId: number): ModuleProgress | undefined => {
    return progress?.modules.find((m) => m.moduleId === moduleId);
  };

  const isModuleUnlocked = (moduleId: number): boolean => {
    if (moduleId === 1) return true;
    const previousModule = getModuleProgress(moduleId - 1);
    return previousModule?.completed === true;
  };

  const openModule = (moduleId: number) => {
    if (!isModuleUnlocked(moduleId)) return;
    setActiveModuleId(moduleId);
    setQuizMode(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setTheoryPage(0);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  /*
   * DESCRIÇÃO DO EFEITO: Restaura módulo/página/quiz a partir do URL assim que o
   * progresso chega (só é seguro validar módulos desbloqueados depois disso).
   * Corre uma única vez — depois disso o URL passa a refletir o estado, não o contrário.
   */
  const restoredFromUrlRef = useRef(false);
  useEffect(() => {
    if (restoredFromUrlRef.current || !progress || !modules) return;
    restoredFromUrlRef.current = true;

    const moduleParam = Number(searchParams.get("modulo"));
    if (!moduleParam || !courseModules.some((m) => m.id === moduleParam) || !isModuleUnlocked(moduleParam)) {
      return;
    }

    setActiveModuleId(moduleParam);

    const moduleData = courseModules.find((m) => m.id === moduleParam);
    const quizAvailable = (moduleData?.quiz.length ?? 0) > 0;

    if (searchParams.get("quiz") === "1" && quizAvailable) {
      setQuizMode(true);
      return;
    }

    // Nº real de páginas do módulo (teoria + página premium, se existir) — evita
    // um ecrã em branco quando o parâmetro "pagina" da URL está fora do intervalo.
    const basePageCount = moduleData
      ? moduleData.pages
        ? moduleData.pages.length
        : buildBaseTheoryPages(moduleData.content, cp.theoryPageTitles).length
      : 1;
    const totalPageCount = moduleData?.support ? basePageCount + 1 : basePageCount;

    const pageParam = Number(searchParams.get("pagina"));
    if (pageParam >= 1) {
      setTheoryPage(Math.min(pageParam - 1, Math.max(totalPageCount - 1, 0)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, modules]);

  /*
   * DESCRIÇÃO DO EFEITO: Mantém o URL sincronizado com o módulo/página/quiz atuais,
   * para que o refresh restaure o lugar e o URL seja partilhável.
   */
  useEffect(() => {
    if (!restoredFromUrlRef.current) return;

    const params = new URLSearchParams(searchParams.toString());
    if (activeModuleId) {
      params.set("modulo", String(activeModuleId));
      if (quizMode) {
        params.set("quiz", "1");
        params.delete("pagina");
      } else {
        params.delete("quiz");
        params.set("pagina", String(theoryPage + 1));
      }
    } else {
      params.delete("modulo");
      params.delete("pagina");
      params.delete("quiz");
    }

    const query = params.toString();
    router.replace(query ? `/curso?${query}` : "/curso", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModuleId, quizMode, theoryPage]);

  const selectAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitQuiz = async () => {
    if (!activeModuleId || isSaving) return;

    // A pontuação é sempre calculada no servidor a partir das respostas — o
    // cliente já não tem acesso ao gabarito (ver GET /api/course/modules).
    setIsSaving(true);
    setQuizSubmitError(null);

    try {
      const response = await fetch("/api/course/progress", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId: activeModuleId,
          quizAnswers,
          lang: language,
        }),
      });

      if (!response.ok) {
        setQuizSubmitError(cp.quizSubmitError);
        return;
      }

      const data = (await response.json()) as { quizScore: number; passed: boolean };
      setQuizScore(data.quizScore);
      setQuizSubmitted(true);

      if (data.passed) {
        await loadProgress();
      }
    } catch {
      setQuizSubmitError(cp.quizSubmitError);
    } finally {
      setIsSaving(false);
    }
  };

  /*
   * DESCRIÇÃO DA FUNÇÃO: Marca o módulo 11 como concluído e inicia a descarga do certificado PDF personalizado.
   */
  const downloadCertificate = async () => {
    if (isDownloadingCertificate) return;

    setIsDownloadingCertificate(true);

    try {
      await fetch("/api/course/progress", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId: 11,
          quizAnswers: {},
        }),
      });

      const certificateResponse = await fetch("/api/course/certificate", {
        method: "GET",
        credentials: "include",
      });

      if (!certificateResponse.ok) return;

      const pdfBlob = await certificateResponse.blob();
      const objectUrl = URL.createObjectURL(pdfBlob);
      const downloadAnchor = document.createElement("a");
      const contentDisposition = certificateResponse.headers.get("content-disposition");
      const fileNameMatch = contentDisposition?.match(/filename=([^;]+)/i);
      const fileName = fileNameMatch?.[1]?.replace(/\"/g, "").trim() || "certificado.pdf";

      downloadAnchor.href = objectUrl;
      downloadAnchor.download = fileName;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
      URL.revokeObjectURL(objectUrl);

      await loadProgress();
    } catch {
      // Silently fail.
    } finally {
      setIsDownloadingCertificate(false);
    }
  };

  const allQuestionsAnswered = (quiz: QuizQuestion[]): boolean => {
    return quiz.every((q) => quizAnswers[q.id] !== undefined);
  };

  const getOptionClass = (question: QuizQuestion, optionIndex: number): string => {
    // A pontuação (e portanto o correctIndex) só existe no servidor — este ecrã de
    // perguntas só é mostrado antes da submissão, por isso só marca a opção escolhida.
    const classes = [styles.qOpt];
    if (quizAnswers[question.id] === optionIndex) classes.push(styles.qOptSelected);
    return classes.join(" ");
  };

  if (progressLoadError) {
    return (
      <div className={styles.page}>
        <div className={styles.wrap} style={{ padding: "80px 28px", textAlign: "center" }}>
          <p role="alert" className={styles.lead} style={{ marginBottom: 24 }}>{progressLoadError}</p>
          <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => loadProgress()}>
            {cp.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated && !accessDenied) {
    return (
      <div className={styles.page} aria-busy="true" aria-label={cp.verifyingSession}>
        <div className={styles.wrap} style={{ padding: "80px 28px" }}>
          <div
            className={`${styles.progressCard} animate-pulse`}
            style={{ maxWidth: 420, minHeight: 160, margin: "0 auto" }}
          />
        </div>
      </div>
    );
  }

  if (accessDenied) {
    return (
      <div className={styles.page}>
        <div className={styles.wrap} style={{ padding: "80px 28px" }}>
          <div className={styles.eyebrow}>Acesso restrito</div>
          <h1 className={`${styles.display} ${styles.displayLg}`} style={{ marginBottom: 16 }}>
            {cp.courseTitle}
          </h1>
          <p className={styles.lead} style={{ marginBottom: 32 }}>{cp.accessDeniedDesc}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => router.push("/checkout")}>
              {cp.goToPayment}
            </button>
            <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={() => router.push("/dashboard")}>
              {cp.backToDashboard}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (modulesLoadError) {
    return (
      <div className={styles.page}>
        <div className={styles.wrap} style={{ padding: "80px 28px", textAlign: "center" }}>
          <p role="alert" className={styles.lead} style={{ marginBottom: 24 }}>{modulesLoadError}</p>
          <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => loadModules()}>
            {cp.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  if (!modules) {
    return (
      <div className={styles.page} aria-busy="true" aria-label={cp.verifyingSession}>
        <div className={styles.wrap} style={{ padding: "80px 28px" }}>
          <div
            className={`${styles.progressCard} animate-pulse`}
            style={{ maxWidth: 420, minHeight: 160, margin: "0 auto" }}
          />
        </div>
      </div>
    );
  }

  const activeModule = activeModuleId ? courseModules.find((m) => m.id === activeModuleId) : null;
  const activeSupportContent = activeModule ? activeModule.support : null;
  const baseTheoryPages = activeModule
    ? activeModule.pages
      ? activeModule.pages.map((p) => ({ title: p.title, blocks: p.blocks }))
      : buildBaseTheoryPages(activeModule.content, cp.theoryPageTitles)
    : [];
  const premiumTheoryPage = activeSupportContent
    ? {
        title: cp.premiumPageTitle,
        blocks: [] as string[],
      }
    : null;
  const allTheoryPages = premiumTheoryPage ? [...baseTheoryPages, premiumTheoryPage] : baseTheoryPages;
  const currentTheoryPage = allTheoryPages[theoryPage];
  const isLastTheoryPage = theoryPage === allTheoryPages.length - 1;
  const completedCount = progress?.completedCount ?? 0;
  const totalModules = progress?.totalModules ?? 11;
  const progressPercent = progress?.progressPercent ?? 0;

  // Helpers for derived UI state
  const currentMod = !activeModule
    ? courseModules.find((m) => {
        const p = getModuleProgress(m.id);
        return !p?.completed && isModuleUnlocked(m.id);
      })
    : null;

  return (
    <div className={styles.page}>
      {/* ============================================================
          STATE 1 — Module index
          ============================================================ */}
      {!activeModule && (
        <>
          <section className={`${styles.courseHead} full-section full-section-scroll`}>
            <div className={styles.wrap}>
              <div className={styles.courseHeadGrid}>
                <div>
                  <div className={styles.eyebrow}>{cp.completeTraining}</div>
                  <h1 className={`${styles.display} ${styles.displayXl} ${styles.courseHeadTitle}`}>
                    {cp.courseTitle.split(" ").map((w, i, arr) => (
                      <React.Fragment key={i}>
                        {i === arr.length - 1 ? <em>{w}</em> : w}
                        {i < arr.length - 1 ? " " : ""}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className={styles.courseHeadSub}>{cp.completionDesc}</p>
                </div>

                <div className={styles.progressCard}>
                  <div className={styles.progressCardRow}>
                    <div className={styles.progressCardCount}>
                      <em>{completedCount}</em>
                      <span>/&nbsp;{totalModules}</span>
                    </div>
                    <div className={styles.progressCardPct}>{progressPercent}% {cp.completed}</div>
                  </div>
                  <ProgressBar
                    value={progressPercent}
                    label={`Progresso do curso: ${progressPercent}%`}
                    trackClassName={styles.progressBar}
                    fillClassName={styles.progressBarFill}
                  />
                  <p className={styles.progressCardLabel}>
                    {currentMod ? (
                      <>Continua no módulo <strong>{String(currentMod.id).padStart(2, "0")} · {currentMod.title}</strong></>
                    ) : completedCount >= totalModules ? (
                      <strong>{cp.courseTitle} — concluído.</strong>
                    ) : (
                      <>{completedCount} {cp.of} {totalModules} {cp.modulesCompleted}</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.modList} full-section full-section-scroll`}>
            <div className={styles.wrap}>
              <div className={styles.modListHead}>
                <h2 className={styles.modListTitle}>{cp.courseModulesTitle}</h2>
              </div>

              {courseModules.filter((m) => m.id !== 11).map((mod) => {
                const modProgress = getModuleProgress(mod.id);
                const unlocked = isModuleUnlocked(mod.id);
                const completed = modProgress?.completed === true;
                const isCurrent = !completed && unlocked && currentMod?.id === mod.id;

                const cls = [styles.mod];
                if (completed) cls.push(styles.modDone);
                else if (isCurrent) cls.push(styles.modCurrent);
                else if (!unlocked) cls.push(styles.modLocked);

                return (
                  <button
                    key={mod.id}
                    type="button"
                    disabled={!unlocked}
                    onClick={() => openModule(mod.id)}
                    className={cls.join(" ")}
                  >
                    <div className={styles.modNum}>{String(mod.id).padStart(2, "0")}</div>
                    <div className={styles.modBody}>
                      <h3 className={styles.modTitle}>{mod.title}</h3>
                      <p className={styles.modDesc}>{mod.description}</p>
                    </div>
                    <div className={styles.modMeta}>
                      {completed ? (
                        <span className={`${styles.modBadge} ${styles.modBadgeDone}`}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                          {modProgress?.quizScore ?? 100}%
                        </span>
                      ) : isCurrent ? (
                        <span className={`${styles.modBadge} ${styles.modBadgeCurrent}`}>A decorrer</span>
                      ) : unlocked ? (
                        <span className={styles.modBadge}>{cp.available}</span>
                      ) : (
                        <span className={`${styles.modBadge} ${styles.modBadgeLocked}`}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          {cp.locked}
                        </span>
                      )}
                      {unlocked && (
                        <span className={styles.modArrow}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Certificate block (module 11) */}
              {courseModules.find((m) => m.id === 11) && (() => {
                const cert = courseModules.find((m) => m.id === 11)!;
                const certProgress = getModuleProgress(11);
                const certUnlocked = isModuleUnlocked(11);
                const certCompleted = certProgress?.completed === true;

                return (
                  <div className={styles.certBlock}>
                    <div className={styles.certBlockCopy}>
                      <div className={`${styles.eyebrow} ${styles.eyebrowAccent}`}>{cp.complete}</div>
                      <h3 className={styles.certBlockTitle}>
                        {cert.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <em>{cert.title.split(" ").slice(-1)}</em>.
                      </h3>
                      <p className={styles.certBlockSub}>
                        {certUnlocked ? cp.certificateDesc : `Disponível após concluíres os ${totalModules - 1} módulos.`}
                      </p>
                    </div>
                    <div className={styles.certBlockCta}>
                      {certUnlocked ? (
                        <button
                          type="button"
                          onClick={() => openModule(11)}
                          className={`${styles.btn} ${styles.btnAccent}`}
                        >
                          {certCompleted ? cp.downloadCertificate : "Ver e descarregar"}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        </button>
                      ) : (
                        <button type="button" disabled className={`${styles.btn} ${styles.btnAccent}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          {cp.locked}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        </>
      )}

      {/* ============================================================
          STATE 2 — Reader (theory)
          ============================================================ */}
      {activeModule && !quizMode && currentTheoryPage && (
        <div className={`${styles.reader} ${styles.readerOpen}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li>{cp.courseTitle}</li>
              <li>{language === "en" ? "Module" : "Módulo"} {String(activeModule.id).padStart(2, "0")}</li>
              <li aria-current="page">
                {cp.page} {theoryPage + 1} {cp.of} {allTheoryPages.length}
              </li>
            </ol>
          </nav>
          <div className={styles.readerTop}>
            <button type="button" className={styles.readerBack} onClick={() => setActiveModuleId(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              {cp.backToModules}
            </button>
            <div className={styles.readerTitle}>
              <em>{String(activeModule.id).padStart(2, "0")}</em>
              <span className={styles.readerTitleName}>{activeModule.title}</span>
            </div>
            <div className={styles.readerProgress}>
              <div className={styles.readerProgressDots}>
                {allTheoryPages.map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < theoryPage ? styles.dotDone :
                      i === theoryPage ? styles.dotCurrent :
                      ""
                    }
                  />
                ))}
              </div>
              <span className={styles.readerProgressLabel}>{theoryPage + 1} / {allTheoryPages.length}</span>
            </div>
          </div>

          <div ref={moduleContentRef} className={styles.readerBody}>
            <div className={styles.readerContainer}>
              {/* MAIN COLUMN */}
              <article>
                <div className={styles.readerIcon} aria-hidden="true">{getModuleIcon(activeModule.id)}</div>
                <p className={styles.readerChap}>{currentTheoryPage.title}</p>
                <h1 className={styles.readerHeading}>{activeModule.title}</h1>
                {activeModule.description && (
                  <p className={styles.readerLede}>{activeModule.description}</p>
                )}

                <div className={styles.readerProse}>
                  {currentTheoryPage.blocks.map((paragraph, idx) => (
                    <p key={idx}>{renderBold(paragraph)}</p>
                  ))}
                </div>

                {/* Premium content on last page */}
                {premiumTheoryPage && theoryPage === allTheoryPages.length - 1 && activeSupportContent && (
                  <>
                    <div className={styles.readerBreak}>
                      <span className={styles.readerBreakIcon}>§</span>
                    </div>

                    <h2 className={styles.readerH2}>Caso real</h2>
                    <p className={styles.readerLede} style={{ marginBottom: 32 }}>
                      {activeSupportContent.realScenario}
                    </p>

                    <h2 className={styles.readerH2}>{cp.premiumPageTitle}</h2>

                    <div className={styles.premGrid}>
                      <div className={`${styles.prem} ${styles.premGood}`}>
                        <p className={styles.premTitle}>{cp.goodPractices}</p>
                        <ul className={styles.premList}>
                          {activeSupportContent.goodPractices.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${styles.prem} ${styles.premBad}`}>
                        <p className={styles.premTitle}>{cp.badPractices}</p>
                        <ul className={styles.premList}>
                          {activeSupportContent.badPractices.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${styles.prem} ${styles.premStrat}`}>
                        <p className={styles.premTitle}>{cp.practicalStrategies}</p>
                        <ul className={styles.premList}>
                          {activeSupportContent.strategies.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${styles.prem} ${styles.premCheck}`}>
                        <p className={styles.premTitle}>{cp.executionChecklist}</p>
                        <ul className={styles.premList}>
                          {activeSupportContent.executionChecklist.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {activeModule.evaluationExamples && activeModule.evaluationExamples.length > 0 && (
                      <div style={{ marginTop: 32 }}>
                        <h2 className={styles.readerH2}>{cp.decisionExamples}</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                          {activeModule.evaluationExamples.map((example) => (
                            <article key={example.title} className={styles.example}>
                              <h3 className={styles.exampleTitle}>{example.title}</h3>
                              <p><span className={styles.exampleLabel}>{cp.scenario}</span> {example.scenario}</p>
                              <p><span className={styles.exampleLabel}>{cp.correctApproach}</span> {example.correctApproach}</p>
                              <p><span className={styles.exampleLabel}>{cp.incorrectApproach}</span> {example.incorrectApproach}</p>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </article>

              {/* SIDEBAR */}
              <aside className={styles.aside}>
                {activeModule.keywords && activeModule.keywords.length > 0 && (
                  <div className={styles.asideCard}>
                    <p className={styles.asideLabel}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      {cp.keyConceptsTitle}
                    </p>
                    <div className={styles.asideChips}>
                      {activeModule.keywords.map((keyword) => (
                        <span key={keyword} className={styles.asideChip}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                )}

                {activeModule.practicalTip && (
                  <div className={styles.asideCard}>
                    <p className={styles.asideLabel}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v4"/><path d="m16.24 7.76 2.83-2.83"/><path d="M18 12h4"/><path d="m16.24 16.24 2.83 2.83"/><path d="M12 18v4"/><path d="m7.76 16.24-2.83 2.83"/><path d="M6 12H2"/><path d="m7.76 7.76-4.83-2.83"/></svg>
                      {cp.practicalTipTitle}
                    </p>
                    <p className={styles.asideText}>{activeModule.practicalTip}</p>
                  </div>
                )}

                {activeModule.benefit && (
                  <div className={styles.asideCard}>
                    <p className={styles.asideLabel}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      {cp.whyItMatters}
                    </p>
                    <p className={styles.asideText}>{activeModule.benefit}</p>
                  </div>
                )}

                {activeModule.warning && (
                  <div className={`${styles.asideCard} ${styles.asideCardWarn}`}>
                    <p className={styles.asideLabel}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      {cp.importantWarning}
                    </p>
                    <p className={styles.asideText}>{activeModule.warning}</p>
                  </div>
                )}
              </aside>
            </div>
          </div>

          <div className={styles.readerBottom}>
            <div className={styles.readerBottomInner}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnGhost} ${styles.btnSmall} ${styles.btnBack}`}
                onClick={() => setTheoryPage((prev) => Math.max(prev - 1, 0))}
                disabled={theoryPage === 0}
              >
                <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                {cp.previous}
              </button>
              <div className={styles.readerPageInfo}>
                {cp.page} <strong>{theoryPage + 1}</strong> {cp.of} {allTheoryPages.length}
              </div>
              {activeModule.id === 11 && isLastTheoryPage ? (
                <button
                  type="button"
                  onClick={downloadCertificate}
                  disabled={isDownloadingCertificate}
                  className={`${styles.btn} ${styles.btnAccent} ${styles.btnSmall}`}
                >
                  {isDownloadingCertificate ? cp.preparingCertificate : cp.downloadCertificate}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              ) : isLastTheoryPage ? (
                <button
                  type="button"
                  onClick={startQuiz}
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}
                >
                  {cp.startQuiz}
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setTheoryPage((prev) => Math.min(prev + 1, allTheoryPages.length - 1))}
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}
                >
                  {cp.nextPage}
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          STATE 3 — Quiz
          ============================================================ */}
      {activeModule && quizMode && activeModule.quiz.length > 0 && (
        <div className={`${styles.reader} ${styles.readerOpen}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li>{cp.courseTitle}</li>
              <li>{language === "en" ? "Module" : "Módulo"} {String(activeModule.id).padStart(2, "0")}</li>
              <li aria-current="page">Quiz</li>
            </ol>
          </nav>
          <div className={styles.readerTop}>
            <button type="button" className={styles.readerBack} onClick={() => setQuizMode(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              {cp.backToContent}
            </button>
            <div className={styles.readerTitle}>
              <em>{String(activeModule.id).padStart(2, "0")}</em>
              <span className={styles.readerTitleName}>{activeModule.title} · Quiz</span>
            </div>
            <div className={styles.readerProgress}>
              <span className={styles.readerProgressLabel}>
                {Object.keys(quizAnswers).length} / {activeModule.quiz.length}
              </span>
            </div>
          </div>

          <div ref={moduleContentRef} className={styles.readerBody}>
            {!quizSubmitted || quizScore === null ? (
              <div className={styles.quiz}>
                <div className={styles.quizHead}>
                  <div className={styles.eyebrow}>{cp.completeTraining}</div>
                  <h1 className={styles.quizTitle}>{activeModule.title}</h1>
                  <p className={styles.quizSub}>{cp.quizInstruction}</p>
                </div>

                {activeModule.quiz.map((question, qIdx) => (
                  <div key={question.id} className={styles.q}>
                    <p className={styles.qNum}>{String(qIdx + 1).padStart(2, "0")}</p>
                    <h3 className={styles.qText}>{question.question}</h3>
                    <div className={styles.qOpts}>
                      {question.options.map((option, oIdx) => (
                        <button
                          key={oIdx}
                          type="button"
                          disabled={quizSubmitted}
                          onClick={() => selectAnswer(question.id, oIdx)}
                          className={getOptionClass(question, oIdx)}
                        >
                          <span className={styles.qOptLetter}>{String.fromCharCode(65 + oIdx)}</span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {!quizSubmitted && (
                  <div className={styles.quizSubmit}>
                    {quizSubmitError && (
                      <p role="alert" className={styles.quizHint}>
                        {quizSubmitError}
                      </p>
                    )}
                    <span className={styles.quizHint}>
                      {isSaving
                        ? cp.savingProgress
                        : allQuestionsAnswered(activeModule.quiz)
                        ? "Pronto para submeter."
                        : "Responde a todas para submeter."}
                    </span>
                    <button
                      type="button"
                      disabled={!allQuestionsAnswered(activeModule.quiz) || isSaving}
                      onClick={submitQuiz}
                      className={`${styles.btn} ${styles.btnPrimary}`}
                    >
                      {cp.submitAnswers}
                      <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.quiz}>
                <div className={styles.result}>
                  <p className={`${styles.resultScore} ${quizScore < 60 ? styles.resultScoreFail : ""}`}>
                    {quizScore}<span>%</span>
                  </p>
                  <p className={styles.resultLabel}>
                    {cp.scored} {quizScore}{cp.percentComplete} {cp.inThisQuiz}
                  </p>
                  <h2 className={styles.resultTitle}>
                    {quizScore >= 60 ? cp.congrats : cp.tryAgainQuiz}
                  </h2>
                  <p className={styles.resultSub}>
                    {quizScore >= 60
                      ? isSaving ? cp.savingProgress : cp.moduleCompleted
                      : cp.needMorePoints}
                  </p>
                  <div className={styles.resultCta}>
                    {quizScore >= 60 ? (
                      <button
                        type="button"
                        className={`${styles.btn} ${styles.btnPrimary}`}
                        onClick={() => { setActiveModuleId(null); setQuizMode(false); }}
                      >
                        {cp.backToModulesList}
                        <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnGhost}`}
                          onClick={() => setQuizMode(false)}
                        >
                          {cp.reviewContent}
                        </button>
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnPrimary}`}
                          onClick={startQuiz}
                        >
                          {cp.retakeQuiz}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

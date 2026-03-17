/*
 * DESCRIÇÃO DO FICHEIRO: Página do curso de Cliente Mistério com conteúdo teórico, questionários e progresso persistente.
 */

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { courseModules, type QuizQuestion } from "./courseData";

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

const sessionStorageKey = "vp_session";

export default function CursoPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const loadProgress = useCallback(async () => {
    try {
      const response = await fetch("/api/course/progress");
      if (response.ok) {
        const data = (await response.json()) as ProgressData;
        setProgress(data);
      }
    } catch {
      // Silently fail — progress will show as empty.
    }
  }, []);

  useEffect(() => {
    const session = localStorage.getItem(sessionStorageKey);
    if (!session) {
      router.push("/login");
      return;
    }
    setIsAuthenticated(true);
    loadProgress();
  }, [router, loadProgress]);

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
  };

  const startQuiz = () => {
    setQuizMode(true);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  const selectAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitQuiz = async () => {
    if (!activeModuleId) return;
    const moduleData = courseModules.find((m) => m.id === activeModuleId);
    if (!moduleData) return;

    const totalQuestions = moduleData.quiz.length;
    const correctCount = moduleData.quiz.filter(
      (q) => quizAnswers[q.id] === q.correctIndex
    ).length;
    const score = Math.round((correctCount / totalQuestions) * 100);

    setQuizScore(score);
    setQuizSubmitted(true);

    if (score >= 60) {
      setIsSaving(true);
      try {
        const response = await fetch("/api/course/progress", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            moduleId: activeModuleId,
            quizScore: score,
            quizAnswers,
          }),
        });
        if (response.ok) {
          await loadProgress();
        }
      } catch {
        // Silently fail.
      } finally {
        setIsSaving(false);
      }
    }
  };

  const allQuestionsAnswered = (quiz: QuizQuestion[]): boolean => {
    return quiz.every((q) => quizAnswers[q.id] !== undefined);
  };

  const getOptionClass = (question: QuizQuestion, optionIndex: number): string => {
    const base = "w-full text-left p-3 rounded-lg border-2 transition-all text-sm";
    if (!quizSubmitted) {
      if (quizAnswers[question.id] === optionIndex) {
        return `${base} border-[#F6C25B] bg-[#F6C25B]/10`;
      }
      return `${base} border-slate-200 hover:border-slate-300 bg-white`;
    }
    if (optionIndex === question.correctIndex) {
      return `${base} border-green-500 bg-green-50`;
    }
    if (quizAnswers[question.id] === optionIndex && optionIndex !== question.correctIndex) {
      return `${base} border-red-400 bg-red-50`;
    }
    return `${base} border-slate-200 bg-white opacity-60`;
  };

  if (!isAuthenticated) {
    return <p className="text-sm text-slate-500">A verificar sessão...</p>;
  }

  const activeModule = activeModuleId ? courseModules.find((m) => m.id === activeModuleId) : null;
  const completedCount = progress?.completedCount ?? 0;
  const totalModules = progress?.totalModules ?? 10;
  const progressPercent = progress?.progressPercent ?? 0;

  return (
    <section className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] home-title-highlight-text">
          Formação completa
        </p>
        <h1 className="text-3xl font-semibold home-title-highlight-text lg:text-4xl">
          Curso de Cliente Mistério
        </h1>
        <p className="max-w-3xl text-base leading-7">
          Complete todos os módulos para obter a sua certificação. Cada módulo inclui conteúdo
          teórico e um questionário de avaliação.
        </p>
      </header>

      {/* Barra de progresso global */}
      <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="font-semibold">Progresso do Curso</span>
          <span className="home-title-highlight-text font-bold">{progressPercent}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#F6C25B] to-[#f0a830] transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-white/60">
          {completedCount} de {totalModules} módulos concluídos
        </p>
      </div>

      {/* Lista de módulos */}
      {!activeModule && (
        <div className="space-y-3">
          {courseModules.map((mod) => {
            const modProgress = getModuleProgress(mod.id);
            const unlocked = isModuleUnlocked(mod.id);
            const completed = modProgress?.completed === true;

            return (
              <button
                key={mod.id}
                type="button"
                disabled={!unlocked}
                onClick={() => openModule(mod.id)}
                className={`w-full text-left rounded-2xl border p-5 transition-all ${
                  completed
                    ? "border-green-400/40 bg-green-900/10 hover:bg-green-900/20"
                    : unlocked
                      ? "border-white/30 hover:border-[#F6C25B] cursor-pointer"
                      : "border-white/10 opacity-40 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        completed
                          ? "bg-green-500 text-white"
                          : unlocked
                            ? "bg-[#F6C25B]/20 text-[#F6C25B]"
                            : "bg-white/10 text-white/30"
                      }`}
                    >
                      {completed ? "\u2713" : mod.id}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm truncate">{mod.title}</h3>
                      <p className="text-xs text-white/60 mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-sm">
                    {completed && modProgress?.quizScore !== null && (
                      <span className="text-green-400 font-semibold">{modProgress.quizScore}%</span>
                    )}
                    {!completed && unlocked && (
                      <span className="home-title-highlight-text">&rarr;</span>
                    )}
                    {!unlocked && (
                      <span className="text-white/30 text-xs">Bloqueado</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Conteúdo do módulo ativo */}
      {activeModule && !quizMode && (
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setActiveModuleId(null)}
            className="text-sm home-title-highlight-text font-semibold hover:underline"
          >
            &larr; Voltar aos módulos
          </button>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm space-y-6">
            <h2 className="text-2xl font-bold">{activeModule.title}</h2>

            <div className="space-y-4">
              {activeModule.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm leading-7 text-white/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={startQuiz}
              className="submit max-w-xs"
            >
              Iniciar Questionário
            </button>
          </div>
        </div>
      )}

      {/* Questionário */}
      {activeModule && quizMode && (
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setQuizMode(false)}
            className="text-sm home-title-highlight-text font-semibold hover:underline"
          >
            &larr; Voltar ao conteúdo
          </button>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-1">{activeModule.title}</h2>
            <p className="text-sm text-white/60 mb-6">
              Responda a todas as questões. Necessita de 60% para concluir o módulo.
            </p>

            <div className="space-y-8">
              {activeModule.quiz.map((question, qIdx) => (
                <div key={question.id} className="space-y-3">
                  <p className="font-semibold text-sm">
                    {qIdx + 1}. {question.question}
                  </p>
                  <div className="grid gap-2">
                    {question.options.map((option, oIdx) => (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={quizSubmitted}
                        onClick={() => selectAnswer(question.id, oIdx)}
                        className={getOptionClass(question, oIdx)}
                      >
                        {String.fromCharCode(65 + oIdx)}) {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!quizSubmitted && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  disabled={!allQuestionsAnswered(activeModule.quiz) || isSaving}
                  onClick={submitQuiz}
                  className="submit max-w-xs disabled:opacity-40"
                >
                  Submeter Respostas
                </button>
              </div>
            )}

            {quizSubmitted && quizScore !== null && (
              <div className={`mt-8 rounded-xl p-5 text-center ${
                quizScore >= 60 ? "bg-green-900/20 border border-green-500/30" : "bg-red-900/20 border border-red-400/30"
              }`}>
                <p className="text-2xl font-bold mb-2">
                  {quizScore >= 60 ? "Parabéns!" : "Tente novamente"}
                </p>
                <p className="text-sm mb-1">
                  Obteve <span className="font-bold text-lg">{quizScore}%</span> neste questionário.
                </p>
                <p className="text-xs text-white/60 mb-4">
                  {quizScore >= 60
                    ? isSaving ? "A guardar progresso..." : "Módulo concluído com sucesso!"
                    : "Necessita de pelo menos 60% para avançar. Reveja o conteúdo e tente novamente."}
                </p>
                <div className="flex justify-center gap-3">
                  {quizScore >= 60 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModuleId(null);
                        setQuizMode(false);
                      }}
                      className="submit max-w-xs"
                    >
                      Voltar aos Módulos
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setQuizMode(false)}
                        className="submit max-w-[200px] !bg-white/20"
                      >
                        Rever Conteúdo
                      </button>
                      <button
                        type="button"
                        onClick={startQuiz}
                        className="submit max-w-[200px]"
                      >
                        Repetir Quiz
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

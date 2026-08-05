"use client";

import { useEffect, useState } from "react";

type ModuleProgress = {
  moduleId: number;
  completed: boolean;
};

type CourseAccessStatus = {
  loading: boolean;
  hasAccess: boolean;
  nextModuleId: number | null;
};

/*
 * Deteta, do lado do cliente, se a pessoa autenticada já comprou o curso e,
 * nesse caso, qual o próximo módulo por concluir — para trocar o CTA de
 * "Comprar o curso" por "Continuar no módulo X" (home e /o-curso).
 */
export function useCourseAccess(): CourseAccessStatus {
  const [status, setStatus] = useState<CourseAccessStatus>({
    loading: true,
    hasAccess: false,
    nextModuleId: null,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/course/progress", { credentials: "include" });

        if (!response.ok) {
          if (!cancelled) setStatus({ loading: false, hasAccess: false, nextModuleId: null });
          return;
        }

        const data = (await response.json()) as {
          modules: ModuleProgress[];
          totalModules: number;
        };

        const firstIncomplete = data.modules.find((m) => !m.completed);
        const nextModuleId = firstIncomplete?.moduleId ?? data.modules.length + 1;

        if (!cancelled) {
          setStatus({
            loading: false,
            hasAccess: true,
            nextModuleId: nextModuleId <= data.totalModules ? nextModuleId : null,
          });
        }
      } catch {
        if (!cancelled) setStatus({ loading: false, hasAccess: false, nextModuleId: null });
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return status;
}

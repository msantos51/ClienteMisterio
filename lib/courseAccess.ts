/*
 * DESCRIÇÃO DO FICHEIRO: Utilitários para validar e consultar o estado de acesso ao curso pago.
 */

import { query } from "@/lib/database";

type CourseAccessRow = {
  has_course_access: boolean;
};

export const hasUserCourseAccess = async (userId: string): Promise<boolean> => {
  // Consulta o estado de acesso ao curso para o utilizador autenticado.
  const result = await query<CourseAccessRow>(
    "select has_course_access from users where id = $1",
    [userId]
  );

  return result.rows[0]?.has_course_access === true;
};

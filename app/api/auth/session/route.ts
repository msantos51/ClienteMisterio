/*
 * DESCRIÇÃO DO FICHEIRO: Exposição do estado da sessão atual para o cliente sem vazar detalhes sensíveis.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { getSession } from "@/lib/session";

type UserRow = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  profile_completed: boolean;
  is_admin: boolean;
  has_course_access: boolean;
};

export const GET = async () => {
  try {
    const session = await getSession();

    if (!session?.userId) {
      return NextResponse.json({ authenticated: false });
    }

    const result = await query<UserRow>(
      `select id, first_name, last_name, full_name, email, profile_completed, is_admin, has_course_access
       from users
       where id = $1`,
      [session.userId]
    );

    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        fullName: user.full_name,
        email: user.email,
        profileCompleted: user.profile_completed,
        isAdmin: user.is_admin,
        hasCourseAccess: user.has_course_access,
      },
    });
  } catch (error: unknown) {
    console.error("SESSION_ROUTE_ERROR", error);
    return NextResponse.json({ authenticated: false });
  }
};

/*
 * DESCRIÇÃO DO FICHEIRO: Middleware global para reforçar segurança HTTP e proteger rotas privadas antes da renderização.
 */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const sessionCookieName = "vp_session_token";
const protectedPaths = ["/dashboard", "/curso", "/checkout"];
const productionOnlyHiddenPaths = ["/api-docs", "/api/openapi"];

const requiresAuthentication = (pathname: string) => {
  // Marca rotas privadas que exigem sessão autenticada para acesso público controlado.
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
};

const shouldHideRouteInProduction = (pathname: string) => {
  // Esconde documentação técnica em produção quando a exposição pública não está autorizada.
  const isDocumentationPath = productionOnlyHiddenPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  return process.env.NODE_ENV === "production" && process.env.ENABLE_PUBLIC_API_DOCS !== "true" && isDocumentationPath;
};

const appendSecurityHeaders = (response: NextResponse) => {
  // Aplica cabeçalhos defensivos para reduzir riscos comuns de segurança no browser.
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.cdnfonts.com",
      "font-src 'self' https://fonts.cdnfonts.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-src https://js.stripe.com",
      "frame-ancestors 'none'",
    ].join("; ")
  );

  if (process.env.NODE_ENV === "production") {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  return response;
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasSessionCookie = Boolean(request.cookies.get(sessionCookieName)?.value);

  if (shouldHideRouteInProduction(pathname)) {
    return appendSecurityHeaders(new NextResponse("Not Found", { status: 404 }));
  }

  if (requiresAuthentication(pathname) && !hasSessionCookie) {
    // Redireciona visitantes sem sessão para login antes de abrir páginas privadas.
    const redirectUrl = new URL(`/login?next=${encodeURIComponent(`${pathname}${search}`)}`, request.url);

    return appendSecurityHeaders(NextResponse.redirect(redirectUrl));
  }

  return appendSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};

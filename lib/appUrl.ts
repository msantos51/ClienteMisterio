/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `lib/appUrl.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

const normalizeBaseUrl = (rawUrl: string) => {
  // Remove espaços e barra final para evitar URLs duplicadas com "//" ao concatenar paths.
  const sanitizedUrl = rawUrl.trim().replace(/\/+$/, "");

  // Prefixa protocolo HTTPS quando a variável vier só com host (ex.: domínio sem esquema).
  if (!/^https?:\/\//i.test(sanitizedUrl)) {
    return `https://${sanitizedUrl}`;
  }

  return sanitizedUrl;
};

export const getAppBaseUrl = () => {
  // Fonte fiável do domínio público da app — nunca usar request.url para montar redirects:
  // atrás do proxy de produção o host da própria ligação pode resolver para o bind interno
  // do servidor (ex.: 0.0.0.0:<PORT>) em vez do domínio público.
  const rawUrl = process.env.APP_URL?.trim();

  if (!rawUrl) {
    throw new Error("Configuração incompleta: defina APP_URL nas variáveis de ambiente.");
  }

  return normalizeBaseUrl(rawUrl);
};

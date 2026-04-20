/*
 * DESCRIÇÃO DO FICHEIRO: Limitador simples em memória para travar ataques de força bruta e spam em endpoints sensíveis.
 * Nota: como é por instância, não substitui um WAF dedicado, mas eleva o esforço para operações abusivas.
 */

type RateBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateBucket>();

export type RateLimitOptions = {
  // Identificador único do bucket (ex.: "login:<ip>").
  key: string;
  // Janela temporal em milissegundos durante a qual os pedidos são contados.
  windowMs: number;
  // Número máximo de pedidos permitidos na janela.
  max: number;
};

export type RateLimitResult = {
  limited: boolean;
  retryAfterSeconds: number;
};

export const checkRateLimit = ({ key, windowMs, max }: RateLimitOptions): RateLimitResult => {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (existing.count >= max) {
    return {
      limited: true,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
};

export const getClientIdentifier = (request: Request): string => {
  // Resolve o IP do cliente sem confiar cegamente em headers arbitrários.
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
};

/*
 * DESCRIÇÃO DO FICHEIRO: Utilitários de validação partilhados entre rotas de API para reforçar a coerência das regras de entrada.
 */

// Expressão pragmática que cobre os casos reais de e-mail sem pretender ser RFC 5322 completa.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: unknown): value is string => {
  if (typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();

  if (trimmed.length === 0 || trimmed.length > 254) {
    return false;
  }

  return emailPattern.test(trimmed);
};

// Limita comprimento de campos de texto para evitar abuso via payloads extremos.
export const isReasonableText = (value: unknown, maxLength = 200): value is string => {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
};

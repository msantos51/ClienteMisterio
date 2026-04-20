/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `lib/password.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const saltLength = 16;
const keyLength = 64;

// Define o tamanho mínimo aceite para novas palavras-passe no fluxo de registo e reposição.
export const MIN_PASSWORD_LENGTH = 8;

// Valida a força mínima da palavra-passe de forma partilhada entre rotas de autenticação.
export const validatePasswordStrength = (password: string): string | null => {
  if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH) {
    return `A palavra-passe deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`;
  }

  if (password.length > 200) {
    return "A palavra-passe é demasiado longa.";
  }

  const hasLetter = /[A-Za-z]/.test(password);
  const hasDigit = /\d/.test(password);

  if (!hasLetter || !hasDigit) {
    return "A palavra-passe deve incluir pelo menos uma letra e um número.";
  }

  return null;
};

// Gera um hash seguro a partir da senha usando scrypt e um salt aleatório.
export const hashPassword = (password: string) => {
  const salt = randomBytes(saltLength).toString("hex");
  const derivedKey = scryptSync(password, salt, keyLength).toString("hex");
  return `${salt}:${derivedKey}`;
};

// Compara a senha recebida com o hash guardado no banco de dados.
export const verifyPassword = (password: string, storedHash: string) => {
  const [salt, key] = storedHash.split(":");

  if (!salt || !key) {
    return false;
  }

  // Ignora hashes inválidos para evitar erro em contas antigas/malformadas.
  if (key.length !== keyLength * 2 || !/^[0-9a-f]+$/i.test(key)) {
    return false;
  }

  const expectedBuffer = Buffer.from(key, "hex");
  const derivedBuffer = Buffer.from(scryptSync(password, salt, keyLength));

  if (expectedBuffer.length !== derivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, derivedBuffer);
};

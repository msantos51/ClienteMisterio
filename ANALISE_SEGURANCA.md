# 🔍 ANÁLISE COMPLETA DO REPOSITÓRIO "ClienteMisterio"

## RESUMO EXECUTIVO
Projeto Next.js 16 bem estruturado com autenticação segura, base de dados PostgreSQL e integração Stripe. 
**Status Geral:** ⚠️ **BOM - COM MELHORIAS CRÍTICAS NECESSÁRIAS**

---

## 🔴 ERROS CRÍTICOS (SEVERIDADE ALTA)

### 1. **Armazenamento de Dados Sensíveis em localStorage** ⚠️
**Localização:** `app/login/page.tsx:107-108`, `app/dashboard/page.tsx:307-308`

**Problema:**
```typescript
localStorage.setItem(sessionStorageKey, normalizedSessionUser.email);
localStorage.setItem(userStorageKey, JSON.stringify(normalizedSessionUser));
```

**Risco de Segurança:**
- localStorage é vulnerável a XSS attacks
- Dados de utilizador persistem indefinidamente
- Email armazenado em texto plano
- NIF (dados sensíveis de identidade) armazenado sem encriptação

**Impacto:** CRÍTICO - Qualquer malware/XSS pode roubar identidade

**Solução Recomendada:**
- Usar sessionStorage (sessão apenas, apaga ao fechar browser)
- Nunca armazenar NIF ou dados sensíveis no cliente
- Validar dados do servidor em cada acesso
- Considerar usar JWT seguro no cookie HTTP-only

---

### 2. **Falta de Validação de Email Format em Múltiplas Rotas** ❌
**Localização:** `app/api/auth/register/route.ts`, `app/api/auth/login/route.ts`

**Problema:**
- Register: Sem validação de email format antes de inserir BD
- Login: Sem validação de email format
- Contact form tem regex fraco: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Solução:**
```typescript
// Adicionar validação robusta
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Ou usar biblioteca: npm install email-validator
  return emailRegex.test(email) && email.length <= 254;
};
```

---

### 3. **Falta de Rate Limiting em Endpoints Críticos** 🚨
**Localização:** `/api/auth/login`, `/api/auth/register`, `/api/auth/forgot-password`

**Problema:**
- Sem proteção contra força bruta em login
- Sem limite de tentativas de registo
- Sem rate limiting em reset de password
- Possibilita ataque de dicionário de passwords

**Impacto:** CRÍTICO - Comprometimento de contas

**Solução:**
```typescript
// Implementar rate limiting
npm install next-rate-limit
// Ou usar middleware de rate limiting
```

---

### 4. **Gestão Insegura de Sessão - localStorage vs Cookies** 🔓
**Localização:** Projeto inteiro - inconsistência crítica

**Problema:**
- Server-side: Cookie HTTP-only seguro ✅
- Client-side: localStorage com dados sensíveis ❌
- Sem sincronização entre dois sistemas
- Cliente confia em localStorage, ignora cookie

**Impacto:** Severidade ALTA - Múltiplas vulnerabilidades XSS

---

### 5. **Falta de CSRF Protection** 🔐
**Localização:** Todas rotas POST/PUT em `/api/*`

**Problema:**
- Sem tokens CSRF nos formulários
- Sem validação de origin/referer
- Sem SameSite Cookie (existe mas fraco: "lax")

**Solução:**
```typescript
// Adicionar na middleware
headers: {
  "X-CSRF-Token": csrfToken,
}
```

---

### 6. **Password Fraco - Sem Validação de Força** 💪
**Localização:** `app/api/auth/register/route.ts`, `app/dashboard/page.tsx`

**Problema:**
- Aceita passwords de qualquer comprimento/complexidade
- Sem verificação de números, maiúsculas, caracteres especiais
- Sem limite mínimo de caracteres

**Solução:**
```typescript
const isStrongPassword = (password: string) => {
  // Mínimo 12 caracteres
  // Maiúscula, minúscula, número, caractere especial
  const minLength = password.length >= 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecial;
};
```

---

## 🟠 PROBLEMAS IMPORTANTES (SEVERIDADE MÉDIA)

### 7. **SQL Injection Potencial - Verificação Incompleta** ⚠️
**Localização:** Todos ficheiros com queries

**Situação:**
- ✅ BOM: Usa parametrizadas ($1, $2)
- ⚠️ RISCO: Array de tipos params pode ser frágil
  
```typescript
// Atual - OK mas podia melhorar
const params: Array<string | number | boolean | null | string[]> = []

// Melhor - usar type guard
if (Array.isArray(params[0])) throw new Error("Arrays not allowed")
```

---

### 8. **Falta de Validação de Entrada - NIF** 📋
**Localização:** `app/api/user/route.ts`, `lib/identity.ts`

**Problema:**
- NIF hashado sem validação de checksum
- Aceita NIF com espaços/caracteres inválidos
- Sem validação real do NIF português

**Solução:**
```typescript
// NIF português tem checksum validável
const isValidPortugueseNif = (nif: string) => {
  const cleaned = nif.replace(/\D/g, "");
  if (cleaned.length !== 9) return false;
  
  // Validação checksum
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += (nif.charCodeAt(i) - 48) * (9 - i);
  }
  const check = (11 - (sum % 11)) % 11;
  return check === (nif.charCodeAt(8) - 48);
};
```

---

### 9. **Sem Proteção contra Timing Attacks em Operações não-Críticas** 🕐
**Localização:** `lib/password.ts` ✅ (bem feito), mas faltam noutros locais

**Problema:**
- `isValidEmail` usa teste regex simples (não constante)
- Comparação de NIF não usa timing-safe compare

**Solução:**
- Usar `timingSafeEqual` para comparações sensíveis

---

### 10. **Gestão de Erros Expõe Informação Interna** 🔍
**Localização:** `lib/email.ts:81`, múltiplos endpoints

**Problema:**
```typescript
throw new Error(`Resend API ${response.status}: ${responseText}`);
// Expõe detalhes da resposta da API ao cliente
```

**Impacto:** Information disclosure

---

### 11. **Falta de Logging Auditoria** 📝
**Localização:** Sistema inteiro

**Problema:**
- Sem registos de:
  - Logins bem/malsucedidos
  - Alterações de password
  - Acessos a dados sensíveis
  - Tentativas de modificação não-autorizadas

**Impacto:** Impossível investigar incidentes de segurança

---

## 🟡 MELHORIAS (SEVERIDADE BAIXA-MÉDIA)

### 12. **Performance - N+1 Query Problem**
**Localização:** `app/dashboard/page.tsx:213-230`

**Problema:**
```typescript
// Faz 2 requests sequenciais quando poderia fazer 1
const loadProfile = async () => { ... }; // /api/user
const loadCourseProgress = async () => { ... }; // /api/course/progress

loadProfile();
loadCourseProgress(); // Espera em sequência, não paralelo
```

**Solução:**
```typescript
const [profileData, courseData] = await Promise.all([
  fetch("/api/user", { credentials: "include" }),
  fetch("/api/course/progress", { credentials: "include" }),
]);
```

---

### 13. **Timeout Mismatch**
**Localização:** `app/dashboard/page.tsx:176, 215`

**Problema:**
```typescript
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s
// ...
const timeoutId = setTimeout(() => controller.abort(), 5000);  // 5s
```

Inconsistente. Deveria usar constantes.

---

### 14. **Tipo Inseguro - `as unknown`**
**Localização:** Múltiplos ficheiros

**Problema:**
```typescript
const payload = (await request.json()) as LoginPayload;
// Sem validação! Qualquer JSON é aceite
```

**Solução:**
```typescript
// Usar validação de schema
import { z } from "zod";
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

---

### 15. **Falta de Validação de Content-Type**
**Localização:** Todas rotas de API

**Problema:**
```typescript
// Sem verificar se request é realmente JSON
const payload = (await request.json()) as LoginPayload;
```

**Solução:**
```typescript
const contentType = request.headers.get("content-type");
if (!contentType?.includes("application/json")) {
  return NextResponse.json({ message: "Invalid content type" }, { status: 400 });
}
```

---

### 16. **Sem Versionamento de API**
**Localização:** `/api/*`

**Problema:**
- Mudanças futuras podem quebrar clientes
- Sem suporte para múltiplas versões

**Solução:**
```
/api/v1/auth/login
/api/v2/auth/login (futuro)
```

---

### 17. **Session Duration Muito Longa**
**Localização:** `lib/session.ts:10`

**Problema:**
```typescript
const sessionDurationMs = 1000 * 60 * 60 * 24 * 7; // 7 DIAS!
```

**Risco:** Token roubado é válido uma semana inteira

**Solução:** Reduzir para 1-2 horas, implementar refresh tokens

---

### 18. **Sem Suporte para Logout de Todas as Sessões**
**Localização:** `lib/session.ts`, `app/api/auth/logout`

**Problema:**
- User muda password mas sesssões antigas continuam válidas
- Sem invalidação de tokens anteriores

**Solução:**
- Adicionar `sessionVersion` ao BD
- Invalidar ao mudar password

---

### 19. **Variável não Utilizada**
**Localização:** `app/dashboard/page.tsx:43`

```typescript
type StoredUserProfile = Pick<UserProfile, "email" | "nationalId" | "birthDate">;
// Usada em getStoredNationalId e normalizeBirthDateForInput mas com cast manual
```

---

### 20. **Nomes de Variáveis Inconsistentes**
**Localização:** Projeto inteiro

**Problema:**
- `sessionStorageKey` vs `userStorageKey` vs `preferencesStorageKey`
- Inconsistência entre snake_case BD e camelCase frontend

---

## 🟢 BOAS PRÁTICAS OBSERVADAS ✅

✅ Uso de `scrypt` com salt aleatório para passwords
✅ Comparação timing-safe em `verifyPassword`
✅ Cookies HTTP-only para sessão server-side
✅ Parametrização de queries SQL
✅ Validação de género/educação contra whitelist
✅ Sanitização HTML em emails (contact route)
✅ Tratamento de erros com fallbacks
✅ TypeScript strict mode
✅ Estrutura modular bem organizada
✅ Documentação em português clara

---

## 📊 SUMÁRIO DE PROBLEMAS

| Severidade | Contagem | Tipos |
|-----------|----------|-------|
| 🔴 CRÍTICO | 6 | localStorage, rate limiting, CSRF, auth fraco |
| 🟠 ALTO | 4 | Validação, timing attacks, logging |
| 🟡 MÉDIO | 10 | Performance, tipos, versionamento |
| 🟢 BOM | 10+ | Muitas práticas implementadas corretamente |

---

## 🎯 PLANO DE AÇÃO (Prioridade)

### IMEDIATO (Fazer Agora)
1. ❌ Remover NIF/dados sensíveis de localStorage
2. ❌ Implementar rate limiting em auth endpoints
3. ❌ Adicionar CSRF protection
4. ❌ Validar força de passwords
5. ❌ Adicionar logging de auditoria

### PRÓXIMO (Próxima Sprint)
6. Reduzir session duration para 1-2h
7. Implementar refresh tokens
8. Adicionar validação de schema com Zod
9. Melhorar tratamento de erros
10. Audit endpoints de API

### FUTURO (Melhorias Contínuas)
11. Implementar 2FA/MFA
12. Adicionar rate limiting por IP
13. Implementar versionamento de API
14. Adicionar monitoramento/alertas
15. Testes de segurança (OWASP Top 10)

---

## 📝 CONCLUSÃO

O projeto tem **fundação sólida de segurança** mas apresenta **vulnerabilidades críticas** que precisam resolução imediata, especialmente:
- Gestão segura de sessão/autenticação
- Rate limiting contra força bruta
- Validação robusta de entrada

Recomenda-se **implementar críticos antes de produção**.


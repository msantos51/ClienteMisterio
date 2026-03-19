# 📄 ANÁLISE DETALHADA POR FICHEIRO

## 🔐 lib/session.ts

### Problema 1: Session Duration Muito Longa
**Linha 10:**
```typescript
const sessionDurationMs = 1000 * 60 * 60 * 24 * 7; // 7 DIAS
```
**Impacto:** Token roubado é válido uma semana
**Fix:** Reduzir para `1000 * 60 * 60 * 2` (2 horas) e implementar refresh tokens

### Problema 2: Sem Fallback Secret em Produção
**Linhas 42-56:**
```typescript
if (process.env.NODE_ENV !== "production") {
    return "development-only-session-secret";
}
```
⚠️ Se `SESSION_SECRET` não está configurado, gera fallback com hash de `DATABASE_URL`
**Risco:** DATABASE_URL pode ser exposto em logs/erro mensagens

---

## 🔐 lib/password.ts

### ✅ BOM
- Uso correto de scrypt com salt aleatório
- Verificação timing-safe com `timingSafeEqual`
- Validação de formato do hash

### Sugestão de Melhoria
Adicionar suporte a Argon2 como alternativa mais segura:
```typescript
// npm install argon2
import * as argon2 from 'argon2';
```

---

## 📧 lib/email.ts

### Problema 1: Erro Expõe Detalhes Técnicos
**Linha 81:**
```typescript
throw new Error(`Resend API ${response.status}: ${responseText}`);
```
Pode expor token, IDs internos, etc.

**Fix:**
```typescript
if (!response.ok) {
  console.error("Resend API error", { status: response.status, body: responseText });
  throw new Error("Failed to send email");
}
```

### Problema 2: Sem Retry Logic
Se email falha, não tenta novamente
**Fix:** Implementar retry com exponential backoff

---

## 🔓 app/api/auth/login/route.ts

### Problema 1: Sem Rate Limiting
**Linha 31-90:**
- Nenhuma proteção contra força bruta
- Pode fazer ataques de dicionário

**Fix:**
```typescript
import { headers } from "next/headers";

export const POST = async (request: Request) => {
  const clientIp = getClientIp(request);
  
  // Verificar se IP está rate-limited
  const isRateLimited = await checkRateLimit(clientIp, "login", 5, 900); // 5 tentativas em 15min
  if (isRateLimited) {
    return NextResponse.json(
      { message: "Muitas tentativas. Tente novamente em 15 minutos." },
      { status: 429 }
    );
  }
  // ... resto do código
};
```

### Problema 2: Sem Validação de Email Format
**Linhas 42-42:**
```typescript
const normalizedEmail = payload.email.trim().toLowerCase();
// Sem verificação se é email válido
```

**Fix:**
```typescript
if (!isValidEmail(payload.email)) {
  return NextResponse.json(
    { message: "E-mail inválido." },
    { status: 400 }
  );
}
```

### Problema 3: Retorna Informação Discriminatória
**Linhas 52-56:**
```typescript
if (!user || !verifyPassword(payload.password, user.password_hash)) {
  return NextResponse.json(
    { message: "E-mail ou senha inválidos. Verifique os dados e tente novamente." },
    { status: 401 }
  );
}
```
⚠️ Mensagem genérica é boa, mas timing pode revelar se email existe

---

## 🔓 app/api/auth/register/route.ts

### Problema 1: Sem Validação de Força de Password
**Linhas 39-60:**
```typescript
if (payload.password !== payload.confirmPassword) {
  // Apenas verifica se são iguais, não força
```

**Fix:**
```typescript
const passwordRequirements = {
  minLength: 12,
  hasUpperCase: /[A-Z]/.test(payload.password),
  hasLowerCase: /[a-z]/.test(payload.password),
  hasNumber: /\d/.test(payload.password),
  hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(payload.password),
};

const isValidPassword = Object.values(passwordRequirements).every(v => 
  typeof v === "boolean" ? v : true
) && payload.password.length >= 12;

if (!isValidPassword) {
  return NextResponse.json({
    message: "Password deve conter: 12+ caracteres, maiúscula, minúscula, número, caractere especial",
    requirements: passwordRequirements,
  }, { status: 400 });
}
```

### Problema 2: Sem Rate Limiting
Mesmo que login - sem proteção contra spam de registos

### Problema 3: Sem Confirmação de Email
**Linha 75:**
```typescript
email_confirmed: true, // ⚠️ Confia no utilizador!
```

Deveria:
1. Gerar token de confirmação
2. Enviar email
3. Marcar como falso até confirmar

---

## 🔐 app/api/user/route.ts

### Problema 1: Sem Validação de Data
**Linha 105:**
```typescript
if (!payload.birthDate || ...
```
Aceita qualquer string como data

**Fix:**
```typescript
const birthDate = new Date(payload.birthDate);
if (isNaN(birthDate.getTime())) {
  return NextResponse.json(
    { message: "Data de nascimento inválida." },
    { status: 400 }
  );
}

const age = new Date().getFullYear() - birthDate.getFullYear();
if (age < 18) {
  return NextResponse.json(
    { message: "Deve ter pelo menos 18 anos." },
    { status: 400 }
  );
}
```

### Problema 2: NIF Sem Validação de Checksum
**Linhas 135-143:**
```typescript
if (!isValidNationalIdFormat(normalizedNationalId)) {
  // Apenas verifica comprimento, não checksum
```

NIF português tem checksum validável

---

## 📞 app/api/contact/route.ts

### ✅ BOAS PRÁTICAS
- Sanitização HTML correto
- Validação de email (razoável)
- Tratamento de erros apropriado
- Armazenamento em BD com status

### Sugestões Menores
1. Rate limiting por IP para evitar spam
2. Adicionar captcha (Turnstile, hCaptcha)
3. Adicionar templating email profissional

---

## 🖥️ app/login/page.tsx

### 🔴 CRÍTICO: Armazenamento de Dados Sensíveis em localStorage
**Linhas 107-108:**
```typescript
localStorage.setItem(sessionStorageKey, normalizedSessionUser.email);
localStorage.setItem(userStorageKey, JSON.stringify(normalizedSessionUser));
```

**Vulnerabilidades:**
1. localStorage persistente (7+ dias)
2. Não encriptado
3. Vulnerável a XSS
4. Expõe email publicamente
5. Não sincroniza com servidor

**SOLUÇÃO CRÍTICA:**
```typescript
// Opção 1: Usar sessionStorage (apaga ao fechar browser)
sessionStorage.setItem(sessionStorageKey, normalizedSessionUser.email);

// Opção 2: Não armazenar - confiar em cookie HTTP-only
// Remove localStorage completamente
// Cliente valida acessando /api/user

// Opção 3: Encriptar dados em localStorage
import { encrypt, decrypt } from "@/lib/crypto";
const encrypted = encrypt(JSON.stringify(normalizedSessionUser), encryptionKey);
localStorage.setItem(userStorageKey, encrypted);
```

### Problema 2: Sem Validação de URL Parameter
**Linhas 51-56:**
```typescript
if (urlParameters.get("registered") === "1") {
```
Sem validação, alguém pode meter qualquer string

**Fix:**
```typescript
const registered = urlParameters.get("registered");
if (registered === "1") {
  // ... resto
}
```

---

## 📊 app/dashboard/page.tsx

### Problema 1: Carregamento em Sequência vs Paralelo
**Linhas 211-230:**
```typescript
loadProfile();      // 10s timeout
loadCourseProgress(); // 5s timeout
// Carregamento sequencial = 15s total!
```

**Fix:**
```typescript
useEffect(() => {
  await Promise.allSettled([
    loadProfile(),
    loadCourseProgress(),
  ]);
}, [router]);
```

### Problema 2: Timeout Values Inconsistentes
**Linha 176:** `10000ms` (profile)
**Linha 215:** `5000ms` (course)

**Fix:**
```typescript
const FETCH_TIMEOUT_PROFILE = 10000;
const FETCH_TIMEOUT_COURSE = 5000;
```

### 🔴 CRÍTICO: Armazenamento de NIF em localStorage
**Linhas 204, 308:**
```typescript
localStorage.setItem(userStorageKey, JSON.stringify(normalizedProfile));
// Contém NIF e dados sensíveis!
```

**Mesmo problema que login.tsx**

### Problema 3: Sem Validação de Data de Nascimento
**Linhas 456-459:**
```typescript
<input
  type="date"
  value={profile.birthDate}
  // Sem validação de idade mínima
/>
```

### Problema 4: Sem Proteção contra CSRF
**Linha 274:**
```typescript
const response = await fetch("/api/user", {
  method: "PUT",
  // Sem CSRF token
```

---

## 📱 app/components/HeaderActions.tsx

### Verificar Autenticação
Depende apenas de localStorage - inseguro se localStorage for comprometido

**Fix:**
```typescript
// Validar sempre contra servidor
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  fetch("/api/user")
    .then(res => setIsAuthenticated(res.ok))
    .catch(() => setIsAuthenticated(false));
}, []);
```

---

## 📝 RESUMO POR PRIORIDADE

### CRÍTICO (Hoje)
- ❌ localStorage com dados sensíveis (3 ficheiros)
- ❌ Sem rate limiting em auth (2 ficheiros)
- ❌ Sem CSRF protection (todo projeto)
- ❌ Sem validação força password

### ALTO (Esta Semana)
- ⚠️ Logging de auditoria
- ⚠️ Validação input completa
- ⚠️ Timeout/Promise.all otimização

### MÉDIO (Próximas Sprints)
- 🟡 Session duration
- 🟡 Email confirmação
- 🟡 API versionamento

---

## 📊 FICHEIROS QUE PRECISAM MAIOR ATENÇÃO

1. ⚠️ `app/login/page.tsx` - CRÍTICO
2. ⚠️ `app/dashboard/page.tsx` - CRÍTICO
3. 🔴 `app/api/auth/login/route.ts` - ALTO
4. 🔴 `app/api/auth/register/route.ts` - ALTO
5. 🟠 `app/api/user/route.ts` - MÉDIO-ALTO


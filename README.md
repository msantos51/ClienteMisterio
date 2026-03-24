# Cliente Mistério

Plataforma online para o único curso de Cliente Mistério em Portugal. Os utilizadores aprendem a tornar-se avaliadores profissionais de serviços — de forma discreta, metódica e remunerada.

## Sobre o Projeto

**Cliente Mistério** é uma aplicação web full-stack que permite:

- Aceder a um curso completo de 10 módulos sobre como ser Cliente Mistério
- Registar conta, fazer login e gerir perfil
- Acompanhar o progresso do curso e resultados dos questionários
- Adquirir o acesso ao curso via Stripe (pagamento único de 19,99€)
- Contactar a equipa através de formulário integrado

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Frontend | React 19, TypeScript |
| Estilos | Tailwind CSS 4, fontes customizadas (CreatoDisplay, Basenji) |
| Base de dados | PostgreSQL (`pg`) |
| Autenticação | Sessões HMAC-SHA256 com cookies HTTP-only |
| Pagamentos | Stripe Payment Links |
| Email | Resend API |
| Deploy | Render.com (Node 22) |

## Estrutura do Projeto

```
ClienteMisterio/
├── app/
│   ├── components/         # Componentes reutilizáveis (AppShell, TopNav, Footer, etc.)
│   ├── api/                # Rotas API (auth, user, contact, course)
│   ├── about/              # Página "Sobre"
│   ├── account/            # Registo de conta
│   ├── checkout/           # Redirecionamento para Stripe
│   ├── contact/            # Formulário de contacto
│   ├── curso/              # Curso completo (requer autenticação)
│   ├── dashboard/          # Área do utilizador
│   ├── forgot-password/    # Recuperação de senha
│   ├── login/              # Autenticação
│   ├── o-curso/            # Página pública com estrutura do curso
│   ├── reset-password/     # Redefinição de senha via token
│   ├── termos-e-condicoes/ # Termos legais
│   ├── globals.css         # Estilos globais e variáveis CSS
│   ├── layout.tsx          # Layout raiz com metadados
│   └── loading.tsx         # Estado de carregamento global
├── db/
│   └── schema.sql          # Esquema PostgreSQL (users, contact_messages, course_progress)
├── lib/
│   ├── database.ts         # Pool PostgreSQL com auto-inicialização
│   ├── session.ts          # Gestão de sessões com HMAC-SHA256
│   ├── password.ts         # Hash de senhas com scrypt
│   ├── token.ts            # Tokens para confirmação de email e reset de senha
│   ├── email.ts            # Wrapper da API Resend
│   ├── authEmail.ts        # Templates de email transacional
│   └── admin.ts            # Verificação de permissões de administrador
├── public/                 # Fontes e assets estáticos
├── next.config.ts          # Configuração Next.js (imagens, cache, compressão)
├── render.yaml             # Configuração de deploy no Render
└── package.json
```

## Variáveis de Ambiente

Cria um ficheiro `.env.local` na raiz com as seguintes variáveis:

```env
# Base de dados PostgreSQL
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Segredo da sessão (mínimo 32 caracteres aleatórios)
SESSION_SECRET=um-segredo-muito-longo-e-aleatorio-aqui

# Email de administrador (fica com is_admin=true automaticamente)
ADMIN_EMAIL=admin@exemplo.com

# Resend (envio de emails)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM="Cliente Mistério <noreply@seudominio.com>"

# URL base da aplicação (para links nos emails)
APP_BASE_URL=https://clientemisterio.onrender.com

# Stripe Payment Link
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/xxxxxxxx
```

## Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

A base de dados é inicializada automaticamente na primeira execução (`lib/database.ts` cria as tabelas se não existirem).

## Swagger (Teste no Browser)

Com a aplicação em execução (`npm run dev`), abra: `http://localhost:3000/api-docs`

Esta página carrega o Swagger UI e permite testar os endpoints manualmente no browser.

## Rotas da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/auth/register` | Registo de novo utilizador |
| POST | `/api/auth/login` | Autenticação |
| POST | `/api/auth/logout` | Terminar sessão |
| GET | `/api/auth/confirm-email` | Confirmação de email por token |
| POST | `/api/auth/forgot-password` | Pedido de reset de senha |
| POST | `/api/auth/reset-password` | Redefinir senha com token |
| GET | `/api/user` | Obter perfil do utilizador autenticado |
| PUT | `/api/user` | Atualizar dados de perfil |
| PUT | `/api/user/password` | Alterar senha |
| POST | `/api/contact` | Enviar mensagem de contacto |
| GET | `/api/course/progress` | Progresso do curso do utilizador |

## Segurança

- **Sessões**: tokens HMAC-SHA256 assinados, armazenados em cookies HTTP-only com SameSite=Lax
- **Senhas**: hash com `scrypt` e salt aleatório; comparação timing-safe
- **Tokens de email**: gerados aleatoriamente, guardados em hash (SHA-256) na base de dados
- **SQL**: queries parametrizadas em todos os endpoints (sem risco de SQL injection)
- **Admin**: papel de administrador definido por variável de ambiente e validado na base de dados

## Deploy no Render

O ficheiro `render.yaml` configura o serviço automaticamente:

- **Runtime**: Node 22
- **Build**: `npm install && npm run build`
- **Start**: `npm start`

Configura as variáveis de ambiente no painel do Render antes do primeiro deploy.

## Licença

Todos os direitos reservados © Cliente Mistério. O conteúdo do curso e a plataforma não podem ser reproduzidos ou distribuídos sem autorização expressa.

## Diretrizes de Escrita do Curso

1. Sempre que o conteúdo do curso for apresentado em formato de pontos, cada ideia deve aparecer num parágrafo separado e numerado, em vez de texto corrido.

2. Termos essenciais podem ser destacados com **negrito** para melhorar a leitura e a hierarquia visual do conteúdo.

3. Evitar o uso de emojis, ícones e travessões como marcador de lista para manter uma apresentação mais natural e editorial.

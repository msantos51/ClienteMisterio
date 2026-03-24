/*
 * DESCRIÇÃO DO FICHEIRO: Define a especificação OpenAPI 3.1 utilizada para gerar o Swagger UI da aplicação.
 */

export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Cliente Mistério API",
    version: "1.0.0",
    description:
      "Documentação interativa da API para autenticação, perfil, progresso do curso, contacto e webhook Stripe.",
  },
  servers: [
    {
      url: "/",
      description: "Servidor atual (local ou produção)",
    },
  ],
  tags: [
    { name: "Auth", description: "Registo, login, logout e recuperação de password." },
    { name: "User", description: "Gestão de perfil e palavra-passe." },
    { name: "Admin", description: "Operações administrativas de gestão de acessos." },
    { name: "Course", description: "Gestão de progresso do curso." },
    { name: "Contact", description: "Envio de mensagens de contacto." },
    { name: "Stripe", description: "Integração de webhook Stripe." },
  ],
  components: {
    securitySchemes: {
      sessionCookie: {
        type: "apiKey",
        in: "cookie",
        name: "session",
        description: "Cookie HTTP-only de sessão criado após login.",
      },
    },
    schemas: {
      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
        required: ["message"],
      },
      RegisterRequest: {
        type: "object",
        properties: {
          firstName: { type: "string", example: "João" },
          lastName: { type: "string", example: "Silva" },
          email: { type: "string", format: "email", example: "joao@example.com" },
          password: { type: "string", format: "password", example: "StrongPass123" },
          confirmPassword: { type: "string", format: "password", example: "StrongPass123" },
        },
        required: ["firstName", "lastName", "email", "password", "confirmPassword"],
      },
      LoginRequest: {
        type: "object",
        properties: {
          email: { type: "string", format: "email", example: "joao@example.com" },
          password: { type: "string", format: "password", example: "StrongPass123" },
        },
        required: ["email", "password"],
      },
      ForgotPasswordRequest: {
        type: "object",
        properties: {
          email: { type: "string", format: "email", example: "joao@example.com" },
        },
        required: ["email"],
      },
      ResetPasswordRequest: {
        type: "object",
        properties: {
          token: { type: "string", example: "token-from-email" },
          newPassword: { type: "string", format: "password", example: "NewStrongPass123" },
          confirmPassword: { type: "string", format: "password", example: "NewStrongPass123" },
        },
        required: ["token", "newPassword", "confirmPassword"],
      },
      UserProfileUpdateRequest: {
        type: "object",
        properties: {
          email: { type: "string", format: "email", example: "joao@example.com" },
          firstName: { type: "string", example: "João" },
          lastName: { type: "string", example: "Silva" },
          birthDate: { type: "string", format: "date", example: "1994-04-10" },
          gender: { type: "string", enum: ["male", "female"], example: "male" },
        },
        required: ["email", "firstName", "lastName", "birthDate", "gender"],
      },
      UserPasswordUpdateRequest: {
        type: "object",
        properties: {
          currentPassword: { type: "string", format: "password", example: "OldPass123" },
          newPassword: { type: "string", format: "password", example: "NewPass123" },
          confirmNewPassword: { type: "string", format: "password", example: "NewPass123" },
        },
        required: ["currentPassword", "newPassword", "confirmNewPassword"],
      },
      AdminCourseAccessUpdateRequest: {
        type: "object",
        properties: {
          email: { type: "string", format: "email", example: "joao@example.com" },
          hasCourseAccess: { type: "boolean", example: true },
        },
        required: ["email", "hasCourseAccess"],
      },
      ContactRequest: {
        type: "object",
        properties: {
          name: { type: "string", example: "Maria Santos" },
          email: { type: "string", format: "email", example: "maria@example.com" },
          subject: { type: "string", example: "Dúvida sobre o curso" },
          message: { type: "string", example: "Gostava de saber mais detalhes sobre o módulo 3." },
        },
        required: ["name", "email", "subject", "message"],
      },
      CourseProgressUpsertRequest: {
        type: "object",
        properties: {
          moduleId: { type: "integer", minimum: 1, maximum: 10, example: 1 },
          quizScore: { type: "number", minimum: 0, maximum: 100, example: 85 },
          quizAnswers: {
            type: "object",
            additionalProperties: { type: "number" },
            example: { q1: 2, q2: 1 },
          },
        },
        required: ["moduleId", "quizScore", "quizAnswers"],
      },
    },
  },
  paths: {
    "/api/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Registar novo utilizador",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RegisterRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Conta criada com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "409": { description: "E-mail já registado.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Autenticar utilizador",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Login efetuado com sucesso." },
          "400": { description: "Campos obrigatórios em falta.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "401": { description: "Credenciais inválidas.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/auth/logout": {
      post: {
        tags: ["Auth"],
        summary: "Terminar sessão",
        responses: {
          "200": { description: "Sessão terminada com sucesso." },
        },
      },
    },
    "/api/auth/confirm-email": {
      get: {
        tags: ["Auth"],
        summary: "Confirmar e-mail",
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            schema: { type: "string" },
            description: "Token de confirmação recebido por e-mail.",
          },
        ],
        responses: {
          "307": { description: "Redireciona para página de login com resultado da confirmação." },
        },
      },
    },
    "/api/auth/forgot-password": {
      post: {
        tags: ["Auth"],
        summary: "Pedir recuperação de password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ForgotPasswordRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Resposta neutra por segurança." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/auth/reset-password": {
      post: {
        tags: ["Auth"],
        summary: "Redefinir password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ResetPasswordRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Password atualizada com sucesso." },
          "400": { description: "Token inválido ou dados incorretos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/user": {
      get: {
        tags: ["User"],
        summary: "Obter perfil do utilizador autenticado",
        security: [{ sessionCookie: [] }],
        responses: {
          "200": { description: "Perfil devolvido com sucesso." },
          "401": { description: "Sem sessão válida.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
      put: {
        tags: ["User"],
        summary: "Atualizar perfil do utilizador autenticado",
        security: [{ sessionCookie: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UserProfileUpdateRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Perfil atualizado com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "401": { description: "Sem sessão válida.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "409": { description: "E-mail já em uso.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/user/password": {
      put: {
        tags: ["User"],
        summary: "Atualizar password do utilizador autenticado",
        security: [{ sessionCookie: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UserPasswordUpdateRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Password atualizada com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "401": { description: "Sem sessão válida ou password atual incorreta.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/admin/course-access": {
      put: {
        tags: ["Admin"],
        summary: "Alterar manualmente estado de pagamento/acesso ao curso por utilizador",
        description:
          "Endpoint destinado a administradores para ativar/desativar hasCourseAccess através do e-mail do utilizador.",
        security: [{ sessionCookie: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/AdminCourseAccessUpdateRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Acesso atualizado com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "401": { description: "Sem sessão válida.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "403": { description: "Utilizador sem permissão de administrador.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "404": { description: "Utilizador alvo não encontrado.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/contact": {
      post: {
        tags: ["Contact"],
        summary: "Enviar mensagem de contacto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ContactRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Mensagem processada com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "502": { description: "Mensagem registada mas envio de e-mail falhou." },
          "503": { description: "Modo sandbox do provider de e-mail." },
        },
      },
    },
    "/api/course/progress": {
      get: {
        tags: ["Course"],
        summary: "Consultar progresso do curso",
        security: [{ sessionCookie: [] }],
        responses: {
          "200": { description: "Progresso devolvido com sucesso." },
          "401": { description: "Sem sessão válida.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "403": { description: "Sem acesso ao curso.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
      put: {
        tags: ["Course"],
        summary: "Guardar progresso de módulo",
        security: [{ sessionCookie: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CourseProgressUpsertRequest" },
            },
          },
        },
        responses: {
          "200": { description: "Progresso guardado com sucesso." },
          "400": { description: "Dados inválidos.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "401": { description: "Sem sessão válida.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "403": { description: "Sem acesso ao curso.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
        },
      },
    },
    "/api/stripe/webhook": {
      post: {
        tags: ["Stripe"],
        summary: "Receber eventos do Stripe",
        description:
          "Endpoint técnico para o Stripe. Requer header stripe-signature e payload assinado; normalmente não é usado manualmente pelo browser.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                description: "Payload bruto do Stripe (estrutura varia por evento).",
              },
            },
          },
        },
        responses: {
          "200": { description: "Evento processado." },
          "400": { description: "Assinatura ausente/inválida ou payload incompleto.", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
          "404": { description: "Pagamento sem utilizador associado." },
          "500": { description: "Configuração Stripe incompleta." },
        },
      },
    },
  },
} as const;

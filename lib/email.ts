/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `lib/email.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { Resend } from "resend";

type MailPayload = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

// As quatro variáveis exigidas pelo fluxo de e-mail transacional (Resend + link da app).
// APP_URL não é lida diretamente aqui, mas valida-se em conjunto porque authEmail.ts
// precisa dela para montar o link antes mesmo de chamar sendEmail().
const REQUIRED_EMAIL_ENV_VARS = ["RESEND_API_KEY", "EMAIL_FROM", "EMAIL_REPLY_TO", "APP_URL"] as const;

// Valida a configuração de e-mail assim que o fluxo arranca (construção de link ou envio),
// falhando cedo e de forma explícita em vez de deixar o Resend responder 403 com um from inválido.
export const assertEmailEnv = () => {
  const missing = REQUIRED_EMAIL_ENV_VARS.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(
      `Configuração de e-mail incompleta: defina ${missing.join(", ")} nas variáveis de ambiente.`
    );
  }
};

const getResendConfig = () => {
  // Lê configuração do Resend para envio de e-mails transacionais via API HTTPS.
  assertEmailEnv();

  return {
    apiKey: process.env.RESEND_API_KEY!.trim(),
    fromEmail: process.env.EMAIL_FROM!.trim(),
    replyTo: process.env.EMAIL_REPLY_TO!.trim(),
  };
};

export const sendEmail = async (payload: MailPayload) => {
  // Envia e-mail transacional via API HTTPS do Resend (não usa SMTP, compatível com Render).
  const config = getResendConfig();
  const resend = new Resend(config.apiKey);

  const { data, error } = await resend.emails.send({
    from: config.fromEmail,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    // Mantém o Gmail de suporte como resposta por omissão; chamadas como o
    // formulário de contacto podem substituir por replyTo explícito (ex.: responder ao visitante).
    replyTo: payload.replyTo || config.replyTo,
    ...(payload.text ? { text: payload.text } : {}),
  });

  if (error) {
    // Log no servidor com o detalhe do provider — quem chama nunca deve repetir isto na resposta HTTP.
    console.error("Falha ao enviar e-mail via Resend:", error);
    throw new Error(`Falha ao enviar e-mail via Resend: ${error.message}`);
  }

  return data;
};

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `lib/email.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import nodemailer from "nodemailer";

type MailPayload = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

type GmailConfig = {
  email: string;
  appPassword: string;
  timeoutMs: number;
};

const getGmailConfig = (): GmailConfig => {
  // Lê configuração do Gmail para envio de e-mails transacionais via SMTP.
  const email = process.env.GMAIL_EMAIL?.trim() || "";
  const appPassword = process.env.GMAIL_APP_PASSWORD?.trim() || "";
  const timeoutMs = Number(process.env.EMAIL_TIMEOUT_MS?.trim() || "10000");

  if (!email) {
    throw new Error("GMAIL_EMAIL não está definida para envio de e-mails transacionais.");
  }

  if (!appPassword) {
    throw new Error("GMAIL_APP_PASSWORD não está definida para envio de e-mails transacionais.");
  }

  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error("EMAIL_TIMEOUT_MS inválida.");
  }

  return {
    email,
    appPassword,
    timeoutMs,
  };
};

const getSafeErrorMessage = (error: unknown, fallbackMessage: string) => {
  // Normaliza erros para garantir mensagem útil nos logs e respostas do servidor.
  if (error instanceof Error && error.message.trim()) {
    return error.message.trim();
  }

  return fallbackMessage;
};

export const sendEmail = async (payload: MailPayload) => {
  // Envia e-mail transacional via SMTP do Gmail para verificação de conta e reset de password.
  const config = getGmailConfig();

  // Cria transportador SMTP com configuração do Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.appPassword,
    },
  });

  try {
    // Envia o e-mail com timeout
    const result = await Promise.race([
      transporter.sendMail({
        from: config.email,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
        replyTo: payload.replyTo,
      }),
      new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error(`Timeout ao enviar e-mail após ${config.timeoutMs}ms.`)),
          config.timeoutMs
        )
      ),
    ]);

    return result;
  } catch (error) {
    const message = getSafeErrorMessage(error, "Erro desconhecido durante o envio de e-mail via Gmail.");

    throw new Error(
      `${message} Verifique GMAIL_EMAIL/GMAIL_APP_PASSWORD e permissões da conta. Certifique-se que criou uma "App Password" no Gmail.`
    );
  }
};

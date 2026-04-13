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

const getResendConfig = () => {
  // Lê configuração do Resend para envio de e-mails transacionais via API HTTPS.
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || "";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY não está definida para envio de e-mails transacionais.");
  }

  if (!fromEmail) {
    throw new Error("RESEND_FROM_EMAIL não está definida para envio de e-mails transacionais.");
  }

  return { apiKey, fromEmail };
};

export const sendEmail = async (payload: MailPayload) => {
  // Envia e-mail transacional via API HTTPS do Resend (não usa SMTP — compatível com Render).
  const config = getResendConfig();
  const resend = new Resend(config.apiKey);

  const { data, error } = await resend.emails.send({
    from: config.fromEmail,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    ...(payload.text ? { text: payload.text } : {}),
    ...(payload.replyTo ? { replyTo: payload.replyTo } : {}),
  });

  if (error) {
    throw new Error(`Falha ao enviar e-mail via Resend: ${error.message}`);
  }

  return data;
};

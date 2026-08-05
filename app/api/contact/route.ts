/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/api/contact/route.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { NextResponse } from "next/server";
import { query } from "@/lib/database";
import { sendEmail } from "@/lib/email";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot: campo invisível no formulário — só bots o preenchem. */
  website?: string;
};

/*
 * DESCRIÇÃO: Limitador de taxa em memória por IP (Fase 5, ponto 46). Simples
 * de propósito — este processo Node corre como instância única (não
 * serverless), por isso um Map local já evita o abuso mais comum sem
 * depender de infraestrutura extra (Redis, etc.).
 */
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitHits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX_REQUESTS;
};

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
};

type ContactMessageRow = {
  id: string;
};

const contactRecipient = "clientemisterio.suporte@gmail.com";

const sanitizeText = (value: string) => value.replace(/\s+/g, " ").trim();

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const normalizeContactMessage = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();

const isResendSandboxError = (errorMessage: string) =>
  errorMessage.toLowerCase().includes("you can only send testing emails");

const getSafeErrorMessage = (error: unknown) => {
  // Normaliza mensagens inesperadas para evitar respostas técnicas ao utilizador final.
  if (error instanceof Error && error.message.trim()) {
    return error.message.trim();
  }

  return "Falha inesperada ao processar contacto.";
};

export async function POST(request: Request) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { message: "Demasiados pedidos. Tente novamente dentro de alguns minutos." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Corpo do pedido inválido." },
      { status: 400 },
    );
  }

  // Honeypot preenchido = bot. Responde com sucesso genérico sem processar
  // nada, para não revelar ao bot que foi detetado.
  if (sanitizeText(payload.website || "")) {
    return NextResponse.json({ message: "Mensagem enviada com sucesso para a equipa." });
  }

  const name = sanitizeText(payload.name || "");
  const email = sanitizeText(payload.email || "").toLowerCase();
  const subject = sanitizeText(payload.subject || "");
  const message = normalizeContactMessage(payload.message || "");

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Preencha nome, e-mail, assunto e mensagem para continuar." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Informe um e-mail válido." },
      { status: 400 },
    );
  }

  const contactInsertResult = await query<ContactMessageRow>(
    `insert into contact_messages (
      name,
      email,
      subject,
      message,
      email_delivery_status
     )
     values ($1, $2, $3, $4, 'pending')
     returning id`,
    [name, email, subject, message],
  );

  const contactId = contactInsertResult.rows[0]?.id;

  if (!contactId) {
    return NextResponse.json(
      { message: "Não foi possível registar a sua mensagem. Tente novamente." },
      { status: 500 },
    );
  }

  try {
    await sendEmail({
      to: contactRecipient,
      subject: `[Contacto] ${subject}`,
      replyTo: email,
      text: `Novo contacto recebido\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
      html: `
        <h2>Novo contacto recebido</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    await query(
      "update contact_messages set email_delivery_status = 'sent', email_delivery_error = null where id = $1",
      [contactId],
    );

    return NextResponse.json({
      message: "Mensagem enviada com sucesso para a equipa.",
      reference: contactId,
    });
  } catch (error) {
    const safeMessage = getSafeErrorMessage(error);

    // Regista erro técnico no servidor para facilitar diagnóstico de configuração do provedor.
    console.error("Contact e-mail delivery failed", {
      contactId,
      safeMessage,
      recipient: contactRecipient,
    });

    await query(
      "update contact_messages set email_delivery_status = 'failed', email_delivery_error = $2 where id = $1",
      [contactId, safeMessage],
    );

    if (isResendSandboxError(safeMessage)) {
      return NextResponse.json(
        {
          message:
            "A sua mensagem foi registada, mas o envio para clientemisterio.suporte@gmail.com falhou porque a conta de e-mail está em modo de testes. Verifique a configuração do domínio no Resend.",
          reference: contactId,
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        message:
          "A sua mensagem foi registada, mas não foi possível enviar o e-mail para clientemisterio.suporte@gmail.com neste momento.",
        reference: contactId,
      },
      { status: 502 },
    );
  }
}

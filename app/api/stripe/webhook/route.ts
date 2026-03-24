/*
 * DESCRIÇÃO DO FICHEIRO: Webhook do Stripe para libertar acesso ao curso após pagamento confirmado.
 */

import Stripe from "stripe";
import { NextResponse } from "next/server";

import { query } from "@/lib/database";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const stripeClient = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-04-10",
    })
  : null;

const getPaymentIntentId = (paymentIntent: string | Stripe.PaymentIntent | null): string | null => {
  // Extrai o ID do Payment Intent independentemente do formato devolvido pelo evento.
  if (!paymentIntent) {
    return null;
  }

  if (typeof paymentIntent === "string") {
    return paymentIntent;
  }

  return paymentIntent.id;
};

const grantCourseAccessByEmail = async (payload: {
  eventId: string;
  checkoutSessionId: string;
  paymentIntentId: string | null;
  customerEmail: string;
  amountTotal: number;
  currency: string;
}) => {
  // Atualiza o utilizador e regista a compra de forma idempotente para evitar duplicações.
  const userResult = await query<{ id: string }>(
    "select id from users where lower(email) = $1 limit 1",
    [payload.customerEmail.toLowerCase()]
  );

  const userId = userResult.rows[0]?.id;

  if (!userId) {
    throw new Error("USER_NOT_FOUND_FOR_PAID_EMAIL");
  }

  await query(
    `insert into course_purchases (
      user_id,
      stripe_event_id,
      stripe_checkout_session_id,
      stripe_payment_intent_id,
      stripe_customer_email,
      amount_total,
      currency
    )
    values ($1, $2, $3, $4, $5, $6, $7)
    on conflict (stripe_event_id)
    do nothing`,
    [
      userId,
      payload.eventId,
      payload.checkoutSessionId,
      payload.paymentIntentId,
      payload.customerEmail,
      payload.amountTotal,
      payload.currency,
    ]
  );

  await query(
    `update users
     set has_course_access = true,
         course_access_granted_at = coalesce(course_access_granted_at, now())
     where id = $1`,
    [userId]
  );
};

export const POST = async (request: Request) => {
  if (!stripeClient || !stripeWebhookSecret) {
    return NextResponse.json(
      { message: "Configuração do Stripe incompleta para processar webhook." },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ message: "Assinatura Stripe ausente." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;

  try {
    // Valida assinatura do webhook para garantir origem legítima do Stripe.
    event = stripeClient.webhooks.constructEvent(rawBody, signature, stripeWebhookSecret);
  } catch {
    return NextResponse.json({ message: "Webhook Stripe inválido." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const customerEmail = session.customer_details?.email?.trim().toLowerCase();
      const amountTotal = session.amount_total;
      const currency = session.currency;

      if (!customerEmail || amountTotal === null || !currency) {
        return NextResponse.json(
          { message: "Dados do pagamento incompletos para ativar acesso." },
          { status: 400 }
        );
      }

      try {
        await grantCourseAccessByEmail({
          eventId: event.id,
          checkoutSessionId: session.id,
          paymentIntentId: getPaymentIntentId(session.payment_intent),
          customerEmail,
          amountTotal,
          currency,
        });
      } catch {
        return NextResponse.json(
          { message: "Não foi possível associar pagamento a uma conta existente." },
          { status: 404 }
        );
      }
    }
  }

  return NextResponse.json({ received: true });
};

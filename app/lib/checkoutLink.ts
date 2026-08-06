/*
 * DESCRIÇÃO DO FICHEIRO: Constrói o URL do Payment Link do Stripe já associado à conta autenticada.
 */

type CheckoutUser = {
  id: string;
  email: string;
};

export const buildCheckoutUrl = (paymentLink: string, user: CheckoutUser): string => {
  // client_reference_id liga o pagamento à conta de forma fiável no webhook — o e-mail
  // escrito no checkout do Stripe pode ser diferente do e-mail da conta.
  const url = new URL(paymentLink);
  url.searchParams.set("client_reference_id", user.id);
  url.searchParams.set("prefilled_email", user.email);
  return url.toString();
};

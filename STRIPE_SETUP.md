# Configuração do Stripe Payment Link

Este documento descreve como configurar o Stripe Payment Link no seu site.

## Passo 1: Configurar as Chaves do Stripe

1. Acesse [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copie sua **Publishable key** (começa com `pk_`)
3. Copie sua **Secret key** (começa com `sk_`)
4. No arquivo `.env.local`, substitua:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
   STRIPE_SECRET_KEY=sk_live_your_secret_key_here
   ```

## Passo 2: Criar o Payment Link no Stripe

1. Acesse [Stripe Products](https://dashboard.stripe.com/products)
2. Clique em "Add product"
3. Preencha os detalhes:
   - **Name**: "Cliente Mistério - Curso Completo"
   - **Description**: Descrição do curso
   - **Pricing**: Defina o preço
   - **Billing period**: Selecione "One-time" ou "Recurring"
4. Clique em "Create product"
5. Na página do produto, clique em "Create payment link"
6. Configure as opções de pagamento
7. Copie o URL do payment link (exemplo: `https://buy.stripe.com/aeu1234567890`)

## Passo 3: Configurar o Payment Link no Site

1. No arquivo `.env.local`, substitua:
   ```
   NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE
   ```

## Onde o Botão Aparece

O botão "Comprar Curso" agora aparece em:
- **Página inicial** (`/`) - ao lado de "Começa já"
- **Página do Curso** (`/o-curso`) - como opção para não membros
- **Página de checkout** (`/checkout`) - redireciona diretamente para o Stripe

## Componente CheckoutButton

Você pode usar o componente `CheckoutButton` em qualquer lugar:

```tsx
import CheckoutButton from "./components/CheckoutButton";

export default function MyPage() {
  return (
    <CheckoutButton
      label="Comprar Agora"
      variant="primary"
    />
  );
}
```

### Props Disponíveis

- `label` (string): Texto do botão (padrão: "Comprar Curso")
- `className` (string): Classes CSS adicionais
- `variant` (string): "primary" ou "secondary" (padrão: "primary")

## Teste em Modo de Desenvolvimento

1. Rode o servidor: `npm run dev`
2. Acesse `http://localhost:3000`
3. Clique no botão "Comprar Curso"
4. Você será redirecionado para o Stripe Payment Link

## Notas de Segurança

- **Nunca** commit a chave secreta do Stripe no repositório
- O arquivo `.env.local` está no `.gitignore` por padrão
- Use sempre as chaves de **produção** após testar

## Recursos Adicionais

- [Stripe Payment Links Documentation](https://stripe.com/docs/payments/payment-links)
- [Stripe Dashboard](https://dashboard.stripe.com)

/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `lib/authEmail.ts` no projeto, incluindo as responsabilidades principais desta unidade.
 */

import { getAppBaseUrl } from "./appUrl";
import { assertEmailEnv } from "./email";

const resolveAppBaseUrl = () => {
  // Valida a configuração de e-mail (inclui APP_URL) antes de montar qualquer link.
  assertEmailEnv();

  return getAppBaseUrl();
};

const createLayout = (
  appBaseUrl: string,
  title: string,
  description: string,
  buttonLabel: string,
  buttonUrl: string
) => {
  // Gera HTML padronizado para e-mails de autenticação com as cores da marca
  // (roxo — ver STYLEGUIDE.md) em vez de um template genérico vermelho/cinza.
  // Tabela para o botão em vez de <a> com background direto: é o padrão
  // "bulletproof button", o único jeito fiável de pintar o fundo do CTA no
  // Outlook desktop (motor Word), que ignora background em <a>/<div>.
  return `
    <div style="background: #f3f1fb; padding: 40px 16px; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(90, 61, 199, 0.12);">
        <div style="height: 6px; line-height: 0; font-size: 0; background-color: #6a4ade;">&nbsp;</div>
        <div style="padding: 40px 36px;">
          <img
            src="${appBaseUrl}/icon-512.png"
            width="44"
            height="44"
            alt="Cliente Mistério"
            style="display: block; width: 44px; height: 44px; border-radius: 10px; margin-bottom: 20px;"
          />
          <h1 style="font-size: 22px; line-height: 1.3; margin: 0 0 12px; color: #141416; font-weight: 700;">${title}</h1>
          <p style="font-size: 15px; line-height: 1.6; margin: 0 0 28px; color: #4d4d55;">${description}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 28px;">
            <tr>
              <td style="border-radius: 6px; background-color: #6a4ade;">
                <a
                  href="${buttonUrl}"
                  style="display: inline-block; padding: 14px 28px; font-size: 15px; font-weight: 700; color: #ffffff; text-decoration: none; font-family: Arial, Helvetica, sans-serif;"
                >${buttonLabel}</a>
              </td>
            </tr>
          </table>
          <p style="font-size: 13px; color: #74747e; margin: 0; line-height: 1.5;">
            Se o botão não funcionar, copie e cole este link no browser:<br />
            <a href="${buttonUrl}" style="color: #6a4ade; word-break: break-all;">${buttonUrl}</a>
          </p>
        </div>
      </div>
      <p style="max-width: 560px; margin: 20px auto 0; padding: 0 16px; text-align: center; font-size: 12px; color: #9a94ad;">
        Cliente Mistério · <a href="${appBaseUrl}" style="color: #9a94ad;">clientemisterio.com</a>
      </p>
    </div>
  `;
};

export const createEmailConfirmationTemplate = (token: string) => {
  // Monta o conteúdo do e-mail de confirmação de conta para ativar o primeiro acesso.
  const appBaseUrl = resolveAppBaseUrl();
  const confirmationUrl = `${appBaseUrl}/api/auth/confirm-email?token=${encodeURIComponent(token)}`;

  return {
    subject: "Confirmação de conta - Cliente Mistério",
    html: createLayout(
      appBaseUrl,
      "Confirme a sua conta",
      "Obrigado pelo registo. Para concluir a criação da conta e poder iniciar sessão, confirme o seu e-mail.",
      "Confirmar conta",
      confirmationUrl
    ),
  };
};

export const createPasswordResetTemplate = (token: string) => {
  // Monta o conteúdo do e-mail de reposição de palavra-passe com validade limitada.
  const appBaseUrl = resolveAppBaseUrl();
  const resetUrl = `${appBaseUrl}/reset-password?token=${encodeURIComponent(token)}`;

  return {
    subject: "Reposição de password - Cliente Mistério",
    html: createLayout(
      appBaseUrl,
      "Reposição de password",
      "Recebemos um pedido para redefinir a sua password. Clique no botão abaixo para criar uma nova password.",
      "Redefinir password",
      resetUrl
    ),
  };
};

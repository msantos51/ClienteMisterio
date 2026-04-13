# 📧 Configuração de Email com Gmail

Este guia explica como configurar o sistema de envio de emails para verificação de conta e reset de password usando a conta Gmail do negócio.

## 🔑 Passo 1: Habilitar 2-Step Verification (Verificação em 2 Passos)

Para usar uma "App Password" (senha de aplicação), o Gmail requer que a verificação em 2 passos esteja ativada:

1. Aceda à sua [Conta Google](https://myaccount.google.com/)
2. No menu esquerdo, clique em **Security** (Segurança)
3. Procure por **2-Step Verification** e clique em **Get Started**
4. Siga o processo para ativar (vai receber códigos via SMS ou email)

## 🔐 Passo 2: Criar App Password

1. Retorne a [Conta Google](https://myaccount.google.com/) → **Security**
2. Procure por **App passwords** (apenas visível se 2-Step está ativo)
3. Selecione:
   - App: **Mail**
   - Device: **Windows/Linux/Mac** (ou o seu sistema)
4. Google vai gerar uma **senha de 16 caracteres** (ex: `abcd efgh ijkl mnop`)
5. Copie esta senha (sem espaços)

## 🌐 Passo 3: Configurar Variáveis de Ambiente no Render

No dashboard do Render:

1. Aceda ao seu serviço Web
2. Vá para **Environment**
3. Adicione as seguintes variáveis:

```
GMAIL_EMAIL=clientemisterio.suporte@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
EMAIL_TIMEOUT_MS=10000
```

**Nota:** A senha deve ser os 16 caracteres sem espaços.

## ✅ Verificação

O sistema agora vai:

- **Enviar email de confirmação** quando um utilizador se regista
- **Enviar email de reset de password** quando clica em "Esqueceu password"
- O utilizador precisa confirmar o email antes de poder usar a conta

## 🐛 Troubleshooting

### "GMAIL_EMAIL não está definida"
- Verifique se adicionou a variável no Render
- Reinicie o serviço após adicionar

### "GMAIL_APP_PASSWORD não está definida"
- Certifique-se que criou a App Password no Gmail
- A senha tem 16 caracteres (sem espaços)

### "Erro 535: Username and Password not accepted"
- Verifique que a App Password está correta
- Certifique-se que 2-Step Verification está ativado
- Aguarde alguns minutos após criar a senha

### Emails não são enviados
- Verifique os logs no Render (Logs tab)
- Confirme que `GMAIL_EMAIL` é exatamente `clientemisterio.suporte@gmail.com`

## 📝 Notas Importantes

- ✅ A App Password é diferente da password da conta Gmail
- ✅ Use apenas a App Password nos serviços (nunca a password real)
- ✅ Os emails de confirmação expiram em 24 horas
- ✅ Os links de reset de password expiram em 30 minutos
- ✅ Os usuarios que não confirmarem o email podem tentar confirmar novamente a partir do login

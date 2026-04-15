# 📚 Guia de Teste da API - Cliente Mistério

## Acesso à Documentação Interativa

Você tem **duas formas** de acessar a documentação interativa da API:

### **Opção 1: Via Endpoint HTML** (Recomendado)
```
http://localhost:3000/api/docs
```

### **Opção 2: Via Página React**
```
http://localhost:3000/docs
```

---

## ✅ Configuração Necessária

### Para Desenvolvimento (localhost)
Nenhuma configuração necessária! A documentação está ativa por padrão em desenvolvimento.

### Para Produção
Se quiser expor a documentação em produção, adicione na variável de ambiente:
```bash
ENABLE_PUBLIC_API_DOCS=true
```

---

## 🧪 Testando Funcionalidades

### 1. **Registo de Novo Utilizador**
1. Clique em **Auth > POST /api/auth/register**
2. Preencha:
   - `firstName`: João
   - `lastName`: Silva
   - `email`: joao@example.com
   - `password`: StrongPass123
   - `confirmPassword`: StrongPass123
3. Clique em **Try it out** > **Execute**

### 2. **Login**
1. Clique em **Auth > POST /api/auth/login**
2. Preencha:
   - `email`: joao@example.com
   - `password`: StrongPass123
3. Execute

**Importante:** O Swagger UI vai guardar automaticamente o cookie de sessão para próximas requisições autenticadas.

### 3. **Obter Perfil do Utilizador**
1. Clique em **User > GET /api/user**
2. Execute (requer sessão ativa)

### 4. **Atualizar Perfil**
1. Clique em **User > PUT /api/user**
2. Preencha:
   - `firstName`, `lastName`, `birthDate`, `gender`, `email`
3. Execute

### 5. **Alterar Acesso ao Curso (Admin)**
Este endpoint é especial para **administradores**:

1. Primeiro, faça login com um utilizador **admin**
2. Clique em **Admin > PUT /api/admin/course-access**
3. Preencha:
   - `email`: email do utilizador para alterar acesso
   - `hasCourseAccess`: `true` ou `false`
4. Execute

**Para alterar manualmente o pagamento de um utilizador para `true`:**
```json
{
  "email": "joao@example.com",
  "hasCourseAccess": true
}
```

### 6. **Consultar Progresso do Curso**
1. Clique em **Course > GET /api/course/progress**
2. Execute (requer acesso ao curso)

### 7. **Guardar Progresso de Módulo**
1. Clique em **Course > PUT /api/course/progress**
2. Preencha:
   - `moduleId`: 1
   - `quizScore`: 85
   - `quizAnswers`: `{"q1": 2, "q2": 1}`
3. Execute

### 8. **Enviar Mensagem de Contacto**
1. Clique em **Contact > POST /api/contact**
2. Preencha:
   - `name`: Maria Santos
   - `email`: maria@example.com
   - `subject`: Dúvida sobre o curso
   - `message`: Gostava de saber mais sobre o módulo 3
3. Execute

---

## 🔐 Autenticação

### Como Funciona
- Os endpoints com 🔒 **requerem autenticação via cookie de sessão**
- O Swagger UI mantém automaticamente o cookie após login
- Se a sessão expirar, faça login novamente

### Se Perder a Sessão
1. Clique em **Auth > POST /api/auth/logout**
2. Faça login novamente com **Auth > POST /api/auth/login**

---

## 🛠️ Troubleshooting

### "Sem sessão válida" ao testar endpoints autenticados
**Solução:** 
1. Faça login primeiro com **POST /api/auth/login**
2. Aguarde 1-2 segundos
3. Teste o endpoint novamente

### Swagger UI não carrega
1. Certifique-se que o servidor está a correr: `npm run dev`
2. Acesse: `http://localhost:3000/api/docs`
3. Verifique a consola do browser (F12) para erros

### Erro 500 em webhooks Stripe
O webhook requer:
- Header `stripe-signature` válido
- Variáveis de ambiente `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET`

---

## 📋 Checklist de Testes Antes de Publicar

- [ ] **Autenticação**: Registar → Login → Logout
- [ ] **Perfil**: Obter → Atualizar dados
- [ ] **Password**: Alterar password com credenciais atuais
- [ ] **Curso**: Consultar progresso → Guardar progresso de módulo
- [ ] **Admin**: Alterar acesso ao curso via email
- [ ] **Contacto**: Enviar mensagem e receber email
- [ ] **Pagamento**: Simular pagamento com webhook do Stripe

---

## 🚀 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| **POST** | `/api/auth/register` | Registar novo utilizador |
| **POST** | `/api/auth/login` | Autenticar utilizador |
| **POST** | `/api/auth/logout` | Terminar sessão |
| **GET** | `/api/auth/confirm-email` | Confirmar email |
| **POST** | `/api/auth/forgot-password` | Recuperar password |
| **POST** | `/api/auth/reset-password` | Redefinir password |
| **GET** | `/api/user` | Obter perfil autenticado |
| **PUT** | `/api/user` | Atualizar perfil |
| **DELETE** | `/api/user` | Eliminar conta |
| **PUT** | `/api/user/password` | Alterar password |
| **PUT** | `/api/admin/course-access` | Alterar acesso ao curso (admin) |
| **GET** | `/api/course/progress` | Consultar progresso |
| **PUT** | `/api/course/progress` | Guardar progresso |
| **POST** | `/api/contact` | Enviar contacto |
| **POST** | `/api/stripe/webhook` | Webhook Stripe |

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do servidor: `npm run dev`
2. Verifique a consola do browser (F12)
3. Certifique-se que todas as variáveis de ambiente estão configuradas


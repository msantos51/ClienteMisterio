export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Navigation
    nav: {
      home: "Página Inicial",
      about: "Sobre",
      course: "O Curso",
      contact: "Contacto",
      account: "Conta",
      login: "Login",
      logout: "Terminar Sessão",
      dashboard: "Dashboard",
    },
    // Home Page
    home: {
      badge: "O ÚNICO CURSO EM PORTUGAL",
      title: "Quer rendimento extra?",
      titleHighlight: "Cliente Mistério",
      description: "Avalia lojas, restaurantes e produtos ao teu ritmo — e recebe por isso. Certificado incluído.",
      buyButton: "Comprar o curso",
      viewProgram: "Ver o programa",
      originalPrice: "64,99€",
      discountPrice: "24,99€",

      // Stats
      stats: {
        reviews: "Críticas",
        students: "Alunos",
        modules: "Módulos",
        rating: "Avaliação",
      },

      // What's Included Section
      whatIncluded: {
        label: "O QUE INCLUI",
        title: "Tudo o que precisas para começar",
        description: "Do zero à primeira missão paga, com estrutura completa.",
        card1Title: "Aprende ao teu ritmo",
        card1Desc: "100% online, sem horários. Acesso vitalício aos conteúdos e atualizações futuras.",
        card2Title: "Certificado incluído",
        card2Desc: "Documento que comprova a conclusão do curso e as tuas competências como avaliador.",
        card3Title: "Oportunidades reais",
        card3Desc: "Testa produtos, lojas e restaurantes sem qualquer custo — e ainda recebes por cada visita.",
      },

      // How It Works Section
      howWorks: {
        label: "COMO FUNCIONA",
        title: "Do curso à primeira missão",
        description: "Quatro passos simples para começares a ganhar.",
        step1Title: "Compra o curso",
        step1Desc: "Pagamento único de 64,99€ → 24,99€. Acesso imediato a todos os módulos.",
        step2Title: "Aprende",
        step2Desc: "10 módulos práticos do enquadramento ao relacionamento.",
        step3Title: "Regista-te",
        step3Desc: "Acesso às plataformas de mystery shopping em Portugal.",
        step4Title: "Ganhas",
        step4Desc: "De 5 a 150€ por avaliação concluída.",
      },

      // Testimonials Section
      testimonials: {
        label: "TESTEMUNHOS",
        title: "O que dizem os alunos",
        description: "Mais de 500 pessoas já completaram o curso.",
        testimonial1: "Comecei sem saber nada e no primeiro mês já tinha completado 4 missões. Muito prático e direto ao ponto.",
        testimonial2: "Recomendo o valor do curso logo na primeira avaliação. Excelente investimento.",
        testimonial3: "Curso bem estruturado. Ótimas informações e suporte ao longo de todo o processo. Já realizei mais de 10 missões.",
      },

      // CTA Section
      cta: {
        title: "Pronto para começar?",
        description: "Junta-te a mais de 500 alunos que já avaliam e ganham em Portugal.",
        immediateAccess: "Acesso imediato",
        certificateIncluded: "Certificado incluído",
        lifetimeSupport: "Suporte vitalício",
      },
    },

    // About Page
    about: {
      badge: "Sobre a Cliente Mistério",
      title: "Atua com",
      titleHighlight: "método e consistência",
      description1: "Um Cliente Mistério é um cliente \"normal\" contratado para avaliar serviços (atendimento, rapidez, qualidade e cumprimento de regras) e, ao mesmo tempo, gerar rendimento extra por cada avaliação realizada.",
      description2: "Quanto melhor e mais consistente fores, mais convites costumas receber para novas visitas e análises.",
      description3: "Neste curso, vais aprender do básico ao avançado como fazer visitas sem falhas, entregar relatórios profissionais e aumentar a tua taxa de aprovação para transformares isto num extra mensal realista.",
      advantagesTitle: "Vantagens do curso",
      advantagesDesc: "Estrutura prática para melhorares a qualidade das avaliações e aumentares o teu rendimento com consistência.",
      advantage1: "Checklists práticos para não esqueceres detalhes",
      advantage2: "Técnicas para pareceres um cliente normal (sem te denunciares)",
      advantage3: "Relatórios claros e bem avaliados pelas empresas",
      advantage4: "Estratégias para conseguir mais avaliações e aumentar o rendimento",
      courseTitle: "Curso Cliente Mistério",
      price: "24,99€",
      paymentInfo: "Pagamento único · Acesso vitalício",
      feature1: "Acesso completo",
      feature2: "Certificado de conclusão",
      feature3: "Acesso ilimitado",
      feature4: "Curso 100% online, ao teu ritmo",
      feature5: "Oportunidades de avaliação gratuitas",
      buyCourseButton: "Comprar curso",
    },

    // Course Overview Page (o-curso)
    coursePage: {
      badge: "Formação Completa",
      title: "O Curso de<br />Cliente Mistério",
      description: "100% prático e desenhado para iniciantes. Aprende tudo o que precisas para começar a ganhar como Cliente Mistério — dos conceitos básicos às estratégias de carreira avançadas.",
      statsModules: "Módulos",
      statsEarnings: "Por mês",
      statsAccess: "Acesso",
      pricingBadge: "+ Acesso completo",
      pricingTitle: "Curso Cliente Mistério",
      pricingOriginal: "64,99€",
      pricingPrice: "24,99€",
      pricingPayment: "Pagamento único · Acesso vitalício",
      pricingFeature1: "10 módulos completos",
      pricingFeature2: "Testes por módulo",
      pricingFeature3: "Checklists e modelos",
      pricingFeature4: "Certificado de conclusão",
      pricingFeature5: "100% online, ao teu ritmo",
      buyButton: "Comprar o curso",
      paymentSecure: "Pagamento seguro via Stripe · Sem subscrição",
      benefitsTitle: "Por que fazer este curso?",
      benefitBeginners: "Para iniciantes",
      benefitBeginnersDesc: "Explicações simples, sem jargão. Começa do zero e aprende ao teu ritmo.",
      benefitPractical: "Prático e real",
      benefitPracticalDesc: "Casos reais, dicas profissionais e checklists. Tudo que precisas para ganhar já no mês 1.",
      benefitEarn: "Ganha desde já",
      benefitEarnDesc: "5€ a 150€+ por missão. Flexibilidade total. Começa quando quiseres.",
      benefitCareer: "Carreira escalável",
      benefitCareerDesc: "Evolua para missões premium. Quanto melhor, mais ganhas.",
      benefitTests: "Testes por módulo",
      benefitTestsDesc: "Questionários em cada módulo para garantir que compreendeste antes de avançar.",
      benefitCommunity: "Comunidade e apoio",
      benefitCommunityDesc: "Aprende com outros avaliadores. Dicas, truques e suporte contínuo.",
      modulesTitle: "10 Módulos completos",
      ctaText: "Crie uma conta ou inicie sessão para aceder ao curso completo com conteúdo teórico e questionários.",
    },

    // Contact Page
    contact: {
      badge: "Contacto",
      title: "Fala connosco",
      description: "Tens dúvidas sobre o curso, o certificado ou o processo de pagamento? Estamos aqui para ajudar.",
      contactHeader: "Entre em contacto",
      emailLabel: "Email",
      email: "email@clientemisterio.pt",
      phoneLabel: "Telefone",
      phone: "+351 91 234 5678",
      addressLabel: "Morada",
      address: "Rua da Inovação, 10\n1900-001 Lisboa, Portugal",
      responseTime: "Respondemos em até 2 dias úteis",
      formNameLabel: "Nome",
      formNamePlaceholder: "O teu nome",
      formEmailLabel: "Email",
      formEmailPlaceholder: "nome@exemplo.com",
      formSubjectLabel: "Assunto",
      formSubjectPlaceholder: "Qual é o teu assunto?",
      formMessageLabel: "Mensagem",
      formMessagePlaceholder: "Escreve a tua mensagem aqui...",
      formSubmitButton: "Enviar mensagem",
      formSubmittingButton: "A enviar...",
      formSuccessMessage: "Mensagem enviada com sucesso!",
      formErrorMessage: "Não foi possível enviar a sua mensagem.",
      formConnectionError: "Erro de ligação. Tente novamente dentro de alguns instantes.",
    },

    // Footer
    footer: {
      tagline: "O único curso de Cliente Mistério em Portugal.",
      termsLink: "Termos e Condições",
      contactLink: "Contacto",
      copyright: "Cliente Mistério. Todos os direitos reservados.",
    },

    // Login Page
    auth: {
      loginTitle: "Login",
      loginDescription: "Aceda à sua conta",
      emailLabel: "E-mail",
      emailPlaceholder: "nome@exemplo.com",
      passwordLabel: "Senha",
      passwordPlaceholder: "Digite a sua senha",
      forgotPassword: "Esqueceu a senha?",
      loginButton: "Iniciar Sessão",
      loginSubmitting: "A iniciar sessão...",
      noAccount: "Não tem conta?",
      createAccount: "Criar conta",
      loginSuccess: "Conta criada com sucesso. Já pode iniciar sessão.",
      loginSuccessCheckout: "Conta criada com sucesso. Inicia sessão para continuar com a compra.",
      checkoutRequired: "Para proceder com a compra é necessário iniciar sessão ou criar uma conta.",
      loginError: "Não foi possível iniciar sessão. Tente novamente.",

      // Register
      registerTitle: "Criar Conta",
      registerDescription: "Junte-se a mais de 500 alunos",
      firstNameLabel: "Primeiro Nome",
      lastNameLabel: "Último Nome",
      passwordConfirmLabel: "Confirmar Senha",
      termsCheckbox: "Concordo com os",
      termsLink: "Termos e Condições",
      registerButton: "Criar Conta",
      registerSubmitting: "A criar conta...",
      alreadyHaveAccount: "Já tem conta?",
      goToLogin: "Ir para Login",
      registrationError: "Não foi possível criar a conta. Tente novamente.",

      // Forgot Password
      forgotPasswordTitle: "Recuperar Senha",
      forgotPasswordDesc: "Digite o seu email para receber instruções.",
      resetButton: "Enviar Email de Recuperação",
      resetSubmitting: "A enviar...",
      resetSuccess: "Verifique seu email para instruções de recuperação.",
      resetError: "Não foi possível processar o seu pedido.",

      // Reset Password
      resetPasswordTitle: "Definir Nova Senha",
      newPasswordLabel: "Nova Senha",
      confirmPasswordLabel: "Confirmar Senha",
      resetPasswordButton: "Definir Senha",
      resetPasswordSubmitting: "A definir senha...",
      resetPasswordSuccess: "Senha definida com sucesso. Pode agora iniciar sessão.",
      resetPasswordError: "Não foi possível definir a senha.",
    },

    // Checkout
    checkout: {
      title: "Finalizar Compra",
      coursePrice: "Curso Cliente Mistério",
      totalPrice: "Preço Total",
      buyNowButton: "Comprar Agora",
      buyingButton: "A processar...",
      loginRequired: "É necessário fazer login para continuar.",
    },

    // Dashboard
    dashboard: {
      title: "Dashboard",
      welcome: "Bem-vindo",
      profile: "Perfil",
      courseProgress: "Progresso do Curso",
      earnings: "Ganhos",
      completedModules: "Módulos Completados",
      activeEvaluations: "Avaliações Ativas",
      totalEarnings: "Total de Ganhos",
    },

    // Terms and Conditions
    terms: {
      title: "Termos e Condições",
      lastUpdated: "Última atualização:",
    },

    // Three Points Cards
    threePoints: {
      learn: "Aprende",
      learnDesc: "Curso 100% online, sem horários e ao teu ritmo.",
      certificate: "Certificado",
      certificateDesc: "Direito a documento que comprova conclusão do curso.",
      opportunities: "Oportunidades",
      opportunitiesDesc: "Testa produtos, lojas, restaurantes e hotéis sem qualquer custo.",
    },

    // Terms and Conditions
    termsAndConditions: [
      {
        number: "1",
        title: "Aceitação dos Termos",
        content: "Ao aceder, adquirir ou utilizar o curso disponibilizado no portal Cliente Mistério, o utilizador concorda em aceitar integralmente estes termos e condições. Se não concorda com alguma parte destes termos, por favor não prossiga com a compra ou utilização do curso.",
      },
      {
        number: "2",
        title: "Serviço Fornecido",
        content: "O portal Cliente Mistério comercializa um curso online de formação para quem pretende iniciar a atividade de cliente mistério. O curso inclui módulos de aprendizagem, materiais de apoio e, após conclusão, a emissão de um certificado de participação. O serviço é fornecido em formato digital, acessível através da plataforma online.",
      },
      {
        number: "3",
        title: "Certificado de Conclusão",
        content: "Após a conclusão do curso, o utilizador recebe um certificado de participação. O certificado não possui validade legal nem é reconhecido por qualquer entidade reguladora. O certificado serve exclusivamente como comprovativo de que o utilizador frequentou e concluiu o curso. O certificado não substitui qualquer formação profissional certificada, acreditada ou regulamentada por lei.",
      },
      {
        number: "4",
        title: "Compra e Pagamento",
        content: "A aquisição do curso é feita mediante pagamento único, processado de forma segura através da plataforma de pagamentos Stripe. Após confirmação do pagamento, o acesso ao curso é ativado de forma imediata. Não são oferecidos reembolsos após o acesso ao curso ter sido disponibilizado, salvo nos casos previstos na legislação do consumidor em vigor.",
      },
      {
        number: "5",
        title: "Responsabilidades do Utilizador",
        content: "O utilizador é integralmente responsável pela confidencialidade das suas credenciais de acesso e pela segurança da sua conta. O utilizador compromete-se a não partilhar o acesso ao curso com terceiros, não reproduzir ou distribuir os conteúdos, não utilizar a plataforma para fins ilegais e informar imediatamente sobre qualquer uso não autorizado da sua conta.",
      },
      {
        number: "6",
        title: "Propriedade Intelectual",
        content: "Todo o conteúdo presente no portal e no curso, incluindo textos, gráficos, logos, imagens, vídeos e software, é propriedade de Cliente Mistério ou dos seus fornecedores de conteúdo e está protegido pelas leis de propriedade intelectual. O utilizador é autorizado a aceder ao conteúdo apenas para uso pessoal e não comercial.",
      },
      {
        number: "7",
        title: "Limitação de Responsabilidade",
        content: "Cliente Mistério não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do acesso ou uso do portal ou do curso. O portal não garante resultados profissionais ou de emprego decorrentes da frequência do curso.",
      },
      {
        number: "8",
        title: "Privacidade e Dados Pessoais",
        content: "O tratamento de dados pessoais no portal segue a legislação em vigor, nomeadamente o Regulamento Geral sobre a Proteção de Dados (RGPD). Os dados recolhidos são utilizados exclusivamente para a gestão da conta, acesso ao curso e emissão do certificado.",
      },
      {
        number: "9",
        title: "Modificações dos Termos",
        content: "Cliente Mistério reserva-se o direito de modificar estes termos e condições a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação. Recomenda-se a consulta periódica desta página.",
      },
      {
        number: "10",
        title: "Lei Aplicável",
        content: "Estes termos e condições são regidos pelas leis de Portugal. Qualquer disputa decorrente do uso do portal ou da aquisição do curso será resolvida nos tribunais competentes de Portugal.",
      },
      {
        number: "11",
        title: "Contacto",
        content: "Se tiver dúvidas sobre estes termos e condições ou sobre o curso, por favor contacte-nos através da página de contacto do portal.",
      },
    ],

    // Common
    common: {
      loading: "A carregar...",
      error: "Ocorreu um erro",
      tryAgain: "Tentar novamente",
      backHome: "Voltar à Página Inicial",
      logout: "Terminar Sessão",
      profile: "Perfil",
      settings: "Definições",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      course: "Course",
      contact: "Contact",
      account: "Account",
      login: "Login",
      logout: "Sign Out",
      dashboard: "Dashboard",
    },
    // Home Page
    home: {
      badge: "THE ONLY COURSE IN PORTUGAL",
      title: "Want extra income?",
      titleHighlight: "Become a Mystery Shopper",
      description: "Evaluate shops, restaurants and products at your own pace — and get paid for it. Certificate included.",
      buyButton: "Buy the course",
      viewProgram: "View the program",
      originalPrice: "€64.99",
      discountPrice: "€24.99",

      // Stats
      stats: {
        reviews: "Reviews",
        students: "Students",
        modules: "Modules",
        rating: "Rating",
      },

      // What's Included Section
      whatIncluded: {
        label: "WHAT'S INCLUDED",
        title: "Everything you need to get started",
        description: "From zero to your first paid mission, with complete structure.",
        card1Title: "Learn at your own pace",
        card1Desc: "100% online, no schedules. Lifetime access to content and future updates.",
        card2Title: "Certificate included",
        card2Desc: "Document that proves course completion and your skills as an evaluator.",
        card3Title: "Real opportunities",
        card3Desc: "Test products, shops and restaurants at no cost — and still get paid for each visit.",
      },

      // How It Works Section
      howWorks: {
        label: "HOW IT WORKS",
        title: "From course to your first mission",
        description: "Four simple steps to start earning.",
        step1Title: "Buy the course",
        step1Desc: "One-time payment of €64.99 → €24.99. Immediate access to all modules.",
        step2Title: "Learn",
        step2Desc: "10 practical modules from framework to relationship building.",
        step3Title: "Register",
        step3Desc: "Access to mystery shopping platforms in Portugal.",
        step4Title: "Earn",
        step4Desc: "€5 to €150 per completed evaluation.",
      },

      // Testimonials Section
      testimonials: {
        label: "TESTIMONIALS",
        title: "What students say",
        description: "Over 500 people have already completed the course.",
        testimonial1: "I started knowing nothing and completed 4 missions in the first month. Very practical and straightforward.",
        testimonial2: "I recommend the course value from the first evaluation. Excellent investment.",
        testimonial3: "Well-structured course. Great information and support throughout the process. I've already completed over 10 missions.",
      },

      // CTA Section
      cta: {
        title: "Ready to get started?",
        description: "Join over 500 students who are already evaluating and earning in Portugal.",
        immediateAccess: "Immediate access",
        certificateIncluded: "Certificate included",
        lifetimeSupport: "Lifetime support",
      },
    },

    // About Page
    about: {
      badge: "About Mystery Shopping",
      title: "Act with",
      titleHighlight: "method and consistency",
      description1: "A Mystery Shopper is a \"normal\" customer hired to evaluate services (customer service, speed, quality and rule compliance) and, at the same time, earn extra income for each evaluation completed.",
      description2: "The better and more consistent you are, the more invitations you tend to receive for new visits and analyses.",
      description3: "In this course, you will learn from basic to advanced how to make visits without flaws, deliver professional reports and increase your approval rate to turn this into realistic monthly extra income.",
      advantagesTitle: "Course Advantages",
      advantagesDesc: "Practical structure to improve the quality of your evaluations and increase your income consistently.",
      advantage1: "Practical checklists so you don't forget details",
      advantage2: "Techniques to appear as a normal customer (without giving yourself away)",
      advantage3: "Clear reports well-evaluated by companies",
      advantage4: "Strategies to get more evaluations and increase your earnings",
      courseTitle: "Mystery Shopping Course",
      price: "€24.99",
      paymentInfo: "One-time payment · Lifetime access",
      feature1: "Full access",
      feature2: "Certificate of completion",
      feature3: "Unlimited access",
      feature4: "100% online course, at your own pace",
      feature5: "Free evaluation opportunities",
      buyCourseButton: "Buy course",
    },

    // Course Overview Page (o-curso)
    coursePage: {
      badge: "Complete Training",
      title: "The Mystery Shopper<br />Course",
      description: "100% practical and designed for beginners. Learn everything you need to start earning as a Mystery Shopper — from basic concepts to advanced career strategies.",
      statsModules: "Modules",
      statsEarnings: "Per month",
      statsAccess: "Access",
      pricingBadge: "+ Full access",
      pricingTitle: "Mystery Shopper Course",
      pricingOriginal: "€64.99",
      pricingPrice: "€24.99",
      pricingPayment: "One-time payment · Lifetime access",
      pricingFeature1: "10 complete modules",
      pricingFeature2: "Module quizzes",
      pricingFeature3: "Checklists and templates",
      pricingFeature4: "Completion certificate",
      pricingFeature5: "100% online, at your own pace",
      buyButton: "Buy the course",
      paymentSecure: "Secure payment via Stripe · No subscription",
      benefitsTitle: "Why take this course?",
      benefitBeginners: "For beginners",
      benefitBeginnersDesc: "Simple explanations, no jargon. Start from zero and learn at your own pace.",
      benefitPractical: "Practical and real",
      benefitPracticalDesc: "Real cases, professional tips and checklists. Everything you need to earn from month 1.",
      benefitEarn: "Earn right away",
      benefitEarnDesc: "€5 to €150+ per mission. Total flexibility. Start whenever you want.",
      benefitCareer: "Scalable career",
      benefitCareerDesc: "Advance to premium missions. The better you are, the more you earn.",
      benefitTests: "Module quizzes",
      benefitTestsDesc: "Quizzes in each module to ensure you understand before moving forward.",
      benefitCommunity: "Community and support",
      benefitCommunityDesc: "Learn with other evaluators. Tips, tricks and ongoing support.",
      modulesTitle: "10 Complete Modules",
      ctaText: "Create an account or sign in to access the full course with theoretical content and quizzes.",
    },

    // Contact Page
    contact: {
      badge: "Contact",
      title: "Get in touch with us",
      description: "Have questions about the course, certificate, or payment process? We're here to help.",
      contactHeader: "Get in contact",
      emailLabel: "Email",
      email: "email@clientemisterio.pt",
      phoneLabel: "Phone",
      phone: "+351 91 234 5678",
      addressLabel: "Address",
      address: "Innovation Street, 10\n1900-001 Lisbon, Portugal",
      responseTime: "We respond within 2 business days",
      formNameLabel: "Name",
      formNamePlaceholder: "Your name",
      formEmailLabel: "Email",
      formEmailPlaceholder: "name@example.com",
      formSubjectLabel: "Subject",
      formSubjectPlaceholder: "What is your subject?",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Write your message here...",
      formSubmitButton: "Send message",
      formSubmittingButton: "Sending...",
      formSuccessMessage: "Message sent successfully!",
      formErrorMessage: "We were unable to send your message.",
      formConnectionError: "Connection error. Please try again in a few moments.",
    },

    // Footer
    footer: {
      tagline: "The only mystery shopping course in Portugal.",
      termsLink: "Terms and Conditions",
      contactLink: "Contact",
      copyright: "Mystery Shopping. All rights reserved.",
    },

    // Login Page
    auth: {
      loginTitle: "Login",
      loginDescription: "Access your account",
      emailLabel: "Email",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      forgotPassword: "Forgot password?",
      loginButton: "Sign In",
      loginSubmitting: "Signing in...",
      noAccount: "Don't have an account?",
      createAccount: "Create account",
      loginSuccess: "Account created successfully. You can now sign in.",
      loginSuccessCheckout: "Account created successfully. Sign in to continue with your purchase.",
      checkoutRequired: "You need to sign in or create an account to proceed with checkout.",
      loginError: "Unable to sign in. Please try again.",

      // Register
      registerTitle: "Create Account",
      registerDescription: "Join over 500 students",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      passwordConfirmLabel: "Confirm Password",
      termsCheckbox: "I agree with the",
      termsLink: "Terms and Conditions",
      registerButton: "Create Account",
      registerSubmitting: "Creating account...",
      alreadyHaveAccount: "Already have an account?",
      goToLogin: "Go to Login",
      registrationError: "Unable to create account. Please try again.",

      // Forgot Password
      forgotPasswordTitle: "Recover Password",
      forgotPasswordDesc: "Enter your email to receive recovery instructions.",
      resetButton: "Send Recovery Email",
      resetSubmitting: "Sending...",
      resetSuccess: "Check your email for recovery instructions.",
      resetError: "Unable to process your request.",

      // Reset Password
      resetPasswordTitle: "Set New Password",
      newPasswordLabel: "New Password",
      confirmPasswordLabel: "Confirm Password",
      resetPasswordButton: "Set Password",
      resetPasswordSubmitting: "Setting password...",
      resetPasswordSuccess: "Password set successfully. You can now sign in.",
      resetPasswordError: "Unable to set password.",
    },

    // Checkout
    checkout: {
      title: "Checkout",
      coursePrice: "Mystery Shopping Course",
      totalPrice: "Total Price",
      buyNowButton: "Buy Now",
      buyingButton: "Processing...",
      loginRequired: "You need to be logged in to continue.",
    },

    // Dashboard
    dashboard: {
      title: "Dashboard",
      welcome: "Welcome",
      profile: "Profile",
      courseProgress: "Course Progress",
      earnings: "Earnings",
      completedModules: "Completed Modules",
      activeEvaluations: "Active Evaluations",
      totalEarnings: "Total Earnings",
    },

    // Terms and Conditions
    terms: {
      title: "Terms and Conditions",
      lastUpdated: "Last updated:",
    },

    // Three Points Cards
    threePoints: {
      learn: "Learn",
      learnDesc: "100% online course, no schedules and at your own pace.",
      certificate: "Certificate",
      certificateDesc: "Certificate proving course completion.",
      opportunities: "Opportunities",
      opportunitiesDesc: "Test products, shops, restaurants and hotels at no cost.",
    },

    // Terms and Conditions
    termsAndConditions: [
      {
        number: "1",
        title: "Acceptance of Terms",
        content: "By accessing, purchasing, or using the course available on the Mystery Shopper portal, you agree to fully accept these terms and conditions. If you do not agree with any part of these terms, please do not proceed with the purchase or use of the course.",
      },
      {
        number: "2",
        title: "Service Provided",
        content: "The Mystery Shopper portal sells an online training course for those who want to start a mystery shopper activity. The course includes learning modules, support materials, and, upon completion, the issuance of a participation certificate. The service is provided in digital format, accessible through the online platform.",
      },
      {
        number: "3",
        title: "Completion Certificate",
        content: "Upon course completion, the user receives a participation certificate. The certificate has no legal validity and is not recognized by any regulatory entity. The certificate serves solely as proof that the user attended and completed the course. The certificate does not replace any professional, accredited, or legally regulated training.",
      },
      {
        number: "4",
        title: "Purchase and Payment",
        content: "The course is purchased through a one-time payment, securely processed through the Stripe payment platform. After payment confirmation, access to the course is activated immediately. No refunds are offered after the course access has been provided, except in cases provided for in current consumer protection legislation.",
      },
      {
        number: "5",
        title: "User Responsibilities",
        content: "The user is fully responsible for the confidentiality of their access credentials and the security of their account. The user agrees not to share course access with third parties, not to reproduce or distribute content, not to use the platform for illegal purposes, and to immediately report any unauthorized use of their account.",
      },
      {
        number: "6",
        title: "Intellectual Property",
        content: "All content on the portal and in the course, including text, graphics, logos, images, videos, and software, is the property of Mystery Shopper or its content suppliers and is protected by intellectual property laws. The user is authorized to access the content only for personal, non-commercial use.",
      },
      {
        number: "7",
        title: "Limitation of Liability",
        content: "Mystery Shopper will not be liable for direct, indirect, incidental, special, or consequential damages resulting from access to or use of the portal or course. The portal does not guarantee professional or employment results from course attendance.",
      },
      {
        number: "8",
        title: "Privacy and Personal Data",
        content: "The processing of personal data on the portal follows current legislation, namely the General Data Protection Regulation (GDPR). The data collected is used exclusively for account management, course access, and certificate issuance.",
      },
      {
        number: "9",
        title: "Modifications to Terms",
        content: "Mystery Shopper reserves the right to modify these terms and conditions at any time. Changes will be published on this page and will take effect immediately upon publication. We recommend that you periodically review this page.",
      },
      {
        number: "10",
        title: "Applicable Law",
        content: "These terms and conditions are governed by the laws of Portugal. Any dispute arising from the use of the portal or the purchase of the course will be resolved in the competent courts of Portugal.",
      },
      {
        number: "11",
        title: "Contact",
        content: "If you have questions about these terms and conditions or the course, please contact us through the contact page on the portal.",
      },
    ],

    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      tryAgain: "Try again",
      backHome: "Back to Home",
      logout: "Sign Out",
      profile: "Profile",
      settings: "Settings",
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];

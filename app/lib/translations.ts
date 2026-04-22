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

    // Course Overview Page
    courseOverview: {
      badge: "O Curso",
      title: "10 módulos de aprendizagem prática",
      description: "Tudo o que precisas de saber para começar a ganhar como cliente mistério em Portugal.",
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

    // Course Overview Page
    courseOverview: {
      badge: "The Course",
      title: "10 modules of practical learning",
      description: "Everything you need to know to start earning as a mystery shopper in Portugal.",
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

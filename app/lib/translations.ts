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
      title: "Sobre",
      content: "Página sobre o projeto.",
    },

    // Course Page
    course: {
      title: "O Curso",
      content: "Detalhes do curso.",
    },

    // Contact Page
    contact: {
      title: "Contacto",
      content: "Entre em contato conosco.",
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
      title: "About",
      content: "About the project.",
    },

    // Course Page
    course: {
      title: "Course",
      content: "Course details.",
    },

    // Contact Page
    contact: {
      title: "Contact",
      content: "Get in touch with us.",
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];

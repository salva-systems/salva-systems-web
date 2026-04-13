import type { Metadata } from "next";

import { COMPANY, DEFAULT_LOCALE, type Locale } from "@/lib/constants/site";

export type NavItem = {
  href: string;
  label: string;
};

type ServiceItem = {
  title: string;
  description: string;
};

type SolutionLevel = {
  title: string;
  solves: string;
  includes: string;
  forWho: string;
};

type CaseItem = {
  title: string;
  impact: string;
  summary: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type TeamMember = {
  name: string;
  role: string;
  profile: string;
  credibility: string[];
  credentials?: string[];
  subtext: string;
};

type TechnicalPillar = {
  title: string;
  detail: string;
};

type ProblemSignal = {
  title: string;
  detail: string;
};

type WhatNotItem = {
  text: string;
};

type LocaleContent = {
  seo: {
    titleTemplate: string;
    siteTitle: string;
    description: string;
  };
  navigation: NavItem[];
  home: {
    eyebrow: string;
    titleLines: string[];
    subheadline: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
    systemUi: {
      badge: string;
      dailyOpsLabel: string;
      dailyOpsValue: string;
      automationLabel: string;
      automationValue: string;
      flowLabel: string;
      flowItems: string[];
    };
  };
  problem: {
    headline: string;
    intro: string;
    items: ProblemSignal[];
    consequence: {
      title: string;
      detail: string;
    };
    transition: string;
  };
  whatNot: {
    headline: string;
    intro: string;
    items: WhatNotItem[];
  };
  services: {
    headline: string;
    intro: string;
    items: ServiceItem[];
  };
  solutionLevels: {
    headline: string;
    intro: string;
    labels: {
      solves: string;
      includes: string;
      forWho: string;
    };
    items: SolutionLevel[];
  };
  cases: {
    headline: string;
    intro: string;
    items: CaseItem[];
  };
  team: {
    headline: string;
    intro: string;
    members: TeamMember[];
  };
  technical: {
    headline: string;
    intro: string;
    pillars: TechnicalPillar[];
  };
  faq: {
    headline: string;
    intro: string;
    items: FaqItem[];
  };
  contact: {
    headline: string;
    intro: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      validation: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  footer: {
    rights: string;
  };
};

const content: Record<Locale, LocaleContent> = {
  es: {
    seo: {
      titleTemplate: "%s | Salva Systems",
      siteTitle: "Ingeniería digital orientada a resultados",
      description:
        "Consultoría tecnológica, automatización y plataformas digitales para empresas que necesitan escalar con fiabilidad.",
    },
    navigation: [
      { href: "/", label: "Inicio" },
      { href: "/services", label: "Servicios" },
      { href: "/cases", label: "Casos" },
      { href: "/team", label: "Equipo" },
      { href: "/technical", label: "Tecnología" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contacto" },
    ],
    home: {
      eyebrow: "Para negocios que ya venden, pero quieren operar mejor",
      titleLines: ["Tu negocio no necesita más herramientas.", "Necesita un sistema."],
      subheadline:
        "Diseñamos e implementamos sistemas digitales que organizan tu operación, automatizan procesos y te dan control real sobre tu negocio.",
      support:
        "Desde una página web bien hecha hasta sistemas completos con datos, automatización y seguimiento. Todo conectado.",
      primaryCta: "Analizar mi negocio",
      secondaryCta: "Hablar por WhatsApp",
      trust: "Basado en proyectos reales · Trabajo directo · Enfoque práctico",
      systemUi: {
        badge: "System UI · Operación en control",
        dailyOpsLabel: "Operación diaria",
        dailyOpsValue: "Procesos organizados",
        automationLabel: "Automatización",
        automationValue: "Menos trabajo manual",
        flowLabel: "Flujo conectado",
        flowItems: [
          "Datos centralizados",
          "Seguimiento en tiempo real",
          "Decisiones con contexto",
        ],
      },
    },
    problem: {
      headline: "Si hoy operas con Excel, WhatsApp y tareas manuales, no estás solo.",
      intro:
        "Es una etapa común cuando el negocio crece más rápido que los procesos. El problema aparece cuando ya no puedes ver todo con claridad.",
      items: [
        {
          title: "Todo vive en Excel",
          detail: "Versiones distintas, datos duplicados y dificultad para saber cuál es el archivo correcto.",
        },
        {
          title: "Pedidos por WhatsApp",
          detail: "La información llega rápido, pero se pierde contexto y el seguimiento depende de cada persona.",
        },
        {
          title: "Procesos manuales",
          detail: "Copiar y pegar entre herramientas consume tiempo y aumenta errores en tareas repetitivas.",
        },
        {
          title: "Falta de control",
          detail: "Sin trazabilidad ni estado en tiempo real, decidir se vuelve más lento y más incierto.",
        },
      ],
      consequence: {
        title: "La consecuencia es simple: operas con esfuerzo alto y visibilidad baja.",
        detail:
          "Y cuando no hay visibilidad, cualquier crecimiento añade fricción, retrabajo y más dependencia de apagar urgencias.",
      },
      transition:
        "Por eso el siguiente paso no es sumar más herramientas, sino ordenar la operación en un sistema conectado.",
    },
    whatNot: {
      headline: "Lo que no hacemos",
      intro: "Así nos posicionamos frente a agencias tradicionales y entregas superficiales.",
      items: [
        { text: "No vendemos páginas aisladas" },
        { text: "No hacemos marketing sin estructura" },
        { text: "No usamos plantillas" },
        { text: "No desaparecemos" },
      ],
    },
    services: {
      headline: "Servicios para acelerar entrega sin deuda técnica",
      intro:
        "Acompañamos a equipos de negocio y tecnología desde la estrategia hasta la operación continua.",
      items: [
        {
          title: "Estrategia de producto digital",
          description:
            "Descubrimiento, priorización y roadmap técnico para reducir riesgo en decisiones de inversión.",
        },
        {
          title: "Plataformas web modernas",
          description:
            "Desarrollo con Next.js, integración de APIs y patrones de escalabilidad para alta demanda.",
        },
        {
          title: "Automatización operativa",
          description:
            "Flujos de datos, validaciones y procesos automáticos para eliminar tareas manuales repetitivas.",
        },
        {
          title: "Gobierno y observabilidad",
          description:
            "Métricas, alertado y prácticas de calidad para mantener SLA y trazabilidad en producción.",
        },
      ],
    },
    solutionLevels: {
      headline: "Niveles de solución según tu etapa",
      intro:
        "Cada nivel organiza tu operación con más estructura. Empezamos donde estás hoy y avanzamos con claridad.",
      labels: {
        solves: "Qué resuelve",
        includes: "Qué incluye",
        forWho: "Para quién es",
      },
      items: [
        {
          title: "Presencia Digital",
          solves: "Te da una base profesional para comunicar qué haces, generar confianza y captar oportunidades.",
          includes:
            "Sitio web orientado a conversión, mensaje claro de oferta, formularios de contacto y analítica básica.",
          forWho:
            "Negocios que necesitan una presencia sólida para dejar de depender solo de referencias o mensajes sueltos.",
        },
        {
          title: "Sistema Operativo",
          solves: "Ordena la operación diaria para que el trabajo no dependa de Excel, WhatsApp y seguimiento manual.",
          includes:
            "Flujos de trabajo centralizados, panel operativo, trazabilidad de estados e integraciones clave.",
          forWho:
            "Equipos con volumen creciente que necesitan control, menos retrabajo y procesos consistentes.",
        },
        {
          title: "Sistema de Crecimiento",
          solves: "Convierte la operación en una plataforma lista para escalar con decisiones basadas en datos.",
          includes:
            "Automatizaciones avanzadas, métricas de rendimiento, reportes accionables y mejora continua.",
          forWho:
            "Empresas que ya operan con base digital y quieren acelerar crecimiento con previsibilidad.",
        },
      ],
    },
    cases: {
      headline: "Casos con impacto medible",
      intro: "Resultados obtenidos en sectores regulados, logística y servicios B2B.",
      items: [
        {
          title: "Portal B2B para distribución industrial",
          impact: "-42% en tiempo de ciclo comercial",
          summary:
            "Centralizamos catálogo, cotización y seguimiento en una única plataforma conectada al ERP.",
        },
        {
          title: "Centro de operaciones para red logística",
          impact: "+99.95% de disponibilidad",
          summary:
            "Implementamos arquitectura desacoplada, observabilidad y despliegues progresivos.",
        },
        {
          title: "Backoffice de cumplimiento documental",
          impact: "-68% en incidencias operativas",
          summary:
            "Automatizamos validaciones y flujos de aprobación con trazabilidad completa por auditoría.",
        },
      ],
    },
    team: {
      headline: "Equipo con fortalezas complementarias",
      intro:
        "Combinamos sistemas digitales, operación de negocio e ingeniería aplicada para construir soluciones reales.",
      members: [
        {
          name: "Carlos Sánchez Gutiérrez",
          role: "Digital Systems & Data Lead",
          profile:
            "Diseña, construye e integra sistemas digitales con enfoque en operación, datos y automatización.",
          credibility: [
            "CEMEX · Data Science Intern (plataformas globales de datos)",
            "Santander · Plataforma de analítica operativa",
            "IEEE · Sistema con IA + IoT",
          ],
          credentials: [
            "Oracle Cloud Infrastructure · Data Platform · AI Foundations",
            "Scrum Master (CSM) · Product Owner",
            "English C1",
          ],
          subtext: "Ingeniería en Tecnologías Computacionales · Tecnológico de Monterrey",
        },
        {
          name: "Lehi Salvador Rangel Cárdenas",
          role: "Business & Operations Lead",
          profile:
            "Aterriza soluciones conectando tecnología con la operación del negocio.",
          credibility: [
            "Sabor a Mi · Operación de negocio familiar",
            "Cooper / T. Smith · Experiencia empresarial",
            "Salva Exclusive Caps · Emprendimiento",
          ],
          subtext: "Ingeniería Industrial · Tecnológico de Monterrey",
        },
        {
          name: "Maximiliano Lozano Suárez",
          role: "Engineering & Innovation Lead",
          profile:
            "Aporta profundidad técnica, estructura de ingeniería e innovación aplicada en proyectos de alto nivel.",
          credibility: [
            "Líder del Mañana · Tec de Monterrey (beca de excelencia académica y liderazgo)",
            "McGill University · Estancia de investigación (Canadá)",
            "Degas Café · Proyecto sostenible",
            "LARC & LARS 2025 · Competencias internacionales",
            "IPECO · Maintenance Intern",
          ],
          subtext: "Ingeniería en Mecatrónica · Tecnológico de Monterrey",
        },
      ],
    },
    technical: {
      headline: "Base técnica preparada para crecer",
      intro:
        "Nuestras decisiones de arquitectura priorizan mantenibilidad, seguridad y velocidad de entrega.",
      pillars: [
        {
          title: "App Router y Server Components",
          detail:
            "Separación clara entre renderizado servidor/cliente para mejorar rendimiento y coste operativo.",
        },
        {
          title: "Diseño modular",
          detail:
            "Componentes reutilizables, límites explícitos entre dominios y bajo acoplamiento.",
        },
        {
          title: "Calidad automatizada",
          detail:
            "Validaciones de tipo estrictas, linting y pipelines de build para prevenir regresiones.",
        },
      ],
    },
    faq: {
      headline: "Preguntas frecuentes",
      intro: "Respuestas rápidas para equipos que evalúan iniciar una colaboración.",
      items: [
        {
          question: "¿Trabajáis con equipos internos?",
          answer:
            "Sí. Podemos integrarnos con tu equipo actual o liderar una célula externa coordinada.",
        },
        {
          question: "¿En cuánto tiempo se ve impacto?",
          answer:
            "Normalmente en las primeras 4-6 semanas entregamos mejoras operativas visibles.",
        },
        {
          question: "¿Incluís soporte tras lanzamiento?",
          answer:
            "Sí, ofrecemos operación continua, evolución funcional y soporte técnico por SLA.",
        },
      ],
    },
    contact: {
      headline: "Conversemos sobre tu operación digital",
      intro:
        "Cuéntanos tu contexto y te proponemos un plan de acción realista en menos de 48 horas.",
      form: {
        name: "Nombre",
        email: "Correo corporativo",
        company: "Empresa",
        message: "Objetivo y contexto",
        submit: "Enviar solicitud",
        success: "Gracias. Hemos recibido tu solicitud y te contactaremos pronto.",
        validation: {
          name: "Indica tu nombre",
          email: "Introduce un correo válido",
          message: "Explica brevemente el objetivo",
        },
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    seo: {
      titleTemplate: "%s | Salva Systems",
      siteTitle: "Digital engineering focused on business outcomes",
      description:
        "Technology consulting, automation, and digital platforms for organizations that need reliable scale.",
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/cases", label: "Cases" },
      { href: "/team", label: "Team" },
      { href: "/technical", label: "Technical" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
    home: {
      eyebrow: "Architecture, product, and operations in one delivery unit",
      titleLines: ["We build resilient web systems", "for mission-critical operations"],
      subheadline:
        "We design, implement, and operate Next.js platforms and connected services with strong performance and reliability standards.",
      support:
        "From a high-performing website to full systems with data, automation, and follow-up workflows. Everything connected.",
      primaryCta: "Request assessment",
      secondaryCta: "Chat on WhatsApp",
      trust: "Based on real projects · Direct collaboration · Practical execution",
      systemUi: {
        badge: "System UI · Operations in control",
        dailyOpsLabel: "Daily operations",
        dailyOpsValue: "Organized workflows",
        automationLabel: "Automation",
        automationValue: "Less manual work",
        flowLabel: "Connected flow",
        flowItems: ["Centralized data", "Real-time tracking", "Decisions with context"],
      },
    },
    problem: {
      headline: "If you run operations with Excel, WhatsApp, and manual work, you’re not alone.",
      intro:
        "It is a common stage when the business grows faster than processes. The risk starts when visibility falls behind.",
      items: [
        {
          title: "Everything lives in spreadsheets",
          detail: "Multiple versions, duplicated data, and no clear source of truth for day-to-day decisions.",
        },
        {
          title: "Orders managed in WhatsApp",
          detail: "Communication is quick, but context gets lost and follow-up depends on individual effort.",
        },
        {
          title: "Manual workflows",
          detail: "Copying data between tools slows teams down and creates recurring operational mistakes.",
        },
        {
          title: "Lack of control",
          detail: "Without traceability and real-time status, prioritization and response become reactive.",
        },
      ],
      consequence: {
        title: "The result is straightforward: high effort with low operational visibility.",
        detail:
          "And with low visibility, growth adds friction, rework, and constant urgency handling across the team.",
      },
      transition:
        "That is why the next step is not adding more tools, but aligning operations in one connected system.",
    },
    whatNot: {
      headline: "What we do not do",
      intro:
        "This is how we position ourselves against traditional agencies and shallow one-off deliverables.",
      items: [
        { text: "We do not sell isolated pages" },
        { text: "We do not run marketing without structure" },
        { text: "We do not use templates" },
        { text: "We do not disappear" },
      ],
    },
    services: {
      headline: "Services that increase delivery speed without technical debt",
      intro:
        "We support business and technology teams from strategy through continuous operations.",
      items: [
        {
          title: "Digital product strategy",
          description:
            "Discovery, prioritization, and technical roadmaps that reduce investment risk.",
        },
        {
          title: "Modern web platforms",
          description:
            "Next.js development, API integrations, and scalable patterns for high-demand environments.",
        },
        {
          title: "Operational automation",
          description:
            "Data flows, validation logic, and automation to remove repetitive manual tasks.",
        },
        {
          title: "Governance and observability",
          description:
            "Metrics, alerting, and quality controls to sustain SLA commitments in production.",
        },
      ],
    },
    solutionLevels: {
      headline: "Solution levels by business stage",
      intro:
        "Each level adds clearer structure to operations. We start from your current stage and build forward.",
      labels: {
        solves: "What it solves",
        includes: "What it includes",
        forWho: "Who it is for",
      },
      items: [
        {
          title: "Digital Presence",
          solves:
            "Creates a professional base to communicate your offer clearly, build trust, and capture opportunities.",
          includes:
            "Conversion-focused website, clear value messaging, contact flows, and baseline analytics.",
          forWho:
            "Teams that need a solid online presence to stop relying only on referrals and scattered chats.",
        },
        {
          title: "Operating System",
          solves:
            "Organizes day-to-day execution so operations no longer depend on spreadsheets, chat threads, and manual follow-up.",
          includes:
            "Centralized workflows, operational dashboard, status traceability, and key integrations.",
          forWho:
            "Growing teams that need control, less rework, and consistent execution across people.",
        },
        {
          title: "Growth System",
          solves:
            "Turns operations into a scalable system where decisions are guided by reliable performance data.",
          includes:
            "Advanced automation, performance metrics, actionable reporting, and continuous optimization.",
          forWho:
            "Companies with a digital foundation that want predictable and faster growth.",
        },
      ],
    },
    cases: {
      headline: "Case studies with measurable impact",
      intro: "Outcomes delivered in regulated sectors, logistics, and B2B services.",
      items: [
        {
          title: "B2B portal for industrial distribution",
          impact: "-42% sales cycle time",
          summary:
            "We unified catalog, quoting, and order tracking into a single ERP-connected platform.",
        },
        {
          title: "Operations hub for logistics network",
          impact: "+99.95% availability",
          summary:
            "We implemented decoupled architecture, observability, and progressive deployments.",
        },
        {
          title: "Compliance documentation backoffice",
          impact: "-68% operational incidents",
          summary:
            "We automated validations and approval workflows with complete audit traceability.",
        },
      ],
    },
    team: {
      headline: "Team with complementary strengths",
      intro:
        "We combine digital systems, business operations, and applied engineering to deliver real solutions.",
      members: [
        {
          name: "Carlos Sánchez Gutiérrez",
          role: "Digital Systems & Data Lead",
          profile:
            "Designs, builds, and integrates digital systems focused on operations, data, and automation.",
          credibility: [
            "CEMEX · Data Science Intern (global data platforms)",
            "Santander · Operational analytics platform",
            "IEEE · AI + IoT system",
          ],
          credentials: [
            "Oracle Cloud Infrastructure · Data Platform · AI Foundations",
            "Scrum Master (CSM) · Product Owner",
            "English C1",
          ],
          subtext: "B.S. in Computer Technologies Engineering · Tecnológico de Monterrey",
        },
        {
          name: "Lehi Salvador Rangel Cárdenas",
          role: "Business & Operations Lead",
          profile:
            "Turns ideas into execution by connecting technology with business operations.",
          credibility: [
            "Sabor a Mi · Family business operations",
            "Cooper / T. Smith · Business experience",
            "Salva Exclusive Caps · Entrepreneurship",
          ],
          subtext: "B.S. in Industrial Engineering · Tecnológico de Monterrey",
        },
        {
          name: "Maximiliano Lozano Suárez",
          role: "Engineering & Innovation Lead",
          profile:
            "Brings technical depth, engineering structure, and applied innovation to high-level projects.",
          credibility: [
            "Líder del Mañana · Tec de Monterrey (full scholarship for academic excellence and leadership)",
            "McGill University · Research stay (Canada)",
            "Degas Café · Sustainable project",
            "LARC & LARS 2025 · International competitions",
            "IPECO · Maintenance Intern",
          ],
          subtext: "B.S. in Mechatronics Engineering · Tecnológico de Monterrey",
        },
      ],
    },
    technical: {
      headline: "Technical foundation ready to scale",
      intro:
        "Our architecture decisions prioritize maintainability, security, and delivery speed.",
      pillars: [
        {
          title: "App Router and Server Components",
          detail:
            "Clear client/server rendering boundaries to optimize performance and operating cost.",
        },
        {
          title: "Modular design",
          detail:
            "Reusable components, explicit domain boundaries, and low-coupling composition.",
        },
        {
          title: "Automated quality",
          detail:
            "Strict typing, linting, and build pipelines to prevent regressions before release.",
        },
      ],
    },
    faq: {
      headline: "Frequently asked questions",
      intro: "Quick answers for teams evaluating a collaboration.",
      items: [
        {
          question: "Do you work with internal teams?",
          answer:
            "Yes. We can integrate with your current team or lead an external delivery squad.",
        },
        {
          question: "How soon can we expect impact?",
          answer:
            "In most engagements we deliver visible operational improvements within 4-6 weeks.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes, we provide continuous operations, roadmap evolution, and SLA-backed support.",
        },
      ],
    },
    contact: {
      headline: "Let’s discuss your digital operations",
      intro: "Share your context and we will respond with a concrete plan within 48 hours.",
      form: {
        name: "Name",
        email: "Work email",
        company: "Company",
        message: "Goal and context",
        submit: "Send request",
        success: "Thanks. We received your request and will contact you soon.",
        validation: {
          name: "Please provide your name",
          email: "Please provide a valid email",
          message: "Please describe your objective",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function getContent(locale: Locale = DEFAULT_LOCALE) {
  return content[locale];
}

export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: COMPANY.name,
      locale: "es_ES",
      type: "website",
      url: COMPANY.domain,
    },
    alternates: {
      canonical: COMPANY.domain,
      languages: {
        es: `${COMPANY.domain}`,
        en: `${COMPANY.domain}/en`,
      },
    },
  };
}

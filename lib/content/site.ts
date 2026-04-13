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

type TechnicalItem = {
  title: string;
  detail: string;
};

type TechnicalStackGroup = {
  title: string;
  items: string[];
};

type ProblemSignal = {
  title: string;
  detail: string;
};

type WhatNotItem = {
  text: string;
};

type BackingItem = {
  title: string;
  detail: string;
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
  backing: {
    headline: string;
    intro: string;
    items: BackingItem[];
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
    architectureHeading: string;
    architecturePoints: TechnicalItem[];
    stackHeading: string;
    stackGroups: TechnicalStackGroup[];
    dataApproachHeading: string;
    dataApproach: string[];
    engineeringPrinciplesHeading: string;
    engineeringPrinciples: string[];
    closing: string;
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
      continueWhatsapp: string;
      validation: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  finalCta: {
    title: string;
    subtitle: string;
    steps: string[];
    primaryCta: string;
    secondaryCta: string;
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
        "Diseñamos e implementamos sistemas digitales que ordenan tu operación, reducen errores y te dan más control del negocio.",
      support:
        "La valoración es gratuita. Analizamos cómo operas hoy y te proponemos una solución clara. Podemos hacerlo por llamada, videollamada o incluso por WhatsApp.",
      primaryCta: "Analizar mi negocio",
      secondaryCta: "Hablar por WhatsApp",
      trust: "Casos reales · Salva Systems · Tampico · Monterrey",
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
    backing: {
      headline: "Respaldo técnico y académico",
      intro:
        "Combinamos formación en ingeniería con experiencia práctica para diseñar e implementar sistemas confiables.",
      items: [
        {
          title: "Base de ingeniería",
          detail:
            "Aplicamos fundamentos técnicos para estructurar soluciones mantenibles y orientadas a operación real.",
        },
        {
          title: "Criterio profesional",
          detail:
            "Tomamos decisiones con contexto de negocio y disciplina técnica, evitando promesas exageradas.",
        },
        {
          title: "Calidad verificable",
          detail:
            "Trabajamos con prácticas de validación continua para sostener consistencia y confiabilidad en cada entrega.",
        },
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
            "Desarrollo web con integración de sistemas para que tengas procesos claros e información en tiempo real.",
        },
        {
          title: "Automatización operativa",
          description:
            "Flujos de datos, validaciones y procesos automáticos para eliminar tareas manuales repetitivas.",
        },
        {
          title: "Gobierno y observabilidad",
          description:
            "Indicadores y alertas para tener más control del negocio, menos errores y menos trabajo manual.",
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
          solves: "Convierte la operación en una base clara para crecer con información en tiempo real.",
          includes:
            "Automatizaciones, métricas de rendimiento, reportes accionables y mejora continua.",
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
            "English · C1",
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
          credentials: [],
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
          credentials: [],
          subtext: "Ingeniería en Mecatrónica · Tecnológico de Monterrey",
        },
      ],
    },
    technical: {
      headline: "Cómo construimos sistemas digitales",
      intro:
        "Esta sección está pensada para perfiles técnicos que quieren entender cómo trabajamos realmente.",
      architectureHeading: "Pensamiento de arquitectura",
      architecturePoints: [
        {
          title: "Sistemas por encima de features",
          detail:
            "Diseñamos capacidades completas de operación, no piezas aisladas. Cada funcionalidad se evalúa por su impacto en el sistema completo.",
        },
        {
          title: "Diseño centrado en datos",
          detail:
            "Partimos del modelo de datos y los flujos de información para definir procesos, reglas y APIs con consistencia desde el inicio.",
        },
        {
          title: "Mentalidad de escalabilidad",
          detail:
            "Tomamos decisiones que mantienen rendimiento, mantenibilidad y costos bajo control cuando aumenta el volumen de usuarios y operaciones.",
        },
      ],
      stackHeading: "Stack",
      stackGroups: [
        {
          title: "Frontend",
          items: ["Next.js", "TypeScript"],
        },
        {
          title: "Backend",
          items: ["Supabase", "APIs"],
        },
        {
          title: "Data",
          items: ["SQL", "Modelado de datos", "Pipelines"],
        },
        {
          title: "Cloud",
          items: ["AWS", "Azure"],
        },
      ],
      dataApproachHeading: "Enfoque de datos",
      dataApproach: [
        "Recolectamos datos operativos en los puntos donde realmente se generan eventos críticos.",
        "Estructuramos la información para que el negocio pueda consultar estado, trazabilidad y cuellos de botella sin ambigüedad.",
        "Construimos dashboards orientados a decisiones, no solo a visualización.",
        "Conectamos métricas con acciones concretas para mejorar tiempos, costos y confiabilidad.",
      ],
      engineeringPrinciplesHeading: "Principios de ingeniería",
      engineeringPrinciples: [
        "Modularidad",
        "Escalabilidad",
        "Arquitectura limpia",
        "Decisiones aterrizadas a restricciones reales de tiempo, presupuesto y operación",
      ],
      closing: "We build systems that are meant to operate, not just to exist.",
    },
    faq: {
      headline: "Preguntas frecuentes",
      intro: "Respuestas directas para tomar una decisión con claridad.",
      items: [
        {
          question: "¿Cuánto cuesta?",
          answer:
            "Depende del problema. No trabajamos con precios fijos porque cada sistema es distinto. La valoración inicial es gratuita.",
        },
        {
          question: "¿Solo hacen páginas web?",
          answer:
            "No. Una página es solo el punto de entrada. Nuestro enfoque es construir sistemas completos.",
        },
        {
          question: "¿Cuánto tiempo toma?",
          answer:
            "Desde semanas hasta meses, dependiendo del nivel de solución.",
        },
        {
          question: "¿Trabajan con negocios pequeños?",
          answer: "Sí. De hecho, es donde más impacto generamos.",
        },
        {
          question: "¿Dan soporte después?",
          answer: "Sí. Aseguramos que el sistema funcione en operación real.",
        },
        {
          question: "¿Necesito saber de tecnología?",
          answer: "No. Nosotros traducimos todo a decisiones claras de negocio.",
        },
      ],
    },
    contact: {
      headline: "Conversemos sobre tu operación digital",
      intro:
        "Cuéntanos tu contexto. La valoración es gratuita y te contactaremos en menos de 24 horas.",
      form: {
        name: "Nombre",
        email: "Correo corporativo",
        company: "Empresa",
        message: "Objetivo y contexto",
        submit: "Enviar solicitud",
        success: "Recibimos tu información. Te contactaremos en menos de 24 horas.",
        continueWhatsapp: "Continuar en WhatsApp",
        validation: {
          name: "Indica tu nombre",
          email: "Introduce un correo válido",
          message: "Explica brevemente el objetivo",
        },
      },
    },
    finalCta: {
      title: "La valoración es gratuita.",
      subtitle: "En esta llamada entendemos tu negocio y te proponemos una solución clara.",
      steps: ["Nos cuentas tu situación", "Detectamos problemas", "Te proponemos un sistema"],
      primaryCta: "Analizar mi negocio",
      secondaryCta: "Hablar por WhatsApp",
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
    backing: {
      headline: "Technical and academic backing",
      intro:
        "We combine engineering education with practical experience to design and implement reliable systems.",
      items: [
        {
          title: "Engineering foundation",
          detail:
            "We apply technical fundamentals to structure maintainable solutions built for real operations.",
        },
        {
          title: "Professional judgment",
          detail:
            "We make decisions with business context and technical discipline, avoiding exaggerated claims.",
        },
        {
          title: "Verifiable quality",
          detail:
            "We follow continuous validation practices to maintain consistency and reliability in every delivery.",
        },
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
            "English · C1",
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
          credentials: [],
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
          credentials: [],
          subtext: "B.S. in Mechatronics Engineering · Tecnológico de Monterrey",
        },
      ],
    },
    technical: {
      headline: "How we build digital systems",
      intro:
        "This section is designed for technical profiles who want to understand how we actually work.",
      architectureHeading: "Architecture Thinking",
      architecturePoints: [
        {
          title: "Systems over features",
          detail:
            "We design complete operational capabilities, not isolated pieces. Every feature is evaluated by its impact on the full system.",
        },
        {
          title: "Data-centric design",
          detail:
            "We start from data models and information flows to define processes, rules, and APIs with consistency from day one.",
        },
        {
          title: "Scalability mindset",
          detail:
            "We make decisions that keep performance, maintainability, and costs under control as users and operations grow.",
        },
      ],
      stackHeading: "Stack",
      stackGroups: [
        {
          title: "Frontend",
          items: ["Next.js", "TypeScript"],
        },
        {
          title: "Backend",
          items: ["Supabase", "APIs"],
        },
        {
          title: "Data",
          items: ["SQL", "Data modeling", "Pipelines"],
        },
        {
          title: "Cloud",
          items: ["AWS", "Azure"],
        },
      ],
      dataApproachHeading: "Data Approach",
      dataApproach: [
        "We collect operational data where critical events are actually generated.",
        "We structure information so teams can inspect status, traceability, and bottlenecks without ambiguity.",
        "We build dashboards for decisions, not just visualization.",
        "We connect metrics to concrete actions that improve time, cost, and reliability.",
      ],
      engineeringPrinciplesHeading: "Engineering Principles",
      engineeringPrinciples: [
        "Modularity",
        "Scalability",
        "Clean architecture",
        "Decisions grounded in real constraints of time, budget, and operations",
      ],
      closing: "We build systems that are meant to operate, not just to exist.",
    },
    faq: {
      headline: "Frequently asked questions",
      intro: "Direct answers so you can decide with confidence.",
      items: [
        {
          question: "How much does it cost?",
          answer:
            "It depends on the problem. We do not use fixed pricing because every system is different. The initial assessment is free.",
        },
        {
          question: "Do you only build websites?",
          answer:
            "No. A website is only the entry point. Our focus is building complete systems.",
        },
        {
          question: "How long does it take?",
          answer:
            "From weeks to months, depending on the level of solution.",
        },
        {
          question: "Do you work with small businesses?",
          answer: "Yes. In fact, that is where we often create the biggest impact.",
        },
        {
          question: "Do you provide support after launch?",
          answer: "Yes. We make sure the system works in real operations.",
        },
        {
          question: "Do I need to know technology?",
          answer: "No. We translate everything into clear business decisions.",
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
        continueWhatsapp: "Continue on WhatsApp",
        validation: {
          name: "Please provide your name",
          email: "Please provide a valid email",
          message: "Please describe your objective",
        },
      },
    },
    finalCta: {
      title: "Assessment is free.",
      subtitle: "In this call we understand your business and propose a clear solution.",
      steps: ["You share your situation", "We detect issues", "We propose a system"],
      primaryCta: "Request assessment",
      secondaryCta: "Chat on WhatsApp",
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

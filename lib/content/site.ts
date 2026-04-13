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
};

type TechnicalPillar = {
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
  services: {
    headline: string;
    intro: string;
    items: ServiceItem[];
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
      headline: "Equipo senior multidisciplinar",
      intro:
        "Combinamos liderazgo técnico, experiencia de producto y dominio operativo para ejecutar con foco en negocio.",
      members: [
        {
          name: "Laura Sánchez",
          role: "Directora de Ingeniería",
          profile:
            "Especialista en arquitectura de plataformas y modernización de sistemas heredados.",
        },
        {
          name: "Daniel Ramos",
          role: "Lead Product Strategist",
          profile:
            "Conecta objetivos comerciales con entregables digitales medibles.",
        },
        {
          name: "Marta Pineda",
          role: "Responsable de Operaciones Cloud",
          profile:
            "Diseña prácticas de observabilidad, resiliencia y respuesta a incidentes.",
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
      headline: "Senior multidisciplinary team",
      intro:
        "We combine technical leadership, product expertise, and operations experience.",
      members: [
        {
          name: "Laura Sánchez",
          role: "Engineering Director",
          profile:
            "Specialist in platform architecture and modernization of legacy ecosystems.",
        },
        {
          name: "Daniel Ramos",
          role: "Lead Product Strategist",
          profile:
            "Connects commercial priorities with measurable digital execution.",
        },
        {
          name: "Marta Pineda",
          role: "Cloud Operations Lead",
          profile:
            "Designs observability, resilience, and incident response operating models.",
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

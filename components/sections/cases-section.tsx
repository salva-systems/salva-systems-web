import type { ComponentType } from "react";
import { Building2, Factory, Microscope, Network } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CaseSystem = {
  components: string[];
  logic: string[];
  integration: string[];
};

type CaseStudyItem = {
  title: string;
  context: string;
  problem: string;
  approach: string;
  system: CaseSystem;
  role: string;
  outcome: string;
  credibilityNote: string;
  visual: {
    heading: string;
    pillars: string[];
  };
};

const CREDIBILITY_NOTE = "Nota de credibilidad: caso documentado y contexto verificable.";

const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: "Santander · Plataforma interna de capacitación y documentación",
    context: "Sistema corporativo interno para operación de capacitación y cumplimiento documental.",
    problem:
      "Los procesos de entrenamiento y control documental estaban fragmentados, con seguimiento manual y poca visibilidad para operación y auditoría.",
    approach:
      "Se diseñó una plataforma unificada por módulos para concentrar capacitación, evaluaciones y evidencia documental en un flujo digital trazable.",
    system: {
      components: [
        "Módulo de gestión de usuarios y perfiles operativos",
        "Módulo de cursos, evaluaciones y avance por colaborador",
        "Repositorio documental con control de estatus y vigencia",
      ],
      logic: [
        "Asignación de rutas de capacitación por rol y cumplimiento requerido",
        "Reglas de validación para estatus de documentos y evaluaciones",
        "Trazabilidad de eventos para seguimiento y revisión operativa",
      ],
      integration: [
        "Dashboards internos para monitoreo de avance y pendientes",
        "Componente interactivo en Unity para aprendizaje práctico",
      ],
    },
    role: "Rol principal en arquitectura de base de datos, estructura de información y coordinación técnica del desarrollo en equipo.",
    outcome:
      "Se consolidó la operación en un solo sistema, reduciendo fricción de seguimiento y mejorando la claridad de cumplimiento sin cambiar procesos de negocio de fondo de forma abrupta.",
    credibilityNote: CREDIBILITY_NOTE,
    visual: {
      heading: "Tablero interno",
      pillars: ["Capacitación", "Evaluación", "Documentación"],
    },
  },
  {
    title: "CEMEX · Sistemas de datos para supply chain global",
    context: "Plataformas corporativas de datos en entorno empresarial multinacional.",
    problem:
      "La operación logística requería modelos de datos consistentes entre regiones, con tiempos confiables de actualización para soportar decisiones de planeación y ejecución.",
    approach:
      "Se trabajó sobre pipelines y modelado analítico para estandarizar transformaciones, elevar calidad de datos y habilitar consumo operativo a escala.",
    system: {
      components: [
        "Pipelines de ingesta y transformación para datos logísticos",
        "Modelos analíticos para planeación y seguimiento de supply chain",
        "Capas de consumo para reporteo y análisis operativo",
      ],
      logic: [
        "Validaciones de calidad para consistencia entre fuentes regionales",
        "Orquestación de procesos para cargas recurrentes y trazables",
        "Modelado orientado a métricas de operación y disponibilidad",
      ],
      integration: [
        "Snowflake y Databricks para procesamiento y modelado",
        "Servicios en Azure para ejecución y consumo empresarial",
        "SQL como base de transformación y consulta operacional",
      ],
    },
    role:
      "Contribución técnica en desarrollo de pipelines, modelado de datos y mejora de procesos analíticos dentro de equipos globales.",
    outcome:
      "Se fortalecieron capacidades de datos para operación logística internacional, con mejor estructura para escalar análisis y decisiones sin prometer impactos fuera del alcance del rol.",
    credibilityNote: CREDIBILITY_NOTE,
    visual: {
      heading: "Pipeline global",
      pillars: ["Ingesta", "Modelado", "Consumo"],
    },
  },
  {
    title: "IEEE (NeoGuard) · Monitoreo inteligente neonatal",
    context: "Proyecto académico de investigación aplicada con enfoque en ingeniería clínica.",
    problem:
      "Se necesitaba monitoreo continuo de variables críticas en incubadoras neonatales, con alertamiento oportuno y visualización accesible para personal clínico.",
    approach:
      "Se construyó una solución IoT con captura de señales ambientales y fisiológicas, automatización de alertas y visualización en tiempo real.",
    system: {
      components: [
        "Nodos de sensores para captura continua de variables",
        "Backend de procesamiento y persistencia de eventos",
        "Dashboard para monitoreo de estado y alertas",
      ],
      logic: [
        "Lectura periódica y normalización de señales de sensores",
        "Detección de umbrales y disparo de alertas operativas",
        "Registro histórico para análisis y validación técnica",
      ],
      integration: [
        "Canales de comunicación IoT para transmisión de datos",
        "Interfaz de monitoreo para seguimiento clínico-técnico",
      ],
    },
    role:
      "Participación directa en diseño e implementación técnica del sistema (sensado, procesamiento y visualización), en colaboración con equipo multidisciplinario.",
    outcome:
      "El sistema se validó como prototipo funcional y fue aceptado para publicación/presentación en IEEE LARC-LARS 2025, respaldando su solidez técnica en contexto académico.",
    credibilityNote: CREDIBILITY_NOTE,
    visual: {
      heading: "Monitoreo continuo",
      pillars: ["Sensores", "Alertas", "Dashboard"],
    },
  },
];

const caseIcons = [Building2, Factory, Microscope];

function CaseVisual({
  item,
  icon: IconComponent,
}: {
  item: CaseStudyItem;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-lg border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-3 shadow-glow-soft">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80">{item.visual.heading}</p>
        <IconComponent className="h-4 w-4 text-primary/80" />
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {item.visual.pillars.map((pillar) => (
          <div
            key={pillar}
            className="rounded-md border border-border/50 bg-surface/80 px-2.5 py-2 text-center text-[11px] font-medium text-foreground/90"
          >
            {pillar}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">{label}</p>
      <p className="text-small text-muted-foreground">{children}</p>
    </div>
  );
}

function SystemListColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-border/55 bg-surface/75 p-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/85">{title}</p>
      <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function SystemBlock({ system }: { system: CaseSystem }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <Network className="h-3.5 w-3.5 text-primary/80" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Sistema</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <SystemListColumn title="Componentes" items={system.components} />
        <SystemListColumn title="Lógica" items={system.logic} />
        <SystemListColumn title="Integración" items={system.integration} />
      </div>
    </div>
  );
}

function CaseCard({ item, index }: { item: CaseStudyItem; index: number }) {
  const Icon = caseIcons[index] ?? caseIcons[0];

  return (
    <MotionWrapper delay={index * 0.08}>
      <Card className="group h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-glow-soft">
        <CardHeader className="space-y-4">
          <CaseVisual item={item} icon={Icon} />
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CaseBlock label="Contexto">{item.context}</CaseBlock>
          <CaseBlock label="Problema">{item.problem}</CaseBlock>
          <CaseBlock label="Enfoque">{item.approach}</CaseBlock>
          <SystemBlock system={item.system} />
          <div className="space-y-1.5 border-t border-border/35 pt-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Rol</p>
            <p className="text-small text-foreground/90">{item.role}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Resultado</p>
            <p className="text-small text-foreground/90">{item.outcome}</p>
          </div>
          <p className="text-[11px] text-muted-foreground">{item.credibilityNote}</p>
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}

export function CasePreviewSection() {
  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading
          title="Casos de estudio"
          description="Trabajo en contexto corporativo y académico, documentado con enfoque operativo: problema real, sistema implementado, rol definido y resultados verificables."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((item, index) => (
            <CaseCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <MotionWrapper delay={0.28}>
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-6 shadow-glow-soft">
            <p className="text-body font-medium text-foreground">
              Cada caso describe decisiones de ingeniería en contexto real, sin inflar resultados ni atribuciones.
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export const CasesSection = CasePreviewSection;

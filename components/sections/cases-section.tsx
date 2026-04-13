import { BarChart3, Database, LineChart } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CasePreviewItem = {
  title: string;
  problem: string;
  system: string;
  result: string;
  note?: string;
  visual: {
    heading: string;
    streams: string[];
    checkpoints: string[];
  };
};

const CASE_PREVIEW_ITEMS: CasePreviewItem[] = [
  {
    title: "Plataforma de capacitación y gestión documental (Santander)",
    problem:
      "Procesos de capacitación y manejo de documentos sin estructura clara, sin trazabilidad completa y con bajo control operativo.",
    system:
      "Se desarrolló una plataforma web interna que integra capacitación, evaluación y gestión de documentos en un solo sistema. Incluye dashboards, trazabilidad completa y un módulo interactivo de aprendizaje con videojuego en Unity.",
    result:
      "Centralización de procesos, mayor claridad operativa y seguimiento estructurado de usuarios y documentos.",
    note: "Proyecto desarrollado en equipo · Rol enfocado en base de datos y gestión del desarrollo",
    visual: {
      heading: "Tablero interno",
      streams: ["Capacitación", "Evaluación", "Documentos"],
      checkpoints: ["Trazabilidad", "Seguimiento de usuarios", "Control operativo"],
    },
  },
  {
    title: "Sistemas de datos para supply chain global (CEMEX)",
    problem: "Procesos complejos de datos y logística que requieren modelos escalables y adaptación entre regiones.",
    system:
      "Participación en plataformas globales de datos enfocadas en supply chain, trabajando en pipelines, modelado y sistemas de optimización utilizando SQL, Snowflake, Databricks y Azure.",
    result:
      "Contribución a sistemas diseñados para operar a escala y soportar decisiones en entornos logísticos complejos.",
    note: "Experiencia en entorno empresarial global",
    visual: {
      heading: "Pipeline global",
      streams: ["Ingesta regional", "Modelado", "Optimización"],
      checkpoints: ["Escalabilidad", "Consistencia", "Soporte de decisiones"],
    },
  },
  {
    title: "Sistema inteligente de monitoreo neonatal (IEEE · NeoGuard)",
    problem: "Necesidad de monitorear variables críticas en incubadoras neonatales de forma continua y confiable.",
    system:
      "Desarrollo de un sistema basado en IoT y análisis de datos que integra sensores, automatización y dashboards en tiempo real para monitoreo clínico y ambiental.",
    result:
      "Proyecto aceptado, publicado y presentado en congreso internacional (LARC-LARS 2025), validando su desarrollo técnico.",
    note: "Proyecto académico y de investigación aplicada",
    visual: {
      heading: "Monitoreo continuo",
      streams: ["Sensores", "Automatización", "Dashboard en tiempo real"],
      checkpoints: ["Lectura continua", "Alertas operativas", "Validación técnica"],
    },
  },
];

const previewIcons = [BarChart3, Database, LineChart];

function CaseVisual({ item, icon: Icon }: { item: CasePreviewItem; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-lg border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-3 shadow-glow-soft">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80">{item.visual.heading}</p>
        <Icon className="h-4 w-4 text-primary/80" />
      </div>
      <div className="space-y-2.5">
        {item.visual.streams.map((stream) => (
          <div key={stream} className="flex items-center justify-between rounded-md border border-border/50 bg-surface/80 px-2.5 py-1.5">
            <span className="text-[11px] text-foreground/90">{stream}</span>
            <span className="h-1.5 w-14 rounded-full bg-primary/20">
              <span className="block h-full w-2/3 rounded-full bg-primary/70" />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {item.visual.checkpoints.map((checkpoint) => (
          <div key={checkpoint} className="rounded-md border border-border/50 bg-surface/75 px-2 py-1.5 text-center">
            <p className="text-[10px] leading-tight text-muted-foreground">{checkpoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseCard({ item, index }: { item: CasePreviewItem; index: number }) {
  const Icon = previewIcons[index] ?? BarChart3;

  return (
    <MotionWrapper delay={index * 0.08}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-glow-soft">
        <CardHeader className="space-y-4">
          <CaseVisual item={item} icon={Icon} />
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Problema</p>
            <p className="text-small text-muted-foreground">{item.problem}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Sistema</p>
            <p className="text-small text-muted-foreground">{item.system}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Resultado</p>
            <p className="text-small text-foreground/90">{item.result}</p>
          </div>
          {item.note ? <p className="border-t border-border/35 pt-3 text-xs font-medium text-primary/85">{item.note}</p> : null}
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}

export function CasePreviewSection() {
  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <MotionWrapper className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">Casos reales</p>
          <h2 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">
            Sistemas construidos en contextos reales
          </h2>
          <p className="text-body text-muted-foreground">
            Desde entornos empresariales hasta desarrollo técnico aplicado, el enfoque es el mismo: construir
            sistemas que funcionen en la práctica.
          </p>
        </MotionWrapper>

        <div className="grid gap-5 md:grid-cols-3">
          {CASE_PREVIEW_ITEMS.map((item, index) => (
            <CaseCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <MotionWrapper delay={0.28}>
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-6 shadow-glow-soft">
            <p className="text-body font-medium text-foreground">
              Combinamos experiencia en empresa, sistemas de datos y desarrollo técnico para construir soluciones
              que realmente funcionan en operación.
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export const CasesSection = CasePreviewSection;

import { Activity, BarChart3, Database } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CasePreviewItem = {
  title: string;
  problem: string;
  system: string;
  result: string;
  note?: string;
};

const CASE_PREVIEW_ITEMS: CasePreviewItem[] = [
  {
    title: "Plataforma de seguimiento y analítica operativa (Santander)",
    problem: "Falta de control sobre procesos, documentos y desempeño en una operación distribuida.",
    system:
      "Se diseñó e implementó una plataforma web con base de datos, trazabilidad de documentos y dashboards por usuario y sucursal.",
    result: "Mayor visibilidad, control operativo y seguimiento estructurado del desempeño.",
    note: "Proyecto desarrollado en entorno empresarial",
  },
  {
    title: "Sistemas de datos para operación de supply chain (CEMEX)",
    problem: "Procesos complejos de datos y operación logística con múltiples restricciones.",
    system:
      "Participación en plataformas globales de datos, construcción de pipelines y adaptación de modelos operativos entre regiones.",
    result: "Sistemas preparados para operar a escala, mejorando la toma de decisiones.",
    note: "Experiencia en plataformas globales de datos",
  },
  {
    title: "Sistema de monitoreo inteligente con IA (Incubadora neonatal · IEEE)",
    problem:
      "Necesidad de monitorear variables críticas en un entorno clínico con alta sensibilidad y precisión.",
    system:
      "Desarrollo de un sistema basado en IoT e inteligencia artificial para monitoreo de condiciones en incubadora neonatal, con procesamiento de datos y análisis en tiempo real.",
    result:
      "Proyecto validado y presentado en congreso internacional (IEEE), demostrando capacidad de desarrollo técnico avanzado.",
    note: "Desarrollo técnico e investigación aplicada",
  },
];

const previewIcons = [BarChart3, Database, Activity];

function CaseCard({ item, index }: { item: CasePreviewItem; index: number }) {
  const Icon = previewIcons[index] ?? BarChart3;

  return (
    <MotionWrapper delay={index * 0.08}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-glow-soft">
        <CardHeader className="space-y-4">
          <div className="rounded-lg border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-3 shadow-glow-soft">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80">System View</p>
              <Icon className="h-4 w-4 text-primary/80" />
            </div>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-primary/20">
                <div className="h-full w-2/3 rounded-full bg-primary/70" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-6 rounded-md border border-border/50 bg-surface/80" />
                <div className="h-6 rounded-md border border-border/50 bg-surface/75" />
                <div className="h-6 rounded-md border border-border/50 bg-surface/70" />
              </div>
            </div>
          </div>
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Problem</p>
            <p className="text-small text-muted-foreground">{item.problem}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">System</p>
            <p className="text-small text-muted-foreground">{item.system}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/75">Result</p>
            <p className="text-small text-foreground/90">{item.result}</p>
          </div>
          {item.note ? (
            <p className="border-t border-border/35 pt-3 text-xs font-medium text-primary/85">{item.note}</p>
          ) : null}
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
            Desde entornos empresariales hasta desarrollo técnico aplicado, nuestro enfoque siempre es el mismo:
            construir sistemas que funcionen en la práctica.
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
              Combinamos experiencia en empresa, desarrollo de sistemas y proyectos técnicos para construir
              soluciones que funcionan más allá de la teoría.
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export const CasesSection = CasePreviewSection;

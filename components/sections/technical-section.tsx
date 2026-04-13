import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TechnicalSection() {
  const { technical } = getContent();
  const architectureThinking = [
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
  ];

  const stackGroups = [
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
  ];

  const dataApproach = [
    "Recolectamos datos operativos en los puntos donde realmente se generan eventos críticos.",
    "Estructuramos la información para que el negocio pueda consultar estado, trazabilidad y cuellos de botella sin ambigüedad.",
    "Construimos dashboards orientados a decisiones, no solo a visualización.",
    "Conectamos métricas con acciones concretas para mejorar tiempos, costos y confiabilidad.",
  ];

  const engineeringPrinciples = [
    "Modularidad",
    "Escalabilidad",
    "Arquitectura limpia",
    "Decisiones aterrizadas a restricciones reales de tiempo, presupuesto y operación",
  ];

  return (
    <section>
      <Container className="space-y-12 py-16 lg:py-18">
        <SectionHeading title={technical.headline} description={technical.intro} />
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Architecture Thinking</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {architectureThinking.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-small text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackGroups.map((group) => (
                <Card key={group.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-small text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Data Approach</h2>
            <ul className="space-y-2 text-small text-muted-foreground">
              {dataApproach.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Engineering Principles</h2>
            <ul className="space-y-2 text-small text-muted-foreground">
              {engineeringPrinciples.map((principle) => (
                <li key={principle}>• {principle}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-border/70 bg-card p-5">
            <p className="text-base font-medium text-foreground">
              We build systems that are meant to operate, not just to exist.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}

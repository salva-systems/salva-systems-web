import Link from "next/link";
import { ArrowRight, Layers3, MonitorSmartphone, Settings2, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const systemLayers = [
  {
    title: "Presencia Digital",
    solves: "Qué problema resuelve",
    solvesDetail:
      "Crea claridad para que el negocio comunique bien su propuesta y deje de depender de mensajes dispersos.",
    includes: "Qué incluye",
    includesDetail:
      "Sitio web con propuesta clara, puntos de contacto definidos, estructura de contenidos y trazabilidad básica.",
    when: "Cuándo aplica",
    whenDetail:
      "Cuando la empresa necesita una base profesional para captar oportunidades sin perder contexto.",
    icon: MonitorSmartphone,
  },
  {
    title: "Sistema Operativo",
    solves: "Qué problema resuelve",
    solvesDetail:
      "Ordena la operación diaria para reducir retrabajo, errores manuales y dependencia de seguimiento por chat.",
    includes: "Qué incluye",
    includesDetail:
      "Flujos conectados, panel operativo, estados trazables e integración entre herramientas críticas del negocio.",
    when: "Cuándo aplica",
    whenDetail:
      "Cuando ya hay volumen y el equipo necesita control real sobre pedidos, tareas y ejecución.",
    icon: Settings2,
  },
  {
    title: "Sistema de Crecimiento",
    solves: "Qué problema resuelve",
    solvesDetail:
      "Convierte la operación en un sistema escalable para decidir con datos y sostener crecimiento sin caos.",
    includes: "Qué incluye",
    includesDetail:
      "Automatizaciones avanzadas, indicadores accionables, reportes operativos y ciclos de mejora continua.",
    when: "Cuándo aplica",
    whenDetail:
      "Cuando la operación ya está ordenada y el foco es crecer con previsibilidad.",
    icon: Layers3,
  },
] as const;

const practicalExamples = [
  "Sistema de pedidos conectado",
  "Dashboard de operación",
  "Automatización de procesos",
  "Seguimiento de clientes",
] as const;

const workSteps = [
  "Diagnóstico",
  "Diseño de solución",
  "Desarrollo por sprints",
  "Implementación real",
  "Mejora continua",
] as const;

export function ServicesSystemSection() {
  return (
    <>
      <section>
        <Container className="space-y-6 py-20 lg:py-24">
          <MotionWrapper className="space-y-4">
            <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">Cómo trabajamos</p>
            <h1 className="max-w-3xl text-display-2 text-foreground sm:text-display-1">
              No vendemos servicios.
              <span className="block">Diseñamos sistemas.</span>
            </h1>
            <p className="max-w-3xl text-body text-muted-foreground">
              Cada negocio tiene problemas distintos, pero casi todos comparten lo mismo: procesos desordenados,
              herramientas desconectadas y falta de control real.
            </p>
          </MotionWrapper>
        </Container>
      </section>

      <section>
        <Container className="space-y-8 py-16 lg:py-18">
          <MotionWrapper className="mx-auto max-w-4xl space-y-4 text-center">
            <h2 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">
              Antes de construir, entendemos cómo opera el negocio
            </h2>
            <p className="text-body text-muted-foreground">
              No empezamos con tecnología. Empezamos con la operación, mapeamos el flujo real e identificamos las
              fricciones que hoy frenan resultados.
            </p>
          </MotionWrapper>
        </Container>
      </section>

      <section>
        <Container className="space-y-10 py-16 lg:py-18">
          <MotionWrapper className="space-y-3 text-center">
            <h2 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">
              Construimos en capas, no en entregables sueltos
            </h2>
            <p className="mx-auto max-w-3xl text-body text-muted-foreground">
              Cada capa resuelve una necesidad específica y prepara la siguiente etapa del sistema.
            </p>
          </MotionWrapper>

          <div className="grid gap-5 md:grid-cols-3">
            {systemLayers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <MotionWrapper key={layer.title} delay={index * 0.08}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <Icon className="h-5 w-5 text-primary/80" />
                        {layer.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-sm font-semibold text-foreground">{layer.solves}</p>
                        <p className="text-small text-muted-foreground">{layer.solvesDetail}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-sm font-semibold text-foreground">{layer.includes}</p>
                        <p className="text-small text-muted-foreground">{layer.includesDetail}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-sm font-semibold text-foreground">{layer.when}</p>
                        <p className="text-small text-muted-foreground">{layer.whenDetail}</p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8 py-16 lg:py-18">
          <MotionWrapper className="space-y-3">
            <h2 className="text-heading-2 text-foreground">Cómo se ve esto en la práctica</h2>
          </MotionWrapper>
          <div className="grid gap-4 md:grid-cols-2">
            {practicalExamples.map((example, index) => (
              <MotionWrapper key={example} delay={index * 0.06}>
                <div className="rounded-xl border border-border/55 bg-surface/65 p-5">
                  <p className="flex items-center gap-2 text-small text-foreground">
                    <Workflow className="h-4 w-4 text-primary/80" />
                    {example}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8 py-16 lg:py-18">
          <MotionWrapper className="space-y-3 text-center">
            <h2 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">Nuestro proceso</h2>
          </MotionWrapper>

          <div className="grid gap-4 md:grid-cols-5">
            {workSteps.map((step, index) => (
              <MotionWrapper key={step} delay={index * 0.06}>
                <Card className="h-full">
                  <CardContent className="space-y-3 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">Paso {index + 1}</p>
                    <p className="text-sm font-semibold text-foreground">{step}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 lg:py-20">
          <MotionWrapper>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 shadow-glow-soft">
              <p className="text-heading-2 text-foreground sm:text-heading-1">
                No necesitas más herramientas.
                <span className="block">Necesitas un sistema que funcione.</span>
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact">
                    Analizar mi negocio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>
    </>
  );
}

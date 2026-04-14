import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

type CaseStudyItem = {
  title: string;
  context: string;
  problem: string;
  approach: string;
  role: string;
  outcome: string;
};

const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: "Santander · Plataforma interna de capacitación y documentación",
    context:
      "Sistema corporativo interno para operación de capacitación y cumplimiento documental.",
    problem:
      "Los procesos de entrenamiento y control documental estaban fragmentados, con seguimiento manual y poca visibilidad para operación y auditoría.",
    approach:
      "Se diseñó una plataforma unificada por módulos para concentrar capacitación, evaluaciones y evidencia documental en un flujo digital trazable.",
    role:
      "Rol principal en arquitectura de base de datos, estructura de información y coordinación técnica del desarrollo en equipo.",
    outcome:
      "Se consolidó la operación en un solo sistema, reduciendo fricción de seguimiento y mejorando la claridad de cumplimiento.",
  },
  {
    title: "CEMEX · Sistemas de datos para supply chain global",
    context:
      "Plataformas corporativas de datos en entorno empresarial multinacional.",
    problem:
      "La operación logística requería modelos de datos consistentes entre regiones, con tiempos confiables de actualización para soportar decisiones de planeación y ejecución.",
    approach:
      "Se trabajó sobre pipelines y modelado analítico para estandarizar transformaciones, elevar calidad de datos y habilitar consumo operativo a escala.",
    role:
      "Contribución técnica en desarrollo de pipelines, modelado de datos y mejora de procesos analíticos dentro de equipos globales.",
    outcome:
      "Se fortalecieron capacidades de datos para operación logística internacional, con mejor estructura para escalar análisis y decisiones.",
  },
  {
    title: "IEEE (NeoGuard) · Monitoreo inteligente neonatal",
    context:
      "Proyecto académico de investigación aplicada con enfoque en ingeniería clínica.",
    problem:
      "Se necesitaba monitoreo continuo de variables críticas en incubadoras neonatales, con alertamiento oportuno y visualización accesible para personal clínico.",
    approach:
      "Se construyó una solución IoT con captura de señales ambientales y fisiológicas, automatización de alertas y visualización en tiempo real.",
    role:
      "Participación directa en diseño e implementación técnica del sistema, en colaboración con equipo multidisciplinario.",
    outcome:
      "El sistema se validó como prototipo funcional y fue aceptado para publicación/presentación en IEEE LARC-LARS 2025.",
  },
] as const;

function CaseCard({ item }: { item: CaseStudyItem }) {
  return (
    <div className="rounded-xl border border-border/60 p-6">
      <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
            Contexto
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{item.context}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
            Problema
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{item.problem}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
            Enfoque
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{item.approach}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
            Rol
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
            Resultado
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{item.outcome}</p>
        </div>
      </div>
    </div>
  );
}

export function CasesSection() {
  return (
    <>
      <section>
        <Container className="pt-4 pb-8">
          <h1 className="text-4xl font-semibold text-foreground">Casos de estudio</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Trabajo en contexto corporativo y académico, documentado con enfoque operativo.
          </p>
        </Container>
      </section>

      <section>
        <Container className="pb-16">
          <div className="grid gap-5 lg:grid-cols-3">
            {CASE_STUDIES.map((item, index) => (
              <MotionWrapper key={item.title} delay={index * 0.08}>
                <CaseCard item={item} />
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export const CasePreviewSection = CasesSection;
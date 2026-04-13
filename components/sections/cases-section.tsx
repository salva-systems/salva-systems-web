import { Container } from "@/components/layout/container";

const CASES = [
  "Santander · Plataforma interna de capacitación y documentación",
  "CEMEX · Sistemas de datos para supply chain global",
  "IEEE (NeoGuard) · Monitoreo inteligente neonatal",
];

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
            {CASES.map((item) => (
              <div key={item} className="rounded-xl border border-border/60 p-6">
                <p className="text-base font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export const CasePreviewSection = CasesSection;
import { Container } from "@/components/layout/container";
import { getContent } from "@/lib/content/site";

export function TeamSection() {
  const { team } = getContent();

  return (
    <>
      <section>
        <Container className="pt-4 pb-8">
          <h1 className="text-4xl font-semibold text-foreground">Equipo</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">{team.intro}</p>
        </Container>
      </section>

      <section>
        <Container className="pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {team.members.map((member) => (
              <div key={member.name} className="rounded-xl border border-border/60 p-6">
                <p className="text-lg font-semibold text-foreground">{member.name}</p>
                <p className="mt-2 text-sm text-primary/80">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.profile}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
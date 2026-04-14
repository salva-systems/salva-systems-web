import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
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
            {team.members.map((member, index) => (
              <MotionWrapper key={member.name} delay={index * 0.08}>
                <div className="rounded-xl border border-border/60 p-6">
                  <p className="text-lg font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm text-primary/80">{member.role}</p>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {member.profile}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.credibility.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-medium leading-tight text-primary/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {member.credentials?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.credentials.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/70 bg-surface/70 px-2.5 py-1 text-[11px] font-medium leading-tight text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <p className="mt-4 border-t border-border/45 pt-3 text-xs font-medium text-muted-foreground">
                    {member.subtext}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
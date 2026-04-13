import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  const { team } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={team.headline} description={team.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {team.members.map((member, index) => (
            <MotionWrapper key={member.name} delay={index * 0.08}>
              <Card className="h-full overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/45 hover:shadow-glow-soft">
                <CardHeader className="space-y-4">
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-primary/20 via-primary/8 to-transparent shadow-glow-soft"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_55%)]" />
                    <div
                      className="absolute bottom-3 left-3 rounded-md border border-primary/25 bg-background/80 px-2.5 py-1 text-xs font-semibold tracking-[0.14em] text-primary/85 backdrop-blur"
                      aria-hidden="true"
                    >
                      {getInitials(member.name)}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-small font-medium text-primary/80">{member.role}</p>
                </CardHeader>
                <CardContent className="flex h-full flex-col space-y-4">
                  <p className="text-small text-muted-foreground">{member.profile}</p>
                  <div className="flex flex-wrap gap-2">
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
                    <div className="flex flex-wrap gap-2">
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
                  <p className="mt-auto border-t border-border/45 pt-3 text-xs font-medium text-muted-foreground">
                    {member.subtext}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

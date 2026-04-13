import Image from "next/image";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getTeamImage(memberName: string) {
  switch (memberName) {
    case "Carlos Sánchez Gutiérrez":
      return {
        src: "/team/carlos-sanchez.png",
        alt: "Carlos Sánchez Gutiérrez",
      };
    case "Maximiliano Lozano Suárez":
      return {
        src: "/team/maximiliano-lozano.png",
        alt: "Maximiliano Lozano Suárez",
      };
    default:
      return null;
  }
}

export function TeamSection() {
  const { team } = getContent();

  return (
    <>
      <section>
        <Container className="space-y-4 pt-8 pb-8 lg:pt-10 lg:pb-10">
          <MotionWrapper className="space-y-4">
            <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">
              Equipo
            </p>
            <h1 className="max-w-4xl text-display-2 text-foreground sm:text-display-1">
              Equipo con ejecución técnica real.
            </h1>
            <p className="max-w-3xl text-body text-muted-foreground">{team.intro}</p>
          </MotionWrapper>
        </Container>
      </section>

      <section>
        <Container className="space-y-10 pb-16 lg:pb-18">
          <div className="grid gap-5 md:grid-cols-3">
            {team.members.map((member, index) => {
              const teamImage = getTeamImage(member.name);

              return (
                <MotionWrapper key={member.name} delay={index * 0.08}>
                  <Card className="h-full overflow-hidden border-border/60">
                    <CardHeader className="space-y-4">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-primary/20 via-primary/8 to-transparent shadow-glow-soft">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_55%)]" />

                        {teamImage ? (
                          <Image
                            src={teamImage.src}
                            alt={teamImage.alt}
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="object-cover object-top"
                            priority={index < 2}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(8,15,31,0.65),rgba(8,15,31,0.88))]">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-background/75 text-2xl font-semibold tracking-[0.16em] text-primary/90 backdrop-blur">
                              {getInitials(member.name)}
                            </div>
                          </div>
                        )}

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
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
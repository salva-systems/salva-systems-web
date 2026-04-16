import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
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
        <Container className="pt-4 pb-8">
          <MotionWrapper className="space-y-4">
            <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">
              Equipo
            </p>
            <h1 className="max-w-4xl text-display-2 text-foreground sm:text-display-1">
              Equipo con ejecución técnica real.
            </h1>
            <p className="max-w-3xl text-body text-muted-foreground">
              {team.intro}
            </p>
          </MotionWrapper>
        </Container>
      </section>

      <section>
        <Container className="pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {team.members.map((member, index) => {
              const teamImage = getTeamImage(member.name);

              return (
                <MotionWrapper key={member.name} delay={index * 0.08}>
                  <div className="rounded-2xl border border-border/60 bg-[linear-gradient(180deg,rgba(10,16,28,0.88),rgba(10,16,28,0.72))] p-6 shadow-[0_12px_32px_rgba(2,8,20,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_40px_rgba(2,8,20,0.28)]">
                    <div className="overflow-hidden rounded-xl border border-primary/20 bg-primary/8">
                      {teamImage ? (
                        <Image
                          src={teamImage.src}
                          alt={teamImage.alt}
                          width={800}
                          height={1000}
                          priority={index < 2}
                          className="h-auto w-full object-cover"
                        />
                      ) : (
                        <div className="flex aspect-[4/5] items-center justify-center bg-[linear-gradient(180deg,rgba(8,15,31,0.72),rgba(8,15,31,0.92))]">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-background/75 text-2xl font-semibold tracking-[0.16em] text-primary/90 backdrop-blur">
                            {getInitials(member.name)}
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="mt-5 text-lg font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary/80">
                      {member.role}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.profile}
                    </p>

                    {member.linkedinUrl || member.githubUrl || member.cvUrl ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {member.linkedinUrl ? (
                          <Link
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[11px] font-medium text-primary/90 transition-all hover:border-primary/40 hover:bg-primary/15"
                          >
                            LinkedIn
                          </Link>
                        ) : null}

                        {member.githubUrl ? (
                          <Link
                            href={member.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[11px] font-medium text-primary/90 transition-all hover:border-primary/40 hover:bg-primary/15"
                          >
                            GitHub
                          </Link>
                        ) : null}

                        {member.cvUrl ? (
                          <Link
                            href={member.cvUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-border/70 bg-surface/70 px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-all hover:border-border hover:text-foreground"
                          >
                            Ver CV
                          </Link>
                        ) : null}
                      </div>
                    ) : null}

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
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
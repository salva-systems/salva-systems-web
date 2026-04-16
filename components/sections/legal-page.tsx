import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  note?: ReactNode;
};

export function LegalPage({
  eyebrow = "Información legal",
  title,
  intro,
  updatedAt,
  sections,
  note,
}: LegalPageProps) {
  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-20">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-small font-medium uppercase tracking-[0.22em] text-primary-strong/80">
            {eyebrow}
          </p>
          <h1 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">
            {title}
          </h1>
          <p className="text-body text-muted-foreground">{intro}</p>
          <div className="inline-flex items-center rounded-full border border-border/60 bg-card px-4 py-2 text-small text-muted-foreground">
            Última actualización: {updatedAt}
          </div>
        </header>

        <div className="mx-auto max-w-4xl space-y-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-border/65 bg-card/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>

              {section.paragraphs?.length ? (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-body text-muted-foreground">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          {note ? (
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-body text-muted-foreground">
              {note}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

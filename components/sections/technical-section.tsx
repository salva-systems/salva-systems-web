import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TechnicalSection() {
  const { technical } = getContent();

  return (
    <section>
      <Container className="space-y-12 py-16 lg:py-18">
        <SectionHeading title={technical.headline} description={technical.intro} />
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{technical.architectureHeading}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {technical.architecturePoints.map((item) => (
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
            <h2 className="text-xl font-semibold text-foreground">{technical.stackHeading}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technical.stackGroups.map((group) => (
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
            <h2 className="text-xl font-semibold text-foreground">{technical.dataApproachHeading}</h2>
            <ul className="space-y-2 text-small text-muted-foreground">
              {technical.dataApproach.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              {technical.engineeringPrinciplesHeading}
            </h2>
            <ul className="space-y-2 text-small text-muted-foreground">
              {technical.engineeringPrinciples.map((principle) => (
                <li key={principle}>• {principle}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-border/70 bg-card p-5">
            <p className="text-base font-medium text-foreground">{technical.closing}</p>
          </section>
        </div>
      </Container>
    </section>
  );
}

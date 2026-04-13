import { BookOpenCheck, CircleCheckBig, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

const icons = [BookOpenCheck, ShieldCheck, CircleCheckBig];

export function BackingSection() {
  const { backing } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={backing.headline} description={backing.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {backing.items.map((item, index) => {
            const Icon = icons[index] ?? CircleCheckBig;

            return (
              <MotionWrapper key={item.title} delay={index * 0.08}>
                <Card className="h-full border-border/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Icon className="h-5 w-5 text-primary/80" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-small text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

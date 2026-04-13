import { Layers3 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TechnicalSection() {
  const { technical } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={technical.headline} description={technical.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {technical.pillars.map((pillar, index) => (
            <MotionWrapper key={pillar.title} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Layers3 className="h-4 w-4 text-primary/80" />
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-small text-muted-foreground">{pillar.detail}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

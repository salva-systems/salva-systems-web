import { Code2, Gauge, LineChart, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

const icons = [LineChart, Code2, Workflow, Gauge];

export function ServicesGridSection() {
  const { services } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={services.headline} description={services.intro} />
        <div className="grid gap-5 md:grid-cols-2">
          {services.items.map((item, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <MotionWrapper key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Icon className="h-5 w-5 text-primary/80" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-small text-muted-foreground">{item.description}</p>
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

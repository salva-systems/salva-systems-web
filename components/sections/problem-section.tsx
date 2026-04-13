import { FileSpreadsheet, Hand, MessageCircleMore, TriangleAlert } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

const icons = [FileSpreadsheet, MessageCircleMore, Hand, TriangleAlert];

export function ProblemSection() {
  const { problem } = getContent();

  return (
    <section>
      <Container className="space-y-8 py-16 lg:py-18">
        <MotionWrapper className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">{problem.headline}</h2>
          <p className="text-body text-muted-foreground">{problem.intro}</p>
        </MotionWrapper>

        <div className="grid gap-5 md:grid-cols-2">
          {problem.items.map((item, index) => {
            const Icon = icons[index] ?? TriangleAlert;

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
                    <p className="text-small text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>

        <MotionWrapper delay={0.12}>
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-6 shadow-glow-soft">
            <p className="text-heading-3 text-foreground">{problem.consequence.title}</p>
            <p className="mt-2 text-small text-muted-foreground">{problem.consequence.detail}</p>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <p className="mx-auto max-w-3xl text-center text-body font-medium text-foreground/90">{problem.transition}</p>
        </MotionWrapper>
      </Container>
    </section>
  );
}

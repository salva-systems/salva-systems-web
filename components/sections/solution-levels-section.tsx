import { Layers, Settings2, TrendingUp } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

const icons = [Layers, Settings2, TrendingUp];

export function SolutionLevelsSection() {
  const { solutionLevels } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={solutionLevels.headline} description={solutionLevels.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {solutionLevels.items.map((item, index) => {
            const Icon = icons[index] ?? Layers;

            return (
              <MotionWrapper key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Icon className="h-5 w-5 text-primary/80" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-foreground">{solutionLevels.labels.solves}</p>
                      <p className="text-small text-muted-foreground">{item.solves}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-foreground">{solutionLevels.labels.includes}</p>
                      <p className="text-small text-muted-foreground">{item.includes}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-foreground">{solutionLevels.labels.forWho}</p>
                      <p className="text-small text-muted-foreground">{item.forWho}</p>
                    </div>
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

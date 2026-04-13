import { Layers3 } from "lucide-react";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TechnicalSection() {
  const { technical } = getContent();

  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16 lg:px-8">
      <SectionHeading title={technical.headline} description={technical.intro} />
      <div className="grid gap-5 md:grid-cols-3">
        {technical.pillars.map((pillar, index) => (
          <MotionWrapper key={pillar.title} delay={index * 0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Layers3 className="h-4 w-4 text-zinc-500" />
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{pillar.detail}</p>
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

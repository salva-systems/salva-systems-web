import { CircleX } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function WhatNotSection() {
  const { whatNot } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={whatNot.headline} description={whatNot.intro} />
        <div className="grid gap-5 md:grid-cols-2">
          {whatNot.items.map((item, index) => (
            <MotionWrapper key={item.text} delay={index * 0.08}>
              <Card className="h-full border-destructive/30 bg-destructive/5">
                <CardContent className="flex items-center gap-3 p-5">
                  <CircleX className="h-5 w-5 shrink-0 text-destructive/90" />
                  <p className="text-small font-medium text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

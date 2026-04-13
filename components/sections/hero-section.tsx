import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { getContent } from "@/lib/content/site";

export function HeroSection() {
  const { home } = getContent();

  return (
    <section>
      <Container className="py-22 lg:py-26">
        <MotionWrapper className="max-w-3xl space-y-6">
          <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">{home.eyebrow}</p>
          <h1 className="text-display-2 text-foreground sm:text-display-1">{home.title}</h1>
          <p className="text-body text-muted-foreground">{home.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">{home.primaryCta}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/cases">{home.secondaryCta}</Link>
            </Button>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

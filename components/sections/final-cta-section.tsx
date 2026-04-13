import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

export function FinalCTASection() {
  const { finalCta } = getContent();

  return (
    <section>
      <Container className="py-16 lg:py-20">
        <MotionWrapper>
          <div className="space-y-6 rounded-2xl border border-primary/30 bg-primary/10 p-8 shadow-glow-soft">
            <div className="space-y-3">
              <p className="text-heading-2 text-foreground sm:text-heading-1">
                {finalCta.title}
                <span className="block">{finalCta.subtitle}</span>
              </p>
              <ol className="space-y-1 text-small text-muted-foreground">
                {finalCta.steps.map((step, index) => (
                  <li key={step}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-glow-soft">
                <Link href="/contact">
                  {finalCta.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:border-primary/45 hover:bg-primary/5">
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {finalCta.secondaryCta}
                </a>
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Activity, CheckCircle2, GitBranch, Settings2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

export function HeroSection() {
  const { home } = getContent();
  const whatsappUrl = `https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`;

  return (
    <section>
      <Container className="py-22 lg:py-26">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <MotionWrapper className="space-y-6">
            <p className="text-small font-medium uppercase tracking-[0.18em] text-primary/85">{home.eyebrow}</p>
            <h1 className="text-display-2 text-foreground sm:text-display-1">
              {home.titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-2xl text-body text-muted-foreground">{home.subheadline}</p>
            <p className="max-w-2xl text-small text-muted-foreground">{home.support}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">{home.primaryCta}</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  {home.secondaryCta}
                </a>
              </Button>
            </div>
            <p className="text-xs font-medium tracking-[0.08em] text-muted-foreground">{home.trust}</p>
          </MotionWrapper>

          <MotionWrapper className="lg:pt-3" delay={0.08}>
            <Card className="overflow-hidden">
              <CardHeader className="border-b border-border/45 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {home.systemUi.badge}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/50 bg-surface/65 p-3">
                    <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Activity className="h-3.5 w-3.5 text-primary/80" />
                      {home.systemUi.dailyOpsLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{home.systemUi.dailyOpsValue}</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-surface/65 p-3">
                    <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Settings2 className="h-3.5 w-3.5 text-primary/80" />
                      {home.systemUi.automationLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{home.systemUi.automationValue}</p>
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-surface/65 p-4">
                  <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <GitBranch className="h-3.5 w-3.5 text-primary/80" />
                    {home.systemUi.flowLabel}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    {home.systemUi.flowItems.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}

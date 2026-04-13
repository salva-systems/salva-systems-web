import { BarChart3 } from "lucide-react";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function CasesSection() {
  const { cases } = getContent();

  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16 lg:px-8">
      <SectionHeading title={cases.headline} description={cases.intro} />
      <div className="grid gap-5 md:grid-cols-3">
        {cases.items.map((item, index) => (
          <MotionWrapper key={item.title} delay={index * 0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <BarChart3 className="h-3.5 w-3.5" />
                  {item.impact}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.summary}</p>
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

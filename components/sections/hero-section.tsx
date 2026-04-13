import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { getContent } from "@/lib/content/site";

export function HeroSection() {
  const { home } = getContent();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <MotionWrapper className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{home.eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">{home.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">{home.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">{home.primaryCta}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/cases">{home.secondaryCta}</Link>
          </Button>
        </div>
      </MotionWrapper>
    </section>
  );
}

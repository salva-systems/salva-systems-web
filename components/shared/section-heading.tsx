import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <header className={cn("mx-auto max-w-3xl space-y-3 text-center", className)}>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        {title}
      </h1>
      <p className="text-base text-zinc-600 dark:text-zinc-300">{description}</p>
    </header>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <header className={cn("mx-auto max-w-3xl space-y-3 text-center", className)}>
      <h1 className="text-heading-1 tracking-tight text-foreground sm:text-display-2">
        {title}
      </h1>
      <p className="text-body text-muted-foreground">{description}</p>
    </header>
  );
}

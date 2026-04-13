import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Comp = as;

  return <Comp className={cn("layout-container", className)}>{children}</Comp>;
}

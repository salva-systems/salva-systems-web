import Link from "next/link";

import { Container } from "@/components/layout/container";
import { getContent } from "@/lib/content/site";

export function SiteHeader() {
  const content = getContent();

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Salva Systems
        </Link>
        <nav className="hidden items-center gap-5 text-small text-muted-foreground md:flex">
          {content.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary-strong">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

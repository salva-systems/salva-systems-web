import Link from "next/link";

import { getContent } from "@/lib/content/site";

export function SiteHeader() {
  const content = getContent();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Salva Systems
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-zinc-600 md:flex dark:text-zinc-300">
          {content.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

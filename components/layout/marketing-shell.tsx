import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type MarketingShellProps = {
  children: React.ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_5%,rgba(0,214,255,0.12),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_360px_at_82%_0%,rgba(32,164,255,0.1),transparent_56%)]" />
      <SiteHeader />
      <main
  data-scroll-root="true"
  className="relative z-10 flex-1"
>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
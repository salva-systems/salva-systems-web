import { Container } from "@/components/layout/container";
import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

export function SiteFooter() {
  const content = getContent();

  return (
    <footer className="border-t border-border/40 bg-surface/65 backdrop-blur-xl">
      <Container className="flex flex-col gap-2 py-8 text-small text-muted-foreground">
        <p>
          {COMPANY.legalName} · {COMPANY.city} · {COMPANY.email}
        </p>
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. {content.footer.rights}
        </p>
      </Container>
    </footer>
  );
}

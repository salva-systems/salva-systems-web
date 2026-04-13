import Link from "next/link";

import { Container } from "@/components/layout/container";
import { COMPANY } from "@/lib/constants/site";

export function SiteFooter() {
  const navigation = [
    { href: "/services", label: "Servicios" },
    { href: "/cases", label: "Casos" },
    { href: "/team", label: "Equipo" },
    { href: "/technical", label: "Technical" },
    { href: "/faq", label: "FAQ" },
  ];
  const solutions = ["Consultoría tecnológica", "Automatización operativa", "Plataformas web"];

  return (
    <footer className="relative border-t border-border/35 bg-surface/55 backdrop-blur-xl">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-base font-semibold tracking-tight text-foreground">{COMPANY.name}</p>
          <p className="max-w-xs text-small text-muted-foreground">
            Ingeniería digital confiable para equipos que necesitan crecer con control.
          </p>
        </div>

        <div className="space-y-3 text-small">
          <p className="font-medium text-foreground">Navegación</p>
          <ul className="space-y-2 text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-primary-strong" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-small">
          <p className="font-medium text-foreground">Soluciones</p>
          <ul className="space-y-2 text-muted-foreground">
            {solutions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-small">
          <p className="font-medium text-foreground">Contacto</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`} className="transition-colors hover:text-primary-strong">
                WhatsApp {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-primary-strong">
                {COMPANY.email}
              </a>
            </li>
            <li>Tampico · Monterrey</li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-border/30 py-5 text-small text-muted-foreground">
        © {new Date().getFullYear()} {COMPANY.legalName}. Todos los derechos reservados.
      </Container>
    </footer>
  );
}

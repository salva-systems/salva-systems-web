import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MARKETING_NAV_ITEMS, MARKETING_SOLUTIONS } from "@/lib/constants/layout";
import { COMPANY } from "@/lib/constants/site";

const LEGAL_LINKS = [
  { href: "/aviso-de-privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
  { href: "/politica-de-cookies", label: "Cookies" },
  { href: "/pagos-y-facturacion", label: "Pagos y Facturación" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/salva-systems/", label: "LinkedIn" },
  { href: "https://www.instagram.com/salvasystems/", label: "Instagram" },
  { href: "https://www.facebook.com/SalvaSystems/", label: "Facebook" },
  {
    href: "https://wa.me/528333674769?text=Hola%2C%20me%20interesa%20analizar%20mi%20negocio%20con%20Salva%20Systems.%20Quisiera%20conocer%20qu%C3%A9%20tipo%20de%20sistema%20o%20soluci%C3%B3n%20digital%20podr%C3%ADa%20ayudarme%20a%20ordenar%20mejor%20mi%20operaci%C3%B3n.",
    label: "WhatsApp",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/35 bg-surface/55 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container className="grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-base font-semibold tracking-tight text-foreground">{COMPANY.name}</p>
            <p className="max-w-sm text-small leading-6 text-muted-foreground">
              Ingeniería digital confiable para equipos que necesitan crecer con control.
            </p>
          </div>

          <div className="rounded-2xl border border-border/40 bg-background/25 p-4 text-small">
            <p className="font-medium text-foreground">¿Listo para ordenar tu operación?</p>
            <p className="mt-1 leading-6 text-muted-foreground">
              Diseñamos sistemas digitales para negocios que ya venden y necesitan más claridad,
              menos fricción y mejor control.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-small font-medium text-primary-strong transition-all hover:border-primary/55 hover:bg-primary/15"
              >
                Analizar mi negocio
              </Link>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border/45 px-4 py-2 text-small font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-small">
          <p className="font-medium text-foreground">Navegación</p>
          <ul className="space-y-2 text-muted-foreground">
            {MARKETING_NAV_ITEMS.map((item) => (
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
            {MARKETING_SOLUTIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>Mantenimiento y soporte</li>
            <li>Analítica e IA aplicada</li>
            <li>Integraciones y documentación</li>
          </ul>
        </div>

        <div className="space-y-6 text-small">
          <div className="space-y-3">
            <p className="font-medium text-foreground">Legal</p>
            <ul className="space-y-2 text-muted-foreground">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors hover:text-primary-strong" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-foreground">Contacto</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary-strong"
                >
                  WhatsApp {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-primary-strong"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.city}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-foreground">Redes</p>
            <ul className="space-y-2 text-muted-foreground">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-primary-strong"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-border/30 py-5 text-small text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
        </p>
        <p>Consultoría tecnológica, sistemas digitales y operación con criterio.</p>
      </Container>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MARKETING_NAV_ITEMS } from "@/lib/constants/layout";
import { COMPANY } from "@/lib/constants/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/35 bg-background/70 backdrop-blur-xl">
      <Container className="relative flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="text-base font-semibold tracking-tight sm:text-lg">
          Salva Systems
        </Link>

        <nav className="hidden items-center gap-6 text-small text-muted-foreground lg:flex">
          {MARKETING_NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary-strong">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappUrl}
            className="text-small text-muted-foreground transition-colors hover:text-primary-strong"
          >
            WhatsApp {COMPANY.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Analizar mi negocio</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/45 bg-surface/70 text-muted-foreground md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {isOpen ? (
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación móvil"
            className="glass-card absolute left-6 right-6 top-[4.5rem] rounded-xl p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {MARKETING_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-small text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary-strong"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={whatsappUrl}
              className="mt-3 block px-3 text-small text-muted-foreground transition-colors hover:text-primary-strong"
            >
              WhatsApp {COMPANY.phone}
            </a>
            <Button asChild className="mt-3 w-full" size="sm">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Analizar mi negocio
              </Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

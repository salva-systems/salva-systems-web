"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MARKETING_NAV_ITEMS } from "@/lib/constants/layout";

const WHATSAPP_URL =
  "https://wa.me/528333674769?text=Hola,%20quiero%20analizar%20mi%20negocio%20con%20Salva%20Systems";
const LOGO_SRC = "/brand/logo-horizontal-white.png";
// Scroll distance (px) before increasing header opacity/clarity.
const SCROLL_THRESHOLD = 14;
// Slide offsets (px) for mobile menu entry/exit.
const MOBILE_MENU_OFFSET_X = 18;
const MOBILE_MENU_OFFSET_Y = -6;

function NavItem({
  href,
  label,
  mobile = false,
  onClick,
}: {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative rounded-md py-2 text-small text-foreground/85 transition-colors duration-300 hover:text-primary-strong",
        mobile ? "px-3 hover:bg-white/5" : "px-1",
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className="pointer-events-none absolute inset-x-1 bottom-0 h-px origin-center scale-x-0 bg-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

function WhatsAppLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg border border-border/50 bg-surface/60 px-3 py-2 text-small text-muted-foreground transition-all duration-300 hover:border-primary/45 hover:text-primary-strong",
        compact && "w-full justify-center",
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden lg:inline">+52 833 367 4769</span>
      <span className="lg:hidden">WhatsApp</span>
    </a>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        isScrolled
          ? "border-primary/20 bg-background/90"
          : "border-border/35 bg-background/68",
      )}
      animate={{
        backdropFilter: isScrolled ? "blur(14px)" : "blur(10px)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Container className="relative flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center py-1" aria-label="Salva Systems inicio">
          <Image
            src={LOGO_SRC}
            alt="Salva Systems"
            width={138}
            height={28}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {MARKETING_NAV_ITEMS.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <WhatsAppLink />
          <Button asChild size="sm">
            <Link href="/contact">Analizar mi negocio</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/45 bg-surface/70 text-muted-foreground transition-colors duration-300 hover:border-primary/45 hover:text-primary-strong md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="mobile-navigation"
              role="navigation"
              aria-label="Navegación móvil"
              className="glass-card absolute inset-x-6 top-[4.5rem] rounded-xl p-4 md:hidden"
              initial={{ opacity: 0, x: MOBILE_MENU_OFFSET_X, y: MOBILE_MENU_OFFSET_Y }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: MOBILE_MENU_OFFSET_X, y: MOBILE_MENU_OFFSET_Y }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <nav className="flex flex-col gap-1">
                {MARKETING_NAV_ITEMS.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    mobile
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>

              <div className="mt-3 flex flex-col gap-2">
                <WhatsAppLink compact />
                <Button asChild className="w-full" size="sm">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Analizar mi negocio
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}

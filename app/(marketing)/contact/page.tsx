import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { contact } = getContent();

export const metadata: Metadata = buildMetadata("Contacto", contact.intro, "/contact");

export default function ContactPage() {
  return <ContactSection />;
}

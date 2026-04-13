import type { Metadata } from "next";

import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { services } = getContent();

export const metadata: Metadata = buildMetadata("Servicios", services.intro);

export default function ServicesPage() {
  return <ServicesGridSection />;
}

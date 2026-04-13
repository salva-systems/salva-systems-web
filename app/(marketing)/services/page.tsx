import type { Metadata } from "next";

import { ServicesSystemSection } from "@/components/sections/services-system-section";
import { buildMetadata } from "@/lib/content/site";

export const metadata: Metadata = buildMetadata(
  "Servicios",
  "Diseñamos sistemas digitales conectando operación, tecnología y crecimiento para negocios que necesitan control real.",
  "/services",
);

export default function ServicesPage() {
  return <ServicesSystemSection />;
}
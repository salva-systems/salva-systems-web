import type { Metadata } from "next";

import { CasesSection } from "@/components/sections/cases-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { cases } = getContent();

export const metadata: Metadata = buildMetadata("Casos", cases.intro);

export default function CasesPage() {
  return <CasesSection />;
}

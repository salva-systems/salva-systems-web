import type { Metadata } from "next";

import { TechnicalSection } from "@/components/sections/technical-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { technical } = getContent();

export const metadata: Metadata = buildMetadata("Base técnica", technical.intro);

export default function TechnicalPage() {
  return <TechnicalSection />;
}

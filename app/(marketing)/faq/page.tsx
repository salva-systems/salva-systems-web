import type { Metadata } from "next";

import { FaqSection } from "@/components/sections/faq-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { faq } = getContent();

export const metadata: Metadata = buildMetadata("FAQ", faq.intro);

export default function FaqPage() {
  return <FaqSection />;
}

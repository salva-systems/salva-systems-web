import type { Metadata } from "next";

import { MarketingShell } from "@/components/layout/marketing-shell";
import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

const content = getContent();

export const metadata: Metadata = {
  title: {
    default: content.seo.siteTitle,
    template: content.seo.titleTemplate,
  },
  description: content.seo.description,
  metadataBase: new URL(COMPANY.domain),
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}

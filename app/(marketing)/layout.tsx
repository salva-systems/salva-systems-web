import type { Metadata } from "next";

import { MarketingShell } from "@/components/layout/marketing-shell";
import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

const content = getContent();

export const metadata: Metadata = {
  openGraph: {
    title: "Salva Systems",
    description: "Consultoria tecnologica, automatizacion y sistemas digitales.",
    url: "https://www.salvasystems.com",
    siteName: "Salva Systems",
    images: [
      {
        url: "/og/home-og.png",
        width: 1200,
        height: 630,
        alt: "Salva Systems",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salva Systems",
    description: "Consultoria tecnologica, automatizacion y sistemas digitales.",
    images: ["/og/home-og.png"],
  },
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

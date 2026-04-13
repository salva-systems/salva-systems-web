import type { Metadata } from "next";
import { BackingSection } from "@/components/sections/backing-section";
import { CasePreviewSection } from "@/components/sections/cases-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SolutionLevelsSection } from "@/components/sections/solution-levels-section";
import { WhatNotSection } from "@/components/sections/what-not-section";

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
  title: "Salva Systems | Consultoría tecnológica y sistemas digitales",
  description:
    "Consultoría tecnológica, automatización y sistemas digitales para empresas que quieren operar con más control, menos errores y mejor estructura.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatNotSection />
      <SolutionLevelsSection />
      <CasePreviewSection />
      <BackingSection />
      <ServicesGridSection />
      <FinalCTASection />
    </>
  );
}

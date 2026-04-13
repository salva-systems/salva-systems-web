import { BackingSection } from "@/components/sections/backing-section";
import { CasePreviewSection } from "@/components/sections/cases-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SolutionLevelsSection } from "@/components/sections/solution-levels-section";
import { WhatNotSection } from "@/components/sections/what-not-section";

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

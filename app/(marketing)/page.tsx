import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesGridSection />
    </>
  );
}

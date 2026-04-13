import type { Metadata } from "next";

import { TeamSection } from "@/components/sections/team-section";
import { buildMetadata, getContent } from "@/lib/content/site";

const { team } = getContent();

export const metadata: Metadata = buildMetadata("Equipo", team.intro);

export default function TeamPage() {
  return <TeamSection />;
}

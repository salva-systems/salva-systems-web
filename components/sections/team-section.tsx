import { Users } from "lucide-react";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TeamSection() {
  const { team } = getContent();

  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16 lg:px-8">
      <SectionHeading title={team.headline} description={team.intro} />
      <div className="grid gap-5 md:grid-cols-3">
        {team.members.map((member, index) => (
          <MotionWrapper key={member.name} delay={index * 0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-4 w-4 text-zinc-500" />
                  {member.name}
                </CardTitle>
                <p className="text-sm font-medium text-zinc-500">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{member.profile}</p>
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

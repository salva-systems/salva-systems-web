import { Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContent } from "@/lib/content/site";

export function TeamSection() {
  const { team } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={team.headline} description={team.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {team.members.map((member, index) => (
            <MotionWrapper key={member.name} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-4 w-4 text-primary/80" />
                    {member.name}
                  </CardTitle>
                  <p className="text-small font-medium text-primary/80">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-small text-muted-foreground">{member.profile}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

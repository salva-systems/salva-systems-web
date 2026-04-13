import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { getContent } from "@/lib/content/site";

export function ContactSection() {
  const { contact } = getContent();

  return (
    <section>
      <Container className="space-y-10 py-16 lg:py-18">
        <SectionHeading title={contact.headline} description={contact.intro} />
        <ContactForm copy={contact.form} />
      </Container>
    </section>
  );
}

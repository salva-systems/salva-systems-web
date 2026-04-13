import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { getContent } from "@/lib/content/site";

export function ContactSection() {
  const { contact } = getContent();

  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16 lg:px-8">
      <SectionHeading title={contact.headline} description={contact.intro} />
      <ContactForm copy={contact.form} />
    </section>
  );
}

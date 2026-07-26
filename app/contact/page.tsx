import type { Metadata } from "next";
import { Suspense } from "react";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import contact from "@/data/contact.json";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss an HVAC design, installation, maintenance, repair, upgrade or specialized climate-control requirement with CES."
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title={contact.heading} description={contact.description} visual={<AirflowVisual />} />
      <section className="section contact-section">
        <div className="site-container contact-grid">
          <div className="contact-details">
            <div><MapPin size={28} weight="duotone" /><span><strong>Headquarters</strong>{contact.headquarters}<br />{contact.coverage}</span></div>
            <div><Phone size={28} weight="duotone" /><span><strong>Call</strong>{contact.phones.map((phone) => <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>{phone}</a>)}</span></div>
            <div><EnvelopeSimple size={28} weight="duotone" /><span><strong>Email</strong>{contact.emails.map((email) => <a href={`mailto:${email}`} key={email}>{email}</a>)}</span></div>
          </div>
          <Suspense fallback={<div className="contact-form" aria-label="Loading enquiry form" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

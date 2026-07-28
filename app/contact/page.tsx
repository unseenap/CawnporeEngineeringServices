import type { Metadata } from "next";
import { Suspense } from "react";
import { Buildings, CheckCircle, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import contact from "@/data/contact.json";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss an HVAC design, installation, maintenance, repair, upgrade or specialized climate-control requirement with CES."
};

export default function ContactPage() {
  return (
    <main className="contact-page-v2">
      <ContactHero />
      <section className="section quote-start-section">
        <div className="site-container quote-start-grid">
          <div>
            <p className="mono-label">How a quote request starts</p>
            <h2>Give us enough context to ask better questions.</h2>
          </div>
          <ol>
            <li><span>01</span><div><strong>Describe the environment</strong><small>Building use, city and approximate area or capacity.</small></div></li>
            <li><span>02</span><div><strong>Choose the requirement</strong><small>Design, installation, maintenance, repair or upgrade.</small></div></li>
            <li><span>03</span><div><strong>Share the current stage</strong><small>Planning, tendering, execution or an operating-site issue.</small></div></li>
          </ol>
        </div>
      </section>

      <section className="section contact-section contact-section-v2" id="request-a-quote">
        <div className="site-container contact-heading">
          <div>
            <p className="mono-label">Request a quote</p>
            <h2>Start the technical conversation.</h2>
          </div>
          <p>
            Complete the form below. It prepares a structured email in your
            email application so you can review the details and attach drawings,
            BOQs or site photographs before sending.
          </p>
        </div>
        <div className="site-container contact-grid">
          <div className="contact-details">
            <div className="contact-details-intro">
              <Buildings size={30} weight="duotone" />
              <span><strong>Useful information</strong>Drawings, approximate area, preferred timeline and existing system details help us understand the request.</span>
            </div>
            <div><MapPin size={28} weight="duotone" /><span><strong>Headquarters</strong>{contact.headquarters}<br />{contact.coverage}</span></div>
            <div><Phone size={28} weight="duotone" /><span><strong>Call</strong>{contact.phones.map((phone) => <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>{phone}</a>)}</span></div>
            <div><EnvelopeSimple size={28} weight="duotone" /><span><strong>Email</strong>{contact.emails.map((email) => <a href={`mailto:${email}`} key={email}>{email}</a>)}</span></div>
            <p className="contact-privacy"><CheckCircle size={18} weight="duotone" /> Your enquiry is prepared locally and is not stored by this website.</p>
          </div>
          <Suspense fallback={<div className="contact-form" aria-label="Loading enquiry form" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

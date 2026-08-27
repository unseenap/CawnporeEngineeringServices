import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { CheckCircle, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import contact from "@/data/contact.json";

export const metadata: Metadata = {
  title: "Contact Cawnpore Engineering Services",
  description: "Contact CES for an HVAC project, service requirement or technical consultation.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  ["01", "We review the context", "Your service need, location, project stage and timeline help us prepare the right first response."],
  ["02", "We clarify the requirement", "Our team may request drawings, site information or a short technical discussion before recommending a route."],
  ["03", "We agree the next action", "Depending on the scope, we arrange a survey, design discussion, service visit or commercial proposal."],
] as const;

export default function ContactPage() {
  return (
    <main className="corp-site contact-page-v5">
      <section className="contact-hero-v5">
        <Image src="/images/services/rooftop-maintenance/technician-commissioning-check.png" alt="HVAC technician checking a rooftop air-conditioning system" fill priority unoptimized sizes="100vw" />
        <div className="contact-hero-shade-v5" />
        <div className="site-container contact-hero-copy-v5">
          <span className="corp-kicker">Contact CES</span>
          <h1>Start with the requirement. We’ll help define the next step.</h1>
          <p>Tell us about the building, service need and current project stage. Our team will use that context to begin a useful technical conversation.</p>
        </div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/918318554343" aria-label="Contact CES on WhatsApp"><WhatsappLogo size={31} weight="fill" /></a>

      <section className="section contact-main-v5" id="request-a-quote"><div className="site-container contact-main-grid-v5">
        <aside className="contact-details-v5">
          <Reveal><span className="corp-kicker">Direct contact</span><h2>Talk to our engineering team.</h2><p>For a useful first review, share the approximate area or capacity, project location, building use, expected timeline and any available drawings.</p></Reveal>
          <div className="contact-detail-list-v5">
            <Reveal><MapPin size={24} /><div><span>Office and coverage</span><strong>{contact.headquarters}</strong><p>{contact.coverage}</p></div></Reveal>
            <Reveal delay={0.05}><Phone size={24} /><div><span>Phone</span>{contact.phones.map((phone) => <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>{phone}</a>)}<p>Call for projects and service requirements</p></div></Reveal>
            <Reveal delay={0.1}><EnvelopeSimple size={24} /><div><span>Email</span>{contact.emails.map((email) => <a href={`mailto:${email}`} key={email}>{email}</a>)}<p>Attach drawings or supporting documents</p></div></Reveal>
          </div>
          <Reveal className="contact-preparation-v5"><CheckCircle size={22} weight="fill" /><div><strong>Helpful information to include</strong><p>Building type, city, service scope, current stage and preferred completion timeline.</p></div></Reveal>
        </aside>

        <Reveal className="contact-form-panel-v5" delay={0.08}>
          <span className="corp-kicker">Request a quote</span>
          <h2>Share your project details.</h2>
          <p className="contact-form-intro-v5">Share the project context below. Your enquiry will be sent directly to our team for review.</p>
          <Suspense fallback={<div className="contact-form" aria-label="Loading enquiry form" />}><ContactForm /></Suspense>
        </Reveal>
      </div></section>

      <section className="section contact-next-v5"><div className="site-container">
        <div className="contact-section-heading-v5"><span className="corp-kicker">What happens next</span><h2>A clear path from enquiry to action.</h2></div>
        <div className="contact-next-grid-v5">{nextSteps.map(([number, title, body], index) => <Reveal delay={index * 0.06} key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
      </div></section>
    </main>
  );
}

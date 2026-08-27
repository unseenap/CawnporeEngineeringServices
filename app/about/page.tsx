import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Eye, Target, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "About Cawnpore Engineering Services",
  description: "Meet Cawnpore Engineering Services and learn how we deliver dependable HVAC engineering across India.",
  alternates: { canonical: "/about" },
};

const approach = [
  ["01", "Understand the environment", "We begin with building use, occupancy, load, site conditions and the result the client needs."],
  ["02", "Coordinate the engineering", "Equipment, airflow, piping, ductwork, electrical interfaces and service access are considered together."],
  ["03", "Deliver accountable performance", "Installation, testing and commissioning confirm that the completed system responds to its design intent."],
] as const;

export default function AboutPage() {
  return (
    <main className="corp-site about-page-v5">
      <section className="about-hero-v5">
        <Image src="/images/services/consultancy/hvac-design-consultation.png" alt="CES engineers coordinating an HVAC system design" fill priority unoptimized sizes="100vw" />
        <div className="about-hero-shade-v5" />
        <div className="site-container about-hero-copy-v5">
          <span className="corp-kicker">About Cawnpore Engineering Services</span>
          <h1>Engineering clarity from concept to operation.</h1>
          <p>A Kanpur-based HVAC engineering partner delivering coordinated solutions for projects and operating facilities across India.</p>
        </div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/918318554343" aria-label="Contact CES on WhatsApp"><WhatsappLogo size={31} weight="fill" /></a>

      <section className="section about-story-v5"><div className="site-container about-story-grid-v5">
        <Reveal><span className="corp-kicker">Who we are</span><h2>Technical thinking backed by responsible execution.</h2></Reveal>
        <Reveal delay={0.08}><p>Cawnpore Engineering Services brings HVAC planning, installation and lifecycle support into one accountable working relationship. Since 2021, our focus has remained straightforward: understand the actual need, coordinate a buildable solution and deliver it carefully.</p><p>We support commercial, industrial, healthcare, hospitality, retail and residential environments, adapting every system to its operating conditions instead of applying a standard answer.</p><Link className="corp-text-link" href="/services">Explore our capabilities <ArrowRight size={16} /></Link></Reveal>
      </div></section>

      <section className="section about-evidence-v5"><div className="site-container about-evidence-grid-v5">
        <Reveal className="about-evidence-main-v5"><Image src="/images/services/basement-ventilation/parking-ventilation-context.jpeg" alt="Completed basement car-parking ventilation installation by CES" fill unoptimized sizes="(max-width: 760px) 100vw, 62vw" /></Reveal>
        <div className="about-evidence-side-v5">
          <Reveal className="about-evidence-small-v5"><Image src="/images/services/consultancy/rooftop-hvac-plant.png" alt="Coordinated centralized HVAC plant" fill unoptimized sizes="(max-width: 760px) 100vw, 38vw" /></Reveal>
          <Reveal delay={0.08} className="about-evidence-note-v5"><span className="corp-kicker">Our promise</span><p>{company.promise}</p></Reveal>
        </div>
      </div></section>

      <section className="section about-direction-v5"><div className="site-container">
        <div className="about-section-heading-v5"><span className="corp-kicker">Our direction</span><h2>A clear purpose behind every project.</h2></div>
        <div className="about-direction-grid-v5">
          <Reveal><Target size={34} /><span>Mission</span><h3>Improve the environments people depend on.</h3><p>{company.mission}</p></Reveal>
          <Reveal delay={0.08}><Eye size={34} /><span>Vision</span><h3>Earn trust through technical delivery.</h3><p>{company.vision}</p></Reveal>
        </div>
      </div></section>

      <section className="section about-approach-v5"><div className="site-container">
        <div className="about-section-heading-v5 about-section-heading-split-v5"><div><span className="corp-kicker">How we work</span><h2>Simple decisions, carefully executed.</h2></div><p>Our method keeps technical intent connected to what is ultimately installed, tested and maintained on site.</p></div>
        <div className="about-approach-list-v5">{approach.map(([number, title, body], index) => <Reveal delay={index * 0.06} key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
      </div></section>

      <section className="section about-values-v5"><div className="site-container">
        <div className="about-section-heading-v5"><span className="corp-kicker">Operating principles</span><h2>What guides our work.</h2></div>
        <div className="about-values-list-v5">{company.values.map((value, index) => <Reveal delay={index * 0.05} key={value.title}><span>0{index + 1}</span><div><h3>{value.title}</h3><p>{value.description}</p></div><CheckCircle weight="fill" /></Reveal>)}</div>
      </div></section>

      <EnquiryBand />
    </main>
  );
}

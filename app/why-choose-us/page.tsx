import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Checks, ClipboardText, Gauge, Handshake, Wrench } from "@phosphor-icons/react/dist/ssr";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";
import { WhyHeroVisual, WhyScrollImage } from "@/components/why/WhyMotion";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Why clients choose Cawnpore Engineering Services for accountable HVAC engineering, coordinated delivery and lifecycle support."
};

const reasons = [
  {
    number: "01",
    title: "We begin with the operating need.",
    copy: "Before equipment selection, we clarify occupancy, process loads, air quality, continuity and service expectations. That keeps design decisions tied to the outcome the facility actually needs.",
    icon: ClipboardText
  },
  {
    number: "02",
    title: "Engineering stays connected to execution.",
    copy: "Design intent is carried through coordination, installation and commissioning. Questions are resolved against the complete system, not passed between disconnected vendors.",
    icon: Wrench
  },
  {
    number: "03",
    title: "Performance is checked, not assumed.",
    copy: "Airflow, controls, temperatures and equipment behavior are reviewed during commissioning so the installed system can be measured against its intended duty.",
    icon: Gauge
  },
  {
    number: "04",
    title: "Support continues after handover.",
    copy: "Maintenance, repair, upgrades and performance reviews protect the original investment while helping the system adapt to changing occupancy and operating conditions.",
    icon: Handshake
  }
];

export default function WhyChooseUsPage() {
  return (
    <div className="why-page">
      <section className="why-hero">
        <div className="site-container why-hero-grid">
          <div className="why-hero-copy">
            <span className="mono-label">Why choose CES</span>
            <h1 className="display"><BlurReveal text="Accountability across the whole climate system." /></h1>
            <p>Choose one engineering partner who can connect the first calculation, the work on site and the way the system performs years later.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss your requirement <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/projects">Review project experience</Link>
            </div>
          </div>
          <WhyHeroVisual />
        </div>
      </section>

      <section className="why-proof-band" aria-label="CES commitments">
        <div className="site-container why-proof-grid">
          <div><strong>{site.coverage}</strong><span>Delivery capability</span></div>
          <div><strong>End-to-end</strong><span>Project responsibility</span></div>
          <div><strong>Lifecycle</strong><span>Service perspective</span></div>
          <p><Checks size={24} weight="duotone" /> Decisions remain connected from survey and engineering through commissioning and support.</p>
        </div>
      </section>

      <section className="section why-intro">
        <div className="site-container why-intro-grid">
          <Reveal>
            <span className="mono-label">A practical difference</span>
            <h2 className="section-title">Better outcomes come from fewer gaps between decisions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">HVAC problems often appear where responsibilities separate: design from installation, equipment from controls, commissioning from maintenance. CES works across those boundaries so the full system remains visible.</p>
          </Reveal>
        </div>
      </section>

      <section className="why-reasons">
        <div className="site-container why-reasons-grid">
          <div className="why-reasons-sticky">
            <WhyScrollImage />
          </div>
          <div className="why-reason-list">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal className="why-reason" delay={(index % 2) * 0.08} key={reason.number}>
                  <span>{reason.number}</span>
                  <Icon size={34} weight="duotone" />
                  <h2>{reason.title}</h2>
                  <p>{reason.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-method">
        <div className="site-container">
          <Reveal className="why-method-heading">
            <span className="mono-label">How we protect the outcome</span>
            <h2 className="section-title">Four connected checks. One accountable direction.</h2>
          </Reveal>
          <div className="why-method-track">
            {["Understand the duty", "Coordinate the system", "Verify the operation", "Support the lifecycle"].map((step, index) => (
              <Reveal className="why-method-step" delay={index * 0.07} key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-cta">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Start with clarity</span>
            <h2>Bring us the operating challenge, not a preselected machine.</h2>
            <p>We will help define the system requirement and the most practical next step.</p>
            <Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

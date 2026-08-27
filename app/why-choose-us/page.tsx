import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardText, Gauge, Handshake, Wrench } from "@phosphor-icons/react/dist/ssr";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";
import { WhyHeroVisual, WhyScrollImage } from "@/components/why/WhyMotion";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Why clients choose Cawnpore Engineering Services for accountable HVAC engineering, coordinated delivery and lifecycle support.",
  alternates: { canonical: "/why-choose-us" },
};

const reasons = [
  {
    number: "01",
    title: "Operating needs come first.",
    copy: "We clarify occupancy, loads, air quality, continuity and service expectations before equipment selection.",
    icon: ClipboardText
  },
  {
    number: "02",
    title: "Design stays connected to delivery.",
    copy: "Engineering intent continues through coordination, installation and commissioning.",
    icon: Wrench
  },
  {
    number: "03",
    title: "Performance is verified.",
    copy: "Airflow, controls, temperatures and equipment behavior are checked against the intended duty.",
    icon: Gauge
  },
  {
    number: "04",
    title: "Support continues after handover.",
    copy: "Maintenance, repairs and upgrades help protect performance throughout the system lifecycle.",
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
            <h1 className="display"><BlurReveal text="One accountable HVAC partner." /></h1>
            <p>CES connects engineering, site delivery, commissioning and lifecycle support.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss your requirement <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/projects">View projects</Link>
            </div>
          </div>
          <WhyHeroVisual />
        </div>
      </section>

      <section className="why-reasons">
        <div className="site-container why-reasons-grid">
          <div className="why-reasons-sticky"><WhyScrollImage /></div>
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

      <section className="section why-cta">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Start a conversation</span>
            <h2>Tell us what the environment needs.</h2>
            <Link className="button button-primary" href="/contact">Contact CES <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

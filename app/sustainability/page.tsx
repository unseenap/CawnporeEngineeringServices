import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartLineUp, Gauge, Wrench } from "@phosphor-icons/react/dist/ssr";
import { PerformanceScroll, SustainabilityHeroVisual } from "@/components/sustainability/SustainabilityMotion";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Energy-Efficient HVAC",
  description: "Energy-aware HVAC design, commissioning, optimization and modernization for better lifecycle performance.",
  alternates: { canonical: "/sustainability" },
};

const principles = [
  { title: "Model real demand", description: "Use loads and operating schedules to avoid avoidable overdesign.", icon: ChartLineUp },
  { title: "Tune the full system", description: "Align equipment, distribution, controls and commissioning.", icon: Gauge },
  { title: "Modernize with purpose", description: "Prioritize upgrades around installed performance and operating value.", icon: Wrench },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="sustainability-hero-v2">
        <div className="site-container sustainability-hero-grid-v2">
          <div className="sustainability-hero-copy-v2">
            <span className="mono-label">Energy-efficient HVAC</span>
            <h1 className="display"><BlurReveal text="Better system decisions reduce avoidable energy use." /></h1>
            <p>CES supports accurate design, commissioning, optimization and targeted modernization.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Request an energy review <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services/hvac-consultancy-design">Explore design services</Link>
            </div>
          </div>
          <SustainabilityHeroVisual />
        </div>
      </section>

      <section className="section sustainability-principles sustainability-principles-v2">
        <div className="site-container principles-heading-v2">
          <span className="mono-label">Our approach</span>
          <h2 className="section-title">Three practical efficiency principles.</h2>
        </div>
        <div className="site-container">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal className="sustainability-item" delay={index * 0.1} key={principle.title}>
                <Icon size={42} weight="duotone" />
                <span>0{index + 1}</span>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PerformanceScroll />

      <section className="section final-cta final-cta-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Energy review</span>
            <h2>Find the next practical performance gain.</h2>
            <Link className="button button-primary" href="/contact">Discuss your system <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

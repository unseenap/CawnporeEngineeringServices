import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartLineUp, CirclesThreePlus, Gauge, Wrench } from "@phosphor-icons/react/dist/ssr";
import { PerformanceScroll, SustainabilityHeroVisual, SustainabilityPhotoStory } from "@/components/sustainability/SustainabilityMotion";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Energy-Efficient HVAC",
  description: "Energy-aware HVAC design, commissioning, optimization and modernization for better lifecycle performance."
};

const principles = [
  { title: "Model the real demand", description: "Use load calculations, operating schedules and energy modelling to avoid costly overdesign and weak system choices.", icon: ChartLineUp },
  { title: "Tune the whole system", description: "Align equipment, airflow, hydronics, controls and commissioning so individual components support one outcome.", icon: Gauge },
  { title: "Modernize with purpose", description: "Assess installed performance first, then prioritize upgrades around measurable operating value.", icon: Wrench },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="sustainability-hero-v2">
        <div className="site-container sustainability-hero-grid-v2">
          <div className="sustainability-hero-copy-v2">
            <span className="mono-label">Energy-aware HVAC engineering</span>
            <h1 className="display"><BlurReveal text="Use less energy by making better system decisions." /></h1>
            <p>CES improves HVAC performance through accurate design, disciplined commissioning, operational optimization and targeted modernization.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Request an energy review <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services/retrofitting-upgrades">Explore upgrades</Link>
            </div>
          </div>
          <SustainabilityHeroVisual />
        </div>
      </section>

      <section className="section sustainability-intro-v2">
        <div className="site-container sustainability-intro-grid-v2">
          <Reveal>
            <span className="mono-label">Beyond equipment labels</span>
            <h2 className="section-title">A high-efficiency machine cannot fix a poorly coordinated system.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sustainability-lede">Sustainable HVAC begins before equipment is ordered and continues long after handover.</p>
            <p>CES looks at the complete performance chain: the load being served, the way air and water move, how controls respond, how the system is commissioned and how operating data informs the next improvement.</p>
          </Reveal>
        </div>
      </section>

      <section className="section sustainability-principles sustainability-principles-v2">
        <div className="site-container principles-heading-v2">
          <Reveal>
            <span className="mono-label">Three operating principles</span>
            <h2 className="section-title">Efficiency that can survive real operation.</h2>
          </Reveal>
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

      <section className="section sustainability-reality">
        <div className="site-container sustainability-reality-heading">
          <Reveal>
            <span className="mono-label">Performance in context</span>
            <h2 className="section-title">Different buildings. Different loads. One disciplined method.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">Industrial uptime and commercial comfort create different energy challenges. The answer begins with how each environment actually operates.</p>
          </Reveal>
        </div>
        <div className="site-container"><SustainabilityPhotoStory /></div>
      </section>

      <section className="section sustainability-outcomes">
        <div className="site-container sustainability-outcomes-grid">
          <Reveal>
            <CirclesThreePlus size={40} weight="duotone" />
            <h2 className="section-title">The outcome is better lifecycle value.</h2>
          </Reveal>
          <div className="outcome-list">
            {["Right-sized system decisions", "More stable comfort and air quality", "Lower avoidable energy use", "Clearer modernization priorities"].map((outcome, index) => (
              <Reveal className="outcome-item" delay={index * 0.06} key={outcome}>
                <span>0{index + 1}</span><strong>{outcome}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta final-cta-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Improve what the system does</span>
            <h2>Find the next practical performance gain.</h2>
            <p>Discuss modelling, optimization, retrofitting or commissioning with CES.</p>
            <Link className="button button-primary" href="/contact">Request an energy review <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

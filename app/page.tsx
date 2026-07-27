import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Buildings, Factory, Gauge, HouseLine, Leaf, Wrench } from "@phosphor-icons/react/dist/ssr";
import { HeroSystemVisual, ProjectPhotoRail } from "@/components/home/HomeMotion";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { ThermalText } from "@/components/motion/ThermalText";
import { Reveal } from "@/components/motion/Reveal";
import { ShapeGridPattern } from "@/components/ui/ShapeGridPattern";
import projects from "@/data/projects.json";
import services from "@/data/services.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Cawnpore Engineering Services | HVAC Solutions",
  description: "HVAC design, installation and lifecycle service for commercial, residential and industrial environments across India."
};

const segments = [
  { name: "Commercial", detail: "Offices, retail, healthcare and institutional spaces.", icon: Buildings },
  { name: "Residential", detail: "Comfort-led systems for homes and developments.", icon: HouseLine },
  { name: "Industrial", detail: "Reliable cooling and ventilation for critical operations.", icon: Factory },
  { name: "Energy-aware", detail: "Performance upgrades that reduce avoidable consumption.", icon: Leaf }
];

export default function Home() {
  return (
    <div className="home-page-shell">
      <section className="home-hero home-hero-v2">
        <ShapeGridPattern className="home-shape-grid" />
        <div className="site-container home-hero-v2-grid">
          <div className="home-hero-v2-copy">
            <span className="mono-label">{site.headquarters} · {site.coverage} HVAC delivery</span>
            <h1 className="display"><BlurReveal text="Cawnpore Engineering Services" /></h1>
            <p className="hero-slogan"><ThermalText text="Engineering comfort. Sustaining performance." /></p>
            <p className="hero-summary">Integrated HVAC design, installation and lifecycle service for commercial, residential and industrial environments across India.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss a project <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services">Explore services</Link>
            </div>
            <div className="hero-trust-line" aria-label="Core capabilities">
              <span><Gauge size={18} />Performance-led design</span>
              <span><Wrench size={18} />Lifecycle support</span>
            </div>
          </div>
          <HeroSystemVisual />
        </div>
      </section>

      <section className="proof-strip" aria-label="Company snapshot">
        <div className="site-container proof-grid">
          <div><strong>{site.founded}</strong><span>Founded</span></div>
          <div><strong>{site.headquarters}</strong><span>Headquarters</span></div>
          <div><strong>{site.coverage}</strong><span>Project reach</span></div>
          <p>One accountable engineering partner from system planning and execution to maintenance, modernization and specialized climate control.</p>
        </div>
      </section>

      <section className="section home-intro">
        <div className="site-container home-intro-grid">
          <Reveal className="home-intro-title">
            <span className="mono-label">Engineering the full lifecycle</span>
            <h2 className="section-title">The right system is more than the right machine.</h2>
          </Reveal>
          <Reveal className="home-intro-copy" delay={0.1}>
            <p>It is the relationship between load, equipment, airflow, controls and the people who depend on the space.</p>
            <p>CES coordinates those decisions into a system that can be built, commissioned, maintained and improved.</p>
          </Reveal>
        </div>
        <div className="site-container">
          <div className="segment-grid">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <Reveal className={`segment-item segment-${index + 1}`} delay={index * 0.07} key={segment.name}>
                  <Icon size={30} weight="duotone" />
                  <h3>{segment.name}</h3>
                  <p>{segment.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services-home services-home-v2">
        <div className="site-container services-heading">
          <Reveal>
            <span className="mono-label">One connected capability</span>
            <h2 className="section-title">From first calculation to long-term performance.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">Bring CES in for one defined need or retain a single technical partner across the system lifecycle.</p>
          </Reveal>
        </div>
        <div className="site-container">
          <div className="service-index">
            {services.map((service) => (
              <Reveal className="service-row" key={service.id}>
                <span>{service.number}</span>
                <div><h3>{service.shortTitle}</h3><p>{service.summary}</p></div>
                <Link href={`/services/${service.id}`} aria-label={`Explore ${service.title}`}><ArrowRight size={24} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectPhotoRail projects={projects.slice(0, 6)} />

      <section className="section efficiency-band efficiency-band-v2">
        <div className="site-container efficiency-grid">
          <Reveal>
            <span className="efficiency-icon"><Leaf size={32} weight="duotone" /></span>
            <h2>Efficiency starts with engineering clarity.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>Load calculation, equipment selection, control logic and commissioning all shape the energy a system will use for years.</p>
            <Link href="/sustainability">See our energy approach <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section final-cta final-cta-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Start with the operating need</span>
            <h2>Let us make the climate system make sense.</h2>
            <p>Tell us the city, space and performance challenge. We will help define a practical next step.</p>
            <Link className="button button-primary" href="/contact">Discuss your project <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

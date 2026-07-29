import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, Wrench } from "@phosphor-icons/react/dist/ssr";
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

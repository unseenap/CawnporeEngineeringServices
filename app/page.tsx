import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Buildings, Factory, HouseLine, Leaf } from "@phosphor-icons/react/dist/ssr";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";
import company from "@/data/company.json";
import projects from "@/data/projects.json";
import services from "@/data/services.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Cawnpore Engineering Services | HVAC Solutions",
  description: "Professional HVAC design, installation, maintenance, upgrades and specialized climate-control solutions across India."
};

const segments = [
  { name: "Commercial", detail: "Offices, retail spaces, malls and institutions", icon: Buildings },
  { name: "Residential", detail: "Homes and residential developments", icon: HouseLine },
  { name: "Industrial", detail: "Manufacturing and production facilities", icon: Factory },
  { name: "Sustainable", detail: "Energy-aware climate-control solutions", icon: Leaf }
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <span className="mono-label">{site.headquarters} · {site.coverage} operations</span>
            <h1 className="display">
              <BlurReveal text="Climate, engineered." />
            </h1>
            <p>Professional HVAC solutions for commercial, residential and industrial environments.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Request consultation <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services">Explore services</Link>
            </div>
          </div>
          <Reveal className="home-hero-visual" delay={0.15}>
            <AirflowVisual />
          </Reveal>
        </div>
      </section>

      <section className="proof-strip" aria-label="Company snapshot">
        <div className="site-container proof-grid">
          <div><strong>{site.founded}</strong><span>Founded</span></div>
          <div><strong>{site.headquarters}</strong><span>Headquarters</span></div>
          <div><strong>{site.coverage}</strong><span>Operations</span></div>
          <p>{company.promise}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title">One climate platform. Four operating worlds.</h2>
          </Reveal>
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

      <section className="section services-home">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Complete lifecycle capability</span>
            <h2 className="section-title">From the first calculation to long-term performance.</h2>
          </Reveal>
          <div className="service-index">
            {services.map((service) => (
              <Reveal className="service-row" key={service.id}>
                <span>{service.number}</span>
                <div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                </div>
                <Link href={`/services/${service.id}`} aria-label={`Explore ${service.title}`}>
                  <ArrowRight size={24} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-feature">
        <div className="site-container project-feature-grid">
          <Reveal className="project-feature-copy">
            <h2 className="section-title">Built across sectors. Proven in real environments.</h2>
            <p className="body-large">Selected work spans healthcare, beverage, retail, housing, manufacturing, aviation and entertainment.</p>
            <Link className="button button-secondary" href="/projects">View projects <ArrowRight size={18} /></Link>
          </Reveal>
          <div className="project-mosaic">
            {projects.slice(0, 4).map((project, index) => (
              <Reveal className={`mosaic-item mosaic-${index + 1}`} delay={index * 0.08} key={project.client}>
                <Image src={project.image} alt={`${project.client} project reference`} fill sizes="(max-width: 768px) 100vw, 28vw" />
                <span>{project.client}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section efficiency-band">
        <div className="site-container efficiency-grid">
          <Reveal>
            <Leaf size={48} weight="duotone" />
            <h2>Comfort and efficiency can move together.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>Energy modelling, optimization, modernization and responsible system performance are designed into the CES approach.</p>
            <Link href="/sustainability">Explore energy thinking <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section final-cta">
        <div className="site-container">
          <Reveal>
            <h2>What does your environment need?</h2>
            <p>Share the service, city and operating challenge. We will help define the right next step.</p>
            <Link className="button button-primary" href="/contact">Request consultation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Buildings, Factory, FirstAid, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { HyperspeedBackground } from "@/components/industries/HyperspeedBackground";
import { IndustryStory } from "@/components/industries/IndustryStories";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";
import industries from "@/data/industries.json";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Purpose-built HVAC engineering for commercial, healthcare, manufacturing, residential and mission-critical environments across India."
};

const stories = [
  {
    number: "01",
    eyebrow: "People-intensive environments",
    title: "Comfort that adapts to occupancy, care and public use.",
    description: "Retail, offices, education and healthcare rarely operate at one steady condition. CES plans zoning, ventilation, filtration and controls around how each part of the building is actually occupied.",
    image: "/images/illustrations/ces-industries-commercial-healthcare.webp",
    alt: "Cutaway illustration of commercial and healthcare HVAC systems with visible supply, return and filtration paths",
    priorities: ["Zoned load response", "Fresh-air and filtration strategy", "Maintainable distribution"]
  },
  {
    number: "02",
    eyebrow: "Process and uptime environments",
    title: "Cooling engineered around the consequence of interruption.",
    description: "Manufacturing, data centres, pharmaceuticals and food processing place the process first. We coordinate heat rejection, redundancy, pressure relationships and ventilation with the operating duty of the facility.",
    image: "/images/illustrations/ces-industries-industrial-data.webp",
    alt: "Technical cutaway illustration of manufacturing ventilation, chilled-water plant and data-centre precision cooling",
    priorities: ["Process heat removal", "Duty and standby planning", "Continuous performance checks"]
  },
  {
    number: "03",
    eyebrow: "Living and hospitality environments",
    title: "Quiet, controllable comfort without operational complexity.",
    description: "Homes and hotels need systems that disappear into daily life. CES balances room-level control, acoustics, indoor air quality and service access so comfort remains consistent without wasteful operation.",
    image: "/images/illustrations/ces-industries-residential-hospitality.webp",
    alt: "Cutaway illustration of a residential and hospitality building with quiet zoned HVAC airflow",
    priorities: ["Low-noise equipment selection", "Room-level zoning", "Accessible lifecycle service"]
  }
];

const icons = [Buildings, FirstAid, Factory, Buildings, HouseLine, Buildings, FirstAid, Factory, Buildings, Factory];

export default function IndustriesPage() {
  return (
    <div className="industries-page-v2">
      <section className="industries-hero-v2">
        <HyperspeedBackground />
        <div className="site-container industries-hero-content">
          <div className="industries-hero-copy">
            <span className="mono-label">Sector-specific climate engineering</span>
            <h1 className="display"><BlurReveal text="Every environment has its own climate logic." /></h1>
            <p>CES begins with the operating reality of the space: who uses it, what must remain stable, where heat is generated and what happens if performance drifts.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact?service=industry-solutions">Discuss your environment <ArrowRight size={18} /></Link>
              <a className="button button-secondary" href="#industry-stories">Explore sectors</a>
            </div>
          </div>
          <div className="industries-hero-index" aria-label="Industry engineering priorities">
            <span><strong>10</strong> operating sectors</span>
            <span><strong>04</strong> decision layers</span>
            <span><strong>01</strong> accountable partner</span>
          </div>
        </div>
        <div className="industries-hero-status" aria-hidden="true">
          <span>LOAD</span><i /><span>AIRFLOW</span><i /><span>CONTROL</span><i /><span>LIFECYCLE</span>
        </div>
      </section>

      <section className="section industries-intro-v2">
        <div className="site-container industries-intro-grid">
          <Reveal>
            <span className="mono-label">The requirement shapes the system</span>
            <h2 className="section-title">We do not copy one HVAC answer from building to building.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">A busy mall, clean room, server hall and hotel room can share equipment categories while demanding completely different decisions. Our work connects load, air quality, continuity, acoustics and access into one buildable strategy.</p>
          </Reveal>
        </div>
      </section>

      <section className="industries-stories" id="industry-stories">
        <div className="site-container">
          {stories.map((story, index) => (
            <IndustryStory story={story} reverse={index % 2 === 1} key={story.number} />
          ))}
        </div>
      </section>

      <section className="section sector-matrix">
        <div className="site-container">
          <Reveal className="sector-matrix-heading">
            <span className="mono-label">Complete sector coverage</span>
            <h2 className="section-title">One engineering method. Ten operating contexts.</h2>
          </Reveal>
          <div className="sector-list">
            {industries.map((industry, index) => {
              const Icon = icons[index];
              return (
                <Reveal className="sector-row" delay={(index % 4) * 0.04} key={industry.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={26} weight="duotone" />
                  <h3>{industry.name}</h3>
                  <p>{industry.challenge}</p>
                  <strong>{industry.response}</strong>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section industry-cta-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Start with operating conditions</span>
            <h2>Tell us what the environment must protect.</h2>
            <p>Comfort, air quality, process stability or uptime. We will help translate the requirement into a practical HVAC direction.</p>
            <Link className="button button-primary" href="/contact?service=industry-solutions">Define your requirement <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

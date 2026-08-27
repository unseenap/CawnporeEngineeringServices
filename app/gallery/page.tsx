import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "A visual record of HVAC installation, ventilation and project work completed by Cawnpore Engineering Services.",
  alternates: { canonical: "/gallery" },
};

const siteWork = [
  {
    title: "Basement ventilation systems",
    description: "Installed fan banks and ductwork for dependable air movement in enclosed parking areas.",
    image: "/images/services/basement-ventilation/four-fan-basement-view.jpeg",
  },
  {
    title: "Jet fan installation",
    description: "Ceiling-mounted jet fans positioned to support planned airflow paths across parking levels.",
    image: "/images/services/basement-ventilation/jet-fan-array.jpeg",
  },
  {
    title: "Ducting and air distribution",
    description: "Coordinated sheet-metal duct routes installed around structural and building-service constraints.",
    image: "/images/services/basement-ventilation/completed-ductwork-wide.jpeg",
  },
  {
    title: "Parking ventilation delivery",
    description: "Integrated ventilation equipment serving active basement parking environments.",
    image: "/images/services/basement-ventilation/parking-ventilation-context.jpeg",
  },
  {
    title: "HVAC system commissioning",
    description: "On-site inspection and testing focused on reliable operation and service readiness.",
    image: "/images/services/rooftop-maintenance/technician-commissioning-check.png",
  },
  {
    title: "Rooftop HVAC plant",
    description: "Organized plant installation supporting commercial cooling and distribution requirements.",
    image: "/images/services/consultancy/rooftop-hvac-plant.png",
  },
];

export default function GalleryPage() {
  return (
    <main className="corp-site gallery-page-v5">
      <section className="gallery-hero-v5">
        <Image
          src="/images/services/basement-ventilation/parking-ventilation-hero.jpeg"
          alt="Completed basement ventilation installation"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="gallery-hero-shade-v5" />
        <div className="site-container gallery-hero-copy-v5">
          <Reveal>
            <span className="corp-kicker">Project gallery</span>
            <h1>Engineering work, shown clearly.</h1>
            <p>
              A focused view of our HVAC installations, ventilation systems and
              completed project environments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section gallery-intro-v5">
        <div className="site-container gallery-intro-grid-v5">
          <Reveal>
            <span className="corp-kicker">From site to operation</span>
            <h2>Real project evidence from the field.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              These photographs document installed systems and work-site conditions
              across ventilation, ducting, fan installation, commissioning and
              centralized HVAC delivery.
            </p>
            <Link className="corp-text-link" href="/projects">
              Explore project experience <ArrowRight size={17} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section gallery-work-v5">
        <div className="site-container">
          <div className="gallery-work-grid-v5">
            {siteWork.map((item, index) => (
              <Reveal
                className={`gallery-work-item-v5${index === 0 ? " is-featured" : ""}`}
                delay={Math.min(index * 0.04, 0.16)}
                key={item.title}
              >
                <div className="gallery-work-image-v5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes={index === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 33vw"}
                  />
                </div>
                <div className="gallery-work-copy-v5">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-clients-v5">
        <div className="site-container">
          <Reveal className="gallery-clients-heading-v5">
            <span className="corp-kicker">Selected clients</span>
            <h2>Organizations represented in our project portfolio.</h2>
            <p>Official client marks supplied for completed company work.</p>
          </Reveal>
          <div className="gallery-logo-grid-v5" aria-label="Selected project clients">
            {projects.map((project, index) => (
              <Reveal
                className="gallery-logo-item-v5"
                delay={Math.min(index * 0.025, 0.14)}
                key={project.client}
              >
                <Image
                  src={project.image}
                  alt={`${project.client} official logo`}
                  fill
                  unoptimized
                  sizes="(max-width: 520px) 33vw, (max-width: 900px) 20vw, 12vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBand />
    </main>
  );
}

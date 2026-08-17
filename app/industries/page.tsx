import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HyperspeedBackground } from "@/components/industries/HyperspeedBackground";
import { IndustryStory } from "@/components/industries/IndustryStories";
import { BlurReveal } from "@/components/motion/BlurReveal";
import industries from "@/data/industries.json";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Purpose-built HVAC engineering for commercial, healthcare, manufacturing, residential and mission-critical environments across India."
};

const stories = [
  {
    number: "01",
    eyebrow: "Commercial, education and healthcare",
    title: "Comfort, ventilation and air quality for occupied spaces.",
    description: "CES plans zoning, ventilation, filtration and controls around occupancy and the way each area is used.",
    image: "/images/services/basement-ventilation/duct-and-fan-bank.jpeg",
    alt: "Installed commercial basement ventilation fan bank and ductwork",
    priorities: ["Zoned load response", "Fresh-air and filtration", "Maintainable distribution"]
  },
  {
    number: "02",
    eyebrow: "Manufacturing and critical facilities",
    title: "Cooling and ventilation designed around process continuity.",
    description: "We coordinate heat rejection, redundancy, pressure relationships and ventilation with the operating duty of the facility.",
    image: "/images/services/consultancy/rooftop-hvac-plant.png",
    alt: "Rooftop chilled-water HVAC plant and connected piping",
    priorities: ["Process heat removal", "Duty and standby planning", "Performance checks"]
  },
  {
    number: "03",
    eyebrow: "Residential and hospitality",
    title: "Quiet, controllable comfort with practical service access.",
    description: "CES balances room-level control, acoustics, indoor air quality and maintainability for consistent daily comfort.",
    image: "/images/services/rooftop-maintenance/technician-commissioning-check.png",
    alt: "HVAC technician commissioning rooftop air-conditioning equipment",
    priorities: ["Low-noise selection", "Room-level zoning", "Lifecycle access"]
  }
];

export default function IndustriesPage() {
  return (
    <div className="industries-page-v2">
      <section className="industries-hero-v2">
        <HyperspeedBackground />
        <div className="site-container industries-hero-content">
          <div className="industries-hero-copy">
            <span className="mono-label">Industries served</span>
            <h1 className="display"><BlurReveal text="HVAC shaped around the operating environment." /></h1>
            <p>Every sector brings different requirements for comfort, air quality, process stability and uptime.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#industry-stories">Explore sectors</a>
              <Link className="button button-secondary" href="/contact?service=industry-solutions">
                Discuss your environment <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-stories" id="industry-stories">
        <div className="site-container">
          {stories.map((story, index) => (
            <IndustryStory story={story} reverse={index % 2 === 1} key={story.number} />
          ))}
        </div>
      </section>

      <section className="section sector-directory">
        <div className="site-container">
          <span className="mono-label">Complete sector list</span>
          <ul className="sector-name-list">
            {industries.map((industry) => <li key={industry.name}>{industry.name}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

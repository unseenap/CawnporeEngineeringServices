import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Projects & Clients",
  description: "Selected CES work across healthcare, retail, housing, manufacturing, aviation, beverage and entertainment environments."
};

export default function ProjectsPage() {
  return (
    <main className="projects-page-v2">
      <ProjectsHero />
      <section className="section projects-approach">
        <div className="site-container projects-approach-grid">
          <div>
            <p className="mono-label">From requirement to reliable operation</p>
            <h2>Different buildings. One disciplined engineering approach.</h2>
          </div>
          <div className="projects-approach-copy">
            <p>
              The right HVAC response begins with the operating requirement—not
              a catalogue selection. We consider load behavior, ventilation,
              maintainability and control before equipment is coordinated.
            </p>
            <ol>
              <li><span>01</span><strong>Read the environment</strong><small>Occupancy, process, air quality and continuity.</small></li>
              <li><span>02</span><strong>Coordinate the system</strong><small>Equipment, distribution, controls and service access.</small></li>
              <li><span>03</span><strong>Verify performance</strong><small>Commissioning, handover and lifecycle support.</small></li>
            </ol>
          </div>
        </div>
      </section>
      <ProjectGallery />
      <section className="section projects-cta">
        <div className="site-container projects-cta-inner">
          <p className="mono-label">Your environment is the next brief</p>
          <h2>Bring us the operating challenge.</h2>
          <p>We will help translate it into a coordinated, maintainable HVAC solution.</p>
          <Link className="button button-primary" href="/contact">
            Start a project conversation <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>
    </main>
  );
}

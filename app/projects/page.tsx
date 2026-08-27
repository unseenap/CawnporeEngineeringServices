import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectsHero } from "@/components/projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projects & Clients",
  description: "Selected CES work across healthcare, retail, housing, manufacturing, aviation, beverage and entertainment environments.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page-v2">
      <ProjectsHero />
      <ProjectGallery />
      <section className="section projects-cta">
        <div className="site-container projects-cta-inner">
          <p className="mono-label">Start a project</p>
          <h2>Discuss your HVAC requirement.</h2>
          <p>Share the location, building type and current project stage.</p>
          <Link className="button button-primary" href="/contact">
            Request a consultation <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>
    </main>
  );
}

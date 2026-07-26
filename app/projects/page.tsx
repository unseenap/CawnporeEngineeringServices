import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";

export const metadata: Metadata = {
  title: "Projects & Clients",
  description: "Selected CES work across healthcare, retail, housing, manufacturing, aviation, beverage and entertainment environments."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero label="Projects" title="Proof across real operating environments." description="A selected view of organizations and sectors served by Cawnpore Engineering Services." visual={<AirflowVisual />} />
      <ProjectGallery />
    </>
  );
}

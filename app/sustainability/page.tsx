import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartLineUp, Leaf, Wrench } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import sustainability from "@/data/sustainability.json";

export const metadata: Metadata = {
  title: "Energy-Efficient HVAC",
  description: "Energy modelling, performance optimization, modernization and efficiency-focused HVAC engineering."
};

const icons = [ChartLineUp, Wrench, Leaf];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero label="Sustainability" title={sustainability.title} description={sustainability.description} visual={<AirflowVisual />} />
      <section className="section sustainability-principles">
        <div className="site-container">
          {sustainability.principles.map((principle, index) => {
            const Icon = icons[index];
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
      <section className="section energy-flow">
        <div className="site-container energy-flow-grid">
          <Reveal><h2 className="section-title">Efficiency across the lifecycle.</h2></Reveal>
          <div className="energy-track">
            {["Model", "Select", "Install", "Balance", "Optimize", "Modernize"].map((item, index) => (
              <Reveal className="energy-node" delay={index * 0.06} key={item}><span>{index + 1}</span>{item}</Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section final-cta">
        <div className="site-container">
          <h2>Review your system&apos;s next opportunity.</h2>
          <p>Discuss energy modelling, optimization, retrofitting or modernization with CES.</p>
          <Link className="button button-primary" href="/contact">Request energy review <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

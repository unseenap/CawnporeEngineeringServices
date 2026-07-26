import type { Metadata } from "next";
import { Buildings, Factory, FirstAid, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import industries from "@/data/industries.json";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "HVAC solutions for retail, healthcare, manufacturing, offices, housing, clean rooms, data centres, hotels and food processing."
};

const icons = [Buildings, FirstAid, Factory, Buildings, HouseLine, Buildings, FirstAid, Factory, Buildings, Factory];

export default function IndustriesPage() {
  return (
    <>
      <PageHero label="Industries" title="Different environments. Different climate logic." description="CES shapes HVAC delivery around occupancy, process, air-quality and operating requirements." visual={<AirflowVisual />} />
      <section className="section">
        <div className="site-container industry-grid">
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return (
              <Reveal className={`industry-item industry-item-${(index % 4) + 1}`} delay={(index % 4) * 0.05} key={industry.name}>
                <Icon size={32} weight="duotone" />
                <h2>{industry.name}</h2>
                <dl>
                  <dt>Operating challenge</dt>
                  <dd>{industry.challenge}</dd>
                  <dt>CES response</dt>
                  <dd>{industry.response}</dd>
                </dl>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

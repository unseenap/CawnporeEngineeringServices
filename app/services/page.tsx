import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "HVAC Services",
  description: "Explore HVAC design, installation, commissioning, maintenance, repair, retrofitting and specialized solutions."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Services" title="A complete HVAC delivery lifecycle." description="Design, install, validate, maintain and modernize through one connected engineering platform." visual={<AirflowVisual />} />
      <section className="section">
        <div className="site-container services-editorial">
          {services.map((service) => (
            <Reveal className="service-feature" key={service.id}>
              <div className="service-feature-image">
                <Image src={service.image} alt="" fill unoptimized sizes="(max-width: 768px) 100vw, 42vw" />
              </div>
              <div>
                <span className="service-number">{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="deliverable-cloud">
                  {service.deliverables.map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link href={`/services/${service.id}`}>Explore service <ArrowRight size={18} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

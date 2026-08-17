import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blueprint,
  Buildings,
  CirclesThreePlus,
  Fan,
  Snowflake,
  ThermometerCold,
  Warehouse,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Consultancy, ventilation, air conditioning, chiller plants, clean rooms, cold rooms, VRV/VRF and interior coordination by CES.",
};

const serviceIcons = [Blueprint, Fan, Snowflake, Wind, ThermometerCold, Warehouse, CirclesThreePlus, Buildings];

export default function ServicesPage() {
  return (
    <main className="corp-site services-overview-v3">
      <CorporateHero
        label="Our services"
        title="Complete building climate solutions."
        description="Eight focused capabilities, delivered through clear engineering, coordinated execution and accountable project support."
        image="/images/services/basement-ventilation/duct-and-fan-bank.jpeg"
      />

      <section className="section services-directory-v3">
        <div className="site-container">
          <div className="services-directory-heading">
            <span className="corp-kicker">Service directory</span>
            <h2>Choose the expertise your project needs.</h2>
            <p>Each service has a dedicated page covering performance priorities, system scope, benefits and the complete CES solution.</p>
          </div>

          <div className="services-card-grid-v3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal className="service-card-v3" delay={index * 0.045} key={service.id}>
                  <div className="service-card-icon-v3"><Icon size={30} weight="duotone" /></div>
                  <span className="service-card-number-v3">{service.number}</span>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  <ul>{service.subservices.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
                  <Link href={`/services/${service.id}`}>
                    Read more <ArrowRight size={17} weight="bold" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <EnquiryBand />
    </main>
  );
}

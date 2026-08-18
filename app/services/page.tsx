import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blueprint, Buildings, CirclesThreePlus, Fan, Snowflake, ThermometerCold, Warehouse, WhatsappLogo, Wind } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "HVAC and Engineering Services | CES",
  description: "Explore HVAC consultancy, ventilation, air conditioning, chiller plants, clean rooms, cold rooms, VRV/VRF and interior coordination by CES.",
};

const serviceIcons = [Blueprint, Fan, Snowflake, Wind, ThermometerCold, Warehouse, CirclesThreePlus, Buildings];

export default function ServicesPage() {
  return (
    <main className="corp-site services-page-v5">
      <section className="services-hero-v5">
        <Image src="/images/services/basement-ventilation/duct-and-fan-bank.jpeg" alt="CES basement ventilation duct and fan installation" fill priority unoptimized sizes="100vw" />
        <div className="services-hero-shade-v5" />
        <div className="site-container services-hero-copy-v5">
          <span className="corp-kicker">Our services</span>
          <h1>Complete HVAC capability, clearly organized.</h1>
          <p>Engineering, execution and lifecycle support for airflow, cooling and controlled environments across commercial, industrial and institutional projects.</p>
        </div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/918318554343" aria-label="Contact CES on WhatsApp"><WhatsappLogo size={31} weight="fill" /></a>

      <section className="section services-intro-v5"><div className="site-container services-intro-grid-v5">
        <Reveal><span className="corp-kicker">Service directory</span><h2>Choose the expertise your project needs.</h2></Reveal>
        <Reveal delay={0.08}><p>Every capability has a dedicated page explaining its engineering scope, performance priorities, system approach, benefits and complete CES solution.</p><Link className="corp-text-link" href="/contact#request-a-quote">Not sure where to begin? Discuss the requirement <ArrowRight size={16} /></Link></Reveal>
      </div></section>

      <section className="section services-cards-section-v5"><div className="site-container">
        <div className="services-card-grid-v5">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal className="service-card-v5" delay={index * 0.045} key={service.id}>
                <Link className="service-card-image-v5" href={`/services/${service.id}`} aria-label={`View ${service.title}`}>
                  <Image src={service.image} alt={`${service.title} by Cawnpore Engineering Services`} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" />
                  <span>{service.number}</span>
                </Link>
                <div className="service-card-body-v5">
                  <div className="service-card-title-v5"><div><Icon size={27} weight="duotone" /></div><h2>{service.title}</h2></div>
                  <p>{service.summary}</p>
                  <ul>{service.subservices.map((item) => <li key={item}>{item}</li>)}</ul>
                  <Link className="service-card-link-v5" href={`/services/${service.id}`}>Explore this service <ArrowRight size={17} weight="bold" /></Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div></section>

      <EnquiryBand />
    </main>
  );
}

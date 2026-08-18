import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardText, Gear, Headset, Ruler, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { CorporateHeroSlider } from "@/components/home/CorporateHeroSlider";
import { Reveal } from "@/components/motion/Reveal";
import { BrandScroller } from "@/components/ui/brand-scoller";
import projects from "@/data/projects.json";

export const metadata: Metadata = { title: "Cawnpore Engineering Services | HVAC Solutions", description: "Turnkey HVAC engineering, execution and lifecycle support across India." };

const featuredServices = [
  { eyebrow: "Plan", title: "HVAC consultancy & design", body: "Load assessment, airflow planning, coordinated layouts and equipment selection developed around the actual building requirement.", image: "/images/services/consultancy/hvac-design-consultation.png", href: "/services/hvac-consultancy-design" },
  { eyebrow: "Cool", title: "Centralized air conditioning", body: "Dependable centralized cooling solutions coordinated for capacity, energy use, service access and long-term operation.", image: "/images/services/consultancy/rooftop-hvac-plant.png", href: "/services/ventilation-air-conditioning" },
  { eyebrow: "Distribute", title: "Ducting & air distribution", body: "Purpose-planned duct routes, fittings and air terminals that support balanced delivery while respecting site constraints.", image: "/images/services/basement-ventilation/completed-ductwork-wide.jpeg", href: "/services/ventilation-air-conditioning" },
  { eyebrow: "Ventilate", title: "Car-parking ventilation & fan installation", body: "Basement exhaust, jet-fan and mechanical ventilation installations designed for effective air movement and maintainable operation.", image: "/images/services/basement-ventilation/four-fan-ventilation-bank.jpeg", href: "/services/ventilation-air-conditioning" },
];

const steps = [
  [ClipboardText, "Requirement", "Share the site, system and expected result."],
  [Ruler, "Engineering", "We survey, calculate and coordinate the solution."],
  [Gear, "Execution", "Our team installs, tests and commissions the system."],
  [Headset, "Support", "Lifecycle service protects ongoing performance."],
] as const;

export default function Home() {
  return (
    <main className="corp-site home-page-v5">
      <CorporateHeroSlider />
      <a className="whatsapp-float" href="https://wa.me/918318554343" aria-label="Contact CES on WhatsApp"><WhatsappLogo size={31} weight="fill" /></a>

      <section className="home-proof-v5" aria-label="CES delivery strengths"><div className="site-container">
        <span><strong>Pan-India</strong> project capability</span><span><strong>Turnkey</strong> HVAC delivery</span><span><strong>One team</strong> from design to support</span>
      </div></section>

      <section className="home-clients-highlight-v5" aria-labelledby="home-client-heading"><div className="site-container">
        <div className="home-client-highlight-head-v5">
          <div><span className="corp-kicker">Selected clients</span><h2 id="home-client-heading">Organizations represented in our project portfolio.</h2></div>
          <Link className="corp-text-link" href="/gallery">View all clients <ArrowRight size={16} /></Link>
        </div>
        <BrandScroller brands={projects} duration={52} />
      </div></section>

      <section className="section home-intro-v5"><div className="site-container home-intro-grid-v5">
        <Reveal><span className="corp-kicker">Engineering with accountability</span><h2>One practical partner for the complete HVAC lifecycle.</h2></Reveal>
        <Reveal delay={0.08}><p>Cawnpore Engineering Services combines technical planning, coordinated execution and responsive support. Every system is shaped around building use, performance needs and maintainability—not a standard catalogue answer.</p>
          <div className="home-intro-points-v5"><span><CheckCircle weight="fill" /> Buildable engineering</span><span><CheckCircle weight="fill" /> Site-led coordination</span><span><CheckCircle weight="fill" /> Reliable commissioning</span></div>
          <Link className="corp-text-link" href="/about">Learn about CES <ArrowRight size={16} /></Link>
        </Reveal>
      </div></section>

      <section className="section home-services-v5"><div className="site-container">
        <div className="home-section-heading-v5"><div><span className="corp-kicker">Core capabilities</span><h2>Solutions grounded in real site work.</h2></div><p>Focused support for airflow, cooling and environmental control—from the first calculation to final commissioning.</p></div>
        <div className="home-service-list-v5">{featuredServices.map((service, index) => <Reveal className="home-service-item-v5" delay={index * 0.06} key={service.title}>
          <div className="home-service-image-v5"><Image src={service.image} alt={`${service.title} work by Cawnpore Engineering Services`} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div className="home-service-copy-v5"><span>{String(index + 1).padStart(2, "0")} / {service.eyebrow}</span><h3>{service.title}</h3><p>{service.body}</p><Link href={service.href}>View capability <ArrowRight size={17} /></Link></div>
        </Reveal>)}</div>
        <div className="corp-center"><Link className="button button-primary" href="/services">View all services</Link></div>
      </div></section>

      <section className="section home-process-v5"><div className="site-container">
        <div className="home-section-heading-v5 home-section-heading-compact-v5"><div><span className="corp-kicker">Delivery process</span><h2>Clear steps. One accountable team.</h2></div></div>
        <div className="home-process-grid-v5">{steps.map(([Icon, title, body], index) => <Reveal className="home-process-step-v5" delay={index * 0.06} key={title}><span>0{index + 1}</span><Icon size={28} /><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
      </div></section>
      <EnquiryBand />
    </main>
  );
}

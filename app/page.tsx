import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardText, Gear, Headset, Ruler, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { CorporateHeroSlider } from "@/components/home/CorporateHeroSlider";
import projects from "@/data/projects.json";
import services from "@/data/services.json";

export const metadata: Metadata = { title: "Cawnpore Engineering Services | HVAC Solutions", description: "Turnkey HVAC engineering, execution and lifecycle support across India." };

const steps = [
  [ClipboardText, "Send your requirement", "Tell us about the site, system and expected outcome."],
  [Ruler, "Survey and design", "We assess the need and prepare a coordinated technical solution."],
  [Gear, "Execute and commission", "Our team installs, tests and validates system performance."],
  [Headset, "Support the lifecycle", "Planned maintenance keeps comfort and efficiency on track."]
];

export default function Home() {
  return <main className="corp-site">
    <CorporateHeroSlider />

    <a className="whatsapp-float" href={`https://wa.me/918318554343`} aria-label="Contact CES on WhatsApp"><WhatsappLogo size={31} weight="fill" /></a>

    <section className="corp-proof-strip"><div className="site-container">
      <span><strong>Pan-India</strong> project support</span><span><strong>Turnkey</strong> delivery</span><span><strong>5</strong> core capabilities</span><span><strong>Lifecycle</strong> accountability</span>
    </div></section>

    <section className="section corp-intro"><div className="site-container corp-two-col">
      <Reveal><span className="corp-kicker">About CES</span><h2>One engineering partner from first calculation to stable operation.</h2></Reveal>
      <Reveal delay={0.1}><p>Cawnpore Engineering Services combines technical design, disciplined site execution and responsive after-sales support. We build solutions around the actual operating environment rather than applying one standard answer everywhere.</p><ul className="corp-checks"><li><CheckCircle /> Clear technical recommendations</li><li><CheckCircle /> Coordinated project execution</li><li><CheckCircle /> Energy-aware system choices</li><li><CheckCircle /> Dependable service support</li></ul><Link className="corp-text-link" href="/about">Know more about CES <ArrowRight size={16} /></Link></Reveal>
    </div></section>

    <section className="section corp-services-section"><div className="site-container">
      <div className="corp-section-head"><span className="corp-kicker">Our services</span><h2>Complete HVAC capabilities</h2><p>Specialist support for new projects, operating buildings and system upgrades.</p></div>
      <div className="corp-service-grid">{services.map((service, i) => <Reveal className="corp-service-card" delay={i * .05} key={service.id}><div className="corp-card-image"><Image src={service.image} alt="" fill unoptimized sizes="(max-width: 700px) 100vw, 33vw" /></div><span>{service.number}</span><h3>{service.shortTitle}</h3><p>{service.summary}</p><Link href={`/services/${service.id}`}>View service <ArrowRight size={16} /></Link></Reveal>)}</div>
      <div className="corp-center"><Link className="button button-primary" href="/services">View all services</Link></div>
    </div></section>

    <section className="section corp-project-preview"><div className="site-container">
      <div className="corp-section-head"><span className="corp-kicker">Selected work</span><h2>Experience across demanding environments</h2></div>
      <div className="corp-project-grid">{projects.slice(0, 6).map((project, i) => <Reveal className="corp-project-card" delay={i * .04} key={project.client}><Image src={project.image} alt={`${project.client} project`} fill unoptimized sizes="(max-width:700px) 100vw, 33vw" /><div><span>{project.sector}</span><h3>{project.client}</h3></div></Reveal>)}</div>
      <div className="corp-center"><Link className="corp-text-link" href="/gallery">Explore the project gallery <ArrowRight size={16} /></Link></div>
    </div></section>

    <section className="section corp-process"><div className="site-container"><div className="corp-section-head"><span className="corp-kicker">How we work</span><h2>A careful process at every stage</h2></div><div className="corp-process-grid">{steps.map(([Icon,title,body], i) => <Reveal className="corp-step" delay={i*.07} key={String(title)}><b>0{i+1}</b><Icon size={32} /><h3>{String(title)}</h3><p>{String(body)}</p></Reveal>)}</div></div></section>
    <EnquiryBand />
  </main>;
}

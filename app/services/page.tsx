import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import services from "@/data/services.json";

export const metadata: Metadata={title:"Our Services",description:"HVAC design, installation, commissioning, maintenance, repair, retrofit and specialist solutions."};
export default function ServicesPage(){return <main className="corp-site"><CorporateHero label="Our services" title="Complete HVAC solutions." description="One coordinated team for design, execution, validation, maintenance and modernization." image="/images/source/sourceimage4.png"/><section className="section"><div className="site-container corp-services-list">{services.map((s)=><Reveal className="corp-service-feature" key={s.id}><div className="corp-service-feature-image"><Image src={s.image} alt="" fill unoptimized sizes="(max-width:800px) 100vw, 46vw"/></div><div><span className="corp-kicker">Service {s.number}</span><h2>{s.title}</h2><p>{s.description}</p><ul className="corp-checks">{s.deliverables.map(d=><li key={d}><CheckCircle />{d}</li>)}</ul><Link className="corp-text-link" href={`/services/${s.id}`}>View service details <ArrowRight size={16}/></Link></div></Reveal>)}</div></section><EnquiryBand/></main>}

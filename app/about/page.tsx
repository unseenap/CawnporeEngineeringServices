import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Eye, Target } from "@phosphor-icons/react/dist/ssr";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import company from "@/data/company.json";

export const metadata: Metadata = { title: "About Us", description: "About Cawnpore Engineering Services and our approach to dependable HVAC delivery." };

export default function AboutPage(){return <main className="corp-site">
  <CorporateHero label="About us" title="Engineering built around accountability." description="A Kanpur-based HVAC partner serving projects and operating facilities across India." image="/images/illustrations/ces-about-engineering-team.png" />
  <section className="section"><div className="site-container corp-about-story"><Reveal className="corp-about-image"><Image src="/images/illustrations/ces-about-engineering-team.png" alt="CES engineering team planning an HVAC system" fill unoptimized sizes="(max-width:800px) 100vw, 48vw" /></Reveal><Reveal delay={.1}><span className="corp-kicker">Who we are</span><h2>Practical HVAC expertise from design through service.</h2><p>Cawnpore Engineering Services was founded in 2021 to bring technical clarity, coordinated execution and responsive lifecycle support into one dependable relationship.</p><p>We work across commercial, industrial, healthcare, hospitality, retail and residential environments, adapting every system to its actual load, use and operating priorities.</p><ul className="corp-checks">{company.strengths.slice(0,6).map(item=><li key={item}><CheckCircle />{item}</li>)}</ul></Reveal></div></section>
  <section className="section corp-values"><div className="site-container"><div className="corp-section-head"><span className="corp-kicker">Our direction</span><h2>Purpose behind every project</h2></div><div className="corp-direction-grid"><Reveal><Target size={38}/><h3>Our mission</h3><p>{company.mission}</p></Reveal><Reveal delay={.1}><Eye size={38}/><h3>Our vision</h3><p>{company.vision}</p></Reveal></div><div className="corp-value-grid">{company.values.map((v,i)=><Reveal delay={i*.05} key={v.title}><b>0{i+1}</b><h3>{v.title}</h3><p>{v.description}</p></Reveal>)}</div></div></section>
  <section className="section corp-method"><div className="site-container corp-two-col"><Reveal><span className="corp-kicker">Methodology</span><h2>Understand first. Engineer carefully. Deliver responsibly.</h2></Reveal><Reveal delay={.1}><p>We start with the operating need, evaluate system options and coordinate the technical solution before execution. During delivery, testing and commissioning confirm that the installed system performs as intended. After handover, our maintenance support protects uptime and lifecycle value.</p></Reveal></div></section>
  <EnquiryBand />
</main>}

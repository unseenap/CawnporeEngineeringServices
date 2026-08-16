import type { Metadata } from "next";
import Image from "next/image";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import projects from "@/data/projects.json";
export const metadata:Metadata={title:"Project Gallery",description:"Selected CES HVAC projects across commercial, industrial, healthcare and residential environments."};
export default function GalleryPage(){return <main className="corp-site"><CorporateHero label="Gallery" title="Organizations we have served." description="Official client and project identities from work completed by Cawnpore Engineering Services." image="/images/illustrations/ces-projects-engineering-network.png"/><section className="section"><div className="site-container"><div className="corp-gallery-intro"><span className="corp-kicker">Projects and clients</span><h2>Our project portfolio</h2><p>Every mark below is presented from the supplied official vector artwork.</p></div><div className="corp-gallery-grid">{projects.map((p,i)=><Reveal className="corp-gallery-item" delay={i*.04} key={p.client}><div><Image src={p.image} alt={`${p.client} official logo`} fill unoptimized sizes="(max-width:700px) 100vw, 33vw"/></div><span>{p.sector}</span><h3>{p.client}</h3></Reveal>)}</div></div></section><EnquiryBand/></main>}

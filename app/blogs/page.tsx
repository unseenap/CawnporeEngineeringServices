import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import blogs from "@/data/blogs.json";
export const metadata:Metadata={title:"HVAC Insights",description:"Practical HVAC guidance from Cawnpore Engineering Services."};
export default function BlogsPage(){return <main className="corp-site"><CorporateHero label="Insights" title="Practical HVAC knowledge." description="Clear guidance for planning, operating and improving climate-control systems." image="/images/services/rooftop-maintenance/technician-system-testing.png"/><section className="section"><div className="site-container"><div className="corp-blog-layout"><aside><h2>Topics</h2>{["Design & Engineering","Maintenance","Retrofit","Air Quality","Industrial HVAC","Efficiency"].map(x=><span key={x}>{x}</span>)}</aside><div className="corp-blog-grid">{blogs.map((b,i)=><Reveal className="corp-blog-card" delay={i*.04} key={b.title}><div><Image src={b.image} alt={`${b.category} HVAC work`} fill unoptimized sizes="(max-width:800px) 100vw, 34vw"/></div><span>{b.category}</span><h2>{b.title}</h2><p>{b.summary}</p><a href="/contact">Discuss this topic <ArrowRight size={15}/></a></Reveal>)}</div></div></div></section><EnquiryBand/></main>}

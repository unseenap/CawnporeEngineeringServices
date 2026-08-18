import type { Metadata } from "next";
import Image from "next/image";
import { Buildings, Database, Factory, FirstAid, ForkKnife, GraduationCap, HouseLine, OfficeChair, ShoppingBag, TestTube } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import industries from "@/data/industries.json";

export const metadata: Metadata = {
  title: "Industries Served | Cawnpore Engineering Services",
  description: "HVAC, ventilation and cooling solutions for commercial, healthcare, manufacturing, residential and critical environments across India.",
};

const icons = [ShoppingBag, FirstAid, Factory, OfficeChair, HouseLine, GraduationCap, TestTube, Database, Buildings, ForkKnife];
const environments = [
  { label: "Occupied environments", title: "Comfort and air quality for people-first spaces.", copy: "Offices, retail, education, healthcare, hotels and homes require responsive zoning, fresh air, filtration and quiet operation.", image: "/images/services/rooftop-maintenance/technician-commissioning-check.png", alt: "Technician commissioning rooftop HVAC equipment for an occupied building" },
  { label: "Industrial environments", title: "Ventilation coordinated with process and operating duty.", copy: "Manufacturing and food-processing facilities need practical heat removal, air movement, maintainable distribution and dependable equipment access.", image: "/images/services/consultancy/rooftop-hvac-plant.png", alt: "Centralized rooftop HVAC plant serving an industrial environment" },
  { label: "Critical environments", title: "Controlled conditions where continuity matters.", copy: "Clean rooms, healthcare spaces and data centres depend on pressure relationships, filtration, redundancy and clear performance verification.", image: "/images/services/basement-ventilation/duct-and-fan-bank.jpeg", alt: "Installed ventilation fan bank and coordinated ductwork" },
] as const;

export default function IndustriesPage() {
  return (
    <main className="corp-site industries-page-v5">
      <section className="industries-hero-v5">
        <Image src="/images/services/basement-ventilation/parking-ventilation-hero.jpeg" alt="Completed basement car-parking ventilation installation" fill priority unoptimized sizes="100vw" />
        <div className="industries-hero-shade-v5" />
        <div className="site-container industries-hero-copy-v5">
          <span className="corp-kicker">Industries served</span>
          <h1>HVAC planned around how each environment operates.</h1>
          <p>CES aligns cooling, ventilation and air quality with occupancy, process loads, operating hours and continuity requirements.</p>
        </div>
      </section>

      <section className="section industries-directory-v5"><div className="site-container">
        <div className="industries-heading-v5">
          <Reveal><span className="corp-kicker">Sector capability</span><h2>Ten sectors. One coordinated engineering approach.</h2></Reveal>
          <Reveal delay={0.06}><p>Each solution starts with the building use and operating requirement. Equipment, distribution, controls and service access are then coordinated around that context.</p></Reveal>
        </div>
        <div className="industries-grid-v5">
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return <Reveal className="industry-card-v5" delay={(index % 5) * 0.04} key={industry.name}><div><Icon size={25} weight="duotone" /></div><h2>{industry.name}</h2><p>{industry.challenge}</p><strong>{industry.response}</strong></Reveal>;
          })}
        </div>
      </div></section>

      <section className="section industries-environments-v5"><div className="site-container">
        <div className="industries-section-title-v5"><span className="corp-kicker">Built for the environment</span><h2>Different duties need different system priorities.</h2></div>
        <div className="industries-environment-grid-v5">
          {environments.map((environment, index) => <Reveal className="industry-environment-v5" delay={index * 0.06} key={environment.label}><div className="industry-environment-image-v5"><Image src={environment.image} alt={environment.alt} fill unoptimized sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="industry-environment-copy-v5"><span>{environment.label}</span><h3>{environment.title}</h3><p>{environment.copy}</p></div></Reveal>)}
        </div>
      </div></section>

      <EnquiryBand />
    </main>
  );
}

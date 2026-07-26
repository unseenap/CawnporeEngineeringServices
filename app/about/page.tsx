import type { Metadata } from "next";
import { Binoculars, MapPin, Target } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";
import company from "@/data/company.json";
import leadership from "@/data/leadership.json";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Kanpur-based HVAC engineering team committed to comfort, air quality, energy efficiency and dependable delivery."
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About CES" title="Engineering comfort with operating discipline." description={company.promise} visual={<AirflowVisual />} />
      <section className="section">
        <div className="site-container story-grid">
          <Reveal>
            <MapPin size={38} weight="duotone" />
            <h2 className="section-title">From Kanpur to climate-control work across India.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">Founded in 2021, CES brings design, installation, commissioning, maintenance and modernization into one practical engineering relationship.</p>
          </Reveal>
        </div>
      </section>
      <section className="section direction-section">
        <div className="site-container direction-grid">
          <Reveal className="direction-block">
            <Target size={36} />
            <h2>Mission</h2>
            <p>{company.mission}</p>
          </Reveal>
          <Reveal className="direction-block" delay={0.1}>
            <Binoculars size={36} />
            <h2>Vision</h2>
            <p>{company.vision}</p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <h2 className="section-title">The standards behind the work.</h2>
          <div className="values-grid">
            {company.values.map((value, index) => (
              <Reveal className="value-item" delay={index * 0.07} key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section leadership-section">
        <div className="site-container">
          <h2 className="section-title">Leadership close to the work.</h2>
          <div className="leadership-grid">
            {leadership.map((leader) => (
              <Reveal className="leader" key={leader.name}>
                <div className="leader-mark">{leader.name.split(" ").map((part) => part[0]).join("")}</div>
                <div>
                  <h3>{leader.name}</h3>
                  <strong>{leader.role}</strong>
                  <p>{leader.bio}</p>
                  <a href={`tel:${leader.phone.replace(/\s/g, "")}`}>{leader.phone}</a>
                  <a href={`mailto:${leader.email}`}>{leader.email}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

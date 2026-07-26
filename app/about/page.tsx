import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, MapPin, Target } from "@phosphor-icons/react/dist/ssr";
import { AboutHeroVisual, AboutPhotoPair, JourneyScroll } from "@/components/about/AboutMotion";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { Reveal } from "@/components/motion/Reveal";
import company from "@/data/company.json";
import leadership from "@/data/leadership.json";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Kanpur-based HVAC engineering company connecting design, site delivery and lifecycle service across India."
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero-v2">
        <div className="site-container about-hero-grid-v2">
          <div className="about-hero-copy-v2">
            <span className="mono-label">About Cawnpore Engineering Services</span>
            <h1 className="display"><BlurReveal text="Engineering stays close to the work." /></h1>
            <p>CES connects technical decisions, disciplined execution and lifecycle care so climate systems perform beyond handover.</p>
            <div className="about-hero-facts">
              <div><strong>2021</strong><span>Founded in Kanpur</span></div>
              <div><strong>10+ yrs</strong><span>Leadership experience</span></div>
              <div><strong>India</strong><span>Project reach</span></div>
            </div>
          </div>
          <AboutHeroVisual />
        </div>
      </section>

      <section className="section about-story-v2">
        <div className="site-container about-story-grid-v2">
          <Reveal>
            <MapPin size={34} weight="duotone" />
            <span className="mono-label">Built in Kanpur</span>
            <h2 className="section-title">Local accountability. National operating perspective.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-lede">Cawnpore Engineering Services was founded to make HVAC delivery more connected, more transparent and more dependable.</p>
            <p>Our work brings design engineering, installation, commissioning, maintenance and modernization into one practical relationship. That gives clients fewer handoff gaps and a clearer path from the first calculation to stable operation.</p>
          </Reveal>
        </div>
        <div className="site-container"><AboutPhotoPair /></div>
      </section>

      <JourneyScroll />

      <section className="section direction-section about-direction-v2">
        <div className="site-container about-direction-intro">
          <span className="mono-label">What guides us</span>
          <h2 className="section-title">A practical direction for every project.</h2>
        </div>
        <div className="site-container direction-grid">
          <Reveal className="direction-block">
            <Target size={36} />
            <span className="mono-label">Mission</span>
            <h2>Make better performance achievable.</h2>
            <p>Deliver dependable HVAC solutions that improve comfort, air quality and energy performance through sound engineering and responsive service.</p>
          </Reveal>
          <Reveal className="direction-block" delay={0.1}>
            <Binoculars size={36} />
            <span className="mono-label">Vision</span>
            <h2>Earn trust across the system lifecycle.</h2>
            <p>Become a trusted Indian HVAC partner known for technical clarity, accountable delivery and responsible climate-control decisions.</p>
          </Reveal>
        </div>
      </section>

      <section className="section about-values-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Standards behind the work</span>
            <h2 className="section-title">What clients should experience from CES.</h2>
          </Reveal>
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

      <section className="section leadership-section about-leadership-v2">
        <div className="site-container leadership-heading-v2">
          <Reveal>
            <span className="mono-label">Leadership</span>
            <h2 className="section-title">Commercial understanding meets technical depth.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large">CES leadership stays accessible to clients and close to project decisions.</p>
          </Reveal>
        </div>
        <div className="site-container leadership-grid">
          {leadership.map((leader, index) => (
            <Reveal className="leader leader-v2" delay={index * 0.08} key={leader.name}>
              <div className="leader-mark">{leader.name.split(" ").map((part) => part[0]).join("")}</div>
              <div>
                <span className="mono-label">Co-founder 0{index + 1}</span>
                <h3>{leader.name}</h3>
                <strong>{leader.role}</strong>
                <p>{leader.bio}</p>
                <a href={`mailto:${leader.email}`}>{leader.email}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section final-cta final-cta-v2">
        <div className="site-container">
          <Reveal>
            <span className="mono-label">Work with CES</span>
            <h2>Bring the operating challenge. We will bring engineering clarity.</h2>
            <p>Tell us about the space, location and performance need.</p>
            <Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

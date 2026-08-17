import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CaretDown, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import { BrandScroller } from "@/components/ui/brand-scoller";
import projects from "@/data/projects.json";
import services from "@/data/services.json";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();
  const benefitItems = [...service.benefits, ...service.performance];

  return (
    <main className="service-page-v4">
      <section className="service-banner-v4">
        <Image src={service.image} alt="" fill priority unoptimized sizes="100vw" />
        <div className="service-banner-shade-v4" />
        <div className="site-container service-banner-copy-v4">
          <span>Service {service.number}</span>
          <h1>{service.title}</h1>
        </div>
      </section>

      <section className="section service-opening-v4">
        <div className="site-container service-opening-grid-v4">
          <Reveal className="service-opening-copy-v4">
            <span className="corp-kicker">Service</span>
            <h2>{service.summary}</h2>
            <p>{service.description}</p>
            <p>{service.completeSolution}</p>
          </Reveal>
          <Reveal className="service-opening-image-v4" delay={0.08}>
            <Image src={service.solutionImages[0]} alt={`${service.title} planning and execution`} fill unoptimized sizes="(max-width: 760px) 100vw, 42vw" />
          </Reveal>
        </div>
      </section>

      <section className="section service-overview-v4">
        <div className="site-container">
          <div className="service-section-title-v4">
            <span className="corp-kicker">Overview</span>
            <h2>{service.title}: scope and key performance priorities</h2>
            <p>{service.system}</p>
          </div>
          <div className="service-accordion-v4">
            {service.subservices.map((item, index) => (
              <details key={item}>
                <summary>{item}<CaretDown size={21} /></summary>
                <p>{service.performance[index % service.performance.length]}. CES coordinates this requirement with the complete system, site constraints and intended operating condition.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-expertise-v4">
        <div className="site-container service-centered-copy-v4">
          <Reveal>
            <span className="corp-kicker">Complete service</span>
            <h2>Specialist support for a coordinated, dependable result.</h2>
            <p>{service.description} The CES approach connects technical decisions with practical execution, testing and long-term service access.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{service.system}</p>
            <div className="service-inline-points-v4">
              {service.performance.map((point) => <span key={point}><CheckCircle size={18} weight="fill" />{point}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section service-benefits-v4">
        <div className="site-container">
          <div className="service-centered-heading-v4">
            <span className="corp-kicker">Benefits</span>
            <h2>Benefits for your building and business</h2>
            <p>Each benefit is considered from planning through testing and handover.</p>
          </div>
          <div className="service-benefit-grid-v4">
            {benefitItems.map((benefit, index) => (
              <Reveal className="service-benefit-card-v4" delay={index * 0.06} key={benefit}>
                <div><ShieldCheck size={30} weight="duotone" /></div>
                <h3>{benefit}</h3>
                <p>This priority is built into the {service.shortTitle.toLowerCase()} scope to support dependable operation and lifecycle value.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-solutions-v4">
        <div className="site-container">
          <div className="service-section-title-v4">
            <span className="corp-kicker">Solution images</span>
            <h2>From technical intent to site-ready work</h2>
          </div>
          <div className="service-solution-grid-v4">
            {service.solutionImages.map((image, index) => (
              <Reveal className="service-solution-image-v4" delay={index * 0.08} key={image}>
                <Image src={image} alt={`${service.title} ${index === 0 ? "solution" : "site installation"}`} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-conclusion-v4">
        <div className="site-container service-conclusion-copy-v4">
          <span className="corp-kicker">Complete solution</span>
          <h2>One accountable path from requirement to operation.</h2>
          <p>{service.completeSolution}</p>
          <p>CES combines technical review, coordinated planning, disciplined execution and performance checks so the completed system can serve its intended environment with clarity.</p>
          <Link className="button button-primary" href={`/contact?service=${service.id}`}>Discuss this service <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section service-clients-v4">
        <div className="site-container">
          <div className="service-centered-heading-v4">
            <span className="corp-kicker">Our trusted clients</span>
            <h2>Organizations in the CES project portfolio</h2>
          </div>
          <BrandScroller brands={projects} duration={48} />
          <div className="service-client-actions-v4">
            <Link className="button button-secondary" href="/gallery">View portfolio</Link>
            <Link className="button button-primary" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>

      <EnquiryBand />
    </main>
  );
}

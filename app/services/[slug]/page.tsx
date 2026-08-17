import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, CirclesFour, Gauge, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
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

  return (
    <main className="service-page-v3">
      <PageHero
        label={`Service ${service.number}`}
        title={service.title}
        description={service.summary}
        visual={
          <div className="service-hero-image service-hero-image-v3">
            <Image src={service.image} alt={`${service.title} solution by CES`} fill priority unoptimized sizes="(max-width: 768px) 100vw, 42vw" />
          </div>
        }
      />

      <section className="section service-explanation-v3">
        <div className="site-container service-intro-grid-v3">
          <Reveal>
            <span className="corp-kicker">Service explanation</span>
            <h2>Designed around the real operating requirement.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{service.description}</p>
            <div className="service-scope-tags-v3">
              {service.subservices.map((item) => <span key={item}>{item}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section service-performance-v3">
        <div className="site-container">
          <div className="service-section-heading-v3">
            <span className="corp-kicker">Performance and key points</span>
            <h2>What supports a dependable result.</h2>
          </div>
          <div className="service-keypoint-grid-v3">
            {service.performance.map((item, index) => (
              <Reveal className="service-keypoint-v3" delay={index * 0.06} key={item}>
                <span>0{index + 1}</span><Gauge size={27} weight="duotone" /><h3>{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-system-v3">
        <div className="site-container service-system-grid-v3">
          <Reveal className="service-system-icon-v3"><CirclesFour size={48} weight="duotone" /></Reveal>
          <Reveal delay={0.08}>
            <span className="corp-kicker">The system</span>
            <h2>Every component must work as one.</h2>
            <p>{service.system}</p>
          </Reveal>
        </div>
      </section>

      <section className="section service-benefits-v3">
        <div className="site-container">
          <div className="service-section-heading-v3">
            <span className="corp-kicker">Benefits</span>
            <h2>Practical value for the project and its users.</h2>
          </div>
          <div className="service-benefit-grid-v3">
            {service.benefits.map((benefit, index) => (
              <Reveal className="service-benefit-card-v3" delay={index * 0.06} key={benefit}>
                <ShieldCheck size={30} weight="duotone" /><span>0{index + 1}</span><h3>{benefit}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-solutions-v3">
        <div className="site-container">
          <div className="service-section-heading-v3">
            <span className="corp-kicker">Solution images</span>
            <h2>Engineering translated into site-ready work.</h2>
          </div>
          <div className="service-solution-images-v3">
            {service.solutionImages.map((image, index) => (
              <Reveal className="service-solution-image-v3" delay={index * 0.08} key={image}>
                <Image src={image} alt={`${service.title} ${index === 0 ? "planning or equipment" : "installation"}`} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-complete-v3">
        <div className="site-container service-complete-inner-v3">
          <Reveal>
            <span className="corp-kicker">Complete solution</span>
            <h2>One coordinated path from requirement to operation.</h2>
            <p>{service.completeSolution}</p>
          </Reveal>
          <Reveal className="service-complete-checks-v3" delay={0.08}>
            {["Technical review", "Coordinated planning", "Disciplined execution", "Testing and handover"].map((item) => <span key={item}><CheckCircle size={20} weight="fill" />{item}</span>)}
            <Link className="button button-primary" href={`/contact?service=${service.id}`}>Discuss this service <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section service-clients-v3">
        <div className="site-container">
          <div className="service-section-heading-v3">
            <span className="corp-kicker">Our trusted clients</span>
            <h2>Organizations represented in the CES project portfolio.</h2>
          </div>
          <BrandScroller brands={projects} duration={48} />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import services from "@/data/services.json";
import industries from "@/data/industries.json";
import faqs from "@/data/faqs.json";

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
    <>
      <PageHero
        label={`Service ${service.number}`}
        title={service.title}
        description={service.summary}
        visual={<div className="service-hero-image"><Image src={service.image} alt="" fill priority unoptimized sizes="(max-width: 768px) 100vw, 42vw" /></div>}
      />
      <section className="section">
        <div className="site-container service-detail-grid">
          <Reveal>
            <h2 className="section-title">Engineered around the operating requirement.</h2>
            <p className="body-large">{service.description}</p>
          </Reveal>
          <Reveal className="deliverable-list" delay={0.1}>
            {service.deliverables.map((item) => (
              <div key={item}><CheckCircle size={22} weight="fill" /><span>{item}</span></div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section process-section">
        <div className="site-container">
          <h2 className="section-title">A clear technical path.</h2>
          <div className="process-grid">
            {service.process.map((step, index) => (
              <Reveal className="process-step" delay={index * 0.08} key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container relevant-industries">
          <h2>Relevant operating environments</h2>
          <div>{industries.slice(0, 6).map((industry) => <span key={industry.name}>{industry.name}</span>)}</div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="site-container faq-grid">
          <h2 className="section-title">Common questions.</h2>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section final-cta">
        <div className="site-container">
          <h2>Discuss this service with CES.</h2>
          <p>Share the location, system and operating requirement.</p>
          <Link className="button button-primary" href={`/contact?service=${service.id}`}>Request consultation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

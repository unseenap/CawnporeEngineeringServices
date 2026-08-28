import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export function LegalPage({
  title,
  summary,
  effectiveDate,
  sections,
}: {
  title: string;
  summary: string;
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <main className="corp-site legal-page">
      <section className="legal-hero">
        <Image
          src="/images/services/consultancy/hvac-design-consultation.png"
          alt="CES engineering team reviewing an HVAC system design"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="legal-hero-shade" />
        <div className="site-container legal-hero-copy">
          <span>Website information</span>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="site-container legal-layout">
          <aside aria-label={`${title} contents`}>
            <strong>On this page</strong>
            <nav>
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>{section.title}</a>
              ))}
            </nav>
            <p>Effective: {effectiveDate}</p>
          </aside>

          <article>
            {sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
            <div className="legal-contact-note">
              <h2>Questions about this information?</h2>
              <p>Contact CES and we will respond to reasonable questions about this website and your submitted information.</p>
              <Link className="button button-primary" href="/contact">Contact CES</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

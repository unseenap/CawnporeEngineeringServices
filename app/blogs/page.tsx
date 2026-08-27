import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { EnquiryBand } from "@/components/corporate/EnquiryBand";
import { Reveal } from "@/components/motion/Reveal";
import blogs from "@/data/blogs.json";

export const metadata: Metadata = {
  title: "HVAC Insights",
  description:
    "Practical HVAC guidance from Cawnpore Engineering Services for better planning, operation and system performance.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const [featuredInsight, ...otherInsights] = blogs;
  const topics = [...new Set(blogs.map((insight) => insight.category))];

  return (
    <main className="corp-site insights-page-v5">
      <section className="insights-hero-v5">
        <Image
          src="/images/services/rooftop-maintenance/technician-system-testing.png"
          alt="HVAC technician inspecting rooftop equipment"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="insights-hero-shade-v5" />
        <div className="site-container insights-hero-copy-v5">
          <Reveal>
            <span className="corp-kicker insights-kicker-v5">HVAC insights</span>
            <h1>Practical guidance for better building decisions.</h1>
            <p>
              Clear, field-informed ideas for planning, operating and improving
              reliable climate-control systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section insights-intro-v5">
        <div className="site-container insights-intro-grid-v5">
          <Reveal>
            <span className="corp-kicker">Field-informed knowledge</span>
            <h2>Useful information, without the technical clutter.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Explore concise guidance drawn from HVAC design, installation,
              ventilation and maintenance work across commercial and industrial
              environments.
            </p>
            <div className="insights-topics-v5" aria-label="Insight topics">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section insights-library-v5">
        <div className="site-container">
          <Reveal className="insights-feature-v5">
            <div className="insights-feature-image-v5">
              <Image
                src={featuredInsight.image}
                alt={`${featuredInsight.category} HVAC work`}
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
            <div className="insights-feature-copy-v5">
              <span>{featuredInsight.category}</span>
              <h2>{featuredInsight.title}</h2>
              <p>{featuredInsight.summary}</p>
              <Link href="/contact#request-a-quote">
                Discuss this topic <ArrowRight size={17} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <div className="insights-grid-v5">
            {otherInsights.map((insight, index) => (
              <Reveal
                className="insight-card-v5"
                delay={Math.min(index * 0.04, 0.16)}
                key={insight.title}
              >
                <div className="insight-card-image-v5">
                  <Image
                    src={insight.image}
                    alt={`${insight.category} HVAC work`}
                    fill
                    unoptimized
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                </div>
                <div className="insight-card-copy-v5">
                  <span>{insight.category}</span>
                  <h2>{insight.title}</h2>
                  <p>{insight.summary}</p>
                  <Link href="/contact#request-a-quote" aria-label={`Discuss ${insight.title}`}>
                    Discuss this topic <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBand />
    </main>
  );
}

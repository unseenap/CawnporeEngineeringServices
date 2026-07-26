import type { ReactNode } from "react";
import { Reveal } from "./motion/Reveal";

type Props = {
  label: string;
  title: string;
  description: string;
  visual?: ReactNode;
};

export function PageHero({ label, title, description, visual }: Props) {
  return (
    <section className="page-hero">
      <div className="site-container page-hero-grid">
        <Reveal className="page-hero-copy">
          <span className="mono-label">{label}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
        {visual && <Reveal className="page-hero-visual" delay={0.12}>{visual}</Reveal>}
      </div>
    </section>
  );
}

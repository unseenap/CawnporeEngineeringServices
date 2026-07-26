"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

type Project = { client: string; sector: string; image: string };

export function HeroSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="system-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatedGridPattern className="system-visual-grid" />
      <motion.div
        className="system-visual-image"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/illustrations/ces-hvac-cutaway.png"
          alt="Cutaway illustration showing an engineered HVAC system serving a multi-storey commercial building"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </motion.div>
      <div className="system-visual-note note-supply"><span />Supply air</div>
      <div className="system-visual-note note-return"><span />Return path</div>
      <div className="system-visual-caption">
        <strong>Whole-system thinking</strong>
        <span>Plant, distribution and occupied space</span>
      </div>
    </motion.div>
  );
}

export function ProjectPhotoRail({ projects }: { projects: Project[] }) {
  const railRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-24%"]);

  return (
    <section className="project-rail-section" ref={railRef}>
      <div className="site-container project-rail-heading">
        <div>
          <span className="mono-label">Selected environments</span>
          <h2 className="section-title">Built where comfort and continuity matter.</h2>
        </div>
        <p>Healthcare, manufacturing, aviation, retail and housing each demand a different answer. Our engineering starts with how the place must operate.</p>
      </div>
      <div className="project-rail-viewport">
        <motion.div className="project-rail" style={reduceMotion ? undefined : { x }}>
          {projects.map((project, index) => (
            <motion.article
              className="project-photo"
              key={project.client}
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: Math.min(index * 0.05, 0.2) }}
            >
              <Image
                src={project.image}
                alt={`${project.client}, ${project.sector} HVAC project`}
                fill
                unoptimized
                sizes="(max-width: 767px) 82vw, 34vw"
              />
              <div className="project-photo-copy">
                <span>{project.sector}</span>
                <strong>{project.client}</strong>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

const stages = [
  { number: "01", title: "Understand", text: "Start with the space, operating need and constraints." },
  { number: "02", title: "Engineer", text: "Coordinate load, equipment, distribution and controls." },
  { number: "03", title: "Deliver", text: "Install, test and commission with site discipline." },
  { number: "04", title: "Sustain", text: "Maintain, optimize and modernize performance over time." },
];

export function AboutHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="about-system-visual"
      initial={reduceMotion ? false : { opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatedGridPattern className="about-system-grid" />
      <motion.div
        className="about-system-image"
        animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/illustrations/ces-about-engineering-team.png"
          alt="HVAC engineers coordinating drawings and installed equipment"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 57vw"
        />
      </motion.div>
      <div className="about-system-caption">
        <span>Design ⇢ Site ⇢ Service</span>
        <strong>Engineering stays close to the work.</strong>
      </div>
    </motion.div>
  );
}

export function JourneyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section about-journey" ref={sectionRef}>
      <div className="site-container about-journey-grid">
        <div className="about-journey-sticky">
          <span className="mono-label">How CES works</span>
          <h2 className="section-title">One relationship across the system lifecycle.</h2>
          <p>Continuity between decisions reduces gaps between design intent, site reality and long-term operation.</p>
          <div className="journey-line" aria-hidden="true">
            <motion.span style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScale }} />
          </div>
        </div>
        <div className="journey-stages">
          {stages.map((stage) => (
            <motion.article
              key={stage.number}
              className="journey-stage"
              initial={reduceMotion ? false : { opacity: 0.25, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.55 }}
              transition={{ duration: 0.55 }}
            >
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPhotoPair() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="about-photo-pair">
      <motion.figure
        className="about-project-photo about-project-photo-main"
        initial={reduceMotion ? false : { opacity: 0, x: -30, rotate: -1.5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <Image src="/images/projects/RajkotInternational Airport.jpeg" alt="Rajkot International Airport project reference" fill unoptimized sizes="(max-width: 767px) 90vw, 48vw" />
        <figcaption><span>Aviation</span>Rajkot International Airport</figcaption>
      </motion.figure>
      <motion.figure
        className="about-project-photo about-project-photo-small"
        initial={reduceMotion ? false : { opacity: 0, y: 35, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, delay: 0.12 }}
      >
        <Image src="/images/projects/Varun_Beverages_ltd.jpeg" alt="Varun Beverages project reference" fill unoptimized sizes="(max-width: 767px) 66vw, 28vw" />
        <figcaption><span>Industry</span>Varun Beverages</figcaption>
      </motion.figure>
    </div>
  );
}

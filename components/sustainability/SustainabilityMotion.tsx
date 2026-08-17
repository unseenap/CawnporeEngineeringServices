"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

const performanceSteps = [
  { number: "01", title: "Measure the demand", text: "Understand actual loads, schedules, occupancy and environmental criteria before selecting equipment." },
  { number: "02", title: "Match the system", text: "Choose plant, distribution and controls around the operating profile, not a generic equipment list." },
  { number: "03", title: "Verify the delivery", text: "Testing, balancing and commissioning turn design intent into measurable site performance." },
  { number: "04", title: "Improve over time", text: "Maintenance data, optimization and targeted upgrades keep waste from becoming normal operation." },
];

export function SustainabilityHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="sustainability-system-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatedGridPattern className="sustainability-system-grid" />
      <motion.div
        className="sustainability-system-image"
        animate={reduceMotion ? undefined : { x: [0, -7, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/services/consultancy/rooftop-hvac-plant.png"
          alt="Efficient rooftop HVAC plant, piping and pumping equipment"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 59vw"
        />
      </motion.div>
      <div className="sustainability-visual-key">
        <span className="key-supply">Supply</span>
        <span className="key-return">Return</span>
        <strong>Performance is a system outcome.</strong>
      </div>
    </motion.div>
  );
}

export function PerformanceScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section performance-scroll" ref={sectionRef}>
      <div className="site-container performance-scroll-grid">
        <div className="performance-sticky">
          <span className="mono-label">The performance chain</span>
          <h2 className="section-title">Efficiency is created by connected decisions.</h2>
          <p>No single component carries the result. Loads, equipment, airflow, controls and commissioning must work as one system.</p>
          <div className="performance-meter" aria-hidden="true">
            <motion.span style={reduceMotion ? { scaleX: 1 } : { scaleX: progress }} />
          </div>
        </div>
        <div className="performance-steps">
          {performanceSteps.map((step) => (
            <motion.article
              className="performance-step"
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0.25, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.55 }}
              transition={{ duration: 0.6 }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SustainabilityPhotoStory() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="sustainability-photo-story">
      <motion.figure
        className="sustainability-photo photo-industrial"
        initial={reduceMotion ? false : { opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <Image src="/images/projects/logos/ester-industries.svg" alt="Ester Industries official logo" fill unoptimized sizes="(max-width: 767px) 94vw, 54vw" />
        <figcaption><span>Manufacturing</span>Performance where operating continuity matters</figcaption>
      </motion.figure>
      <motion.figure
        className="sustainability-photo photo-commercial"
        initial={reduceMotion ? false : { opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, delay: 0.12 }}
      >
        <Image src="/images/projects/logos/z-square-mall.svg" alt="Z Square Mall official logo" fill unoptimized sizes="(max-width: 767px) 70vw, 31vw" />
        <figcaption><span>Commercial</span>Comfort across changing demand</figcaption>
      </motion.figure>
    </div>
  );
}

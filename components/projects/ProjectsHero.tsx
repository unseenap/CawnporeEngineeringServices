"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Buildings, Fan, Wrench } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const words = ["Built", "around", "how", "your", "building", "must", "perform."];

export function ProjectsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section className="projects-hero-v2" ref={heroRef}>
      <RetroGrid />
      <div className="site-container projects-hero-grid">
        <motion.div
          className="projects-hero-copy"
          style={reduceMotion ? undefined : { y: copyY }}
        >
          <motion.p
            className="mono-label projects-kicker"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Selected project environments
          </motion.p>
          <h1 className="projects-display" aria-label={words.join(" ")}>
            {words.map((word, index) => (
              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: 46, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.08 + index * 0.065, ease: [0.22, 1, 0.36, 1] }}
                key={word}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="projects-hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
          >
            HVAC performance changes with occupancy, process loads, air quality,
            uptime and service access. Our project portfolio spans environments
            where those priorities cannot be treated as an afterthought.
          </motion.p>
          <motion.div
            className="projects-hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.55 }}
          >
            <a className="button button-primary" href="#project-index">
              Explore the work <ArrowDown size={17} weight="bold" />
            </a>
            <Link className="button button-secondary" href="/contact">
              Discuss a project <ArrowRight size={17} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.figure
          className="projects-hero-visual"
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          initial={reduceMotion ? false : { opacity: 0, x: 45, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.05, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/services/basement-ventilation/completed-ductwork-wide.jpeg"
            alt="Completed basement ventilation ductwork by Cawnpore Engineering Services"
            fill
            priority
            unoptimized
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <figcaption>
            <span>Site execution</span>
            <strong>Installed ventilation and ductwork</strong>
          </figcaption>
        </motion.figure>
      </div>

      <div className="site-container projects-proof-strip">
        <div><Buildings size={21} weight="duotone" /><span><strong>8</strong> selected environments</span></div>
        <div><Fan size={21} weight="duotone" /><span><strong>7</strong> operating sectors</span></div>
        <div><Wrench size={21} weight="duotone" /><span><strong>Lifecycle</strong> engineering perspective</span></div>
      </div>
    </section>
  );
}

function RetroGrid() {
  return (
    <div className="projects-retro-grid" aria-hidden="true">
      <div className="projects-retro-grid-plane" />
      <div className="projects-retro-grid-horizon" />
    </div>
  );
}

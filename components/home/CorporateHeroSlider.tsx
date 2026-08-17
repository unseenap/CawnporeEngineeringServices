"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export function CorporateHeroSlider() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-hero-v5">
      <motion.div className="home-hero-media-v5" initial={reduceMotion ? false : { scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}>
        <Image src="/images/services/basement-ventilation/parking-ventilation-hero.jpeg" alt="Completed CES basement ventilation installation with ductwork and jet fans" fill priority unoptimized sizes="100vw" />
      </motion.div>
      <div className="home-hero-shade-v5" />
      <motion.div className="site-container home-hero-copy-v5" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.1 }}>
        <span className="corp-kicker">Cawnpore Engineering Services</span>
        <h1>Engineering better air for demanding spaces.</h1>
        <p>Practical HVAC design, installation and ventilation solutions for commercial, industrial and institutional projects across India.</p>
        <div className="home-hero-actions-v5">
          <Link className="button button-primary" href="/services">Explore our services <ArrowRight size={18} /></Link>
          <Link className="home-hero-link-v5" href="/contact">Discuss a project</Link>
        </div>
      </motion.div>
    </section>
  );
}

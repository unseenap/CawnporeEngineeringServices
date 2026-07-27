"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

export function WhyHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="why-hero-visual"
      initial={reduceMotion ? false : { opacity: 0, x: 50, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatedGridPattern className="why-visual-grid" />
      <motion.div
        className="why-visual-image"
        animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/illustrations/ces-why-choose-us.webp"
          alt="CES engineers coordinating HVAC survey, design, installation, commissioning and operation"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </motion.div>
      <div className="why-visual-badge badge-one"><span>01</span>Survey to strategy</div>
      <div className="why-visual-badge badge-two"><span>04</span>Lifecycle stages</div>
      <div className="why-visual-caption">
        <strong>One connected engineering responsibility</strong>
        <span>From first site condition to stable operation</span>
      </div>
    </motion.div>
  );
}

export function WhyScrollImage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div className="why-scroll-image" ref={ref}>
      <motion.div style={reduceMotion ? undefined : { y, scale }}>
        <Image
          src="/images/illustrations/ces-why-choose-us.webp"
          alt=""
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </motion.div>
      <div className="why-scan-line" aria-hidden="true" />
    </div>
  );
}

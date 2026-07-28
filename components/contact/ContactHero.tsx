"use client";

import Image from "next/image";
import { ArrowDown, CheckCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const headline = ["Tell", "us", "what", "the", "building", "needs", "to", "do."];

export function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section className="contact-hero-v2" ref={sectionRef}>
      <RippleBackground />
      <div className="site-container contact-hero-grid">
        <div className="contact-hero-copy">
          <motion.p
            className="mono-label"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Start an HVAC request
          </motion.p>
          <h1 className="contact-display" aria-label={headline.join(" ")}>
            {headline.map((word, index) => (
              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: 42, filter: "blur(9px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                key={`${word}-${index}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="contact-hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64, duration: 0.6 }}
          >
            Share the location, building use, service need and current project
            stage. We will use that context to begin the right technical
            conversation.
          </motion.p>
          <motion.div
            className="contact-hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78 }}
          >
            <a className="button button-primary" href="#request-a-quote">
              Request a quote <ArrowDown size={17} weight="bold" />
            </a>
            <a className="contact-direct-link" href="tel:+918318554343">
              <CheckCircle size={18} weight="duotone" />
              Prefer to talk? +91 83185 54343
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="contact-hero-visual"
          style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}
          initial={reduceMotion ? false : { opacity: 0, x: 45, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.05, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/illustrations/ces-contact-consultation.png"
            alt="Illustration of an HVAC engineering consultation around building plans and operating requirements"
            fill
            priority
            unoptimized
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <figcaption>
            <span>Start with context</span>
            <strong>Site · scope · stage · timeline</strong>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function RippleBackground() {
  return (
    <div className="contact-ripple" aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => (
        <span style={{ "--ripple-index": index } as React.CSSProperties} key={index} />
      ))}
    </div>
  );
}

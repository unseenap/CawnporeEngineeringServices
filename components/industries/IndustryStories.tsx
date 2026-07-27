"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Story = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  priorities: string[];
};

export function IndustryStory({ story, reverse = false }: { story: Story; reverse?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.article
      className={reverse ? "industry-story reverse" : "industry-story"}
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="industry-story-image" style={reduceMotion ? undefined : { y: imageY }}>
        <Image src={story.image} alt={story.alt} fill unoptimized sizes="(max-width: 900px) 100vw, 60vw" />
        <div className="industry-image-grid" aria-hidden="true" />
        <span className="industry-image-number">{story.number}</span>
      </motion.div>
      <motion.div className="industry-story-copy" style={reduceMotion ? undefined : { y: copyY }}>
        <span className="mono-label">{story.eyebrow}</span>
        <h2>{story.title}</h2>
        <p>{story.description}</p>
        <ul>
          {story.priorities.map((priority) => <li key={priority}>{priority}</li>)}
        </ul>
      </motion.div>
    </motion.article>
  );
}

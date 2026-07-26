"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  text: string;
  className?: string;
};

// React Bits BlurText behavior adapted to CES typography and motion tokens.
export function BlurReveal({ text, className = "" }: Props) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          key={`${word}-${index}`}
          style={{ display: "inline-block", marginRight: "0.2em" }}
          initial={reduceMotion ? false : { opacity: 0, filter: "blur(10px)", y: 18 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 + index * 0.07 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

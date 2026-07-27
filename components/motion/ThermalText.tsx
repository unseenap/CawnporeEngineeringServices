"use client";

import { motion, useReducedMotion } from "motion/react";

export function ThermalText({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="thermal-text"
      initial={reduceMotion ? false : { opacity: 0, y: 22, clipPath: "inset(100% 0 0 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
}

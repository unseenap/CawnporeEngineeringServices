"use client";

import { motion, useReducedMotion } from "motion/react";

const leftStreaks = Array.from({ length: 14 }, (_, index) => ({
  x: 3 + index * 3.35,
  delay: (index * 0.19) % 1.6,
  duration: 1.35 + (index % 4) * 0.16,
}));

const rightStreaks = Array.from({ length: 14 }, (_, index) => ({
  x: 53 + index * 3.35,
  delay: (index * 0.23) % 1.7,
  duration: 1.4 + (index % 5) * 0.14,
}));

export function HyperspeedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hyperspeed" aria-hidden="true">
      <div className="hyperspeed-horizon" />
      <div className="hyperspeed-road">
        {[...leftStreaks, ...rightStreaks].map((streak, index) => (
          <motion.i
            className={index % 7 === 0 ? "hyperspeed-streak accent" : "hyperspeed-streak"}
            key={`${streak.x}-${index}`}
            style={{ left: `${streak.x}%` }}
            initial={{ y: "-25vh", opacity: 0 }}
            animate={reduceMotion ? { opacity: 0.24 } : {
              y: ["-25vh", "105vh"],
              opacity: [0, 0.85, 0],
              scaleY: [0.3, 2.4],
            }}
            transition={{
              duration: streak.duration,
              delay: streak.delay,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      <motion.div
        className="hyperspeed-airflow airflow-left"
        animate={reduceMotion ? undefined : { x: ["-8%", "8%", "-8%"], opacity: [0.18, 0.55, 0.18] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hyperspeed-airflow airflow-right"
        animate={reduceMotion ? undefined : { x: ["8%", "-8%", "8%"], opacity: [0.16, 0.5, 0.16] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

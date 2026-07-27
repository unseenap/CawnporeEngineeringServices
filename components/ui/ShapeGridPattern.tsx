"use client";

import { motion, useReducedMotion } from "motion/react";

const shapes = [
  { x: "7%", y: "14%", type: "square", delay: 0.1 },
  { x: "22%", y: "68%", type: "circle", delay: 0.5 },
  { x: "39%", y: "22%", type: "diamond", delay: 0.9 },
  { x: "57%", y: "76%", type: "square", delay: 0.3 },
  { x: "73%", y: "18%", type: "circle", delay: 0.7 },
  { x: "88%", y: "62%", type: "diamond", delay: 1.1 },
  { x: "95%", y: "31%", type: "square", delay: 0.2 },
];

export function ShapeGridPattern({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`shape-grid-pattern ${className}`} aria-hidden="true">
      <div className="shape-grid-lines" />
      {shapes.map((shape, index) => (
        <motion.i
          className={`shape-grid-cell shape-${shape.type}`}
          key={`${shape.x}-${shape.y}`}
          style={{ left: shape.x, top: shape.y }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.35, rotate: -20 }}
          animate={reduceMotion ? { opacity: 0.35 } : {
            opacity: [0.14, 0.55, 0.14],
            scale: [0.82, 1.08, 0.82],
            rotate: shape.type === "diamond" ? [45, 135, 45] : [0, 6, 0],
          }}
          transition={{
            duration: 6 + (index % 3),
            delay: shape.delay,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.span
        className="shape-grid-scan"
        animate={reduceMotion ? undefined : { x: ["-15%", "115%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  className?: string;
};

// Adapted from the Magic UI Animated Grid Pattern registry component.
export function AnimatedGridPattern({ className = "" }: Props) {
  const reduceMotion = useReducedMotion();
  const cells = [
    [2, 1], [8, 2], [12, 4], [5, 6], [15, 7], [3, 9], [10, 10], [17, 11]
  ];

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="ces-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ces-grid)" opacity=".24" />
      {cells.map(([x, y], index) => (
        <motion.rect
          key={`${x}-${y}`}
          x={x * 40 + 1}
          y={y * 40 + 1}
          width="38"
          height="38"
          fill="currentColor"
          initial={{ opacity: 0.03 }}
          animate={reduceMotion ? { opacity: 0.08 } : { opacity: [0.03, 0.2, 0.03] }}
          transition={{
            duration: 5,
            delay: index * 0.4,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
}

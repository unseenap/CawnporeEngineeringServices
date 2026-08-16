"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 3200);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader loader-redesign"
          role="status"
          aria-live="polite"
          aria-label="Preparing Cawnpore Engineering Services"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.45 }}
        >
          <div className="loader-blueprint" aria-hidden="true" />
          <motion.div
            className="loader-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="loader-brand-lockup">
              <div className="loader-mark"><Image src="/brand/logo.png" alt="" width={72} height={72} priority unoptimized /></div>
              <div><strong>Cawnpore</strong><span>Engineering Services</span></div>
            </div>
            <p>Preparing your climate-control experience</p>
            <div className="loader-progress" aria-hidden="true"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0 : 2.35, delay: 0.25, ease: [0.4, 0, 0.2, 1] }} /></div>
            <div className="loader-status"><span>HVAC systems</span><span>Ready</span></div>
          </motion.div>
          <div className="loader-airline" aria-hidden="true"><motion.i animate={reduceMotion ? undefined : { x: ["-120%", "420%"] }} transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const LOADER_KEY = "ces-loader-seen";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(LOADER_KEY)) {
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    sessionStorage.setItem(LOADER_KEY, "true");
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 350 : 2450);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader"
          role="status"
          aria-label="Preparing Cawnpore Engineering Services"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-5%" }}
          transition={{ duration: reduceMotion ? 0.1 : 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-grid" aria-hidden="true" />
          <motion.div
            className="loader-thermal-field"
            animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1] }}
          />
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/brand/logo.png" alt="" width={88} height={88} priority unoptimized />
            </motion.div>
            <div className="loader-wordmark">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55 }}
              >
                Cawnpore Engineering Services
              </motion.span>
              <small>Thermal systems initializing</small>
            </div>
            <div className="thermal-meter" aria-hidden="true">
              <span>HOT</span>
              <div><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: 0.25 }} /></div>
              <span>COLD</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

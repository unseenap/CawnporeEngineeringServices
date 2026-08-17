"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const previousOverflow = useRef("");
  const [documentReady, setDocumentReady] = useState(false);
  const [minimumElapsed, setMinimumElapsed] = useState(false);

  useLayoutEffect(() => {
    let animationFrame = 0;
    const checkReady = () => {
      if (document.readyState === "complete") setDocumentReady(true);
      else animationFrame = requestAnimationFrame(checkReady);
    };
    checkReady();
    const timer = window.setTimeout(() => setMinimumElapsed(true), 3000);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  useLayoutEffect(() => {
    if (!documentReady || !minimumElapsed || !loaderRef.current || !contentRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          gsap.set(loaderRef.current, { pointerEvents: "none", display: "none" });
          document.body.style.overflow = previousOverflow.current;
        },
      });
      timeline.to(contentRef.current, { y: reduceMotion ? 0 : -10, opacity: 0, duration: reduceMotion ? 0.15 : 0.45 });
      timeline.to(loaderRef.current, { yPercent: -105, borderBottomLeftRadius: "50% 8%", borderBottomRightRadius: "50% 8%", duration: reduceMotion ? 0.15 : 0.8 }, "<");
    }, loaderRef);
    return () => context.revert();
  }, [documentReady, minimumElapsed]);

  return (
    <div ref={loaderRef} className="ces-preloader" role="status" aria-live="polite" aria-label="Preparing Cawnpore Engineering Services">
      <div className="ces-preloader-grid" aria-hidden="true" />
      <div ref={contentRef} className="ces-preloader-content">
        <div className="ces-preloader-brand"><Image src="/brand/logo.png" alt="" width={76} height={76} priority unoptimized /><div><strong>Cawnpore</strong><span>Engineering Services</span></div></div>
        <p>Preparing your climate-control experience</p>
        <div className="ces-preloader-progress" aria-hidden="true"><span ref={lineRef} /></div>
        <div className="ces-preloader-meta"><span>HVAC systems</span><span>Initializing</span></div>
      </div>
    </div>
  );
}

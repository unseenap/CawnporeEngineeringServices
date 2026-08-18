"use client";

import { usePathname } from "next/navigation";
import { BrandScroller } from "@/components/ui/brand-scoller";
import projects from "@/data/projects.json";

export function GlobalClientMarquee() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <section className="global-client-marquee" aria-label="Selected CES project clients">
      <BrandScroller brands={projects} duration={56} logoOnly />
    </section>
  );
}

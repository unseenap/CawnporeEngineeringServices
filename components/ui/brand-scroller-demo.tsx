"use client";

import projects from "@/data/projects.json";
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

export default function BrandScrollerDemo() {
  return (
    <div className="flex flex-col gap-6 py-10">
      <BrandScroller brands={projects} />
      <BrandScrollerReverse brands={projects} />
    </div>
  );
}

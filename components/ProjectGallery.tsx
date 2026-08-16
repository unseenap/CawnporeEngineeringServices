"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import projects from "@/data/projects.json";

const priorities: Record<string, string> = {
  Healthcare: "Air quality, reliability and controlled clinical conditions",
  "Beverage Industry": "Process loads, production continuity and hygiene",
  Entertainment: "High occupancy, comfort and responsive ventilation",
  Retail: "Variable footfall, zoning and dependable public comfort",
  Residential: "Quiet comfort, efficiency and maintainable distribution",
  Manufacturing: "Process heat, ventilation and operational continuity",
  Aviation: "Large-volume conditioning and fluctuating passenger demand",
  Education: "Comfort, indoor air quality and variable occupancy",
  Hospitality: "Guest comfort, quiet operation and dependable service",
  "Cold Chain": "Temperature stability, uptime and product protection",
};

export function ProjectGallery() {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.sector)))];
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();
  const visible = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.sector === active),
    [active]
  );

  return (
    <section className="section project-gallery-section project-gallery-v2" id="project-index">
      <div className="site-container">
        <div className="project-index-heading">
          <div>
            <p className="mono-label">Project index</p>
            <h2>Selected environments, viewed through performance.</h2>
          </div>
          <p>
            Filter the portfolio by sector. Each visual is a project presentation
            asset; the operating priorities explain the engineering context.
          </p>
        </div>
        <div className="project-filters" aria-label="Filter projects by sector">
          {categories.map((category) => (
            <button
              className={active === category ? "active" : ""}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout={!reduceMotion} className="project-gallery">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
                className={`project-card project-card-${(index % 4) + 1}`}
                key={project.client}
                whileHover={reduceMotion ? undefined : { y: -8 }}
              >
                <div className="project-image">
                  <Image src={project.image} alt={`${project.client} project reference`} fill unoptimized sizes="(max-width: 768px) 100vw, 42vw" />
                  <motion.span
                    className="project-image-scan"
                    aria-hidden="true"
                    initial={false}
                    animate={reduceMotion ? undefined : { y: ["-120%", "620%"] }}
                    transition={{ duration: 5.5, repeat: Infinity, delay: index * 0.4, ease: "linear" }}
                  />
                </div>
                <div className="project-card-copy">
                  <span className="project-sector">{project.sector}</span>
                  <h2>{project.client}</h2>
                  <p>{priorities[project.sector] ?? "Reliable comfort, ventilation and operating performance"}</p>
                  <small>CES project client</small>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

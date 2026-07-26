"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import projects from "@/data/projects.json";

export function ProjectGallery() {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.sector)))];
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();
  const visible = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.sector === active),
    [active]
  );

  return (
    <section className="section project-gallery-section">
      <div className="site-container">
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
              >
                <div className="project-image">
                  <Image src={project.image} alt={`${project.client} project reference`} fill sizes="(max-width: 768px) 100vw, 42vw" />
                </div>
                <div>
                  <span>{project.sector}</span>
                  <h2>{project.client}</h2>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

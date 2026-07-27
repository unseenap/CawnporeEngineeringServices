"use client";

import { Blueprint, Fan } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

type ThemeId = "turbine" | "blueprint";

const STORAGE_KEY = "ces-theme";

function setDocumentTheme(theme: ThemeId) {
  const root = document.documentElement;
  if (theme === "turbine") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
  root.style.colorScheme = "light";
  localStorage.setItem(STORAGE_KEY, theme);
}

export function AnimatedThemeToggler({ mobile = false }: { mobile?: boolean }) {
  const [theme, setTheme] = useState<ThemeId>("turbine");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialTheme: ThemeId = saved === "blueprint" ? "blueprint" : "turbine";
    setDocumentTheme(initialTheme);
    const frame = requestAnimationFrame(() => setTheme(initialTheme));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme: ThemeId = theme === "turbine" ? "blueprint" : "turbine";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transition = document.startViewTransition?.bind(document);

    if (!transition || reduceMotion) {
      setTheme(nextTheme);
      setDocumentTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    try {
      await transition(() => {
        setTheme(nextTheme);
        setDocumentTheme(nextTheme);
      }).ready;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 620,
          easing: "cubic-bezier(.22, 1, .36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    } catch {
      setTheme(nextTheme);
      setDocumentTheme(nextTheme);
    }
  };

  const blueprint = theme === "blueprint";

  return (
    <button
      className={`animated-theme-toggle${mobile ? " animated-theme-toggle-mobile" : ""}`}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${blueprint ? "Turbine" : "Blueprint"} theme`}
      aria-pressed={blueprint}
      title={`Current theme: ${blueprint ? "Blueprint" : "Turbine"}`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
        <span className={!blueprint ? "theme-toggle-choice active" : "theme-toggle-choice"}>
          <Fan size={16} weight="duotone" />
          Turbine
        </span>
        <span className={blueprint ? "theme-toggle-choice active" : "theme-toggle-choice"}>
          <Blueprint size={16} weight="duotone" />
          Blueprint
        </span>
      </span>
      {mobile && <small>Tap to change the website finish</small>}
    </button>
  );
}

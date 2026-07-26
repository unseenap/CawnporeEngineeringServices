"use client";

import { Check, Palette, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import themes from "@/data/themes.json";

type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "ces-theme";
const DEFAULT_THEME: ThemeId = "turbine";

function applyTheme(theme: ThemeId) {
  const root = document.documentElement;
  if (theme === DEFAULT_THEME) {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
  root.style.colorScheme = theme === "deep" ? "dark" : "light";
}

export function ThemeSelector({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeId>(DEFAULT_THEME);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme = themes.some((item) => item.id === stored)
      ? (stored as ThemeId)
      : DEFAULT_THEME;
    applyTheme(theme);
    const frame = requestAnimationFrame(() => setActiveTheme(theme));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!selectorRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const selectTheme = (theme: ThemeId) => {
    setActiveTheme(theme);
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (!mobile) setOpen(false);
  };

  if (mobile) {
    return (
      <section className="mobile-theme-picker" aria-labelledby="mobile-theme-title">
        <div className="mobile-theme-heading">
          <Palette size={18} weight="duotone" aria-hidden="true" />
          <span id="mobile-theme-title">Choose your finish</span>
        </div>
        <div className="mobile-theme-grid">
          {themes.map((theme) => (
            <button
              className={activeTheme === theme.id ? "theme-option active" : "theme-option"}
              type="button"
              key={theme.id}
              onClick={() => selectTheme(theme.id)}
              aria-pressed={activeTheme === theme.id}
            >
              <ThemeSwatches swatches={theme.swatches} />
              <span>
                <strong>{theme.name}</strong>
                <small>{theme.description}</small>
              </span>
              {activeTheme === theme.id && <Check size={16} weight="bold" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </section>
    );
  }

  const current = themes.find((theme) => theme.id === activeTheme) ?? themes[0];

  return (
    <div className="theme-selector" ref={selectorRef}>
      <button
        className="theme-trigger"
        type="button"
        aria-label={`Change color theme. Current theme: ${current.name}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="theme-trigger-orbit" aria-hidden="true">
          <Palette size={18} weight="duotone" />
        </span>
        <span className="theme-trigger-copy">
          <small>Site finish</small>
          <strong>{current.name}</strong>
        </span>
      </button>

      {open && (
        <div className="theme-panel" role="dialog" aria-label="Choose website color theme">
          <div className="theme-panel-heading">
            <span>
              <small className="mono-label">Interface palette</small>
              <strong>Choose your finish</strong>
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close theme selector">
              <X size={17} />
            </button>
          </div>
          <div className="theme-options">
            {themes.map((theme) => (
              <button
                className={activeTheme === theme.id ? "theme-option active" : "theme-option"}
                type="button"
                key={theme.id}
                onClick={() => selectTheme(theme.id)}
                aria-pressed={activeTheme === theme.id}
              >
                <ThemeSwatches swatches={theme.swatches} />
                <span>
                  <strong>{theme.name}</strong>
                  <small>{theme.description}</small>
                </span>
                {activeTheme === theme.id && <Check size={16} weight="bold" aria-hidden="true" />}
              </button>
            ))}
          </div>
          <p>Saved automatically on this device.</p>
        </div>
      )}
    </div>
  );
}

function ThemeSwatches({ swatches }: { swatches: string[] }) {
  return (
    <span className="theme-swatches" aria-hidden="true">
      {swatches.map((color) => (
        <i key={color} style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

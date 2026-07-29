"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import navigation from "@/data/navigation.json";
import site from "@/data/site.json";
import { ThemeSelector } from "./ThemeSelector";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const mobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="mobile-panel"
          id="mobile-navigation-panel"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
        >
          <button
            className="mobile-panel-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduceMotion ? 0.01 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <ThemeSelector mobile />
            {navigation.primary.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {item.label} <CaretDown size={18} />
                  </button>
                  {servicesOpen && (
                    <div className="mobile-subnav">
                      <Link href={item.href} onClick={closeMenu}>Services overview</Link>
                      {item.children.map((child) => (
                        <Link href={child.href} onClick={closeMenu} key={child.href}>{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} onClick={closeMenu} key={item.href}>{item.label}</Link>
              )
            )}
            <Link className="button button-primary" href={navigation.cta.href} onClick={closeMenu}>
              {navigation.cta.label}
            </Link>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image src={site.logo} alt="" width={58} height={58} priority unoptimized />
          <span>
            <strong>Cawnpore</strong>
            <small>Engineering Services</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.primary.map((item) =>
            item.children ? (
              <div className="nav-dropdown" key={item.href}>
                <Link className={isActive(item.href) ? "active" : ""} href={item.href}>
                  {item.label} <CaretDown size={14} weight="bold" />
                </Link>
                <div className="dropdown-panel">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>{child.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link className={isActive(item.href) ? "active" : ""} href={item.href} key={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="nav-actions">
          <ThemeSelector />
          <Link className="button button-primary nav-cta" href={navigation.cta.href}>
            {navigation.cta.label}
          </Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <List size={26} />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

    </header>
    {typeof document !== "undefined" && createPortal(mobileMenu, document.body)}
    </>
  );
}

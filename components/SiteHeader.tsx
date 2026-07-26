"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import navigation from "@/data/navigation.json";
import site from "@/data/site.json";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
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

        <Link className="button button-primary nav-cta" href={navigation.cta.href}>
          {navigation.cta.label}
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <List size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-panel">
          <nav className="site-container mobile-nav" aria-label="Mobile navigation">
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
          </nav>
        </div>
      )}
    </header>
  );
}

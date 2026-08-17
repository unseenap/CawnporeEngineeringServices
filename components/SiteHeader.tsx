"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, List, Phone, X, YoutubeLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import navigation from "@/data/navigation.json";
import site from "@/data/site.json";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const mobileMenu = (
    <Drawer open={menuOpen} onOpenChange={setMenuOpen} swipeDirection="right">
      <DrawerContent className="ces-nav-drawer" id="mobile-navigation-panel">
        <div className="ces-drawer-header">
          <div><DrawerTitle>Explore CES</DrawerTitle><DrawerDescription>HVAC engineering and project support</DrawerDescription></div>
          <button type="button" aria-label="Close navigation menu" onClick={closeMenu}><X size={23} /></button>
        </div>
        <nav className="ces-drawer-nav" aria-label="Mobile navigation">
            {navigation.primary.map((item) =>
              item.children ? (
                <div className="ces-drawer-group" key={item.href}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {item.label} <CaretDown size={18} />
                  </button>
                  {servicesOpen && (
                    <div className="ces-drawer-subnav">
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
        <div className="ces-drawer-contact"><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
    <div className="top-contact-bar"><div className="site-container top-contact-inner"><div className="top-contact-details"><a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={20} weight="fill" />{site.phone}</a><a href={`mailto:${site.email}`}><EnvelopeSimple size={22} weight="fill" />{site.email}</a></div><div className="top-socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedinLogo size={17} weight="fill" /></a><a href="https://www.facebook.com" aria-label="Facebook"><FacebookLogo size={17} weight="fill" /></a><a href="https://www.youtube.com" aria-label="YouTube"><YoutubeLogo size={18} weight="fill" /></a><a href="https://www.instagram.com" aria-label="Instagram"><InstagramLogo size={17} weight="bold" /></a><Link href="/about" className="profile-link">Company Profile</Link></div></div></div>
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
          <List size={26} />
          <span>Menu</span>
        </button>
      </div>

    </header>
    {mobileMenu}
    </>
  );
}

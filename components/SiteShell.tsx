import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteLoader } from "./SiteLoader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteLoader />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}

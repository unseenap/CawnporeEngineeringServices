import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import Preloader from "@/components/ui/preloader";
import { GlobalClientMarquee } from "@/components/GlobalClientMarquee";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <GlobalClientMarquee />
      <SiteFooter />
    </>
  );
}

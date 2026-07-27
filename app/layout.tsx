import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://cawnpore-engineering-services.openai.site"),
  title: {
    default: "Cawnpore Engineering Services | HVAC Solutions",
    template: "%s | Cawnpore Engineering Services"
  },
  description: "Professional HVAC solutions for commercial, residential and industrial environments across India.",
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
  },
  openGraph: {
    title: "Cawnpore Engineering Services | Climate Systems Built to Perform",
    description: "HVAC design, installation and lifecycle service for commercial, residential and industrial environments across India.",
    type: "website",
    images: [{
      url: "/images/illustrations/ces-hvac-cutaway.png",
      width: 1693,
      height: 945,
      alt: "Engineered HVAC system serving a commercial building",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ces-theme");if(t==="blueprint"){document.documentElement.setAttribute("data-theme","blueprint")}else{document.documentElement.removeAttribute("data-theme");if(t)localStorage.setItem("ces-theme","turbine")}document.documentElement.style.colorScheme="light"}catch(e){}})();`,
          }}
        />
      </head>
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}

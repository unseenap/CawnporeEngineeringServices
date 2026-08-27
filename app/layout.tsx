import type { Metadata } from "next";
import "./globals.css";
import "./styles/corporate-theme.css";
import "./styles/ces-layout.css";
import { SiteShell } from "@/components/SiteShell";
import site from "@/data/site.json";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cawnpore Engineering Services | HVAC Solutions",
    template: "%s | Cawnpore Engineering Services"
  },
  description: "Professional HVAC solutions for commercial, residential and industrial environments across India.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
  },
  openGraph: {
    title: "Cawnpore Engineering Services | Climate Systems Built to Perform",
    description: "HVAC design, installation and lifecycle service for commercial, residential and industrial environments across India.",
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [{
      url: "/images/services/basement-ventilation/parking-ventilation-hero.jpeg",
      width: 1693,
      height: 945,
      alt: "Engineered HVAC system serving a commercial building",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cawnpore Engineering Services | HVAC Solutions",
    description: "HVAC design, installation and lifecycle service for commercial, residential and industrial environments across India.",
    images: ["/images/services/basement-ventilation/parking-ventilation-hero.jpeg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: SITE_URL,
      logo: `${SITE_URL}${site.logo}`,
      description: site.description,
      foundingDate: site.founded,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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

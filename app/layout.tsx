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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}

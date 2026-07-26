import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // The custom Cloudflare image optimizer requires ASSETS and IMAGES bindings.
  // Local `vinext dev` and `vinext start` do not provide those bindings, so
  // serve the already-local project images directly on every environment.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

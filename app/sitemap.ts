import type { MetadataRoute } from "next";
import services from "@/data/services.json";
import { INDEXABLE_ROUTES, SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryRoutes: MetadataRoute.Sitemap = INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...primaryRoutes, ...serviceRoutes];
}

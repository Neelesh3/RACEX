import type { MetadataRoute } from "next";
import { drivers } from "@/lib/drivers";
import { circuits } from "@/lib/circuits";
import { races } from "@/lib/races";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://racex.vercel.app";

  // Base routes
  const routes = [
    "",
    "/drivers",
    "/garage",
    "/circuits",
    "/races",
    "/standings",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes
  const driverRoutes = drivers.map((d) => ({
    url: `${baseUrl}/drivers/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const circuitRoutes = circuits.map((c) => ({
    url: `${baseUrl}/circuits/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const raceRoutes = races.map((r) => ({
    url: `${baseUrl}/races/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...routes,
    ...driverRoutes,
    ...circuitRoutes,
    ...raceRoutes,
  ];
}

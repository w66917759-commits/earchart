import type { MetadataRoute } from "next";
import { comparisons } from "@/lib/comparisons";
import { piercings } from "@/lib/piercings";
import { absoluteUrl, siteConfig } from "@/lib/site";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/ear-piercing-pain-chart/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/ear-piercing-healing-time-chart/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/ear-piercing-names/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/types-of-ear-piercings/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/ear-piercing-aftercare/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/ear-piercing-jewelry-guide/", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/about-me/", changeFrequency: "yearly" as const, priority: 0.35 },
  { path: "/contact/", changeFrequency: "yearly" as const, priority: 0.35 },
  { path: "/privacy-policy/", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms-of-use/", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const piercingRoutes = piercings.map((piercing) => `/ear-piercings/${piercing.slug}/`);
  const comparisonRoutes = comparisons.map((comparison) => `/compare/${comparison.slug}/`);

  return [
    ...staticRoutes,
    ...piercingRoutes.map((path) => ({ path, changeFrequency: "monthly" as const, priority: 0.72 })),
    ...comparisonRoutes.map((path) => ({ path, changeFrequency: "monthly" as const, priority: 0.72 })),
  ].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: siteConfig.updated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

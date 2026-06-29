import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    lang: "en-US",
    categories: ["lifestyle", "health", "education"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Pain Chart",
        short_name: "Pain",
        description: "Compare ear piercing pain levels.",
        url: "/ear-piercing-pain-chart/",
      },
      {
        name: "Healing Time Chart",
        short_name: "Healing",
        description: "Compare ear piercing healing time ranges.",
        url: "/ear-piercing-healing-time-chart/",
      },
      {
        name: "Piercing Names",
        short_name: "Names",
        description: "Browse common ear piercing names and aliases.",
        url: "/ear-piercing-names/",
      },
    ],
  };
}

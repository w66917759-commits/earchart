import type { Piercing } from "@/lib/piercings";

export const baseEarImage = "/interactive-ear-piercing-chart-ear-photo.png";

export const piercingImages: Partial<Record<string, string>> = {
  "standard-lobe-piercing": "/ear-piercing-chart-standard-lobe-piercing-placement.jpg",
  "upper-lobe-piercing": "/ear-piercing-chart-upper-lobe-piercing-placement.jpg",
  "stacked-lobe-piercing": "/ear-piercing-chart-stacked-lobe-piercing-placement.jpg",
  "helix-piercing": "/ear-piercing-chart-helix-piercing-placement.jpg",
  "forward-helix-piercing": "/ear-piercing-chart-forward-helix-piercing-placement.jpg",
  "flat-piercing": "/ear-piercing-chart-flat-piercing-placement.jpg",
  "conch-piercing": "/ear-piercing-chart-conch-piercing-placement.jpg",
  "tragus-piercing": "/ear-piercing-chart-tragus-piercing-placement.jpg",
  "anti-tragus-piercing": "/ear-piercing-chart-anti-tragus-piercing-placement.jpg",
  "daith-piercing": "/ear-piercing-chart-daith-piercing-placement.jpg",
  "rook-piercing": "/ear-piercing-chart-rook-piercing-placement.jpg",
  "snug-piercing": "/ear-piercing-chart-snug-piercing-placement.jpg",
  "industrial-piercing": "/ear-piercing-chart-industrial-piercing-placement.jpg",
  "orbital-piercing": "/ear-piercing-chart-orbital-piercing-placement.jpg",
};

export function getPiercingImagePath(piercing: Piercing) {
  return piercingImages[piercing.slug] ?? baseEarImage;
}

export const siteConfig = {
  name: "Ear Piercing Chart",
  shortName: "Ear Chart",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://earpiercingchart.wiki",
  description:
    "Use an interactive ear piercing chart to compare placement names, pain levels, healing time, starter jewelry, anatomy fit, and aftercare basics.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@earpiercingchart.wiki",
  updated: "2026-06-25",
  updatedLabel: "Updated June 25, 2026",
  locale: "en_US",
  themeColor: "#f8fbff",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

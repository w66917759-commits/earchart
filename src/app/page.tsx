import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ear Piercing Chart: Pain, Healing Time, Placement & Jewelry Guide",
  description:
    "Use an interactive ear piercing chart to compare placement names, pain levels, healing time, starter jewelry, anatomy fit, and aftercare basics.",
  path: "/ear-piercing-chart/",
  type: "website",
});

export default function HomePage() {
  redirect("/ear-piercing-chart/");
}

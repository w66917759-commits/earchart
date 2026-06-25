import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { categoryLabels, piercings, type PiercingCategory } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Types of Ear Piercings: Lobe, Cartilage, Inner Ear & Multi-Point";
const pageDescription =
  "Browse the main types of ear piercings by anatomy area, pain estimate, healing range, and beginner suitability.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/types-of-ear-piercings/",
  keywords: [
    "types of ear piercings",
    "types of cartilage piercings",
    "lobe piercings",
    "inner ear piercings",
  ],
});

const categories: PiercingCategory[] = ["lobe", "outer-cartilage", "inner-cartilage", "multi-point"];

export default function TypesOfEarPiercingsPage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/types-of-ear-piercings/",
          keywords: ["types of ear piercings", "types of cartilage piercings"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Types of Ear Piercings</h1>
        <p>
          Compare the main placement families before narrowing down the exact piercing on the
          interactive chart.
        </p>
      </section>

      <div className="guide-stack">
        {categories.map((category) => {
          const items = piercings.filter((piercing) => piercing.category === category);
          return (
            <section className="guide-panel" key={category}>
              <h2>{categoryLabels[category]}</h2>
              <div className="piercing-card-grid">
                {items.map((piercing) => (
                  <a className="piercing-card" href={`/ear-piercings/${piercing.slug}/`} key={piercing.slug}>
                    <span>{piercing.name}</span>
                    <small>{piercing.pain.score}/10 pain · {piercing.healing.display}</small>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

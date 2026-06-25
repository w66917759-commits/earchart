import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { categoryLabels, piercings } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Ear Piercing Names: Placement List With Aliases";
const pageDescription =
  "Identify common ear piercing names, aliases, anatomy areas, pain levels, and healing time ranges.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ear-piercing-names/",
  keywords: [
    "ear piercing names",
    "ear piercing placement names",
    "cartilage piercing names",
    "lobe piercing names",
  ],
});

export default function EarPiercingNamesPage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/ear-piercing-names/",
          keywords: ["ear piercing names", "ear piercing placement names"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Ear Piercing Names</h1>
        <p>
          Use this list to match common names and aliases with actual ear locations before comparing
          pain, healing, and jewelry.
        </p>
      </section>

      <section className="table-panel">
        <h2>Name and location lookup</h2>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Also called</th>
                <th>Area</th>
                <th>Pain</th>
                <th>Healing</th>
              </tr>
            </thead>
            <tbody>
              {piercings.map((piercing) => (
                <tr key={piercing.slug}>
                  <th scope="row">
                    <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                  </th>
                  <td>{piercing.aliases.join(", ")}</td>
                  <td>{categoryLabels[piercing.category]} · {piercing.anatomyArea}</td>
                  <td>{piercing.pain.score}/10</td>
                  <td>{piercing.healing.display}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

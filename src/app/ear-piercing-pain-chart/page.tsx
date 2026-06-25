import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { categoryLabels, piercings } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Ear Piercing Pain Chart: Least to Most Painful Placements";
const pageDescription =
  "Compare estimated ear piercing pain levels from lobe to cartilage placements. Scores are subjective and should be confirmed with a professional piercer.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ear-piercing-pain-chart/",
  keywords: [
    "ear piercing pain chart",
    "least painful ear piercings",
    "most painful ear piercings",
    "cartilage piercing pain",
  ],
});

const sortedPiercings = [...piercings].sort((left, right) => left.pain.score - right.pain.score);

export default function EarPiercingPainChartPage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/ear-piercing-pain-chart/",
          keywords: ["ear piercing pain chart", "least painful ear piercings"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Ear Piercing Pain Chart</h1>
        <p>
          A subjective comparison of common ear piercing pain levels. Scores are estimates, not a
          promise about your experience.
        </p>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="table-panel">
            <h2>Pain ranking</h2>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Placement</th>
                    <th>Area</th>
                    <th>Pain estimate</th>
                    <th>Why it may feel that way</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPiercings.map((piercing) => (
                    <tr key={piercing.slug}>
                      <th scope="row">
                        <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                      </th>
                      <td>{categoryLabels[piercing.category]}</td>
                      <td>{piercing.pain.score}/10 · {piercing.pain.label}</td>
                      <td>{piercing.pain.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Least painful ear piercings</h2>
            <div className="rank-list">
              {sortedPiercings.slice(0, 5).map((piercing) => (
                <div className="rank-item" key={piercing.slug}>
                  <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                  <span>{piercing.pain.score}/10 · {piercing.healing.display}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-panel">
            <h2>How to read the pain score</h2>
            <p>
              Lobe placements usually score lower because the tissue is softer. Cartilage placements
              often feel sharper and heal longer because the tissue is firmer and easier to irritate.
              Technique, jewelry fit, swelling room, and personal tolerance still matter.
            </p>
          </section>
        </div>
        <SourceBox />
      </div>
    </main>
  );
}

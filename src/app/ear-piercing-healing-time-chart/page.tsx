import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { getHealingGroup, piercings } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Ear Piercing Healing Time Chart: Fastest to Slowest";
const pageDescription =
  "Compare ear piercing healing time ranges for lobe, cartilage, inner-ear, and multi-point placements.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ear-piercing-healing-time-chart/",
  keywords: [
    "ear piercing healing time chart",
    "fastest healing ear piercings",
    "cartilage piercing healing time",
    "lobe piercing healing time",
  ],
});

const sortedPiercings = [...piercings].sort((left, right) => {
  if (left.healing.maxWeeks === right.healing.maxWeeks) {
    return left.healing.minWeeks - right.healing.minWeeks;
  }
  return left.healing.maxWeeks - right.healing.maxWeeks;
});

export default function EarPiercingHealingTimeChartPage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/ear-piercing-healing-time-chart/",
          keywords: ["ear piercing healing time chart", "cartilage piercing healing time"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Ear Piercing Healing Time Chart</h1>
        <p>
          Compare expected healing ranges. A healed-looking piercing can still be fragile, so ask your
          piercer before changing jewelry.
        </p>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="table-panel">
            <h2>Healing time by placement</h2>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Placement</th>
                    <th>Range</th>
                    <th>Group</th>
                    <th>Healing note</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPiercings.map((piercing) => (
                    <tr key={piercing.slug}>
                      <th scope="row">
                        <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                      </th>
                      <td>{piercing.healing.display}</td>
                      <td>{getHealingGroup(piercing)}</td>
                      <td>{piercing.healing.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Fastest healing ear piercings</h2>
            <div className="rank-list">
              {sortedPiercings.slice(0, 5).map((piercing) => (
                <div className="rank-item" key={piercing.slug}>
                  <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                  <span>{piercing.healing.display} · {piercing.pain.score}/10 pain</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-panel">
            <h2>Why cartilage takes longer</h2>
            <p>
              Cartilage has less blood flow than the soft lobe and is easier to irritate with pressure,
              hair, headphones, and jewelry movement. That is why helix, conch, daith, rook, tragus,
              and similar placements are listed as months rather than weeks.
            </p>
          </section>
        </div>
        <SourceBox />
      </div>
    </main>
  );
}

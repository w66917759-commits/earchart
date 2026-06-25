import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { piercings } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Ear Piercing Jewelry Guide: Initial Jewelry, Materials & What To Avoid";
const pageDescription =
  "Compare initial ear piercing jewelry by placement and learn conservative material standards for fresh piercings.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ear-piercing-jewelry-guide/",
  keywords: [
    "ear piercing jewelry guide",
    "initial piercing jewelry",
    "flat back labret",
    "implant grade titanium piercing jewelry",
  ],
});

export default function EarPiercingJewelryGuidePage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/ear-piercing-jewelry-guide/",
          keywords: ["ear piercing jewelry guide", "initial piercing jewelry"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Ear Piercing Jewelry Guide</h1>
        <p>
          Initial jewelry should fit the anatomy, leave room for swelling, and use smooth,
          body-compatible materials selected by a professional piercer.
        </p>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="guide-panel">
            <h2>Material standard for fresh piercings</h2>
            <ul>
              <li>Ask for implant-grade titanium that meets appropriate ASTM or ISO standards.</li>
              <li>Suitable solid gold should be 14k or higher, nickel- and cadmium-free, and biocompatible.</li>
              <li>Platinum and niobium are common high-quality options when selected correctly.</li>
              <li>Surfaces should be smooth, polished, and free of scratches, burrs, or rough edges.</li>
            </ul>
          </section>

          <section className="table-panel">
            <h2>Initial jewelry by placement</h2>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Placement</th>
                    <th>Initial jewelry</th>
                    <th>After healing</th>
                    <th>Avoid initially</th>
                  </tr>
                </thead>
                <tbody>
                  {piercings.map((piercing) => (
                    <tr key={piercing.slug}>
                      <th scope="row">
                        <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                      </th>
                      <td>{piercing.jewelry.initial.join(", ")}</td>
                      <td>{piercing.jewelry.healed.join(", ")}</td>
                      <td>{piercing.jewelry.avoidInitially.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Why hoops are often delayed</h2>
            <p>
              Some placements can heal with rings when a piercer chooses them carefully, but studs or
              fitted barbells usually move less. Less movement can mean less irritation while swelling
              and early healing settle.
            </p>
          </section>
        </div>
        <SourceBox />
      </div>
    </main>
  );
}

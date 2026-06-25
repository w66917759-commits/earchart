import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { piercings } from "@/lib/piercings";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Ear Piercing Aftercare: What To Do, What To Avoid & Warning Signs";
const pageDescription =
  "Conservative ear piercing aftercare guidance with do-and-avoid lists, infection warning signs, and source links.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ear-piercing-aftercare/",
  keywords: [
    "ear piercing aftercare",
    "cartilage piercing aftercare",
    "ear piercing infection signs",
    "fresh piercing care",
  ],
});

const aftercareDo = [
  "Wash hands before touching or cleaning a new piercing.",
  "Clean gently with sterile saline or the approach your piercer recommends.",
  "Keep jewelry still unless a qualified piercer tells you otherwise.",
  "Protect the area from sleep pressure, hair snags, dirty earbuds, and tight helmets.",
];

const aftercareAvoid = [
  "Do not twist or rotate jewelry during healing.",
  "Avoid alcohol, hydrogen peroxide, iodine, harsh soaps, ointments, and over-cleaning.",
  "Avoid swimming in pools, hot tubs, rivers, lakes, or other bodies of water while healing.",
  "Do not change jewelry early without a piercer checking the channel.",
];

export default function EarPiercingAftercarePage() {
  return (
    <main className="simple-page">
      <JsonLd
        data={articleJsonLd({
          headline: pageTitle,
          description: pageDescription,
          path: "/ear-piercing-aftercare/",
          keywords: ["ear piercing aftercare", "cartilage piercing aftercare"],
        })}
      />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Ear Piercing Aftercare</h1>
        <p>
          Keep aftercare simple and conservative. Fresh piercings are wounds, and irritation can
          delay healing even when the piercing looks fine.
        </p>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="guide-panel">
            <h2>What to do</h2>
            <ul>
              {aftercareDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="guide-panel">
            <h2>What to avoid</h2>
            <ul>
              {aftercareAvoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="guide-panel">
            <h2>Warning signs</h2>
            <p>
              Seek medical care if redness spreads, the area feels hot, swelling worsens, pus appears,
              fever develops, or pain persists or returns after improving. Be especially cautious with
              cartilage piercings.
            </p>
          </section>

          <section className="table-panel">
            <h2>Aftercare impact by placement</h2>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Placement</th>
                    <th>Healing</th>
                    <th>Sleep impact</th>
                    <th>Headphones</th>
                  </tr>
                </thead>
                <tbody>
                  {piercings.map((piercing) => (
                    <tr key={piercing.slug}>
                      <th scope="row">
                        <a href={`/ear-piercings/${piercing.slug}/`}>{piercing.name}</a>
                      </th>
                      <td>{piercing.healing.display}</td>
                      <td>{piercing.selector.sleepImpact}</td>
                      <td>{piercing.selector.headphoneFriendly ? "Usually workable" : "May interfere"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <SourceBox />
      </div>
    </main>
  );
}

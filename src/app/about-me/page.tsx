import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "About Me";
const pageDescription =
  "About Ear Piercing Chart, an independent educational tool for comparing ear piercing placements, pain, healing, jewelry, and aftercare basics.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/about-me/",
  type: "website",
  keywords: ["about ear piercing chart", "ear piercing education site"],
});

export default function AboutMePage() {
  return (
    <main className="simple-page utility-page">
      <JsonLd data={webPageJsonLd({ name: pageTitle, description: pageDescription, path: "/about-me/" })} />
      <SiteNav />

      <section className="guide-hero compact">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>About Me</h1>
        <p>
          Ear Piercing Chart is an independent educational site built to make ear
          piercing placement, pain, healing, jewelry, and aftercare information easier to
          compare before you speak with a professional piercer.
        </p>
      </section>

      <div className="utility-layout">
        <section className="guide-panel">
          <h2>What this site is for</h2>
          <p>
            The chart and guides are designed for early research. They help you understand
            common placement names, realistic healing ranges, starter jewelry options, and
            lifestyle tradeoffs such as sleep pressure or headphone fit.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Editorial approach</h2>
          <ul>
            <li>Keep claims conservative when pain or healing varies by person.</li>
            <li>Separate general education from medical or piercing advice.</li>
            <li>Use source links where health, safety, or aftercare guidance matters.</li>
            <li>Update pages when the chart, placement data, or source material changes.</li>
          </ul>
        </section>

        <section className="guide-panel">
          <h2>Important note</h2>
          <p>
            This site is not a piercing studio, clinic, or substitute for a professional
            consultation. Always ask a qualified piercer to check your anatomy and seek
            medical care for infection signs, severe swelling, fever, spreading redness, or
            worsening pain.
          </p>
        </section>
      </div>
    </main>
  );
}

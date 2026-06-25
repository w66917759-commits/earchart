import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Terms of Use";
const pageDescription =
  "Terms of Use for Ear Piercing Chart, including educational-use limits, no medical advice, content accuracy, and external links.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/terms-of-use/",
  type: "website",
  keywords: ["ear piercing chart terms", "terms of use"],
});

export default function TermsOfUsePage() {
  return (
    <main className="simple-page utility-page">
      <JsonLd data={webPageJsonLd({ name: pageTitle, description: pageDescription, path: "/terms-of-use/" })} />
      <SiteNav />

      <section className="guide-hero compact">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Terms of Use</h1>
        <p>
          By using Ear Piercing Chart, you agree to use the site as a general educational
          reference and to make final piercing, health, and jewelry decisions with qualified
          professionals.
        </p>
      </section>

      <div className="utility-layout">
        <section className="guide-panel">
          <h2>Educational use only</h2>
          <p>
            Content on this site is provided for general information. Pain levels, healing
            ranges, jewelry fit, anatomy suitability, and aftercare needs vary by person and
            should be checked with a qualified piercer.
          </p>
        </section>

        <section className="guide-panel">
          <h2>No medical advice</h2>
          <p>
            The site does not provide medical diagnosis, treatment, or emergency advice. If a
            piercing looks infected, swelling worsens, redness spreads, fever develops, or pain
            becomes severe, seek medical care.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Accuracy and updates</h2>
          <p>
            We aim to keep content useful and conservative, but information may become
            incomplete or outdated. We may change, remove, or update pages without notice.
          </p>
        </section>

        <section className="guide-panel">
          <h2>External links</h2>
          <p>
            Links to outside websites are provided for convenience and source context. We are
            not responsible for external content, products, services, or policies.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="inline-link" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

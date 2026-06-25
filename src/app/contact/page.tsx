import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Contact";
const pageDescription =
  "Contact Ear Piercing Chart for corrections, source suggestions, privacy requests, and site feedback.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/contact/",
  type: "website",
  keywords: ["contact ear piercing chart", "ear piercing chart feedback"],
});

export default function ContactPage() {
  return (
    <main className="simple-page utility-page">
      <JsonLd data={webPageJsonLd({ name: pageTitle, description: pageDescription, path: "/contact/" })} />
      <SiteNav />

      <section className="guide-hero compact">
        <p className="eyebrow">Contact</p>
        <h1>Contact</h1>
        <p>
          Send corrections, source suggestions, privacy questions, or site feedback. For
          urgent piercing problems or medical symptoms, contact a qualified professional
          instead of waiting for a website reply.
        </p>
      </section>

      <div className="utility-layout">
        <section className="guide-panel contact-panel">
          <h2>Email</h2>
          <a className="contact-email" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          <p>
            Include the page URL and a short description if you are reporting an error or
            suggesting a source.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Good reasons to get in touch</h2>
          <ul>
            <li>Correction requests for placement, healing, jewelry, or aftercare content.</li>
            <li>Source recommendations from qualified piercing or health organizations.</li>
            <li>Privacy, cookie, or data request questions.</li>
            <li>Accessibility issues or broken links.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

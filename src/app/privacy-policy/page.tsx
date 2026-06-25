import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Privacy Policy for Ear Piercing Chart, covering basic site data, cookies, analytics, third-party links, and contact options.";

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/privacy-policy/",
  type: "website",
  keywords: ["ear piercing chart privacy policy", "privacy policy"],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="simple-page utility-page">
      <JsonLd data={webPageJsonLd({ name: pageTitle, description: pageDescription, path: "/privacy-policy/" })} />
      <SiteNav />

      <section className="guide-hero compact">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains how Ear Piercing Chart handles basic information when you
          browse the site. The site is informational and does not require an account.
        </p>
      </section>

      <div className="utility-layout">
        <section className="guide-panel">
          <h2>Information we may collect</h2>
          <p>
            We may receive basic technical information such as IP address, browser type,
            device type, pages visited, referring page, and approximate location derived from
            network data. This information is commonly collected through hosting logs,
            analytics tools, or security systems.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Cookies and analytics</h2>
          <p>
            The site may use cookies or similar technologies for analytics, performance,
            spam prevention, or remembering basic preferences. You can usually disable cookies
            in your browser settings, though some site features may work less smoothly.
          </p>
        </section>

        <section className="guide-panel">
          <h2>How information is used</h2>
          <ul>
            <li>Operate, secure, and improve the website.</li>
            <li>Understand which guides and chart features are useful.</li>
            <li>Find broken pages, errors, or abusive traffic patterns.</li>
            <li>Respond to messages sent through the contact email.</li>
          </ul>
        </section>

        <section className="guide-panel">
          <h2>Third-party links</h2>
          <p>
            Some pages link to external sources, professional organizations, or reference
            materials. Those websites have their own privacy practices, and this policy does
            not control how third parties handle information.
          </p>
        </section>

        <section className="guide-panel">
          <h2>Your choices</h2>
          <p>
            You can block cookies, use browser privacy controls, or contact us with privacy
            questions at{" "}
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

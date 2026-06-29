import { EarPiercingExplorer } from "@/components/EarPiercingExplorer";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { comparisons } from "@/lib/comparisons";
import { getHealingGroup, piercings } from "@/lib/piercings";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  itemListJsonLd,
  type Faq,
  webPageJsonLd,
} from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const chartPageTitle = "Ear Piercing Chart: Pain, Healing Time, Placement & Jewelry Guide";
export const chartPageDescription =
  "Use an interactive ear piercing chart to compare placement names, pain levels, healing time, starter jewelry, anatomy fit, and aftercare basics.";

const chartFaqs: Faq[] = [
  {
    question: "What is the least painful ear piercing?",
    answer:
      "Standard lobe piercings are usually the lowest-pain option in this chart because they pass through soft lobe tissue rather than firmer cartilage.",
  },
  {
    question: "Which ear piercings take the longest to heal?",
    answer:
      "Cartilage placements such as helix, conch, daith, rook, snug, and industrial piercings usually take months rather than weeks and can be delayed by pressure, poor jewelry fit, or irritation.",
  },
  {
    question: "Can the chart tell me which piercing fits my ear?",
    answer:
      "The chart can narrow options by placement, pain, healing, and lifestyle impact, but final suitability depends on your anatomy and should be checked by a professional piercer.",
  },
];

const pageJsonLd = [
  webPageJsonLd({
    name: chartPageTitle,
    description: chartPageDescription,
    path: "/",
  }),
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Ear Piercing Chart",
    url: absoluteUrl("/"),
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    description: chartPageDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  itemListJsonLd({
    name: "Ear piercing placements",
    description: "Common ear piercing placements with pain, healing, jewelry, and anatomy notes.",
    path: "/",
    items: piercings.map((piercing) => ({
      name: piercing.name,
      path: `/ear-piercings/${piercing.slug}/`,
      description: piercing.seo.description,
    })),
  }),
  faqPageJsonLd(chartFaqs),
  breadcrumbJsonLd([{ name: "Ear Piercing Chart", path: "/" }]),
];

const guideGroups = [
  {
    id: "pain-healing",
    title: "Pain & Healing",
    description: "Compare pain level, tenderness, and realistic healing timelines before choosing a placement.",
    links: [
      {
        title: "Ear Piercing Pain Chart",
        href: "/ear-piercing-pain-chart/",
        label: "Pain ranking",
        description: "Least to most painful ear piercings with placement-by-placement notes.",
      },
      {
        title: "Ear Piercing Healing Time Chart",
        href: "/ear-piercing-healing-time-chart/",
        label: "Healing timeline",
        description: "Fastest to slowest healing ranges for lobe, cartilage, and multi-point piercings.",
      },
    ],
  },
  {
    id: "placement-guides",
    title: "Placement Guides",
    description: "Learn the names, anatomy zones, and common placement families used in curated ears.",
    links: [
      {
        title: "Ear Piercing Names",
        href: "/ear-piercing-names/",
        label: "Name list",
        description: "A quick reference for common ear piercing names, aliases, and placement terms.",
      },
      {
        title: "Types of Ear Piercings",
        href: "/types-of-ear-piercings/",
        label: "Placement types",
        description: "Lobe, cartilage, inner-ear, and multi-point piercing types grouped by area.",
      },
    ],
  },
  {
    id: "jewelry-aftercare",
    title: "Jewelry & Aftercare",
    description: "Choose better starter jewelry and understand the habits that keep healing calmer.",
    links: [
      {
        title: "Jewelry Guide",
        href: "/ear-piercing-jewelry-guide/",
        label: "Starter jewelry",
        description: "Initial jewelry styles, materials, sizing basics, and what to avoid early.",
      },
      {
        title: "Aftercare Guide",
        href: "/ear-piercing-aftercare/",
        label: "Healing care",
        description: "Simple aftercare steps, irritation warnings, and placement-specific care notes.",
      },
    ],
  },
  {
    id: "popular-piercing-guides",
    title: "Popular Piercing Guides",
    description: "Open detailed guides for the placements people compare most often.",
    links: [
      {
        title: "Standard Lobe Piercing Guide",
        href: "/ear-piercings/standard-lobe-piercing/",
        label: "Low pain",
        description: "Placement, pain, healing, jewelry, and aftercare basics for standard lobes.",
      },
      {
        title: "Helix Piercing Guide",
        href: "/ear-piercings/helix-piercing/",
        label: "Outer cartilage",
        description: "Outer rim placement details, healing expectations, jewelry, and sleep impact.",
      },
      {
        title: "Conch Piercing Guide",
        href: "/ear-piercings/conch-piercing/",
        label: "Inner cartilage",
        description: "Central ear placement details, stud and hoop options, and healing tradeoffs.",
      },
      {
        title: "Tragus Piercing Guide",
        href: "/ear-piercings/tragus-piercing/",
        label: "Front ear",
        description: "Pain, healing, earbud impact, jewelry choices, and anatomy fit for tragus piercings.",
      },
      {
        title: "Daith Piercing Guide",
        href: "/ear-piercings/daith-piercing/",
        label: "Inner fold",
        description: "Daith fold placement, ring jewelry, healing notes, and earbud considerations.",
      },
      {
        title: "Rook Piercing Guide",
        href: "/ear-piercings/rook-piercing/",
        label: "Upper ridge",
        description: "Rook anatomy, curved barbell jewelry, healing range, and pressure risks.",
      },
    ],
  },
  {
    id: "comparisons",
    title: "Comparisons",
    description: "Compare similar placements before deciding which one fits your ear and routine.",
    links: comparisons.map((comparison) => ({
      title: comparison.title,
      href: `/compare/${comparison.slug}/`,
      label: "Compare",
      description: comparison.description,
    })),
  },
];

export function EarPiercingChartPage() {
  return (
    <main>
      <JsonLd data={pageJsonLd} />
      <header className="tool-header">
        <SiteNav />

        <section className="hero-band title-only compact-hero">
          <h1>Ear Piercing Chart: Pain, Healing Time & Placement Guide</h1>
          <p className="hero-lead">
            Compare ear piercing names, placement points, pain levels, healing time, jewelry,
            and aftercare notes from one interactive ear map.
          </p>
        </section>
      </header>

      <EarPiercingExplorer />

      <section id="explore-guides" className="content-band guide-card-section" aria-labelledby="explore-guides-heading">
        <div className="section-heading">
          <span className="eyebrow">Guides</span>
          <h2 id="explore-guides-heading">Explore Ear Piercing Guides</h2>
          <p>
            Use these crawlable guide links after exploring the chart to compare pain,
            healing, placement names, jewelry choices, aftercare, and popular piercing pairs.
          </p>
        </div>

        <div className="guide-card-groups">
          {guideGroups.map((group) => (
            <section className="guide-card-group" key={group.title} aria-labelledby={`${group.id}-heading`}>
              <div className="guide-card-group-heading">
                <h3 id={`${group.id}-heading`}>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="guide-card-grid">
                {group.links.map((link) => (
                  <a className="guide-card-link" href={link.href} key={link.href}>
                    <span>{link.label}</span>
                    <strong>{link.title}</strong>
                    <small>{link.description}</small>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="content-band seo-content" aria-labelledby="chart-guide-heading">
        <div className="section-heading">
          <span className="eyebrow">Placement guide</span>
          <h2 id="chart-guide-heading">Compare ear piercing placement, pain, and healing in one chart</h2>
          <p>
            This ear piercing chart groups common lobe, outer cartilage, inner cartilage, and
            multi-point placements so you can compare where each piercing sits before opening a
            detailed guide.
          </p>
        </div>

        <div className="homepage-seo-grid">
          <section className="guide-panel">
            <h2>How to use the chart</h2>
            <ul>
              <li>Start with the placement point to see the anatomy area and common name.</li>
              <li>Compare pain and healing time before choosing a cartilage or lobe placement.</li>
              <li>Open the guide for jewelry, aftercare, sleep, headphone, and anatomy notes.</li>
            </ul>
          </section>

          <section className="guide-panel">
            <h2>Fastest healing options</h2>
            <div className="link-list">
              {piercings
                .filter((piercing) => getHealingGroup(piercing) === "Fastest")
                .slice(0, 4)
                .map((piercing) => (
                  <a key={piercing.slug} href={`/ear-piercings/${piercing.slug}/`}>
                    {piercing.name}
                    <span>{piercing.healing.display}</span>
                  </a>
                ))}
            </div>
          </section>

          <section className="guide-panel">
            <h2>Popular comparisons</h2>
            <div className="link-list">
              {comparisons.slice(0, 4).map((comparison) => (
                <a key={comparison.slug} href={`/compare/${comparison.slug}/`}>
                  {comparison.title}
                  <span>Compare</span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="homepage-seo-grid two-up">
          <section className="guide-panel">
            <h2>Ear piercing quick answers</h2>
            {chartFaqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>

          <SourceBox />
        </div>
      </section>
    </main>
  );
}

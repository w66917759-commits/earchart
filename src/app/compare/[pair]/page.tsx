import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { MiniEarMap } from "@/components/MiniEarMap";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import {
  comparisons,
  getComparison,
  getComparisonPiercings,
  type PiercingComparison,
} from "@/lib/comparisons";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  pageMetadata,
  type Faq,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ComparePageProps = {
  params: Promise<{
    pair: string;
  }>;
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({
    pair: comparison.slug,
  }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { pair } = await params;
  const comparison = getComparison(pair);

  if (!comparison) {
    return {};
  }

  return {
    ...pageMetadata({
      title: `${comparison.title}: Pain, Healing, Jewelry & Fit`,
      description: comparison.description,
      path: `/compare/${comparison.slug}/`,
      keywords: [
        comparison.title.toLowerCase(),
        `${comparison.title.toLowerCase()} pain`,
        `${comparison.title.toLowerCase()} healing`,
        "ear piercing comparison",
      ],
    }),
  };
}

function comparisonFaqs(comparison: PiercingComparison): Faq[] {
  return [
    {
      question: `Which is better: ${comparison.title.replace(" vs ", " or ")}?`,
      answer: comparison.verdict,
    },
    {
      question: `What should I compare before choosing between ${comparison.title.toLowerCase()}?`,
      answer:
        "Compare placement, pain estimate, healing time, initial jewelry, sleep pressure, headphone use, and whether your anatomy supports the placement.",
    },
  ];
}

function compareJsonLd(comparison: PiercingComparison) {
  return [
    articleJsonLd({
      headline: `${comparison.title}: Pain, Healing, Jewelry & Fit`,
      description: comparison.description,
      path: `/compare/${comparison.slug}/`,
      keywords: [comparison.title.toLowerCase(), "ear piercing comparison"],
    }),
    faqPageJsonLd(comparisonFaqs(comparison)),
    breadcrumbJsonLd([
      { name: "Ear Piercing Chart", path: "/ear-piercing-chart/" },
      { name: comparison.title, path: `/compare/${comparison.slug}/` },
    ]),
  ];
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { pair } = await params;
  const comparison = getComparison(pair);

  if (!comparison) {
    notFound();
  }

  const [left, right] = getComparisonPiercings(comparison);

  return (
    <main className="simple-page">
      <JsonLd data={compareJsonLd(comparison)} />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{siteConfig.updatedLabel}</p>
        <h1>{comparison.title}</h1>
        <p>{comparison.description}</p>
        <div className="metadata-line">
          <span>Not medical advice</span>
          <span>Manually reviewed educational guide</span>
        </div>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="table-panel">
            <h2>Quick comparison</h2>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>{left.name}</th>
                    <th>{right.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Pain</th>
                    <td>{left.pain.score}/10 · {left.pain.label}</td>
                    <td>{right.pain.score}/10 · {right.pain.label}</td>
                  </tr>
                  <tr>
                    <th scope="row">Healing</th>
                    <td>{left.healing.display}</td>
                    <td>{right.healing.display}</td>
                  </tr>
                  <tr>
                    <th scope="row">Initial jewelry</th>
                    <td>{left.jewelry.initial.join(", ")}</td>
                    <td>{right.jewelry.initial.join(", ")}</td>
                  </tr>
                  <tr>
                    <th scope="row">Headphones</th>
                    <td>{left.selector.headphoneFriendly ? "Usually workable" : "May interfere"}</td>
                    <td>{right.selector.headphoneFriendly ? "Usually workable" : "May interfere"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sleep impact</th>
                    <td>{left.selector.sleepImpact}</td>
                    <td>{right.selector.sleepImpact}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Recommendation</h2>
            <p>{comparison.verdict}</p>
          </section>

          <section className="guide-panel">
            <h2>Location difference</h2>
            <div className="two-column-list">
              <div>
                <h3>{left.name}</h3>
                <MiniEarMap piercing={left} />
              </div>
              <div>
                <h3>{right.name}</h3>
                <MiniEarMap piercing={right} />
              </div>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Better for</h2>
            <ul>
              {comparison.betterFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="guide-panel">
            <h2>Not ideal if</h2>
            <ul>
              {comparison.avoidIf.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="guide-aside">
          <section className="guide-panel">
            <h2>Open individual guides</h2>
            <div className="link-list">
              <a href={`/ear-piercings/${left.slug}/`}>
                {left.name}
                <span>{left.healing.display}</span>
              </a>
              <a href={`/ear-piercings/${right.slug}/`}>
                {right.name}
                <span>{right.healing.display}</span>
              </a>
              <a href="/ear-piercing-chart/">
                Interactive chart
                <span>All placements</span>
              </a>
            </div>
          </section>
          <SourceBox />
        </aside>
      </div>
    </main>
  );
}

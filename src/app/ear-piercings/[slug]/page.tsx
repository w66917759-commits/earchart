import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { SourceBox } from "@/components/SourceBox";
import { getPiercingImagePath } from "@/lib/piercing-images";
import {
  categoryLabels,
  getPiercing,
  getRelatedPiercings,
  piercings,
  type Piercing,
} from "@/lib/piercings";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  pageMetadata,
  type Faq,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PiercingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return piercings.map((piercing) => ({
    slug: piercing.slug,
  }));
}

export async function generateMetadata({ params }: PiercingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const piercing = getPiercing(slug);

  if (!piercing) {
    return {};
  }

  return {
    ...pageMetadata({
      title: piercing.seo.title,
      description: piercing.seo.description,
      path: `/ear-piercings/${piercing.slug}/`,
      keywords: piercing.seo.keywords,
    }),
  };
}

function piercingFaqs(piercing: Piercing): Faq[] {
  return [
    {
      question: `Does a ${piercing.name.toLowerCase()} hurt?`,
      answer: `This guide estimates ${piercing.pain.score}/10 pain for a ${piercing.name.toLowerCase()}, but pain varies by anatomy, technique, jewelry fit, and personal tolerance.`,
    },
    {
      question: `How long does a ${piercing.name.toLowerCase()} take to heal?`,
      answer: `Typical healing is listed as ${piercing.healing.display}. ${piercing.healing.note}`,
    },
    {
      question: `What jewelry is best for a fresh ${piercing.name.toLowerCase()}?`,
      answer: `Common initial jewelry includes ${piercing.jewelry.initial.join(", ")}. A professional piercer should size jewelry for swelling room and anatomy.`,
    },
  ];
}

function piercingJsonLd(piercing: Piercing) {
  return [
    articleJsonLd({
      headline: piercing.seo.title,
      description: piercing.seo.description,
      path: `/ear-piercings/${piercing.slug}/`,
      keywords: piercing.seo.keywords,
    }),
    faqPageJsonLd(piercingFaqs(piercing)),
    breadcrumbJsonLd([
      { name: "Ear Piercing Chart", path: "/" },
      { name: piercing.name, path: `/ear-piercings/${piercing.slug}/` },
    ]),
  ];
}

export default async function PiercingGuidePage({ params }: PiercingPageProps) {
  const { slug } = await params;
  const piercing = getPiercing(slug);

  if (!piercing) {
    notFound();
  }

  const related = getRelatedPiercings(piercing);
  const locationImage = getPiercingImagePath(piercing);

  return (
    <main className="simple-page">
      <JsonLd data={piercingJsonLd(piercing)} />
      <SiteNav />

      <section className="guide-hero">
        <p className="eyebrow">{categoryLabels[piercing.category]}</p>
        <h1>{piercing.seo.h1}</h1>
        <p>{piercing.seo.description}</p>
        <div className="metadata-line">
          <span>{siteConfig.updatedLabel}</span>
          <span>Manually reviewed educational guide</span>
          <span>Not medical advice</span>
        </div>
      </section>

      <div className="guide-layout">
        <div className="guide-stack">
          <section className="guide-panel">
            <h2>What is a {piercing.name.toLowerCase()}?</h2>
            <p>
              A {piercing.name.toLowerCase()} is placed in the {piercing.anatomyArea.toLowerCase()}.
              It is commonly searched as {piercing.aliases.slice(0, 2).join(" or ")}.
            </p>
          </section>

          <section className="guide-panel">
            <h2>Where is it located?</h2>
            <figure className="guide-location-visual">
              {/* eslint-disable-next-line @next/next/no-img-element -- user-provided local generated reference */}
              <img src={locationImage} alt={`${piercing.name} placement reference`} />
            </figure>
            <p>{piercing.suitability.anatomyNotes}</p>
          </section>

          <section className="guide-panel">
            <h2>{piercing.name} pain level</h2>
            <p>
              Subjective estimate: <strong>{piercing.pain.score}/10, {piercing.pain.label}</strong>.
              {" "}
              {piercing.pain.note}
            </p>
          </section>

          <section className="guide-panel">
            <h2>{piercing.name} healing time</h2>
            <p>
              Typical range: <strong>{piercing.healing.display}</strong>. {piercing.healing.note}
            </p>
          </section>

          <section className="guide-panel">
            <h2>Best jewelry for a {piercing.name.toLowerCase()}</h2>
            <div className="two-column-list">
              <div>
                <h3>Initial jewelry</h3>
                <ul>
                  {piercing.jewelry.initial.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>After healing</h3>
                <ul>
                  {piercing.jewelry.healed.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              For fresh piercings, ask for smooth, implant-grade materials such as ASTM/ISO-compliant
              titanium, suitable solid gold, platinum, or niobium.
            </p>
          </section>

          <section className="guide-panel">
            <h2>Is it right for your ear shape?</h2>
            <div className="pros-cons">
              <div>
                <h3>Best for</h3>
                <ul>
                  {piercing.suitability.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Not ideal for</h3>
                <ul>
                  {piercing.suitability.notIdealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Pros and cons</h2>
            <div className="pros-cons">
              <div>
                <h3>Pros</h3>
                <ul>
                  {piercing.suitability.bestFor.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Cons</h3>
                <ul>
                  {piercing.risks.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="guide-panel">
            <h2>What to avoid during healing</h2>
            <ul>
              {piercing.aftercare.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {piercing.jewelry.avoidInitially.map((item) => (
                <li key={item}>Avoid initially: {item}</li>
              ))}
            </ul>
          </section>

          <section className="guide-panel">
            <h2>Aftercare tips</h2>
            <ul>
              {piercing.aftercare.do.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="disclaimer-box">
              <p>
                Seek medical care for spreading redness, heat, swelling, pus, fever, or pain that persists
                or returns after improving.
              </p>
            </div>
          </section>

          <section className="guide-panel">
            <h2>Similar piercings</h2>
            <div className="link-list">
              {related.map((item) => (
                <a key={item.slug} href={`/ear-piercings/${item.slug}/`}>
                  {item.name}
                  <span>{item.pain.score}/10</span>
                </a>
              ))}
            </div>
          </section>

          <section className="guide-panel">
            <h2>FAQs</h2>
            <h3>Does a {piercing.name.toLowerCase()} hurt?</h3>
            <p>
              The estimate is {piercing.pain.score}/10, but pain depends on placement, technique,
              anatomy, and personal pain tolerance.
            </p>
            <h3>Can I sleep on it?</h3>
            <p>
              Avoid direct pressure while it is fresh. This placement has a {piercing.selector.sleepImpact.toLowerCase()} sleep impact estimate.
            </p>
            <h3>When can I change jewelry?</h3>
            <p>
              Ask your piercer. Jewelry changes too early can irritate the channel, especially for cartilage.
            </p>
          </section>
        </div>

        <aside className="guide-aside">
          <section className="guide-panel">
            <h2>Quick facts</h2>
            <div className="quick-facts">
              <div>
                <span>Pain</span>
                <strong>{piercing.pain.score}/10 · {piercing.pain.label}</strong>
              </div>
              <div>
                <span>Healing</span>
                <strong>{piercing.healing.display}</strong>
              </div>
              <div>
                <span>Initial jewelry</span>
                <strong>{piercing.jewelry.initial.join(", ")}</strong>
              </div>
              <div>
                <span>Headphones</span>
                <strong>{piercing.selector.headphoneFriendly ? "Usually workable" : "May interfere"}</strong>
              </div>
            </div>
          </section>
          <SourceBox />
        </aside>
      </div>
    </main>
  );
}

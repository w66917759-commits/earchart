import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export type SeoPath = `/${string}`;

export type Faq = {
  question: string;
  answer: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: SeoPath;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  section?: string;
};

type ListItemInput = {
  name: string;
  path: SeoPath;
  description?: string;
};

const defaultKeywords = [
  "ear piercing chart",
  "ear piercing pain chart",
  "ear piercing healing time",
  "ear piercing names",
  "types of ear piercings",
  "cartilage piercing guide",
  "lobe piercing guide",
];

export const defaultOgImage = {
  url: absoluteUrl("/opengraph-image/"),
  width: 1200,
  height: 630,
  alt: "Interactive ear piercing chart with placement points, pain, and healing guidance",
};

export function uniqueKeywords(keywords: string[] = []) {
  return Array.from(new Set([...defaultKeywords, ...keywords]));
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "article",
  publishedTime = "2026-06-22",
  section = "Ear piercing guide",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const tags = uniqueKeywords(keywords);
  const sharedOpenGraph = {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [defaultOgImage],
  };

  return {
    title,
    description,
    keywords: tags,
    alternates: {
      canonical: path,
    },
    openGraph:
      type === "website"
        ? {
            ...sharedOpenGraph,
            type: "website",
          }
        : {
            ...sharedOpenGraph,
            type: "article",
            publishedTime,
            modifiedTime: siteConfig.updated,
            authors: [siteConfig.name],
            section,
            tags,
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: SeoPath;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: absoluteUrl(path),
    description,
    dateModified: siteConfig.updated,
    inLanguage: "en-US",
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  keywords = [],
}: {
  headline: string;
  description: string;
  path: SeoPath;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    datePublished: "2026-06-22",
    dateModified: siteConfig.updated,
    mainEntityOfPage: absoluteUrl(path),
    keywords: uniqueKeywords(keywords).join(", "),
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: ListItemInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function itemListJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: SeoPath;
  items: ListItemInput[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      description: item.description,
    })),
  };
}

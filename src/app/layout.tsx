import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import {
  defaultOgImage,
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const rootMetadata = pageMetadata({
  title: "Ear Piercing Chart: Pain, Healing Time, Placement & Jewelry Guide",
  description: siteConfig.description,
  path: "/ear-piercing-chart/",
  type: "website",
  keywords: [
    "ear piercing placement chart",
    "interactive ear piercing chart",
    "ear piercing selector",
    "ear piercing aftercare",
  ],
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Ear Piercing Chart: Pain, Healing Time, Placement & Jewelry Guide",
    template: "%s | Ear Piercing Chart",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "body art education",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: rootMetadata.openGraph,
  twitter: {
    card: "summary_large_image",
    title: "Ear Piercing Chart: Pain, Healing Time & Placement Guide",
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

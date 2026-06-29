import type { Metadata } from "next";
import {
  chartPageDescription,
  chartPageTitle,
  EarPiercingChartPage,
} from "@/components/EarPiercingChartPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: chartPageTitle,
    description: chartPageDescription,
    path: "/",
    type: "website",
    keywords: [
      "interactive ear piercing chart",
      "ear piercing locations",
      "ear piercing placement guide",
      "ear piercing pain and healing chart",
    ],
  }),
  title: {
    absolute: chartPageTitle,
  },
};

export default function HomePage() {
  return <EarPiercingChartPage />;
}

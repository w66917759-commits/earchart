import { getPiercing, type Piercing } from "@/lib/piercings";

export type PiercingComparison = {
  slug: string;
  leftSlug: string;
  rightSlug: string;
  title: string;
  description: string;
  verdict: string;
  betterFor: string[];
  avoidIf: string[];
};

export const comparisons: PiercingComparison[] = [
  {
    slug: "helix-vs-tragus",
    leftSlug: "helix-piercing",
    rightSlug: "tragus-piercing",
    title: "Helix vs Tragus Piercing",
    description:
      "Compare helix and tragus piercings by placement, pain, healing time, jewelry, headphones, sleep impact, and anatomy fit.",
    verdict:
      "Choose a helix if you want visible outer-ear styling and can manage sleep pressure. Choose a tragus if you want a smaller front-ear detail and do not rely heavily on earbuds.",
    betterFor: [
      "Helix: outer-ear stacks, huggies after healing, visible cartilage styling.",
      "Tragus: tiny studs, subtle front-ear detail, people who do not wear earbuds often.",
    ],
    avoidIf: [
      "Helix may be difficult for side sleepers or over-ear headphone users.",
      "Tragus may be difficult for earbud users or very small tragus anatomy.",
    ],
  },
  {
    slug: "conch-vs-daith",
    leftSlug: "conch-piercing",
    rightSlug: "daith-piercing",
    title: "Conch vs Daith Piercing",
    description:
      "Compare conch and daith piercings by pain, healing, jewelry style, earbud impact, and anatomy requirements.",
    verdict:
      "Choose a conch for a central statement stud or future hoop. Choose a daith for an inner-ear ring if your daith fold is defined enough.",
    betterFor: [
      "Conch: statement studs, future hoop styling, central balance in a curated ear.",
      "Daith: inner ring styling, tucked placement, ears with a clear inner fold.",
    ],
    avoidIf: [
      "Conch may conflict with earbuds, over-ear headphones, and side sleep.",
      "Daith is not ideal without enough fold depth and can interfere with in-ear monitors.",
    ],
  },
  {
    slug: "rook-vs-daith",
    leftSlug: "rook-piercing",
    rightSlug: "daith-piercing",
    title: "Rook vs Daith Piercing",
    description:
      "Compare rook and daith piercings by cartilage fold, pain estimate, healing range, jewelry, and suitability.",
    verdict:
      "Choose a rook for a vertical inner-ridge accent. Choose a daith for a ring-forward look inside the ear canal fold.",
    betterFor: [
      "Rook: defined upper inner ridges and curved barbell styling.",
      "Daith: inner-ear rings and folds that can comfortably hold circular jewelry.",
    ],
    avoidIf: [
      "Rook may be difficult for flat rook anatomy or side sleepers.",
      "Daith is not ideal if earbuds or in-ear monitors are daily essentials.",
    ],
  },
  {
    slug: "helix-vs-forward-helix",
    leftSlug: "helix-piercing",
    rightSlug: "forward-helix-piercing",
    title: "Helix vs Forward Helix Piercing",
    description:
      "Compare helix and forward helix piercings by location, pain, jewelry size, glasses impact, and anatomy fit.",
    verdict:
      "Choose a helix for a flexible outer-rim placement. Choose a forward helix for a tiny front-rim accent if your fold is pronounced enough.",
    betterFor: [
      "Helix: versatile outer cartilage styling and future hoop options.",
      "Forward helix: tiny studs, small-ear accents, double or triple front-rim designs.",
    ],
    avoidIf: [
      "Helix may be irritated by sleep pressure and over-ear headphones.",
      "Forward helix may be irritated by glasses arms and requires a defined fold.",
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function getComparisonPiercings(comparison: PiercingComparison): [Piercing, Piercing] {
  const left = getPiercing(comparison.leftSlug);
  const right = getPiercing(comparison.rightSlug);
  if (!left || !right) {
    throw new Error(`Invalid comparison data for ${comparison.slug}`);
  }
  return [left, right];
}

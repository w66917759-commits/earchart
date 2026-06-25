export type PiercingCategory =
  | "lobe"
  | "outer-cartilage"
  | "inner-cartilage"
  | "multi-point";

export type LabelPosition = "left" | "right" | "top" | "bottom";

export type PainLabel = "Low" | "Moderate" | "High" | "Very High";

export type SleepImpact = "Low" | "Moderate" | "High";

export type Piercing = {
  slug: string;
  name: string;
  aliases: string[];
  category: PiercingCategory;
  anatomyArea: string;
  chart: {
    x: number;
    y: number;
    radius: number;
    labelPosition: LabelPosition;
    mobile?: {
      x?: number;
      y?: number;
    };
  };
  pain: {
    score: number;
    label: PainLabel;
    note: string;
  };
  healing: {
    minWeeks: number;
    maxWeeks: number;
    display: string;
    note: string;
  };
  jewelry: {
    initial: string[];
    healed: string[];
    avoidInitially: string[];
  };
  suitability: {
    bestFor: string[];
    notIdealFor: string[];
    anatomyNotes: string;
    lifestyleImpact: string[];
  };
  selector: {
    beginnerFriendly: boolean;
    smallEarFriendly: boolean;
    headphoneFriendly: boolean;
    sleepImpact: SleepImpact;
  };
  aftercare: {
    do: string[];
    avoid: string[];
  };
  risks: string[];
  related: string[];
  seo: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
  };
};

const sharedAftercare = {
  do: [
    "Wash hands before touching the area.",
    "Clean gently with sterile saline or as advised by your piercer.",
    "Let the jewelry stay still unless your piercer tells you otherwise.",
  ],
  avoid: [
    "Do not twist or rotate fresh jewelry.",
    "Avoid sleeping directly on the piercing while it is tender.",
    "Avoid alcohol, hydrogen peroxide, iodine, harsh soaps, and over-cleaning.",
  ],
};

export const piercings: Piercing[] = [
  {
    slug: "standard-lobe-piercing",
    name: "Standard Lobe Piercing",
    aliases: ["earlobe piercing", "lobe piercing", "first ear piercing"],
    category: "lobe",
    anatomyArea: "Soft lower earlobe tissue",
    chart: { x: 50, y: 85, radius: 8, labelPosition: "right", mobile: { y: 86 } },
    pain: {
      score: 2,
      label: "Low",
      note: "Usually one of the gentlest ear placements, but pain still depends on technique and personal tolerance.",
    },
    healing: {
      minWeeks: 6,
      maxWeeks: 8,
      display: "6-8 weeks",
      note: "Lobe piercings often heal faster than cartilage when jewelry quality and aftercare are good.",
    },
    jewelry: {
      initial: ["implant-grade flat back stud", "small straight labret"],
      healed: ["small hoop", "stud", "huggie", "threadless end"],
      avoidInitially: ["heavy hoops", "dangling earrings", "butterfly backs on swollen tissue"],
    },
    suitability: {
      bestFor: ["first piercing", "low-maintenance styling", "stacked ear foundations"],
      notIdealFor: ["people who need to remove jewelry often for sport or work"],
      anatomyNotes: "Works for most lobes, but spacing matters if you plan multiple lobe piercings.",
      lifestyleImpact: ["usually easy with headphones", "mild sleep impact after the first tenderness passes"],
    },
    selector: {
      beginnerFriendly: true,
      smallEarFriendly: true,
      headphoneFriendly: true,
      sleepImpact: "Low",
    },
    aftercare: sharedAftercare,
    risks: ["localized irritation", "swelling from tight jewelry", "infection if handled with unwashed hands"],
    related: ["upper-lobe-piercing", "stacked-lobe-piercing", "orbital-piercing"],
    seo: {
      title: "Standard Lobe Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Learn where a standard lobe piercing sits, how much it hurts, how long it takes to heal, and what jewelry works best.",
      h1: "Standard Lobe Piercing Guide",
      keywords: ["standard lobe piercing", "lobe piercing pain", "lobe piercing healing time"],
    },
  },
  {
    slug: "upper-lobe-piercing",
    name: "Upper Lobe Piercing",
    aliases: ["second lobe piercing", "high lobe piercing"],
    category: "lobe",
    anatomyArea: "Upper earlobe near the cartilage transition",
    chart: { x: 46, y: 78, radius: 7, labelPosition: "right", mobile: { y: 76 } },
    pain: {
      score: 3,
      label: "Low",
      note: "A little sharper than a low lobe for some people because it may sit closer to firmer tissue.",
    },
    healing: {
      minWeeks: 8,
      maxWeeks: 12,
      display: "8-12 weeks",
      note: "Upper lobes can need more time than a standard lobe if the placement is close to cartilage.",
    },
    jewelry: {
      initial: ["flat back labret stud", "small implant-grade stud"],
      healed: ["tiny hoop", "stud stack", "huggie"],
      avoidInitially: ["large hoops", "ear cuffs pressing on the area"],
    },
    suitability: {
      bestFor: ["balanced lobe stacks", "small studs", "low-pain additions"],
      notIdealFor: ["very small lobes without enough spacing"],
      anatomyNotes: "A piercer should map spacing against your first lobe and any future stacked plan.",
      lifestyleImpact: ["usually headphone-friendly", "can be irritated by tight helmets"],
    },
    selector: {
      beginnerFriendly: true,
      smallEarFriendly: true,
      headphoneFriendly: true,
      sleepImpact: "Low",
    },
    aftercare: sharedAftercare,
    risks: ["migration if placed too close to an edge", "irritation from tight backs"],
    related: ["standard-lobe-piercing", "stacked-lobe-piercing", "helix-piercing"],
    seo: {
      title: "Upper Lobe Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Compare upper lobe piercing pain, healing time, jewelry options, and anatomy fit before adding a second or high lobe.",
      h1: "Upper Lobe Piercing Guide",
      keywords: ["upper lobe piercing", "second lobe piercing", "upper lobe healing time"],
    },
  },
  {
    slug: "stacked-lobe-piercing",
    name: "Stacked Lobe Piercing",
    aliases: ["vertical lobe stack", "multiple lobe piercing"],
    category: "lobe",
    anatomyArea: "Curated multiple points through the earlobe",
    chart: { x: 40, y: 82, radius: 7, labelPosition: "left" },
    pain: {
      score: 3,
      label: "Low",
      note: "Each point is usually low pain, but multiple piercings in one visit can make the ear feel more tender.",
    },
    healing: {
      minWeeks: 8,
      maxWeeks: 16,
      display: "8-16 weeks",
      note: "Healing depends on how many points are added and how much swelling room the jewelry allows.",
    },
    jewelry: {
      initial: ["small flat back studs", "threadless studs"],
      healed: ["mixed studs", "tiny hoops", "chain accents"],
      avoidInitially: ["connected chains", "large decorative ends", "heavy earrings"],
    },
    suitability: {
      bestFor: ["curated lobe styling", "asymmetrical ear designs", "using limited lobe space creatively"],
      notIdealFor: ["lobes with very limited tissue", "people who want large earrings during healing"],
      anatomyNotes: "Spacing and angle matter more than the exact number of piercings.",
      lifestyleImpact: ["usually manageable with earbuds", "can snag on hair if jewelry is oversized"],
    },
    selector: {
      beginnerFriendly: true,
      smallEarFriendly: true,
      headphoneFriendly: true,
      sleepImpact: "Low",
    },
    aftercare: sharedAftercare,
    risks: ["overcrowding", "swelling between nearby piercings", "snagging"],
    related: ["standard-lobe-piercing", "upper-lobe-piercing", "orbital-piercing"],
    seo: {
      title: "Stacked Lobe Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Plan a stacked lobe piercing layout with pain, healing, spacing, jewelry, and anatomy considerations.",
      h1: "Stacked Lobe Piercing Guide",
      keywords: ["stacked lobe piercing", "vertical lobe piercing", "multiple lobe piercings"],
    },
  },
  {
    slug: "helix-piercing",
    name: "Helix Piercing",
    aliases: ["cartilage piercing", "upper ear piercing"],
    category: "outer-cartilage",
    anatomyArea: "Outer upper ear cartilage",
    chart: { x: 72, y: 19, radius: 8, labelPosition: "right" },
    pain: {
      score: 5,
      label: "Moderate",
      note: "Cartilage areas often feel sharper than lobe piercings, but pain varies by person.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "Cartilage piercings usually take longer to heal than lobe piercings.",
    },
    jewelry: {
      initial: ["flat back labret stud"],
      healed: ["small hoop", "flat back stud", "huggie"],
      avoidInitially: ["heavy hoops", "dangling jewelry"],
    },
    suitability: {
      bestFor: ["minimal cartilage look", "stacked ear styling", "visible outer-ear jewelry"],
      notIdealFor: ["people who sleep on that side during healing"],
      anatomyNotes: "Works for many ears, but placement should follow the outer cartilage curve.",
      lifestyleImpact: ["may catch on hair", "may be irritated by over-ear headphones"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: true,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["irritation bump", "prolonged tenderness", "cartilage infection risk"],
    related: ["forward-helix-piercing", "flat-piercing", "conch-piercing"],
    seo: {
      title: "Helix Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Learn where a helix piercing sits, how much it hurts, how long it takes to heal, and what jewelry works best.",
      h1: "Helix Piercing Guide",
      keywords: ["helix piercing", "helix piercing pain", "helix piercing healing time"],
    },
  },
  {
    slug: "forward-helix-piercing",
    name: "Forward Helix Piercing",
    aliases: ["front helix piercing", "anti-helix top piercing"],
    category: "outer-cartilage",
    anatomyArea: "Front upper cartilage fold near the face",
    chart: { x: 39, y: 23, radius: 7, labelPosition: "left" },
    pain: {
      score: 5,
      label: "Moderate",
      note: "The area is small and firm, so pressure can feel sharp even when the piercing is quick.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "Swelling space and jewelry angle are important because the fold is compact.",
    },
    jewelry: {
      initial: ["small flat back labret stud"],
      healed: ["tiny stud", "curated cluster", "small ring if anatomy allows"],
      avoidInitially: ["rings with movement", "large decorative tops"],
    },
    suitability: {
      bestFor: ["tiny cartilage accents", "double or triple forward helix styling", "small ear styling"],
      notIdealFor: ["ears without a defined forward helix fold"],
      anatomyNotes: "Requires enough fold depth for stable jewelry and comfortable backing.",
      lifestyleImpact: ["can be bumped by glasses arms", "usually better with earbuds than over-ear headphones"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: true,
      headphoneFriendly: true,
      sleepImpact: "Moderate",
    },
    aftercare: sharedAftercare,
    risks: ["pressure irritation", "angle-related migration", "snagging on hair or glasses"],
    related: ["helix-piercing", "rook-piercing", "flat-piercing"],
    seo: {
      title: "Forward Helix Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "See forward helix placement, pain level, healing time, anatomy requirements, and jewelry options.",
      h1: "Forward Helix Piercing Guide",
      keywords: ["forward helix piercing", "front helix piercing", "forward helix pain"],
    },
  },
  {
    slug: "flat-piercing",
    name: "Flat Piercing",
    aliases: ["flat cartilage piercing", "scapha piercing"],
    category: "outer-cartilage",
    anatomyArea: "Flat upper cartilage area inside the helix rim",
    chart: { x: 67, y: 35, radius: 8, labelPosition: "top" },
    pain: {
      score: 5,
      label: "Moderate",
      note: "Usually comparable to a helix, with tenderness affected by jewelry size and pressure.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "The area can be slow to settle if decorative ends catch on hair or sleep pressure.",
    },
    jewelry: {
      initial: ["flat back labret stud", "low-profile threadless stud"],
      healed: ["decorative stud", "cluster stud", "flat back jewelry"],
      avoidInitially: ["hoops", "oversized tops", "jewelry with sharp edges"],
    },
    suitability: {
      bestFor: ["statement studs", "minimal flat-back jewelry", "balanced cartilage layouts"],
      notIdealFor: ["ears with a very shallow flat area"],
      anatomyNotes: "A broad, stable flat area gives the jewelry enough support.",
      lifestyleImpact: ["can be pressed by over-ear headphones", "can catch on hair"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["pressure bumps", "snagging", "prolonged swelling"],
    related: ["helix-piercing", "conch-piercing", "rook-piercing"],
    seo: {
      title: "Flat Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Learn flat piercing placement, pain, healing time, jewelry options, and ear anatomy considerations.",
      h1: "Flat Piercing Guide",
      keywords: ["flat piercing", "flat cartilage piercing", "flat piercing healing time"],
    },
  },
  {
    slug: "conch-piercing",
    name: "Conch Piercing",
    aliases: ["inner conch piercing", "outer conch piercing"],
    category: "inner-cartilage",
    anatomyArea: "Central bowl-shaped cartilage of the ear",
    chart: { x: 61, y: 55, radius: 9, labelPosition: "right", mobile: { x: 64 } },
    pain: {
      score: 6,
      label: "Moderate",
      note: "The cartilage is thicker than many outer-ear placements, so pressure can feel stronger.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "Conch piercings often need patient healing because the area is exposed to sleep and headphone pressure.",
    },
    jewelry: {
      initial: ["flat back labret stud", "straight barbell if anatomy requires"],
      healed: ["conch hoop", "large decorative stud", "flat back stud"],
      avoidInitially: ["large hoops", "tight rings", "heavy jewelry"],
    },
    suitability: {
      bestFor: ["bold central-ear styling", "future statement hoops", "balanced curated ears"],
      notIdealFor: ["frequent side sleepers", "heavy over-ear headphone users"],
      anatomyNotes: "A piercer should check bowl depth and angle before planning a hoop look.",
      lifestyleImpact: ["can conflict with earbuds or over-ear headphones", "high sleep-pressure risk"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["pressure irritation", "thick-cartilage tenderness", "infection risk if irritated"],
    related: ["daith-piercing", "flat-piercing", "helix-piercing"],
    seo: {
      title: "Conch Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Compare conch piercing pain, healing time, jewelry options, anatomy fit, and headphone impact.",
      h1: "Conch Piercing Guide",
      keywords: ["conch piercing", "conch piercing pain", "conch piercing healing time"],
    },
  },
  {
    slug: "tragus-piercing",
    name: "Tragus Piercing",
    aliases: ["ear tragus piercing", "front ear cartilage piercing"],
    category: "inner-cartilage",
    anatomyArea: "Small cartilage flap in front of the ear canal",
    chart: { x: 34, y: 53, radius: 7, labelPosition: "left" },
    pain: {
      score: 5,
      label: "Moderate",
      note: "The tragus is firm cartilage; the sensation is often pressure-heavy rather than long-lasting.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "Earbuds and phone use can slow healing if they press on the jewelry.",
    },
    jewelry: {
      initial: ["flat back labret stud"],
      healed: ["tiny hoop", "flat back stud", "decorative stud"],
      avoidInitially: ["rings that move", "bulky tops", "earbud pressure"],
    },
    suitability: {
      bestFor: ["subtle front-ear detail", "small jewelry", "defined tragus anatomy"],
      notIdealFor: ["heavy earbud users", "very small or shallow tragus anatomy"],
      anatomyNotes: "Needs enough tragus thickness and projection for stable jewelry.",
      lifestyleImpact: ["often conflicts with earbuds", "can be bumped by phones"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "Moderate",
    },
    aftercare: sharedAftercare,
    risks: ["earbud irritation", "pressure bumps", "prolonged tenderness"],
    related: ["anti-tragus-piercing", "daith-piercing", "conch-piercing"],
    seo: {
      title: "Tragus Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Learn tragus piercing placement, pain level, healing time, jewelry choices, and headphone impact.",
      h1: "Tragus Piercing Guide",
      keywords: ["tragus piercing", "tragus piercing pain", "tragus piercing healing time"],
    },
  },
  {
    slug: "anti-tragus-piercing",
    name: "Anti-Tragus Piercing",
    aliases: ["antitragus piercing", "lower inner cartilage piercing"],
    category: "inner-cartilage",
    anatomyArea: "Raised cartilage ridge above the upper lobe opposite the tragus",
    chart: { x: 48, y: 70, radius: 7, labelPosition: "left" },
    pain: {
      score: 6,
      label: "Moderate",
      note: "This small cartilage ridge can feel intense because it is firm and close to moving jaw/ear tissue.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "Healing can be stubborn if the ridge is shallow or jewelry is pressured by sleep.",
    },
    jewelry: {
      initial: ["curved barbell", "small flat back stud if anatomy allows"],
      healed: ["small hoop", "curved barbell", "decorative end"],
      avoidInitially: ["tight hoops", "large ends", "jewelry that presses into the lobe"],
    },
    suitability: {
      bestFor: ["distinct lower-cartilage styling", "ears with a defined anti-tragus ridge"],
      notIdealFor: ["flat anti-tragus anatomy", "people who wear tight earbuds"],
      anatomyNotes: "A pronounced ridge is important; shallow anatomy may reject or irritate more easily.",
      lifestyleImpact: ["can interfere with earbuds", "can be irritated by jaw-area movement"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["migration", "pressure irritation", "swelling in a compact area"],
    related: ["tragus-piercing", "snug-piercing", "standard-lobe-piercing"],
    seo: {
      title: "Anti-Tragus Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Understand anti-tragus piercing pain, healing, anatomy suitability, jewelry options, and lifestyle impact.",
      h1: "Anti-Tragus Piercing Guide",
      keywords: ["anti tragus piercing", "anti-tragus pain", "anti-tragus healing time"],
    },
  },
  {
    slug: "daith-piercing",
    name: "Daith Piercing",
    aliases: ["inner fold piercing", "daith ear piercing"],
    category: "inner-cartilage",
    anatomyArea: "Inner cartilage fold above the ear canal",
    chart: { x: 50, y: 50, radius: 8, labelPosition: "left", mobile: { x: 48 } },
    pain: {
      score: 6,
      label: "Moderate",
      note: "Daith piercings can feel like strong pressure because the fold is thick and tucked inside the ear.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "The tucked placement can be protected from some snags, but it still heals like cartilage.",
    },
    jewelry: {
      initial: ["captive bead ring", "circular barbell", "hinged ring selected by a piercer"],
      healed: ["decorative ring", "clicker", "circular barbell"],
      avoidInitially: ["seam rings that rotate through the channel", "oversized decorative rings"],
    },
    suitability: {
      bestFor: ["inner-ear focal jewelry", "defined daith folds", "ring-forward styling"],
      notIdealFor: ["ears without enough daith fold", "people who need in-ear monitors"],
      anatomyNotes: "Requires a clear fold with enough depth; not every ear has suitable daith anatomy.",
      lifestyleImpact: ["may interfere with earbuds", "less exposed to hair snags than outer cartilage"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "Moderate",
    },
    aftercare: sharedAftercare,
    risks: ["moisture buildup", "hard-to-see irritation", "cartilage infection risk"],
    related: ["rook-piercing", "conch-piercing", "tragus-piercing"],
    seo: {
      title: "Daith Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "See daith piercing placement, pain, healing time, jewelry choices, anatomy fit, and aftercare notes.",
      h1: "Daith Piercing Guide",
      keywords: ["daith piercing", "daith piercing pain", "daith piercing healing time"],
    },
  },
  {
    slug: "rook-piercing",
    name: "Rook Piercing",
    aliases: ["antihelix piercing", "rook cartilage piercing"],
    category: "inner-cartilage",
    anatomyArea: "Upper inner ridge of cartilage above the daith",
    chart: { x: 49, y: 39, radius: 7, labelPosition: "right" },
    pain: {
      score: 7,
      label: "High",
      note: "The rook is a thicker cartilage fold, so many people rate it higher than a helix.",
    },
    healing: {
      minWeeks: 24,
      maxWeeks: 52,
      display: "6-12 months",
      note: "The fold can swell and stay tender if jewelry is tight or the ear is slept on.",
    },
    jewelry: {
      initial: ["curved barbell"],
      healed: ["curved barbell", "small hoop", "decorative curved barbell"],
      avoidInitially: ["straight bars", "tight hoops", "large charms"],
    },
    suitability: {
      bestFor: ["defined inner ridges", "vertical inner-ear accents", "curated cartilage looks"],
      notIdealFor: ["flat rook anatomy", "frequent side sleepers"],
      anatomyNotes: "A piercer must check ridge prominence, depth, and room for swelling.",
      lifestyleImpact: ["usually avoids earbuds", "can be affected by over-ear headphones and sleep pressure"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: true,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["swelling in the fold", "pressure bumps", "long tenderness"],
    related: ["daith-piercing", "flat-piercing", "snug-piercing"],
    seo: {
      title: "Rook Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Compare rook piercing pain, healing time, jewelry, anatomy fit, and aftercare before choosing this cartilage piercing.",
      h1: "Rook Piercing Guide",
      keywords: ["rook piercing", "rook piercing pain", "rook piercing healing time"],
    },
  },
  {
    slug: "snug-piercing",
    name: "Snug Piercing",
    aliases: ["anti-helix piercing", "snug ear piercing"],
    category: "inner-cartilage",
    anatomyArea: "Horizontal pass through the anti-helix ridge",
    chart: { x: 48, y: 60, radius: 7, labelPosition: "left" },
    pain: {
      score: 7,
      label: "High",
      note: "Snug piercings pass through a pronounced cartilage ridge and are often rated as more intense.",
    },
    healing: {
      minWeeks: 36,
      maxWeeks: 52,
      display: "9-12 months",
      note: "This placement can be slower and more anatomy-dependent than simpler cartilage piercings.",
    },
    jewelry: {
      initial: ["curved barbell"],
      healed: ["curved barbell", "small decorative ends"],
      avoidInitially: ["rings", "tight bars", "large ends"],
    },
    suitability: {
      bestFor: ["prominent anti-helix ridges", "experienced cartilage collectors"],
      notIdealFor: ["flat ridges", "first cartilage piercing", "side sleepers"],
      anatomyNotes: "Needs a strong ridge and correct angle; some ears are better suited to a faux snug.",
      lifestyleImpact: ["high sleep-pressure impact", "can be sensitive to headphones"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["migration", "persistent irritation", "hard healing"],
    related: ["rook-piercing", "anti-tragus-piercing", "conch-piercing"],
    seo: {
      title: "Snug Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Learn snug piercing pain, healing time, jewelry, anatomy suitability, and what to avoid during healing.",
      h1: "Snug Piercing Guide",
      keywords: ["snug piercing", "snug piercing pain", "snug piercing healing time"],
    },
  },
  {
    slug: "industrial-piercing",
    name: "Industrial Piercing",
    aliases: ["scaffold piercing", "industrial bar piercing"],
    category: "multi-point",
    anatomyArea: "Two connected upper-ear cartilage piercings joined by a barbell",
    chart: { x: 57, y: 15, radius: 9, labelPosition: "right" },
    pain: {
      score: 7,
      label: "High",
      note: "An industrial is usually two cartilage piercings in one project, so total tenderness can be higher.",
    },
    healing: {
      minWeeks: 36,
      maxWeeks: 52,
      display: "9-12 months",
      note: "Both holes must align and heal without bar pressure, so anatomy and jewelry fit are critical.",
    },
    jewelry: {
      initial: ["implant-grade straight industrial barbell"],
      healed: ["straight barbell", "custom industrial jewelry"],
      avoidInitially: ["separate hoops unless planned by piercer", "bars that press into the flat", "heavy decorative bars"],
    },
    suitability: {
      bestFor: ["defined upper and forward helix rims", "bold connected cartilage styling"],
      notIdealFor: ["ears without enough ridge alignment", "people who sleep on that side", "heavy headphone users"],
      anatomyNotes: "Not every ear can support a straight bar without pressure; a chain industrial may be safer for some anatomy.",
      lifestyleImpact: ["high hair and headphone snag risk", "high sleep impact"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: false,
      headphoneFriendly: false,
      sleepImpact: "High",
    },
    aftercare: sharedAftercare,
    risks: ["bar pressure", "alignment irritation", "two-site swelling"],
    related: ["helix-piercing", "forward-helix-piercing", "flat-piercing"],
    seo: {
      title: "Industrial Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Understand industrial piercing anatomy, pain, healing time, jewelry fit, and pressure risks before choosing a bar.",
      h1: "Industrial Piercing Guide",
      keywords: ["industrial piercing", "industrial piercing pain", "industrial piercing healing time"],
    },
  },
  {
    slug: "orbital-piercing",
    name: "Orbital Piercing",
    aliases: ["two-hole ring piercing", "orbital ear piercing"],
    category: "multi-point",
    anatomyArea: "Two nearby piercings connected by one ring, often in the lobe or cartilage",
    chart: { x: 62, y: 68, radius: 8, labelPosition: "right" },
    pain: {
      score: 5,
      label: "Moderate",
      note: "Pain depends on whether the orbital is placed through lobe tissue or cartilage and whether both points are fresh.",
    },
    healing: {
      minWeeks: 12,
      maxWeeks: 36,
      display: "3-9 months",
      note: "A lobe orbital may settle faster than a cartilage orbital, but connected jewelry needs careful fit.",
    },
    jewelry: {
      initial: ["two flat back studs before ring conversion", "ring only if a piercer confirms it is suitable"],
      healed: ["single ring through two holes", "small captive bead ring", "decorative hoop"],
      avoidInitially: ["tight rings", "heavy hoops", "jewelry that pulls the two holes together"],
    },
    suitability: {
      bestFor: ["connected jewelry looks", "lobe styling", "planned symmetry"],
      notIdealFor: ["areas without enough spacing", "people who want quick jewelry changes"],
      anatomyNotes: "The two holes must be spaced for the future ring diameter without tension.",
      lifestyleImpact: ["can catch on hair", "sleep impact depends on placement"],
    },
    selector: {
      beginnerFriendly: false,
      smallEarFriendly: true,
      headphoneFriendly: true,
      sleepImpact: "Moderate",
    },
    aftercare: sharedAftercare,
    risks: ["tension between holes", "ring movement irritation", "uneven healing"],
    related: ["standard-lobe-piercing", "stacked-lobe-piercing", "conch-piercing"],
    seo: {
      title: "Orbital Piercing: Pain, Healing Time, Jewelry & Placement",
      description:
        "Plan an orbital piercing with placement, pain, healing time, ring fit, anatomy, and aftercare considerations.",
      h1: "Orbital Piercing Guide",
      keywords: ["orbital piercing", "orbital ear piercing", "orbital piercing healing time"],
    },
  },
];

export const piercingBySlug = new Map(piercings.map((piercing) => [piercing.slug, piercing]));

export const categoryLabels: Record<PiercingCategory, string> = {
  lobe: "Lobe",
  "outer-cartilage": "Outer cartilage",
  "inner-cartilage": "Inner cartilage",
  "multi-point": "Multi-point",
};

export function getPiercing(slug: string) {
  return piercingBySlug.get(slug);
}

export function getRelatedPiercings(piercing: Piercing) {
  return piercing.related
    .map((slug) => piercingBySlug.get(slug))
    .filter((item): item is Piercing => Boolean(item));
}

export function getHealingGroup(piercing: Piercing) {
  if (piercing.healing.maxWeeks <= 12) return "Fastest";
  if (piercing.healing.maxWeeks <= 24) return "Moderate";
  return "Long";
}

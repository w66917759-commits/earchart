"use client";

import { ArrowRight, Clock3, Gem, HeartPulse } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import { baseEarImage, getPiercingImagePath } from "@/lib/piercing-images";
import { piercings, type Piercing } from "@/lib/piercings";

type FilterId = "popular" | "lobe" | "outer-cartilage" | "inner-cartilage" | "advanced";

const POPULAR_SLUGS = new Set([
  "standard-lobe-piercing",
  "upper-lobe-piercing",
  "helix-piercing",
  "forward-helix-piercing",
  "flat-piercing",
  "conch-piercing",
  "tragus-piercing",
  "daith-piercing",
  "rook-piercing",
]);

const ADVANCED_SLUGS = new Set([
  "anti-tragus-piercing",
  "snug-piercing",
  "industrial-piercing",
  "orbital-piercing",
]);

const FILTERS: { id: FilterId; label: string; matches: (piercing: Piercing) => boolean }[] = [
  { id: "popular", label: "Popular", matches: (piercing) => POPULAR_SLUGS.has(piercing.slug) },
  { id: "lobe", label: "Lobe", matches: (piercing) => piercing.category === "lobe" },
  {
    id: "outer-cartilage",
    label: "Outer Cartilage",
    matches: (piercing) => piercing.category === "outer-cartilage",
  },
  {
    id: "inner-cartilage",
    label: "Inner Cartilage",
    matches: (piercing) => piercing.category === "inner-cartilage",
  },
  { id: "advanced", label: "Advanced", matches: (piercing) => ADVANCED_SLUGS.has(piercing.slug) },
];

const POPULAR_PLACEMENT_SLUGS = [
  "standard-lobe-piercing",
  "upper-lobe-piercing",
  "helix-piercing",
  "forward-helix-piercing",
  "tragus-piercing",
  "conch-piercing",
  "daith-piercing",
  "rook-piercing",
] as const;

const QUICK_EXPLORE_ITEMS = [
  { label: "Lobe", slug: "standard-lobe-piercing" },
  { label: "Helix", slug: "helix-piercing" },
  { label: "Forward Helix", slug: "forward-helix-piercing" },
  { label: "Tragus", slug: "tragus-piercing" },
  { label: "Conch", slug: "conch-piercing" },
  { label: "Daith", slug: "daith-piercing" },
  { label: "Rook", slug: "rook-piercing" },
] as const;

function filteredPiercings(filterId: FilterId) {
  const filter = FILTERS.find((item) => item.id === filterId) ?? FILTERS[0];
  return piercings.filter(filter.matches);
}

function filterIdForPiercing(piercing: Piercing): FilterId {
  if (POPULAR_SLUGS.has(piercing.slug)) {
    return "popular";
  }

  if (ADVANCED_SLUGS.has(piercing.slug)) {
    return "advanced";
  }

  if (piercing.category === "outer-cartilage") {
    return "outer-cartilage";
  }

  if (piercing.category === "inner-cartilage") {
    return "inner-cartilage";
  }

  return "lobe";
}

function shortJewelryName(name: string): string {
  return name
    .replace("implant-grade ", "")
    .replace("small ", "")
    .replace("low-profile ", "")
    .replace("flat back labret stud", "flat back stud");
}

function shortPlacementName(name: string): string {
  return name.replace(" Piercing", "");
}

export function EarPiercingExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("popular");
  const [selectedSlug, setSelectedSlug] = useState("helix-piercing");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [showLabels, setShowLabels] = useState(false);
  const [compareMode, setCompareMode] = useState(false);

  const visiblePiercings = filteredPiercings(activeFilter);
  const visibleSlugs = new Set(visiblePiercings.map((piercing) => piercing.slug));
  const selected =
    visiblePiercings.find((piercing) => piercing.slug === selectedSlug) ??
    visiblePiercings[0] ??
    piercings[0];
  const hovered = hoveredSlug ? piercings.find((piercing) => piercing.slug === hoveredSlug) : null;
  const selectedName = shortPlacementName(selected.name);
  const initialJewelry = shortJewelryName(selected.jewelry.initial[0]);
  const selectedImage = getPiercingImagePath(selected);
  const comparePiercing = compareMode && hovered && hovered.slug !== selected.slug ? hovered : null;
  const popularPlacements = POPULAR_PLACEMENT_SLUGS.map((slug) =>
    piercings.find((piercing) => piercing.slug === slug),
  ).filter((piercing): piercing is Piercing => Boolean(piercing));

  function handleFilterChange(filterId: FilterId) {
    const nextPiercings = filteredPiercings(filterId);
    setActiveFilter(filterId);
    setHoveredSlug(null);

    if (!nextPiercings.some((piercing) => piercing.slug === selectedSlug)) {
      setSelectedSlug(nextPiercings[0]?.slug ?? selectedSlug);
    }
  }

  function handlePiercingSelect(slug: string, preferredFilter?: FilterId) {
    const piercing = piercings.find((item) => item.slug === slug);

    if (!piercing) {
      return;
    }

    setActiveFilter(preferredFilter ?? (visibleSlugs.has(slug) ? activeFilter : filterIdForPiercing(piercing)));
    setSelectedSlug(slug);
    setHoveredSlug(null);
  }

  return (
    <section id="ear-chart-workspace" className="tool-workspace compact-workspace" aria-label="Ear piercing selector">
      <div
        className="chart-stage minimal-chart-stage"
        data-show-labels={showLabels}
        data-compare-mode={compareMode}
      >
        <div className="chart-status-row">
          <span>Interactive placement map</span>
          <span>{piercings.length} placements · Pain · Healing · Jewelry</span>
        </div>

        <div className="chart-tool-grid">
          <section className="chart-explore-panel" aria-label="Explore piercings">
            <div className="explore-panel-heading">
              <span>Explore</span>
              <strong>Find a placement</strong>
            </div>

            <div className="explore-panel-section">
              <span className="explore-section-label">Area</span>
              <div className="filter-segments">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={activeFilter === filter.id ? "is-active" : ""}
                    aria-pressed={activeFilter === filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                  >
                    <span>{filter.label}</span>
                    <small>{filteredPiercings(filter.id).length}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="explore-panel-section">
              <span className="explore-section-label">Popular placements</span>
              <div className="popular-placement-list">
                {popularPlacements.map((piercing) => (
                  <button
                    key={piercing.slug}
                    type="button"
                    className={selected.slug === piercing.slug ? "is-active" : ""}
                    aria-pressed={selected.slug === piercing.slug}
                    onClick={() => handlePiercingSelect(piercing.slug, "popular")}
                    onMouseEnter={() => setHoveredSlug(piercing.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    onFocus={() => setHoveredSlug(piercing.slug)}
                    onBlur={() => setHoveredSlug(null)}
                  >
                    <span>{shortPlacementName(piercing.name)}</span>
                    <small>{piercing.pain.score}/10 pain</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="explore-panel-section">
              <span className="explore-section-label">Options</span>
              <div className="explore-toggle-list">
                <label className="explore-toggle">
                  <input
                    type="checkbox"
                    checked={showLabels}
                    onChange={(event) => setShowLabels(event.target.checked)}
                  />
                  <span aria-hidden="true" />
                  <strong>Show labels</strong>
                </label>
                <label className="explore-toggle">
                  <input
                    type="checkbox"
                    checked={compareMode}
                    onChange={(event) => setCompareMode(event.target.checked)}
                  />
                  <span aria-hidden="true" />
                  <strong>Compare mode</strong>
                </label>
              </div>
            </div>
          </section>

          <div className="ear-canvas">
            <div
              className="ear-figure"
              style={
                {
                  "--selected-x": `${selected.chart.x}%`,
                  "--selected-y": `${selected.chart.y}%`,
                } as CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- local product reference image */}
              <img className="ear-photo" src={baseEarImage} alt="" aria-hidden="true" />
              <span className="selection-connector" aria-hidden="true" />
              <div className="hotspot-layer">
                {piercings.map((piercing) => {
                  const isVisible = visibleSlugs.has(piercing.slug);
                  const isSelected = selected.slug === piercing.slug;
                  const isHovered = hoveredSlug === piercing.slug;
                  const isMuted = isVisible && Boolean(hoveredSlug) && !isSelected && !isHovered;

                  return (
                    <button
                      key={piercing.slug}
                      type="button"
                      className="hotspot"
                      data-slug={piercing.slug}
                      data-visible={isVisible}
                      data-active={isSelected || isHovered}
                      data-selected={isSelected}
                      data-muted={isMuted}
                      data-label={piercing.chart.labelPosition}
	                      style={
	                        {
	                          "--x": `${piercing.chart.x}%`,
	                          "--y": `${piercing.chart.y}%`,
	                          "--mobile-x": `${piercing.chart.mobile?.x ?? piercing.chart.x}%`,
	                          "--mobile-y": `${piercing.chart.mobile?.y ?? piercing.chart.y}%`,
	                        } as CSSProperties
	                      }
                      disabled={!isVisible}
                      tabIndex={isVisible ? 0 : -1}
                      aria-hidden={!isVisible}
                      aria-pressed={isSelected}
                      aria-label={`${piercing.name}, pain ${piercing.pain.score} out of 10, healing ${piercing.healing.display}`}
                      onClick={() => handlePiercingSelect(piercing.slug)}
                      onMouseEnter={() => setHoveredSlug(piercing.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      onFocus={() => setHoveredSlug(piercing.slug)}
                      onBlur={() => setHoveredSlug(null)}
                    >
                      <span className="hotspot-dot" />
                      <span className="hotspot-label">{shortPlacementName(piercing.name)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="chart-hint" data-dimmed={Boolean(hoveredSlug)}>
              <span className="hint-dot" aria-hidden="true" />
              Tap a gold point
            </p>
          </div>

          <aside className="ear-readout compact-readout selected-detail-card" aria-live="polite">
            <div className="placement-preview">
              {/* eslint-disable-next-line @next/next/no-img-element -- user-provided local generated reference */}
              <img
                className="placement-preview-image"
                src={selectedImage}
                alt={`${selected.name} jewelry reference`}
                onError={(event) => {
                  if (event.currentTarget.getAttribute("src") !== baseEarImage) {
                    event.currentTarget.src = baseEarImage;
                  }
                }}
              />
            </div>
            <div className="ear-readout-name">
              <span>Selected</span>
              <strong>{selectedName}</strong>
              <small>{selected.anatomyArea}</small>
            </div>
            <div className="ear-readout-stats">
              <div className="stat is-pain">
                <HeartPulse aria-hidden="true" size={16} />
                <span>Pain</span>
                <strong>{selected.pain.score}/10</strong>
                <small>{selected.pain.label}</small>
              </div>
              <div className="stat is-heal">
                <Clock3 aria-hidden="true" size={16} />
                <span>Healing</span>
                <strong>{selected.healing.display}</strong>
              </div>
              <div className="stat is-jewel">
                <Gem aria-hidden="true" size={16} />
                <span>Jewelry</span>
                <strong>{initialJewelry}</strong>
              </div>
            </div>
            {compareMode ? (
              <div className="compare-preview" data-active={Boolean(comparePiercing)}>
                <span>Compare</span>
                <strong>
                  {comparePiercing
                    ? `${selectedName} vs ${shortPlacementName(comparePiercing.name)}`
                    : "Hover another point"}
                </strong>
              </div>
            ) : null}
            <a className="readout-guide-button" href={`/ear-piercings/${selected.slug}/`}>
              Guide
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </aside>
        </div>

        <div className="quick-explore-bar" aria-label="Quick explore popular placements">
          <span>Popular</span>
          <div>
            {QUICK_EXPLORE_ITEMS.map((item) => (
              <button
                key={item.slug}
                type="button"
                className={selected.slug === item.slug ? "is-active" : ""}
                aria-pressed={selected.slug === item.slug}
                onClick={() => handlePiercingSelect(item.slug, "popular")}
                onMouseEnter={() => setHoveredSlug(item.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onFocus={() => setHoveredSlug(item.slug)}
                onBlur={() => setHoveredSlug(null)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="compact-disclaimer">
        Estimates only. Ask a professional piercer for anatomy and health guidance.
      </p>
    </section>
  );
}

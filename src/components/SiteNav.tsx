import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <Link className="site-wordmark" href="/">
        Ear Piercing Chart
      </Link>
      <div className="top-nav-actions">
        <Link className="top-nav-guides" href="/#explore-guides">
          Guides
        </Link>
        <Link className="top-nav-start" href="/#ear-chart-workspace">
          Start Exploring
        </Link>
      </div>
    </nav>
  );
}

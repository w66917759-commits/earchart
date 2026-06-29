import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="simple-page">
      <Link className="site-wordmark" href="/">
        Ear Piercing Chart
      </Link>
      <section className="guide-hero compact">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The interactive chart and current guides are available from the main tool.</p>
        <Link className="primary-button" href="/">
          Open the chart
        </Link>
      </section>
    </main>
  );
}

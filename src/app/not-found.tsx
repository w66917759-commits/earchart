import type { Metadata } from "next";

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
      <a className="site-wordmark" href="/ear-piercing-chart/">
        Ear Piercing Chart
      </a>
      <section className="guide-hero compact">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The interactive chart and current guides are available from the main tool.</p>
        <a className="primary-button" href="/ear-piercing-chart/">
          Open the chart
        </a>
      </section>
    </main>
  );
}

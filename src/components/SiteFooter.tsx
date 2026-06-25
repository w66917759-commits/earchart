import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "About Me", href: "/about-me/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a className="site-wordmark" href="/ear-piercing-chart/">
            {siteConfig.name}
          </a>
          <p>
            Independent ear piercing placement, pain, healing, jewelry, and aftercare
            reference. Educational only, not medical advice.
          </p>
        </div>

        <nav className="site-footer-links" aria-label="Footer legal navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

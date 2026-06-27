import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.earpiercingchart.wiki" }],
        destination: "https://earpiercingchart.wiki/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

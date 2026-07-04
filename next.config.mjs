/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ks.acuvera.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Canonical host/protocol: force https + www.kasaskenya.com (per current sitemap)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://www.kasaskenya.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kasaskenya.com" }],
        destination: "https://www.kasaskenya.com/:path*",
        permanent: true,
      },

      // WordPress -> Next.js path migration
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/safari", destination: "/services/safari-charters", permanent: true },
      { source: "/humanitarian-flights", destination: "/services/humanitarian-flights", permanent: true },
      { source: "/maintenance", destination: "/services/maintenance", permanent: true },
      { source: "/training", destination: "/services/training", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/team/", destination: "/team", permanent: true },
      { source: "/fleet/", destination: "/fleet", permanent: true },
      { source: "/home-23", destination: "/", permanent: true },

      // Old WordPress staff bio pages -> team page (individual bios don't exist on new site)
      { source: "/wps-members/:path*", destination: "/team", permanent: true },
    ]
  },
}

export default nextConfig

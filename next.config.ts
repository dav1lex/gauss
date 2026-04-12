import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "titancode.pl",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.titancode.pl",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Old routes redirect to new simplified structure
      {
        source: '/about',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/pl/about',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/about',
        destination: '/en',
        permanent: true,
      },
      // Portfolio detail pages - redirect to main portfolio
      {
        source: '/portfolio/nanobid',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/careerflex',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/kurs8klasisty',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/pl/portfolio/nanobid',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/pl/portfolio/careerflex',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/pl/portfolio/kurs8klasisty',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/en/portfolio/nanobid',
        destination: '/en/portfolio',
        permanent: true,
      },
      {
        source: '/en/portfolio/careerflex',
        destination: '/en/portfolio',
        permanent: true,
      },
      {
        source: '/en/portfolio/kurs8klasisty',
        destination: '/en/portfolio',
        permanent: true,
      },
      // Old redirects - now simplified
      {
        source: '/pricing',
        destination: '/pl/calculate-estimate',
        permanent: true,
      },
      {
        source: '/portfolio/english-tutor',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/auction-portal',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/commercial-project',
        destination: '/pl/portfolio',
        permanent: true,
      },
      // Landing pages removed
      {
        source: '/strony-internetowe-warszawa',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/pl/strony-internetowe-warszawa',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/strony-internetowe-warszawa',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/landing-page-dla-kursu-online',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/pl/landing-page-dla-kursu-online',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/landing-page-dla-kursu-online',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/panel-administracyjny-na-zamowienie',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/pl/panel-administracyjny-na-zamowienie',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/panel-administracyjny-na-zamowienie',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

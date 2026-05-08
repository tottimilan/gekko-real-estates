import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gekkorealestates.com',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;

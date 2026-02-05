import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;

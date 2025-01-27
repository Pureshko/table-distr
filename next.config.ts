import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'development';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/table-distr/' : '',
  basePath: isProd ? '/table-distr' : '',
  output: 'export',
};

export default nextConfig;

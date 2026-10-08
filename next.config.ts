import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.REPO_NAME;
const basePath = isProd && repoName ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Trigger Next.js hard restart to clear turbopack cache
};

export default nextConfig;

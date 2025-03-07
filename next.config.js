/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // For GitHub Pages deployment
  basePath: '/lisaapatel',
  // Add this for static export
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable ESLint during build to prevent errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'out',  // Explicitly set the output directory
  assetPrefix: '/lisaapatel/',
};

module.exports = nextConfig;

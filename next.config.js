/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/lisaapatel' : '',
  // Add this for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

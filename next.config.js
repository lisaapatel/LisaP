/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.js',
  },
  transpilePackages: ['next-themes'],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // GitHub Pages configuration - hardcoded for reliability
  basePath: '/LisaP',
  assetPrefix: '/LisaP/',
  trailingSlash: true,
}

module.exports = nextConfig 
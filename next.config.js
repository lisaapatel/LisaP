/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.js',
  },
  transpilePackages: ['next-themes'],
  reactStrictMode: false, // Try disabling strict mode temporarily
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add GitHub Pages specific settings
  basePath: '/LisaP',
  assetPrefix: '/LisaP/',
  trailingSlash: true,
}

module.exports = nextConfig 
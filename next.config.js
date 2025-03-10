/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
  },
  transpilePackages: ['next-themes'],
  reactStrictMode: false, // Try disabling strict mode temporarily
}

module.exports = nextConfig 
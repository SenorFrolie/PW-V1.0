/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)

module.export = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

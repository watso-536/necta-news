/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'http://localhost:3000',
          port: '3000',
        },
      ],
    },
  }
module.exports = nextConfig

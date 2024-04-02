/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.paxels.com'
      }
    ]
  }
}

module.exports = nextConfig

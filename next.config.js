
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'a.cdn-hotels.com',
            port: '',
            pathname: '/gdcs/**',
          },
        ],
  }
}
module.exports = nextConfig;
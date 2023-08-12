/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/catalog',
      },
    ];
  },
};

module.exports = nextConfig;

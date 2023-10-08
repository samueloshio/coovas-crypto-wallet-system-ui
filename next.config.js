/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888' // development api
        : 'http://localhost:8880', // production api
  },
};

module.exports = nextConfig;

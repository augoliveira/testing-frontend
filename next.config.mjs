/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const withImage = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlugins([withImage], nextConfig);

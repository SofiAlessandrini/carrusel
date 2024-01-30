/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// next.config.js
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    }));
    return config;
  },
};

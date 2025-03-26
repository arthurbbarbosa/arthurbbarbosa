const { SaluteWebpackPlugin } = require('salutecss')

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new SaluteWebpackPlugin())
    return config
  }
}

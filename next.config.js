/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: "@svgr/webpack",
        options: {
          typescript: true,
          ext: "tsx",
        }
      }],
    })

    return config
  },
}

module.exports = nextConfig

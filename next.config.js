const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const plugins = [
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
      responsive: {
        adapter: require("responsive-loader/sharp"),
        sizes: [320, 640, 960, 1200, 1400, 1600, 1800, 2400],
        placeholder: true,
        placeholderSize: 120,
      },
    },
  ],
  [withBundleAnalyzer, {}],
]

if (process.env.NODE_ENV === "production") {
  plugins.unshift([
    withPWA,
    {
      pwa: {
        dest: "public",
        buildExcludes: [/images\/.*/, /.*\/pages\/.*js$/],
      },
    },
  ])
}

module.exports = withPlugins([...plugins])

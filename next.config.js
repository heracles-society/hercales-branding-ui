const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const plugins = [
  [
    optimizedImages,
    {
      optimizeImagesInDev: false,
      responsive: {
        adapter: require("responsive-loader/sharp"),
        sizes: [320, 640, 960, 1200, 1800, 2400],
        placeholder: true,
        placeholderSize: 120,
      },
    },
  ],
]

if (process.env.NODE_ENV === "production") {
  plugins.unshift([
    withPWA,
    {
      pwa: {
        dest: "public",
        buildExcludes: [/static\/images\/.*$/],
      },
    },
  ])
}

module.exports = withPlugins([...plugins])

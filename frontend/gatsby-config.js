require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `glitch.cool`,
    description: `glitch.cool is an audiovisual collective founded in 2019.`,
    author: `agohorel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "author",
          "post",
          "tag",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `glitch[dot]cool`,
        short_name: `glitch.cool`,
        start_url: `/`,
        background_color: `#191919`,
        // theme_color: `#e6e6e6`,
        display: `standalone`,
        icon: `src/static/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/design-system/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/design-system/theme.js`).darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 1,
              },
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        },
      },
    },
  ],
}

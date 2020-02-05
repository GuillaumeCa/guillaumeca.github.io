module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    author: `Guillaume Carré`,
    description: `I'm a Fullstack Web Software Engineer`,
    twitterHandle: "@Irong_",
    url: `https://guillaumeca.github.io`,
    image: `/images/favicon.png`,
    lastUpdate: Date.now(),
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}

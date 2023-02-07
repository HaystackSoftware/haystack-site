/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Haystack Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
  ]
};
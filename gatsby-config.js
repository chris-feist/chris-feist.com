const {VERIFICATION_ID, ANALYTICS_ID} = process.env;

module.exports = {
  siteMetadata: {
    title: `Chris Feist`,
    siteUrl: 'https://www.chris-feist.com',
    googleVerification: VERIFICATION_ID
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`
  },
  plugins: [
    // Expose `/data` to graphQL layer
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/data`
    //   }
    // },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    // Support for Semantic UI
    `gatsby-plugin-less`,

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // home screen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris Feist`,
        short_name: `Chris Feist`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#5da6e5`,
        display: `minimal-ui`
      }
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@chris.feist`,
        limit: 200
      }
    }

    // TODO: https://github.com/Creatiwity/gatsby-plugin-favicon
    // TODO: https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/?=
  ]
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://lindeman.tk",
    title: "Skyhoga Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://lindeman.tk/portfolio/graphql",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-slug",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-fresnel`,
      options: {
        breakpoints: {
          sm: 0,
          md: 768,
          lg: 1024,
          xl: 1192,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
     resolve: `gatsby-transformer-remark`,
     options: {
       // Footnotes mode (default: true)
       footnotes: true,
       // GitHub Flavored Markdown mode (default: true)
       gfm: true,
       // Plugins configs
       plugins: [
         {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },

        ],
    },
  },
  ],
};

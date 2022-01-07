module.exports = {
  siteMetadata: {
    siteUrl: "https://skyhogagatsbydevvv.gatsbyjs.io/",
    title: 'Skyhoga Gatsby',
    description: 'vittukunvituttaa',
    author: '@lucifer',
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://lindeman.tk/portfolio/graphql",
      },
    },

   // You can also overwrite the default behavior for src/pages
   // This changes the page-creator instance used by Gatsby

    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-slug",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
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
        path:  './src/images',
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


       ],
   },
 },
  ],
};

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const sitePage = path.resolve(`src/templates/page.js`)

  // Get all markdown blog posts sorted by date
  const queryResults = await graphql(`
    {
  allMarkdownRemark(
    filter: {frontmatter: {permalink: {regex: "/portfolio/"}}}
  ) {
    nodes {
          fields {
            slug
            }
          html
          frontmatter {
          type
        }
      }
    }
  }
  `)
  if (queryResults.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      queryResults.errors
    )
    return
  }


    const pages = queryResults.data.allMarkdownRemark.nodes
    if (pages.MarkdownRemarkFrontmatterType  === 'page') {
      pages.forEach(node => {
        createPage({
          path: page.slug,
          component:  sitePage,
          context: {
            // This time the entire product is passed down as context
            page: node,
          },
        })
      })
    }

    exports.createSchemaCustomization = ({ actions }) => {
      const { createTypes } = actions;
      const typeDefs =
      `
      type MarkdownRemarkFrontmatterType @infer {
        type: String!
      }
      type MarkdownRemarkFrontmatter @infer {
        title: String!
        slug: String!
        type: MarkdownRemarkFrontmatterType
      }
      type MarkdownRemarkId @infer {
        id: String!
      }
      type MarkdownRemark implements Node @infer {
        frontmatter: MarkdownRemarkFrontmatter
        id: MarkdownRemarkId
      }
      type Site implements Node {
        siteMetadata: SiteSiteMetadata!
      }
      type SiteSiteMetadata {
        siteName: String!
        author: String!
        description: String!
        siteUrl: String!
      }
      `;
      createTypes(typeDefs);
    };
}

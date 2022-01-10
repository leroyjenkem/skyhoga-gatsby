import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const SitePageTemplate = ({ data, location }) => {
  const page = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <header>
          <h1>{page.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
        <hr />
        <footer>
          <p>KAET STNA</p>
        </footer>
    </Layout>
  )
}

export default SitePageTemplate

export const pageQuery = graphql`
  query SitePageBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: {eq: $id}, frontmatter: {type: {eq: "page"}}) {
   id
   html
   frontmatter {
     type
     title
      }
    }
  }
`

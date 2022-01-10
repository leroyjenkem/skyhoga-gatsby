import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

  const page = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

export default function SitePageTemplate () {

const data = useStaticQuery(graphql`
  query allPages{
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}}) {
      nodes {
        html
        id
        frontmatter {
          type
          title
        }
        fields {
          slug
        }
      }
    }}
  `)
    return (
        <footer>
          <p>KAET STNA</p>
        </footer>
      )
    }

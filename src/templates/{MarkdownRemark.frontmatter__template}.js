import * as React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data: { markdownRemark }}) {
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="page-container">
      <div className="page">
        <h1>{frontmatter.title}</h1>

        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    allMarkdownRemark {
    markdownRemark( id: { eq: $id } ) {
      html
      frontmatter {
        title
        template
      }
    }
  }
}
`;

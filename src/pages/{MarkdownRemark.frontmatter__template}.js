import * as React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data: { MarkdownRemark }}) {
  const { frontmatter, html } = { MarkdownRemark };
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
    allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/pages/.*\\.md$/"}}
  ) {
    MarkdownRemark( id: { eq: $id } ) {
      html
      frontmatter {
        title
        template
      }
    }
  }
}
`;

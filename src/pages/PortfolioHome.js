import React from "react"
import { graphql } from "gatsby"

const md = (data) => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  console.log(frontmatter.title)
  return (<div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>)
}

const PortfolioHome = ({ data }) => (
  <div>
    {md({ data })}
  </div>
)

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/home/"}}
  ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
}
`

export default PortfolioHome;

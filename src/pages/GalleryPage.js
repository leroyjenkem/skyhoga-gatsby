import React from "react"
import { graphql } from "gatsby"

const md = (data) => {
  const imagesResolutions = data.allWordpressPost.edges.map(
  edge =>
    edge.node.childWordPressAcfPostPhoto.photo.localFile.childImageSharp.fixed)

  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  console.log(frontmatter.title)
  return (<div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    {imagesResolutions.map(imageRes => (
       <Img fixed={imageRes} key={imageRes.src} />
     ))}
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>)
}

const GalleryPage = ({ data }) => (
  <div>
)
    {md({ data })}
  </div>
)

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/gallery/"}}
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
export const imgquery = imggraphql`
  imgquery {
    allWordpressPost {
      edges {
        node {
          childWordPressAcfPostPhoto {
            photo {
              localFile {
                childImageSharp {
                  # edit the maxWidth value to generate resized images
                  fixed(width: 500, height: 500) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default GalleryPage;

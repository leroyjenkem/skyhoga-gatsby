import * as React from 'react',
import { graphql } from "gatsby"

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    wordpressPage(slug: { eq: "portfolio" }) {
      id
      title
      content
      childWordpressAcfField {
        internal {
          content
        }
      }
    }
  }
`

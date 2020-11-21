import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"

const IndexPage = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allStrapiPost(filter: { skip_frontpage: { eq: false } }) {
      nodes {
        slug
        strapiId
        published_date(formatString: "MMMM DD, YYYY")
        authors {
          author_name
          avatar {
            formats {
              thumbnail {
                image {
                  childImageSharp {
                    fluid {
                      src
                      srcSet
                      base64
                      aspectRatio
                      sizes
                    }
                    id
                  }
                }
              }
            }
          }
        }
        thumbnail {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`

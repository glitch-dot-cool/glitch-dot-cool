import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"

const TagTemplate = ({
  pageContext: page,
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <h1>posts tagged with {page.tag}</h1>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </Layout>
  )
}

TagTemplate.propTypes = {}

export default TagTemplate

export const query = graphql`
  query($id: Int!) {
    allStrapiPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        title
        slug
        authors {
          author_name
          id
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

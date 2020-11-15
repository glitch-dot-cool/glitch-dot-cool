import React from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import { PostCard } from "../design-system"

const TagTemplate = ({
  pageContext: page,
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Header>posts tagged with "{page.tag}"</Header>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}

TagTemplate.propTypes = {
  page: object,
  posts: arrayOf(object),
}

export default TagTemplate

const Header = styled.h1`
  margin-bottom: 2rem;
`

export const query = graphql`
  query($id: Int!) {
    allStrapiPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        title
        slug
        published_at(formatString: "MMMM DD, YYYY")
        id
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

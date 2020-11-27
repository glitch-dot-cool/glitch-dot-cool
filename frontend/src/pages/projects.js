import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import { PostCard, Title } from "../design-system"

const projects = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Title>projects</Title>
      <PostsContainer>
        {posts.map(post => (
          <PostCard
            post={post}
            type="project"
            padding="0"
            key={post.strapiId}
          />
        ))}
      </PostsContainer>
    </Layout>
  )
}

projects.propTypes = {}

export default projects

const PostsContainer = styled.div`
  margin: 6rem 0;
  display: grid;
  grid-gap: 2rem;
`

export const query = graphql`
  query {
    allStrapiPost(
      filter: { type: { eq: "project" } }
      sort: { order: DESC, fields: published_date }
    ) {
      nodes {
        title
        strapiId
        published_date(formatString: "MMMM YY, DD")
        links {
          id
          title
          url
        }
        tags {
          id
          tag
        }
        authors {
          author_name
          avatar {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          id
        }
        body
        thumbnail {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 50) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

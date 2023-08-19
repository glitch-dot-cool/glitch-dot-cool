import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { PostCard, Title } from "../design-system"

const projects = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Head title="projects" />
      <Title>projects</Title>
      <PostsContainer>
        {posts.map(post => (
          <PostCard
            post={post}
            type="project"
            padding="0"
            key={post.strapiId}
            zoom={false}
            shrink={false}
          />
        ))}
      </PostsContainer>
    </Layout>
  )
}

projects.propTypes = {}

export default projects

const PostsContainer = styled.div`
  margin: 4rem 0 6rem 0;
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
        type
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
              fluid(
                maxWidth: 1200
                quality: 50
                traceSVG: { color: "#000000", turdSize: 0, optCurve: false }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { PostCard, Title } from "../design-system"

const releases = ({
  data: {
    allStrapiPost: { nodes: releases },
  },
}) => {
  return (
    <Layout>
      <Head title="releases" />
      <Title>releases</Title>
      <PostsContainer>
        {releases.map(release => (
          <PostCard
            post={release}
            type="release"
            padding="0"
            key={release.strapiId}
            zoom={false}
          />
        ))}
      </PostsContainer>
    </Layout>
  )
}

export default releases

const PostsContainer = styled.div`
  margin: 4rem 0 6rem 0;
  display: grid;
  grid-gap: 2rem;
`

export const query = graphql`
  query {
    allStrapiPost(
      filter: { type: { eq: "release" } }
      sort: { order: DESC, fields: published_date }
    ) {
      nodes {
        title
        strapiId
        type
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

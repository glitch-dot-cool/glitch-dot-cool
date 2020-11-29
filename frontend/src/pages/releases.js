import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { ReleaseCard, Title } from "../design-system"

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
          <ReleaseCard
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

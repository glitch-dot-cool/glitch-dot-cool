import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { PostCard } from "../design-system"

const IndexPage = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Head title="home" />

      <PostsContainer>
        {posts.map(post => (
          <PostCard key={post.strapiId} post={post} />
        ))}
      </PostsContainer>
    </Layout>
  )
}

export default IndexPage

const PostsContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.2rem;
    }
  }
`

export const query = graphql`
  query {
    allStrapiPost(filter: { skip_frontpage: { eq: false } }) {
      nodes {
        title
        slug
        type
        strapiId
        published_date(formatString: "MMMM DD, YYYY")
        authors {
          author_name
          avatar {
            localFile {
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
        thumbnail {
          localFile {
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
`

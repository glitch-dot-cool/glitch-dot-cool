import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { Carousel, PostCard, CategoryList } from "../design-system"

const IndexPage = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout page="home">
      <Head title="home" />

      <PostsContainer>
        <Carousel>
          {posts.map(post => (
            <PostCard key={post.strapiId} post={post} />
          ))}
        </Carousel>
        <CategoryLists>
          <CategoryList posts={posts} />
          <CategoryList posts={posts} />
        </CategoryLists>
      </PostsContainer>
    </Layout>
  )
}

export default IndexPage

const PostsContainer = styled.div`
  margin-top: 6rem;

  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
  }
`

const CategoryLists = styled.div`
  display: flex;
  justify-content: space-around;
`

export const query = graphql`
  query {
    allStrapiPost(
      filter: { skip_frontpage: { eq: false } }
      sort: { fields: published_date, order: DESC }
    ) {
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

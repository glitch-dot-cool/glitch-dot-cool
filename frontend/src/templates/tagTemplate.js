import React from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import { PostRowCard, Button } from "../design-system"

const TagTemplate = ({
  pageContext: page,
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Header>posts tagged with "{page.tag}"</Header>
        <div>
          <Button to="/tags">view all tags</Button>
          <Button to="/posts">view all posts</Button>
        </div>
      </Container>
      {posts.map(post => (
        <PostRowCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}

TagTemplate.propTypes = {
  page: object,
  posts: arrayOf(object),
}

export default TagTemplate

const Header = styled.h1``

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  a:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    div {
      margin-top: 1.5rem;
    }
  }
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

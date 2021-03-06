import React from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Head, Layout } from "../components/Layout"
import { PostRowCard, Button } from "../design-system"

const TagTemplate = ({
  pageContext: page,
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Head title={`tagged: ${page.tag}`} />
      <Container>
        <Header>posts tagged with "{page.tag}"</Header>
        <div>
          <Button to="/tags">view all tags</Button>
          <Button to="/posts">view all posts</Button>
        </div>
      </Container>
      <PostsContainer>
        {posts.map(post => (
          <PostRowCard key={post.id} post={post} />
        ))}
      </PostsContainer>
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

const PostsContainer = styled.div`
  margin-top: 2rem;

  > div {
    margin-bottom: 2rem;
  }
`

export const query = graphql`
  query($id: Int!) {
    allStrapiPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        title
        type
        slug
        published_at(formatString: "MMMM DD, YYYY")
        id
        authors {
          author_name
          id
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
              }
            }
          }
        }
      }
    }
  }
`

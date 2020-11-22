import React, { useState, useEffect } from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import Filter from "../components/Filter/Filter"
import { Title, PostRowCard } from "../design-system"

const Posts = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

  useEffect(() => {
    const result = posts.filter(({ title }) =>
      title.toLowerCase().includes(filterTerm.toLowerCase())
    )
    setfilterResult(result)
  }, [filterTerm, posts])

  return (
    <Layout>
      <Title>posts</Title>
      <Filter setFilterTerm={setFilterTerm} path="/tags" />
      <PostsContainer>
        {filterResult.map(post => (
          <PostRowCard key={post.strapiId} post={post} />
        ))}
      </PostsContainer>
    </Layout>
  )
}

Posts.propTypes = {
  posts: arrayOf(object),
}

export default Posts

const PostsContainer = styled.div`
  margin-top: 2rem;

  > div {
    margin-bottom: 2rem;
  }
`

export const query = graphql`
  query {
    allStrapiPost {
      nodes {
        slug
        title
        strapiId
        published_at(formatString: "MMMM DD, YYYY")
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
      }
    }
  }
`

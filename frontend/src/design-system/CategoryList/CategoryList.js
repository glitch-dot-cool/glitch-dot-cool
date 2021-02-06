import React from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"

import { PostRowCard } from "../"

const CategoryList = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  )
}

CategoryList.propTypes = {
  posts: arrayOf(object),
}

export default CategoryList

const Container = styled.div`
  max-height: 480px;
  overflow-y: scroll;

  a:nth-child(odd) > div {
    background: ${({ theme }) => theme.colors.scale_4};
  }
`

const Post = styled(PostRowCard)`
  padding: 1.5rem;

  h2:first-of-type {
    font-size: 1.8rem;
  }

  p:first-of-type {
    font-size: 1.5rem;
  }

  :hover {
    background: ${({ theme }) => theme.colors.scale_3} !important;

    h2:first-of-type,
    p:first-of-type {
      color: ${({ theme }) => theme.colors.scale_6};
    }
  }
`

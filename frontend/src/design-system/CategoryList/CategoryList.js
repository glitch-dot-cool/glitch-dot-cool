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
  a:nth-child(odd) > div {
    background: ${({ theme }) => theme.colors.scale_4};
  }
`

const Post = styled(PostRowCard)`
  h2:first-of-type {
    font-size: 2rem;
  }
`

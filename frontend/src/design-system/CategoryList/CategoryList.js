import React from "react"
import { arrayOf, object } from "prop-types"
import styled from "styled-components"

import { PostRowCard } from "../"

const CategoryList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

CategoryList.propTypes = {
  posts: arrayOf(object),
}

export default CategoryList

const Post = styled(PostRowCard)`
  h2:first-of-type {
    font-size: 2rem;
  }
`

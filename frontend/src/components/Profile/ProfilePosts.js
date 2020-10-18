import React from "react"
import { arrayOf, number, shape, string } from "prop-types"
import styled from "styled-components"

import { Link } from "../../design-system"
import { slugify } from "../../utils"

const ProfilePosts = ({ posts, name }) => {
  return (
    <PostsContainer>
      {posts.map(post => (
        <Link to={`/${slugify(name)}/${post.slug}`} key={post.id}>
          <Post>
            <h3>{post.title}</h3>
            <p>{post.published_at}</p>
          </Post>
        </Link>
      ))}
    </PostsContainer>
  )
}

ProfilePosts.propTypes = {
  posts: arrayOf(
    shape({
      slug: string,
      id: number,
      title: string,
      published_at: string,
      type: string,
    })
  ),
}

export default ProfilePosts

const PostsContainer = styled.div`
  width: 100%;
`

const Post = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.scale_6};
  margin: 2rem 0rem;

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
  }
`

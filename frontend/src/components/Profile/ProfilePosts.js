import React from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled from "styled-components"

import { Link, Pill } from "../../design-system"
import { slugify } from "../../utils"
import ProfileNav from "./ProfileNav"
import Gallery from "../Gallery/Gallery"

const ProfilePosts = ({ posts, name, gallery, path }) => {
  return (
    <PostsContainer>
      <ProfileNav name={name} gallery={gallery} />

      {path.includes("posts") &&
        posts.map(post => (
          <Link to={`/${slugify(name)}/${slugify(post.title)}`} key={post.id}>
            <Post>
              <h3>{post.title}</h3>
              <p>{post.published_at}</p>
              <Pill type={post.type} />
            </Post>
          </Link>
        ))}

      {path.includes("gallery") && <Gallery gallery={gallery} author={name} />}
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
  gallery: arrayOf(
    shape({
      id: number,
      link: string,
      title: string,
      item: object,
    })
  ),
}

export default ProfilePosts

const PostsContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.scale_6};
  padding: 4rem;
  box-shadow: 0px 3px 5px -5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 960px) {
    position: sticky;
    top: 40vh;
  }
`

const Post = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.scale_5};
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
  }
`

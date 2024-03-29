import React from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled from "styled-components"

import { Link, Pill, Flex } from "../../design-system"
import { slugify, setUrl } from "../../utils"
import ProfileNav from "./ProfileNav"
import Gallery from "../Gallery/Gallery"

const ProfilePosts = ({ posts, name, gallery, path }) => {
  return (
    <PostsContainer>
      <ProfileNav name={name} gallery={gallery} posts={posts} />

      {/* all tab */}
      {path === `/${slugify(name)}` &&
        posts.map(post => (
          <Link to={setUrl(post, name)} key={post.id}>
            <Post>
              <Flex direction="column">
                <h3>{post.title}</h3>
                <PublishedAt>{post.published_date}</PublishedAt>
              </Flex>
              <Pill type={post.type} />
            </Post>
          </Link>
        ))}

      {/* posts tab */}
      {path.includes("posts") &&
        posts
          .filter(post => post.type !== "release")
          .map(post => (
            <Link to={setUrl(post, name)} key={post.id}>
              <Post>
                <Flex direction="column">
                  <h3>{post.title}</h3>
                  <PublishedAt>{post.published_date}</PublishedAt>
                </Flex>
                <Pill type={post.type} />
              </Post>
            </Link>
          ))}

      {/* releases tab */}
      {path.includes("releases") &&
        posts
          .filter(post => post.type === "release")
          .map(post => (
            <Link to={`/releases/${slugify(post.title)}`} key={post.id}>
              <Post>
                <Flex direction="column">
                  <h3>{post.title}</h3>
                  <PublishedAt>{post.published_date}</PublishedAt>
                </Flex>
                <Pill type={post.type} />
              </Post>
            </Link>
          ))}

      {/* gallery tab */}
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

  @media only screen and (max-width: 450px) {
    padding: 2rem;
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

  @media only screen and (max-width: 550px) {
    h3 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
    }
  }
`

const PublishedAt = styled.p`
  ${({ theme }) => theme.text.baseMonoMixin}
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-transform: lowercase;
`

import React from "react"
import { object, string } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import ProfileInfo from "../components/Profile/ProfileInfo"
import ProfilePosts from "../components/Profile/ProfilePosts"

const profileTemplate = ({
  data: { strapiAuthor: profile },
  location: { pathname },
}) => {
  const {
    email,
    location,
    link: links,
    avatar: avatarData,
    author_name,
    posts,
    gallery,
  } = profile
  console.log(gallery)
  const avatar = avatarData[0]?.localFile?.childImageSharp?.fluid
  return (
    <Layout>
      <ProfileWrapper>
        <ProfileInfo
          avatar={avatar}
          links={links}
          email={email}
          location={location}
          name={author_name}
        ></ProfileInfo>

        <ProfilePosts
          name={author_name}
          posts={posts}
          gallery={gallery}
          path={pathname}
        />
      </ProfileWrapper>
    </Layout>
  )
}

profileTemplate.propTypes = {
  profile: object,
  pathname: string,
}

export default profileTemplate

const ProfileWrapper = styled.div`
  margin: 6rem 0 ${props => props.theme.measurements.footerHeight}rem 0;
  display: flex;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`

export const query = graphql`
  query($id: String!) {
    strapiAuthor(id: { eq: $id }) {
      author_name
      avatar {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      posts {
        id
        slug
        title
        type
      }
      published_at(formatString: "MMMM DD, YYYY")
      email
      location
      link {
        id
        title
        url
      }
      gallery {
        description
        id
        link
        title
        item {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

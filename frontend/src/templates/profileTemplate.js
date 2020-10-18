import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import ProfileInfo from "../components/Profile/ProfileInfo"
import ProfilePosts from "../components/Profile/ProfilePosts"

const profileTemplate = ({ pageContext: profile }) => {
  const {
    email,
    location,
    link: links,
    avatar: avatarData,
    author_name,
    posts,
  } = profile
  const avatar = avatarData[0]?.formats?.medium?.image?.childImageSharp?.fluid
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
        <ProfilePosts name={author_name} posts={posts} />
      </ProfileWrapper>
    </Layout>
  )
}

profileTemplate.propTypes = {
  context: PropTypes.object,
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

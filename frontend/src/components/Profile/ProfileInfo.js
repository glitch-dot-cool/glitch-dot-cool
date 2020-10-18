import React from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled from "styled-components"

import ProfileLinks from "./ProfileLinks"
import ProfileContact from "./ProfileContact"
import Layout from "../Layout/layout"
import { Flex, Avatar } from "../../design-system"

const ProfileInfo = ({ name, avatar, email, location, links }) => {
  return (
    <Layout>
      <ProfileCard>
        <Flex direction="column" align="center">
          <ProfileAvatar image={avatar} />
          <h1>{name}</h1>
          <ProfileContact location={location} email={email} />
          <ProfileLinks links={links}></ProfileLinks>
        </Flex>
      </ProfileCard>
    </Layout>
  )
}

ProfileInfo.propTypes = {
  name: string,
  avatar: object,
  email: string,
  location: string,
  links: arrayOf(shape({ id: number, url: string, title: string })),
}

export default ProfileInfo

const ProfileAvatar = styled(Avatar)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 0 0 2rem 0;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const ProfileCard = styled.div`
  display: inline-block;
  padding: 4rem;
  margin-right: 6rem;
  background-color: ${props => props.theme.colors.scale_6};
  align-self: flex-start;

  h1 {
    white-space: nowrap;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 0 4rem 0;
    width: 100%;
  }
`

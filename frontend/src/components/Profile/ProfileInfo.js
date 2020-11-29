import React from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled from "styled-components"

import ProfileLinks from "./ProfileLinks"
import ProfileContact from "./ProfileContact"
import { Flex, Avatar, Link } from "../../design-system"
import { slugify } from "../../utils"

const ProfileInfo = ({ name, avatar, email, location, links }) => {
  return (
    <ProfileCard>
      <Flex direction="column" align="center">
        <AvatarNameGroup direction="column" align="center">
          <Link to={`/${slugify(name)}/posts`}>
            <ProfileAvatar image={avatar} />
          </Link>
          <h1>{name}</h1>
        </AvatarNameGroup>
        <ProfileContact location={location} email={email} />
        <ProfileLinks links={links}></ProfileLinks>
      </Flex>
    </ProfileCard>
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
  position: sticky;
  top: 6rem;
  display: inline-block;
  padding: 4rem;
  margin-right: 6rem;
  background-color: ${props => props.theme.colors.scale_6};
  align-self: flex-start;
  box-shadow: 0px 3px 5px -5px rgba(0, 0, 0, 0.5);

  h1 {
    white-space: nowrap;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 0 2rem 0;
    width: 100%;
    position: relative;
    top: 0;
    padding: 2rem;
  }
`

const AvatarNameGroup = styled(Flex)`
  @media only screen and (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    height: 70px;

    ${ProfileAvatar} {
      transform: scale(0.5);
      margin: 0;
    }

    h1 {
      margin-left: -15px;
    }
  }
`

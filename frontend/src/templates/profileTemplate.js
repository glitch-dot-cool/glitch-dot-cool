import React from "react"
import PropTypes from "prop-types"

import ProfileInfo from "../components/Profile/ProfileInfo"

const profileTemplate = ({ pageContext: profile }) => {
  const {
    email,
    location,
    link: links,
    avatar: avatarData,
    author_name,
  } = profile
  const avatar = avatarData[0]?.formats?.medium?.image?.childImageSharp?.fluid
  return (
    <ProfileInfo
      avatar={avatar}
      links={links}
      email={email}
      location={location}
      name={author_name}
    ></ProfileInfo>
  )
}

profileTemplate.propTypes = {
  context: PropTypes.object,
}

export default profileTemplate

import React from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Flex } from "../../design-system"

const ProfileContact = ({ location, email }) => {
  return (
    <Flex direction="column" align="center">
      <p>
        {location && <Icon icon={faMapMarkerAlt} />}
        {location}
      </p>
      <p>
        {email && <Icon icon={faEnvelope} />}
        {email}
      </p>
    </Flex>
  )
}

ProfileContact.propTypes = {
  location: string,
  email: string,
}

export default ProfileContact

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

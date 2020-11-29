import React from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Flex } from "../../design-system"

const ProfileContact = ({ location, email }) => {
  return (
    <Flex direction="column" align="center">
      <ContactField>
        {location && <Icon icon={faMapMarkerAlt} />}
        {location}
      </ContactField>
      <ContactField>
        {email && <Icon icon={faEnvelope} />}
        {email}
      </ContactField>
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

const ContactField = styled.p`
  white-space: nowrap;
  font-family: "Roboto Mono", monospace;
  font-size: 1.4rem;
`

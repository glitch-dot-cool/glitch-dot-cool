import React from "react"
import { number, string, arrayOf, shape } from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt as linkIcon } from "@fortawesome/free-solid-svg-icons"

import { ExternalLink } from "../../design-system"

const ProfileLinks = ({ links }) => {
  return (
    <LinkContainer>
      {links.map(link => (
        <Link key={link.id} url={link.url}>
          <Icon icon={linkIcon} />
          {link.title.toLowerCase()}
        </Link>
      ))}
    </LinkContainer>
  )
}

ProfileLinks.propTypes = {
  links: arrayOf(shape({ id: number, title: string, url: string })),
}

export default ProfileLinks

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.scale_3};
  margin-right: 0.25rem;
`

const Link = styled(ExternalLink)`
  font-family: "Roboto Mono", monospace;
  font-size: 13px;
  padding: 0.25rem;

  :hover {
    background-color: ${props => props.theme.colors.scale_4};

    svg path {
      fill: black;
    }
  }
`
const LinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

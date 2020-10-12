import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBandcamp,
  faSoundcloud,
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"

import {
  flicker,
  ExternalLink,
  lightTheme as theme,
} from "../../../design-system"

const LinkIcons = ({ className }) => {
  return (
    <>
      <IconsContainer className={className}>
        <ExternalLink url="https://glitchdotcool.bandcamp.com/">
          <Icon icon={faBandcamp} />
        </ExternalLink>

        <ExternalLink url="https://soundcloud.com/glitch-dot-cool">
          <Icon icon={faSoundcloud} />
        </ExternalLink>

        <ExternalLink url="https://www.facebook.com/glitchdotcool/">
          <Icon icon={faFacebook} />
        </ExternalLink>

        <ExternalLink url="https://www.instagram.com/glitch.cool/">
          <Icon icon={faInstagram} />
        </ExternalLink>

        <ExternalLink url="https://discord.gg/SrbjHEk">
          <Icon icon={faDiscord} />
        </ExternalLink>
      </IconsContainer>
    </>
  )
}

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.scale_1};
  }

  a:hover svg {
    color: ${props => props.theme.colors.social_icon_hover};
    animation: ${flicker} 0.2s forwards;
  }

  a:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`

const FooterLinks = styled(LinkIcons)`
  svg {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.scale_3};
  }

  @media only screen and (max-width: ${theme.measurements
      .breakpointMobileNav}px) {
    display: none;
  }
`
export { LinkIcons, FooterLinks }

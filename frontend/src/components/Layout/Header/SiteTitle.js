import React from "react"
import styled from "styled-components"
import logo from "../../../static/logomark.svg"

import { Link, flicker, shifter, Flex } from "../../../design-system"

const SiteTitle = () => {
  return (
    <TextLogoWrapper>
      <Link to="/">
        <Container align="center">
          <Logo src={logo} />
          <TextLogo>glitch[dot]cool</TextLogo>
          <TextLogoShifted>glitch[dot]cool</TextLogoShifted>
        </Container>
      </Link>
    </TextLogoWrapper>
  )
}

export default SiteTitle

const TextLogoWrapper = styled.div`
  position: absolute;

  :hover {
    h3:first-of-type {
      clip-path: inset(50% 0% 0% 0%);
      font-weight: 100 !important;
      animation: ${flicker} 1s linear forwards infinite;
    }

    h3:not(:first-of-type) {
      opacity: 1;
      clip-path: inset(0% 0% 50% 0%);
      font-weight: 100 !important;
      animation: ${flicker} 2s backwards infinite,
        ${shifter} 2s steps(13) infinite;
    }
  }
`

const Logo = styled.img`
  display: inline-block;
  width: 32px;
  height: auto;
  margin-right: 0.5rem;
  transition: 0.2s ease-out transform;
  will-change: transition;

  @media (max-width: 410px) {
    display: none;
  }

  @media (max-width: 300px) {
    display: inline-block;
  }
`

const TextLogo = styled.h3`
  font-weight: 500;
  display: inline;

  @media (max-width: 300px) {
    display: none;
  }
`

const TextLogoShifted = styled.h3`
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 40px;
  opacity: 0;
  pointer-events: none;

  @media (max-width: 300px) {
    display: none;
  }
`

const Container = styled(Flex)`
  :hover img {
    transform: scale(1.15) rotate3d(1, 1, 1, 360deg);
  }
`

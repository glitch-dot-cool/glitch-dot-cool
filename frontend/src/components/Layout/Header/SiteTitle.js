import React from "react"
import styled from "styled-components"

import { Link } from "../../../design-system"
import { flicker, shifter } from "../../../design-system"

const SiteTitle = () => {
  return (
    <TextLogoWrapper>
      <Link to="/">
        <TextLogo>glitch[dot]cool</TextLogo>
        <TextLogoShifted>glitch[dot]cool</TextLogoShifted>
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

const TextLogo = styled.h3`
  font-weight: 500;
`

const TextLogoShifted = styled.h3`
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 5.5px;
  opacity: 0;
  pointer-events: none;
`

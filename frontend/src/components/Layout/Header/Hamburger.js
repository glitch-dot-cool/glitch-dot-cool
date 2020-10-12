import React from "react"
import styled from "styled-components"

import { lightTheme as theme } from "../../../design-system"

const Hamburger = props => {
  return (
    <ToggleButton onClick={props.click}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  )
}

export default Hamburger

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  // prevent blue flash on chrome
  -webkit-tap-highlight-color: transparent;

  @media only screen and (min-width: ${theme.measurements.breakpointMobileNav +
    1}px) {
    display: none;
  }
`

const ToggleButtonLine = styled.div`
  height: 2px;
  width: 30px;
  background: ${props => props.theme.colors.scale_0};

  :focus {
    outline: none;
  }
`

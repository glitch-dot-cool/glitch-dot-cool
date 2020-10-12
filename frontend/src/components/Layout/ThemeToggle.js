import React, { useContext } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { lightTheme } from "../../design-system/theme"

const ThemeToggle = () => {
  const themeContext = useContext(ThemeManagerContext)

  const toggleTheme = () => {
    themeContext.toggleDark()
  }

  return (
    <ThemeIcon onClick={toggleTheme}>
      {!themeContext.isDark ? (
        <Icon size="2x" icon={faMoon}></Icon>
      ) : (
        <Icon size="2x" icon={faSun}></Icon>
      )}
    </ThemeIcon>
  )
}

export default ThemeToggle

const ThemeIcon = styled.div`
  svg {
    color: ${({ theme: { colors } }) => colors.scale_1};
    transition: 0.2s ease-out color;
  }

  :hover {
    cursor: pointer;
  }

  :hover svg {
    color: ${({ theme: { colors } }) => colors.scale_3};
  }

  [data-icon="sun"]:hover {
    color: #fcba03;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-left: 2rem;

  @media only screen and (max-width: ${lightTheme.measurements
      .breakpointMobileNav}px) {
    margin: 0 2rem;
  }
`

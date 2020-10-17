import React from "react"
import styled from "styled-components"

import { Link, lightTheme as theme } from "../../../design-system"
import SiteTitle from "./SiteTitle"

const Nav = () => {
  return (
    <StyledNav>
      <SiteTitle />
      <Spacer />
      <Links>
        <Link activeStyle={theme.activeNavStyles} to="/">
          home
        </Link>
        <Link activeStyle={theme.activeNavStyles} to="/about">
          about
        </Link>
        <Link activeStyle={theme.activeNavStyles} to="/projects">
          projects
        </Link>
        <Link activeStyle={theme.activeNavStyles} to="/members">
          members
        </Link>
        <Link activeStyle={theme.activeNavStyles} to="/index">
          contact
        </Link>
      </Links>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
`

const Links = styled.div`
  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    display: none;
  }

  a:not(:last-child) {
    margin-right: 2rem;
  }
`

const Spacer = styled.div`
  flex-grow: 1;
`

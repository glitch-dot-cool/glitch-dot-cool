import React from "react"
import styled from "styled-components"

import { Link } from "../../../design-system"
import SiteTitle from "./SiteTitle"

const Nav = () => {
  return (
    <StyledNav>
      <SiteTitle />
      <Spacer />
      <Links>
        <Link to="/index">home</Link>
        <Link to="/index">about</Link>
        <Link to="/index">projects</Link>
        <Link to="/index">members</Link>
        <Link to="/index">contact</Link>
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

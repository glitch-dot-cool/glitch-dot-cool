import React from "react"
import styled from "styled-components"

import { Link } from "../../../design-system"
import SiteTitle from "./SiteTitle"

const Nav = () => {
  return (
    <StyledNav>
      <SiteTitle />
      <Spacer />
      <Link to="/index">home</Link>
      <Link to="/index">about</Link>
      <Link to="/index">projects</Link>
      <Link to="/index">members</Link>
      <Link to="/index">contact</Link>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  display: flex;
`

const Spacer = styled.div`
  flex-grow: 1;
`

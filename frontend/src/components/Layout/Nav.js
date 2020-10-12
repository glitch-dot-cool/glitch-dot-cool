import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Link } from "../../design-system"

const Nav = props => {
  return (
    <StyledNav>
      <Link to="/index">home</Link>
      <Link to="/index">about</Link>
      <Link to="/index">projects</Link>
      <Link to="/index">members</Link>
      <Link to="/index">contact</Link>
    </StyledNav>
  )
}

Nav.propTypes = {}

export default Nav

const StyledNav = styled.nav`
  display: flex;
`

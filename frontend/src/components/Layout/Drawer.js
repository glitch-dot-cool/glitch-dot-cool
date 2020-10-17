import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Link, lightTheme as theme } from "../../design-system"
import { LinkIcons } from "./Footer/FooterIcons"

const DrawerTextStyles = {
  fontSize: `4rem`,
  backgroundColor: `${props => props.theme.colors.scale_1}`,
  color: `${props => props.theme.colors.scale_5}`,
}

const Drawer = ({ visible }) => {
  let slideOut, foldOut

  if (visible) {
    slideOut = { transform: `translateX(0)` }
    foldOut = { transform: `rotate3d(1, 1, 1, 0)` }
  } else {
    slideOut = { transform: `translateX(110%)` }
    foldOut = { transform: `rotate3d(0, 1, 0, -90deg)` }
  }

  return (
    <StyledDrawer style={slideOut}>
      <Nav style={foldOut}>
        <Centered column>
          <Link
            style={DrawerTextStyles}
            to="/"
            activeStyle={theme.activeNavStyles}
          >
            home
          </Link>

          <Link
            style={DrawerTextStyles}
            to="/about"
            activeStyle={theme.activeNavStyles}
          >
            about
          </Link>

          <Link
            style={DrawerTextStyles}
            to="/projects"
            activeStyle={theme.activeNavStyles}
          >
            projects
          </Link>

          <Link
            style={DrawerTextStyles}
            to="/members"
            activeStyle={theme.activeNavStyles}
          >
            members
          </Link>

          <Link
            style={DrawerTextStyles}
            to="/contact"
            activeStyle={theme.activeNavStyles}
          >
            contact
          </Link>

          <NavLinkIcons />
        </Centered>
      </Nav>
    </StyledDrawer>
  )
}

Drawer.propTypes = {
  visible: PropTypes.bool,
}

export default Drawer

const StyledDrawer = styled.nav`
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.colors.scale_5},
    ${props => props.theme.colors.scale_4}
  );
  box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.45);
  position: fixed;
  top: 0;
  right: 0;
  width: 67%;
  max-width: 400px;
  z-index: 3;
  transition: 0.2s ease-out transform;
`

const Centered = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${props => (props.column ? `column` : `row`)};
  justify-content: center;
  align-items: left;
  padding: 4rem;

  a {
    margin-bottom: 2rem;
  }
`

const Nav = styled.div`
  height: 100%;
  transition: 0.15s ease transform 0.2s;
  margin-bottom: 2rem;
`

const NavLinkIcons = styled(LinkIcons)`
  position: absolute;
  bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 78%;

  a {
    margin: 0;
  }
`

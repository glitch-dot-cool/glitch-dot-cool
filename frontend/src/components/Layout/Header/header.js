import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Nav from "./Nav"
import ThemeToggle from "./ThemeToggle"
import Hamburger from "./Hamburger"

const Header = ({ toggleDrawer, visible, page }) => (
  <StyledHeader page={page}>
    <Nav></Nav>
    <Controls>
      <ThemeToggle />
      <Hamburger toggleDrawer={toggleDrawer} visible={visible} />
    </Controls>
  </StyledHeader>
)

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  visible: PropTypes.bool,
}

export default Header

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  padding: 6rem 0 3rem 0;
  transition: 0.2s ease-out padding;
  max-width: ${({ page }) =>
    page === "home" ? "calc(2160px - (50vw + 12rem))" : "none"};
  margin: 0 auto;

  @media (min-width: 1921px) {
    max-width: none;
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    padding: 3rem 0 3rem 0;
  }
`

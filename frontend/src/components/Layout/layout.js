import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header/header"
import Footer from "./Footer/Footer"
import Backdrop from "./Backdrop"
import Drawer from "./Drawer"
import GlobalStyles from "../../design-system/globalStyles"

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Background>
      <GlobalStyles />
      <Wrapper>
        <Header toggleDrawer={toggleDrawer} visible={isDrawerOpen} />
        <Drawer visible={isDrawerOpen} />
        <Backdrop visible={isDrawerOpen} closeDrawer={closeDrawer} />
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Background = styled.div`
  background-color: ${props => props.theme.colors.scale_5};
  transition: 0.6s ease-in-out background-color;
`

const Wrapper = styled.div`
  min-height: calc(100vh - 4rem);
  margin: 0 auto;
  max-width: calc(2160px - (50vw));
  min-width: 50vw;
  padding: 0 3vw ${props => props.theme.measurements.footerHeight}rem 3vw;
  transition: 0.2s ease-out all;

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    padding: 0 3vw ${props => props.theme.measurements.footerHeightMobile}rem
      3vw;
  }
`

const Main = styled.main`
  padding-top: 4rem;
`

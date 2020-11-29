import React from "react"
import styled from "styled-components"

import { FooterLinks } from "./FooterIcons"
import { Link } from "../../../design-system"

import { lightTheme as theme } from "../../../design-system"

const Footer = () => {
  return (
    <StyledFooter>
      <Nav>
        <Link dark="true" to="/about" activeStyle={theme.activeNavStyles}>
          about
        </Link>

        <Link dark="true" to="/projects" activeStyle={theme.activeNavStyles}>
          projects
        </Link>

        <Link dark="true" to="/releases" activeStyle={theme.activeNavStyles}>
          releases
        </Link>

        <Link dark="true" to="/members" activeStyle={theme.activeNavStyles}>
          members
        </Link>

        <Link dark="true" to="/contact" activeStyle={theme.activeNavStyles}>
          contact
        </Link>
      </Nav>
      <FooterLinks />
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${theme.measurements.footerHeight}rem;
  background-color: ${props => props.theme.colors.footer};

  a {
    font-size: calc(12px + 1vw);

    :hover {
      background-color: ${({ theme }) => theme.colors.scale_6};
      color: ${({ theme }) => theme.colors.scale_1};
    }
  }

  @media only screen and (min-width: 1200px) {
    a {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-width: ${theme.measurements
      .breakpointMobileNav}px) {
    padding: 1rem;
    height: auto;
  }
`

const Nav = styled.nav`
  padding: 0.75rem;

  a:not(:last-child) {
    margin-right: 3rem;
  }

  a,
  a:visited {
    transition: 0.2s ease all;
  }

  @media only screen and (max-width: 450px) {
    // hide "contact"
    a:last-of-type {
      display: none;
    }

    // remove margin from item preceeding now-hidden "contact"
    a:nth-child(4) {
      margin: 0;
    }
  }

  @media (max-width: 350px) {
    a:not(:nth-child(4)) {
      margin-right: 2rem;
    }
  }

  @media (max-width: 300px) {
    a:not(:nth-child(4)) {
      margin-right: 1rem;
    }
  }
`

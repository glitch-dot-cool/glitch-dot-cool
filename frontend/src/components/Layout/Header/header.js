import React from "react"
import styled from "styled-components"

import Nav from "./Nav"
import ThemeToggle from "./ThemeToggle"
import Hamburger from "./Hamburger"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Nav></Nav>
      <Controls>
        <ThemeToggle />
        <Hamburger />
      </Controls>
    </div>
  </header>
)

export default Header

const Controls = styled.div`
  display: flex;
`

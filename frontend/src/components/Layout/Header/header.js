import React from "react"

import ThemeToggle from "./ThemeToggle"

import Nav from "./Nav"

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
      <ThemeToggle />
    </div>
  </header>
)

export default Header

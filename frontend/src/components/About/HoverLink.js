import React from "react"
import { number, oneOf, shape } from "prop-types"
import styled from "styled-components"
import { Button } from "../../design-system"

const setLinks = sectionID => {
  switch (sectionID) {
    case "members":
      return <Button to="/members">members</Button>
    case "publishing":
      return (
        <>
          <Button to="/projects">projects</Button>{" "}
          <Button to="/releases">releases</Button>{" "}
        </>
      )
    case "home":
      return <Button to="/">home</Button>
    case "discord":
      return <Button href="https://discord.gg/SrbjHEk">discord</Button>
    default:
      throw new Error("invalid sectionID, see proptypes")
  }
}

const HoverLink = ({ children, coords, sectionID }) => {
  return (
    <Container style={{ transform: `translateZ(${coords.x / 20}px)` }}>
      {children}
      <HoverArea>{setLinks(sectionID)}</HoverArea>
    </Container>
  )
}

HoverLink.propTypes = {
  coords: shape({ x: number, y: number }).isRequired,
  sectionID: oneOf(["members", "publishing", "home", "discord"]).isRequired,
}

export default HoverLink

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.box_shadow};

  @media (max-width: 1000px) {
    grid-column: span 2;
  }

  @media (max-width: 500px) {
    grid-column: span 3;
    p {
      font-size: 1.2rem;
    }
  }
`
const HoverArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.scale_6};
  opacity: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  :hover {
    cursor: pointer;
    opacity: 0.98;
  }
`

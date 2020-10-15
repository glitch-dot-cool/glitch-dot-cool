import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Hamburger = ({ toggleDrawer, visible }) => {
  return (
    <Container onClick={toggleDrawer} visible={visible}>
      <HamburgerIcon visible={visible}></HamburgerIcon>
    </Container>
  )
}

Hamburger.propTypes = {
  toggleDrawer: PropTypes.func,
  visible: PropTypes.bool,
}

export default Hamburger

const Container = styled.div`
  z-index: 4;
  position: ${props => (props.visible ? "fixed" : "relative")};
  right: ${props => (props.visible ? "20px" : "0")};
  width: 3rem;
  height: 3rem;
  margin-left: 2rem;
  cursor: pointer;
`

const HamburgerIcon = styled.div`
  width: 3rem;
  height: 0.4rem;
  background: ${props =>
    props.visible ? "rgba(0, 0, 0, 0)" : props.theme.colors.scale_3};
  transition: 0.5s ease-out all;
  border-radius: 2px;
  margin-top: 1rem;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: ${props =>
      props.visible ? props.theme.colors.scale_0 : props.theme.colors.scale_3};
    transition: 0.5s ease-out all;
  }
  &::before {
    transform: ${props =>
      props.visible
        ? "rotate(45deg) translate3d(0, 0, 0)"
        : "translate3d(0, -0.95rem, 0)"};
  }
  &::after {
    transform: ${props =>
      props.visible
        ? "rotate(135deg) translate3d(0, 0, 0)"
        : "translate3d(0, 0.95rem, 0)"};
  }
`

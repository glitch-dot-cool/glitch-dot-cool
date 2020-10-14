import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Backdrop = ({ visible, closeDrawer }) => {
  return <StyledBackdrop visible={visible} onClick={closeDrawer} />
}

Backdrop.propTypes = {
  visible: PropTypes.bool,
  closeDrawer: PropTypes.func,
}

export default Backdrop

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${props => (props.show ? "0.7" : "0")};
  pointer-events: ${props => (props.show ? "all" : "none")};
  transition: 0.2s ease-out all;
  z-index: 2;
`

import React from "react"
import { func, oneOf } from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

const TransportChevron = ({ type, onClick }) => {
  switch (type) {
    case "PREV":
      return <Icon icon={faChevronLeft} type={type} onClick={onClick} />
    case "NEXT":
      return <Icon icon={faChevronRight} type={type} onClick={onClick} />
    default:
      throw Error("Invalid type prop - must be one of 'PREV' or 'NEXT'")
  }
}

TransportChevron.propTypes = {
  type: oneOf(["PREV", "NEXT"]),
  onClick: func,
}

export default TransportChevron

const Icon = styled(FontAwesomeIcon)`
  font-size: calc(18px + 1.5vw);
  margin: ${({ type }) => (type === "PREV" ? "0 2rem 0 0" : "0 0 0 2rem")};
  transition: 100ms ease-out transform, 150ms ease-out opacity;
  will-change: transform;
  color: ${({ theme }) => theme.colors.scale_1};

  :hover {
    cursor: pointer;
    transform: scale(1.075);
    opacity: 0.85;
  }

  :active {
    transform: scale(0.9);
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    display: none;
  }
`

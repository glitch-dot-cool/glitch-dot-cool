import React from "react"
import { oneOf } from "prop-types"
import styled from "styled-components"

const Pill = ({ type }) => {
  return <StyledPill>{type}</StyledPill>
}

Pill.propTypes = {
  type: oneOf(["project", "blog"]),
}

export default Pill

const StyledPill = styled.span`
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.scale_3};
  background-color: ${({ theme }) => theme.colors.scale_6};
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  padding: 0.5rem 1rem;
`

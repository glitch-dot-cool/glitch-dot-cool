import React from "react"
import styled from "styled-components"
import { oneOf } from "prop-types"

const Flex = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>
}

Flex.propTypes = {
  direction: oneOf(["row", "column"]),
  justify: oneOf(["start", "end", "center", "space-between", "space-around"]),
  align: oneOf(["center", "start", "end"]),
}

Flex.defaultProps = {
  direction: "row",
  justify: "start",
  align: "start",
}

export default Flex

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

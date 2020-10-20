import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

Title.propTypes = {
  children: string,
}

export default Title

const StyledTitle = styled.h1``

import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>
}

Title.propTypes = {
  children: string,
}

export default Title

const StyledTitle = styled.h1``

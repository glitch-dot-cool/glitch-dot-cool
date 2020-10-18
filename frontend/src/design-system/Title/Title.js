import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

Title.propTypes = {}

export default Title

const StyledTitle = styled.h1``

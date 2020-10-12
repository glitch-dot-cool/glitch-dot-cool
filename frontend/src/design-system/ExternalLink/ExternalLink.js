import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ExternalLink = ({ url, text, dark }) => {
  return (
    <StyledLink dark={dark} href={url} rel="noopener noreferrer">
      {text}
    </StyledLink>
  )
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ExternalLink

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${props =>
    props.dark ? props.theme.colors.scale_5 : props.theme.colors.scale_1};
  transition: 0.2s ease all;

  :hover {
    color: ${props =>
      props.dark ? props.theme.colors.scale_3 : props.theme.colors.scale_2};
  }
`

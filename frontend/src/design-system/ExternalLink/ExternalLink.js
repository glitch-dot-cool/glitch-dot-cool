import React from "react"
import { array, object, oneOfType, string } from "prop-types"
import styled from "styled-components"

const ExternalLink = ({ url, children, dark, ...props }) => {
  return (
    <StyledLink
      dark={dark}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </StyledLink>
  )
}

ExternalLink.propTypes = {
  url: string.isRequired,
  children: oneOfType([string, object, array]),
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

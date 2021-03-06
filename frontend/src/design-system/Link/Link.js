import React from "react"
import { arrayOf, object, oneOfType, string } from "prop-types"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { chromaticAbberation } from "../Animations/animations"

const Link = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>
}

Link.propTypes = {
  to: string.isRequired,
  children: oneOfType([string, object, arrayOf(object)]),
}

export default Link

export const StyledLink = styled(props => (
  <GatsbyLink to={props.to} {...props} />
))`
  text-decoration: none;
  transition: 0.2s ease all;
  color: ${props =>
    props.dark ? props.theme.colors.footer_text : props.theme.colors.scale_1};

  :hover {
    color: ${props => props.theme.colors.scale_3};
    ${chromaticAbberation}
  }
`

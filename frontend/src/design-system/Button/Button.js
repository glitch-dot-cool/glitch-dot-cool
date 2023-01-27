import React from "react"
import { func, string } from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const Button = ({ children, href, to, onClick }) => {
  if (href) {
    return (
      <ExternalLinkButton href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </ExternalLinkButton>
    )
  } else if (to) {
    return <InternalLinkButton to={to}>{children}</InternalLinkButton>
  } else {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
  }
}

Button.propTypes = {
  children: string.isRequired,
  href: string,
  to: string,
  onClick: func,
}

export default Button

const buttonMixin = css`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  border: 1px solid ${props => props.theme.colors.scale_3};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.scale_6};
  color: ${props => props.theme.colors.scale_1};
  transition: 0.1s ease all;
  text-decoration: none;
  font-size: 1.6rem;
  text-align: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-color: ${props => props.theme.colors.scale_1};
    color: ${props => props.theme.colors.scale_5};
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.4);
    text-shadow: 0px 0px 1px black;
  }

  :active {
    transform: translateY(1px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }
`

export const ExternalLinkButton = styled.a`
  ${buttonMixin}
`

export const InternalLinkButton = styled(Link)`
  ${buttonMixin}
`

export const StyledButton = styled.button`
  ${buttonMixin}
`

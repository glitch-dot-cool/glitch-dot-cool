import React from "react"
import { number, shape, string } from "prop-types"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

const Avatar = ({ image, className, ...props }) => {
  if (image?.src) {
    return <StyledAvatar fluid={image} className={className} {...props} />
  } else {
    return <PlaceholderAvatar className={className} {...props} />
  }
}

Avatar.propTypes = {
  image: shape({
    aspectRatio: number,
    base64: string,
    sizes: string,
    src: string,
    srcSet: string,
  }),
}

export default Avatar

const avatarStyles = css`
  width: ${props => (props.size === "small" ? `2rem` : `4rem`)};
  height: ${props => (props.size === "small" ? `2rem` : `4rem`)};
  border-radius: 50%;
  margin-right: 1rem;
  box-shadow: 0px 0px 5px ${props => props.theme.colors.box_shadow};
  transition: 0.2s ease-out opacity;

  &:hover {
    opacity: 0.5;
  }
`

const StyledAvatar = styled(Image)`
  ${avatarStyles}
`

const PlaceholderAvatar = styled.div`
  ${avatarStyles}
  background-color: ${props => props.theme.colors.scale_3};
`

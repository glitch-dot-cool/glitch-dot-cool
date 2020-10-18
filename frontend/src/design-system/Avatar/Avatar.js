import React from "react"
import { number, objectOf, string } from "prop-types"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

const Avatar = ({ image }) => {
  if (image?.src) {
    return <StyledAvatar fluid={image} />
  } else {
    return <PlaceholderAvatar />
  }
}

Avatar.propTypes = {
  image: objectOf({
    aspectRatio: number,
    base64: string,
    sizes: string,
    src: string,
    srcSet: string,
  }),
}

export default Avatar

const avatarStyles = css`
  width: ${props => (props.size === "small" ? `2.4rem` : `4rem`)};
  height: ${props => (props.size === "small" ? `2.4rem` : `4rem`)};
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

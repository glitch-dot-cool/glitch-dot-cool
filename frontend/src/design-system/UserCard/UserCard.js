import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

import { Link } from "../../design-system"
import { slugify } from "../../utils"

const UserCard = ({ user: { author_name: name, avatar }, size = "large" }) => {
  const imgData = avatar[0]?.formats?.thumbnail?.childImageSharp?.fluid

  return (
    <Card size={size} to={`/${slugify(name)}/posts`}>
      {imgData ? (
        <Avatar size={size} fluid={imgData} />
      ) : (
        <PlaceholderAvatar size={size} />
      )}
      <Name>{name}</Name>
    </Card>
  )
}

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard

const Card = styled(Link)`
  display: flex;
  align-items: center;
  width: ${props => (props.size === "small" ? `auto` : `calc(50% - 1rem)`)};
  background-color: ${props => props.theme.colors.scale_6};
  padding: ${props => (props.size === "small" ? `1rem 1.5rem` : `2rem`)};
  margin-top: ${props => (props.size === "small" ? `0` : `2rem`)};
  border-radius: ${props => (props.size === "small" ? `3px` : `0px`)};

  h2 {
    font-size: ${props => (props.size === "small" ? `1.4rem` : `auto`)};
  }

  &:hover {
    background-color: ${props => props.theme.colors.scale_2};

    h2 {
      color: ${props => props.theme.colors.scale_5};
    }
  }

  @media (max-width: 1000px) {
    width: ${props => (props.size === "small" ? `inherit` : `100%`)};
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`

const avatarStyles = css`
  width: ${props => (props.size === "small" ? `2.4rem` : `4rem`)};
  height: ${props => (props.size === "small" ? `2.4rem` : `4rem`)};
  border-radius: 50%;
  margin-right: 1rem;
  box-shadow: 0px 0px 5px ${props => props.theme.colors.box_shadow};
  transition: 0.2s ease-out opacity;
  /* border: 1px solid ${props => props.theme.colors.scale_2}; */
  ${props => console.log(props.theme.colors.box_shadow)}

  &:hover {
    opacity: 0.5;
  }
`

const Avatar = styled(Image)`
  ${avatarStyles}
`

const PlaceholderAvatar = styled.div`
  ${avatarStyles}
  background-color: ${props => props.theme.colors.scale_3};
`

const Name = styled.h2``

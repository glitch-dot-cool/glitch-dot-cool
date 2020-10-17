import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

import { Link } from "../../design-system"
import { slugify } from "../../utils"

const UserCard = ({ user: { author_name: name, avatar } }) => {
  const imgData = avatar[0]?.formats?.thumbnail?.image?.childImageSharp?.fluid

  return (
    <Card to={`/${slugify(name)}/posts`}>
      {imgData ? <Avatar fluid={imgData} /> : <PlaceholderAvatar />}
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
  width: calc(50% - 1rem);
  background-color: ${props => props.theme.colors.scale_6};
  padding: 2rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${props => props.theme.colors.scale_2};

    h2 {
      color: ${props => props.theme.colors.scale_5};
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`

const avatarStyles = css`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease-out opacity;

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

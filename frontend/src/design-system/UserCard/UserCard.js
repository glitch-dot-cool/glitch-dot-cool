import React from "react"
import { object, string } from "prop-types"
import styled from "styled-components"

import { Link, Avatar } from "../../design-system"
import { slugify } from "../../utils"

const UserCard = ({ user: { author_name: name, avatar }, size = "large" }) => {
  const imgData = avatar[0]?.formats?.thumbnail?.childImageSharp?.fluid

  return (
    <Card size={size} to={`/${slugify(name)}/posts`}>
      <Avatar image={imgData} />
      <Name>{name}</Name>
    </Card>
  )
}

UserCard.propTypes = {
  user: object,
  size: string,
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

const Name = styled.h2``

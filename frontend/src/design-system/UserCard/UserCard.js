import React, { useState } from "react"
import { object, string } from "prop-types"
import styled from "styled-components"

import { Link, RecencyIndicator } from "../../design-system"
import Avatar from "../Avatar/Avatar"
import { slugify } from "../../utils"
import Flex from "../Flex/Flex"

const UserCard = ({
  user: { author_name: name, avatar },
  size = "large",
  color,
  index,
  recency,
  lastPosted,
}) => {
  const imgData = avatar[0]?.localFile?.childImageSharp?.fluid
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  if (size === "micro") {
    return (
      <MicroCard
        to={`/${slugify(name)}/posts`}
        color={color}
        onMouseOver={() => setIsTooltipVisible(true)}
        onMouseOut={() => setIsTooltipVisible(false)}
      >
        <Tooltip isVisible={isTooltipVisible} index={index}>
          {name}
        </Tooltip>
        <MicroAvatar image={imgData} size="small" index={index} />
      </MicroCard>
    )
  }

  return (
    <Card size={size} to={`/${slugify(name)}/posts`} color={color}>
      <Flex
        align="center"
        justify="space-between"
        style={{ width: "100%", background: "transparent" }}
      >
        <Flex align="center">
          <CardAvatar image={imgData} size={size} />
          <Name>{name}</Name>
        </Flex>
        {recency && (
          <RecencyIndicator recency={recency} lastPosted={lastPosted} />
        )}
      </Flex>
    </Card>
  )
}

UserCard.propTypes = {
  user: object,
  size: string,
  color: string,
}

export default UserCard

const Card = styled(Link)`
  display: flex;
  align-items: center;
  width: ${props => (props.size === "small" ? `auto` : `calc(50% - 1rem)`)};
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.scale_6};
  padding: ${props => (props.size === "small" ? `0.75rem 1rem` : `2rem`)};
  margin-top: ${props => (props.size === "small" ? `0` : `2rem`)};
  border-radius: ${props => (props.size === "small" ? `3px` : `0px`)};
  box-shadow: 0px 3px 5px -5px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: ${props =>
      props.size === "small" ? `1.4rem` : `auto`} !important;
    font-weight: ${props => (props.size === "small" ? `400` : `500`)};
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
      margin-bottom: ${props => (props.size === "small" ? `0` : `2rem`)};
    }
  }
`

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.scale_0} !important;

  :hover {
    color: ${({ theme }) => theme.colors.scale_6} !important;
  }
`

const MicroCard = styled(Link)``

const Tooltip = styled.span`
  display: ${({ isVisible }) => (isVisible ? "inline" : "none")};
  position: absolute;
  margin-top: 8px;
  margin-left: ${({ index }) => (index === 0 ? "0" : "-20px")};
  background-color: black;
  color: white;
  font-family: "Roboto-Mono", monospace;
  font-weight: 100;
  font-size: 1.3rem;
  z-index: 2;

  :hover + div {
    transform: scale(1.2);
    opacity: 0.9;
  }
`

const CardAvatar = styled(Avatar)`
  @media (max-width: 400px) {
    display: none;
  }
`

const MicroAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  margin: ${({ index }) => (index === 0 ? "0" : "0 0 0 -20px")};
  box-shadow: 0px 0px 0px 1.25px #fff;
  will-change: transform, opacity;
  transition: 0.1s ease-out transform, opacity;

  :hover {
    transform: scale(1.2);
    opacity: 0.9;
  }
`

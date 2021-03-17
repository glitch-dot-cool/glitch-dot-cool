import React from "react"
import { arrayOf, shape, string } from "prop-types"
import styled from "styled-components"

import { UserCard } from "../../../design-system"

const PostHeader = ({ title, authors, publishDate }) => {
  const avatarSize = authors?.length > 2 ? "micro" : "small"
  return (
    <div>
      <h1>{title}</h1>
      <Date>{publishDate.toLowerCase()}</Date>
      <Authors>
        <By size={avatarSize}>by</By>
        {authors.map((author, index) => (
          <UserCard
            index={index}
            key={author.id}
            size={avatarSize}
            user={author}
          />
        ))}
      </Authors>
    </div>
  )
}

PostHeader.propTypes = {
  title: string.isRequired,
  author: arrayOf(
    shape({
      author_name: string,
    })
  ),
}

export default PostHeader

const Authors = styled.div`
  display: flex;
  margin: 1rem 0 4rem 0;
  align-items: center;
`

const Date = styled.h5`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.scale_2};
  opacity: 0.8;
`

const By = styled.p`
  font-weight: bold;
  margin-right: ${({ size }) => (size === "micro" ? "3.25rem" : "1.5rem")};
`

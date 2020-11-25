import React from "react"
import { arrayOf, shape, string } from "prop-types"
import styled from "styled-components"

import { UserCard } from "../../../design-system"

const PostHeader = ({ title, authors, publishDate }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Date>{publishDate.toLowerCase()}</Date>
      <Authors>
        <h3>by</h3>
        {authors.map((author, index) => (
          <UserCard
            index={index}
            key={author.id}
            size={authors.length > 3 ? "micro" : "small"}
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

  a,
  h3 {
    margin-right: 1rem;
  }
`

const Date = styled.h5`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.scale_2};
  opacity: 0.8;
`

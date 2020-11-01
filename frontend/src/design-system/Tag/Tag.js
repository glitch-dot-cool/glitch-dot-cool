import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

import { Link } from "../../design-system"
import { slugify } from "../../utils"

const Tag = ({ children }) => {
  return (
    <Link to={`/tags/${slugify(children)}`}>
      <StyledTag>
        <Text>{children}</Text>
      </StyledTag>
    </Link>
  )
}

Tag.propTypes = {
  children: string.isRequired,
}

export default Tag

const Text = styled.p`
  color: ${({ theme }) => theme.colors.scale_2};
  font-size: 1.4rem;
`

const StyledTag = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.scale_4};

  :hover {
    background-color: ${({ theme }) => theme.colors.scale_6};
  }
`

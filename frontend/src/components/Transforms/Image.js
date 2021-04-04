import React from "react"
import styled from "styled-components"

const Image = ({ src, alt }) => {
  // @TODO implement gatsby-image
  // there's an open PR about this: https://github.com/strapi/gatsby-source-strapi/pull/122
  return (
    <Wrapper>
      <Img src={src} alt={alt} />
    </Wrapper>
  )
}

export default Image

const Img = styled.img`
  max-width: 100%;
  margin: 3rem 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

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
  max-width: 50%;
  margin: 3rem 0;
  transition: 300ms ease-out max-width;

  @media (max-width: 900px) {
    max-width: 75%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

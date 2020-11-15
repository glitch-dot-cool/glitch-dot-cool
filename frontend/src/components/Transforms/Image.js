import React from "react"
import styled from "styled-components"

const Image = ({ src, alt }) => {
  // @TODO implement gatsby-image
  // there's an open PR about this: https://github.com/strapi/gatsby-source-strapi/pull/122
  return <Img src={src} alt={alt} />
}

export default Image

const Img = styled.img`
  max-width: 100%;
`

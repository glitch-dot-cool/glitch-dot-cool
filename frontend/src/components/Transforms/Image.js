import React from "react"

const Image = ({ src, alt }) => {
  // @TODO implement gatsby-image
  // there's an open PR about this: https://github.com/strapi/gatsby-source-strapi/pull/122
  return <img src={src} alt={alt} />
}

export default Image

import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { object, string } from "prop-types"
import { Link } from "gatsby"

import { slugify } from "../../utils"

const GalleryItem = ({ img, author }) => {
  return (
    <Link to={`/${slugify(author)}/gallery/${slugify(img.title)}`}>
      <ThumbnailContainer>
        <GalleryThumbnail
          fluid={{
            ...img.item.localFile.childImageSharp.fluid,
            aspectRatio: 1 / 1,
          }}
          alt={img.title}
        />
      </ThumbnailContainer>
    </Link>
  )
}

GalleryItem.propTypes = {
  img: object,
  author: string,
}

export default GalleryItem

const GalleryThumbnail = styled(Image)`
  will-change: opacity, transform;
  width: 100%;
  transition: 0.2s ease-out all;

  :hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`

const ThumbnailContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-out all;

  :hover {
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  }
`

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GalleryItem from "./GalleryItem"

const Gallery = ({ gallery, author }) => {
  return (
    <GalleryContainer>
      {gallery.map(item => (
        <GalleryItem key={item.id} img={item} author={author} />
      ))}
    </GalleryContainer>
  )
}

Gallery.propTypes = {}

export default Gallery

const GalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

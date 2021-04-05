import React from "react"
import styled from "styled-components"

const Audio = ({ src }) => {
  return (
    <AudioWrapper>
      <audio controls controlsList="nodownload">
        <source src={src} type="audio/mp3" />
      </audio>
    </AudioWrapper>
  )
}

export default Audio

const AudioWrapper = styled.div`
  display: flex;
  justify-content: center;
`

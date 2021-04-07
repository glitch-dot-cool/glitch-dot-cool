import React from "react"

const Audio = ({ src }) => {
  return (
    <audio controls controlsList="nodownload">
      <source src={src} type="audio/mp3" />
    </audio>
  )
}

export default Audio

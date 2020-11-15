import React from "react"

const Video = ({ src }) => {
  return (
    <video width="100%" height="auto" controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video

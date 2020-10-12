import React from "react"

const Video = ({ src }) => {
  return (
    <video width="1024" height="720" controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video

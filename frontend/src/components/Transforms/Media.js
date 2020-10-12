import React from "react"

import Image from "./Image"
import Audio from "./Audio"
import Video from "./Video"

const Media = props => {
  const file_extension = props.src.substring(
    props.src.length - 3,
    props.src.length
  )
  switch (file_extension) {
    case "mp3":
      return <Audio {...props} />
    case "mp4":
      return <Video {...props} />
    default:
      return <Image {...props} />
  }
}

export default Media

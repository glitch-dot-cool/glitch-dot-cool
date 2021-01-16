import React from "react"
import ReactMarkdown from "react-markdown"

import CodeBlock from "./CodeBlock"
import Media from "./Media"

const imageTarget = imageRef => {
  return process.env.NODE_ENV === "production"
    ? `https://api.glitch.cool${imageRef}`
    : `http://localhost:1337${imageRef}`
}

const MarkdownHTML = ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={false}
      linkTarget="_blank"
      transformImageUri={x => imageTarget(x)}
      renderers={{
        code: CodeBlock,
        image: Media,
      }}
    />
  )
}

export default MarkdownHTML

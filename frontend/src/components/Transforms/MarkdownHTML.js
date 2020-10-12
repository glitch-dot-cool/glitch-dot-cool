import React from "react"
import ReactMarkdown from "react-markdown"

import CodeBlock from "./CodeBlock"
import Media from "./Media"

const MarkdownHTML = ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={false}
      linkTarget="_blank"
      transformImageUri={x => `http://localhost:1337${x}`}
      renderers={{
        code: CodeBlock,
        image: Media,
      }}
    />
  )
}

export default MarkdownHTML

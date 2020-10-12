import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierSavannaDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={atelierSavannaDark}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

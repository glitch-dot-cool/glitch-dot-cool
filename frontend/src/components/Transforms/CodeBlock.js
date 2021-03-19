import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import {
  stackoverflowDark,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ language, value }) => {
  const currentTheme = useContext(ThemeContext)
  const codeTheme = currentTheme.isDark ? stackoverflowDark : stackoverflowLight

  return (
    <SyntaxHighlighter language={language} style={codeTheme}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock = ({ language, value }) => {
  const currentTheme = useContext(ThemeContext)
  const codeTheme = currentTheme.isDark ? vscDarkPlus : vs

  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language={language}
      style={codeTheme}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

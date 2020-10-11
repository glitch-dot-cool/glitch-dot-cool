import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierSavannaDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={atelierSavannaDark}>
      {value}
    </SyntaxHighlighter>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPost {
        edges {
          node {
            body
          }
        }
      }
    }
  `)

  const post = data.allStrapiPost.edges[0].node.body

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ReactMarkdown
          source={post}
          escapeHtml={false}
          linkTarget="_blank"
          transformImageUri={x => `http://localhost:1337${x}`}
          renderers={{
            code: CodeBlock,
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

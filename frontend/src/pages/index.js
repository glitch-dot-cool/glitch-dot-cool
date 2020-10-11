import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierSavannaDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={atelierSavannaDark}>
      {value}
    </SyntaxHighlighter>
  )
}

const Video = props => {
  return (
    <video width="1024" height="720" controls>
      <source src={props.src} type="video/mp4" />
    </video>
  )
}

const Audio = props => {
  return (
    <audio controls>
      <source src={props.src} type="audio/mp3" />
    </audio>
  )
}

const EmbeddedMedia = props => {
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
      return <img {...props} />
  }
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
            image: EmbeddedMedia,
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

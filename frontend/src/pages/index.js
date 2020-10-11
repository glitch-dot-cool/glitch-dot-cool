import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        />
      </div>
    </Layout>
  )
}

export default IndexPage

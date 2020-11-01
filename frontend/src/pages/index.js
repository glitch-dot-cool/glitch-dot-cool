import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"

import MarkdownHTML from "../components/Transforms/MarkdownHTML"
import { Tag, Button } from "../design-system"

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
        <MarkdownHTML source={post} />
      </div>
      <Tag>something</Tag>
      <Tag>whatever</Tag>
      <Tag>thing</Tag>
      <Tag>genre</Tag>

      <Button href="https://google.com">hello</Button>
      <Button to="/members">world</Button>
      <Button onClick={() => alert("clicked!")}>test</Button>
    </Layout>
  )
}

export default IndexPage

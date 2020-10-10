import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAuthor {
        edges {
          node {
            gallery {
              item {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `)

  const galleryItems = data.allStrapiAuthor.edges[0].node.gallery
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {galleryItems.map(({ item, title }) => (
          <>
            <h3>{title}</h3>
            <img src={item.childImageSharp.fixed.src} />
          </>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

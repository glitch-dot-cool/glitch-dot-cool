import React from "react"

import { Layout, Head } from "../components/Layout"
import AboutSection from "../components/About/About"
import { Flex } from "../design-system"

const About = ({
  data: {
    allImageSharp: { nodes: images },
  },
}) => {
  return (
    <Layout>
      <Head title="about" />
      <Flex justify="center">
        <AboutSection images={images} />
      </Flex>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/!aboutpage/" } } }
    ) {
      nodes {
        fluid {
          src
          srcSet
          base64
          aspectRatio
        }
      }
    }
  }
`

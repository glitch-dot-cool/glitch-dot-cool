import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import { Layout, Head } from "../components/Layout"
import HoverLink from "../components/About/HoverLink"
import { Flex, flicker } from "../design-system"

// this function aims to smooth out the initial jerkiness caused by the mouse coord's being
// initialized to null/0 and then jumping to their real coords by assuming the user clicked on
// 'about' in the nav, and then using the known screen ratio of it's location to initialize the
// mouse coords to somewhere closer to where the mouse (hopefully) is. this sucks and i hate it
// but i can't think of a better way to initialize the mouse coords so fuck it. for now anyway.
const setInitialCoords = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth
    const height = window.innerHeight
    const X_RATIO = 0.547
    const Y_RATIO = 0.074

    return {
      x: width * X_RATIO,
      y: height * Y_RATIO,
    }
  }
  // hardcoded values for 1080p
  return {
    x: 1050,
    y: 70,
  }
}

const About = ({
  data: {
    allImageSharp: { nodes: images },
  },
}) => {
  const [coords, setCoords] = useState(setInitialCoords())

  const handleMouseMove = ({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
  }

  useEffect(() => {
    // for SSR
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <Layout>
      <Head title="about" />
      <Flex justify="center">
        <Wrapper
          lang={`en`}
          style={{
            transform: `rotate3d(${coords.y}, ${coords.x}, 1, ${
              coords.y * -0.05 + coords.x * -0.02
            }deg)`,
          }}
        >
          <Grid>
            <HoverLink coords={coords} sectionID="members">
              <p>
                <GlitchDotCool>glitch[dot]cool</GlitchDotCool> is a collective
                of producers, sound designers, programmers, and visual artists
                orbiting the glitch aesthetic, founded in 2019.
              </p>
            </HoverLink>

            <Img
              fluid={images[0].fluid}
              style={{ transform: `translateZ(${coords.x / 20}px)` }}
            />
            <Img
              fluid={images[1].fluid}
              style={{ transform: `translateZ(${coords.x / 20}px)` }}
            />
            <HoverLink coords={coords} sectionID="publishing">
              <p>
                we are a collectively operated publishing platform, releasing
                sample packs, albums, and educational content.
              </p>
            </HoverLink>
            <HoverLink coords={coords} sectionID="home">
              <p>
                we seek to promote and encourage the development of burgeoning
                fields at the intersection of technology and the arts.
              </p>
            </HoverLink>
            <Img
              fluid={images[2].fluid}
              style={{ transform: `translateZ(${coords.x / 20}px)` }}
            />
            <Img
              fluid={images[3].fluid}
              style={{ transform: `translateZ(${coords.x / 20}px)` }}
            />
            <HoverLink coords={coords} sectionID="discord">
              <p>
                we also run a large discord server with an active community of
                audiovisual creatives and a focus on education, collaboration,
                and camaraderie.
              </p>
            </HoverLink>
          </Grid>
        </Wrapper>
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

const Wrapper = styled.div`
  padding: 4rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.scale_6};
  hyphens: auto;
  color: ${props => props.theme.colors.scale_1};
  transform-style: preserve-3d;
  box-shadow: inset 0px 0px 20px ${({ theme }) => theme.colors.box_shadow},
    0px 0px 10px ${({ theme }) => theme.colors.box_shadow};

  p,
  strong {
    transform: translateZ(75px);
    font-size: 1.6rem;
  }

  strong {
    filter: ${({ theme }) =>
      `drop-shadow(0px 0px 3px ${theme.colors.scale_0})`};
  }

  @media (min-width: 1000px) {
    margin-top: 8rem;
  }

  @media (max-width: 400px) {
    padding: 2rem;
  }
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.box_shadow};

  @media (max-width: 1000px) {
    grid-column: span 2;
  }

  @media (max-width: 500px) {
    grid-column: span 3;
    p {
      font-size: 1.2rem;
    }
  }
`

const Img = styled(Image)`
  transform: translateZ(75px);
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.box_shadow},
    0px 0px 20px ${({ theme }) => theme.colors.box_shadow};
  transform-style: preserve-3d;
  grid-column: span 2;

  @media (max-width: 1000px) {
    grid-column: span 1;
  }

  @media (max-width: 500px) {
    max-height: 100px;
    grid-column: span 3;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, minmax(50px, 100px));

  ${Img}:nth-last-child(2) {
    filter: ${({ theme }) => (theme.isDark ? "invert(1)" : "none")};
    // acct for the box shadow being inverted in dark mode
    box-shadow: 0px 0px 10px
        ${({ theme }) =>
          theme.isDark ? theme.colors.scale_1 : theme.colors.box_shadow},
      0px 0px 20px
        ${({ theme }) =>
          theme.isDark ? theme.colors.scale_1 : theme.colors.box_shadow};
  }

  @media (max-width: 500px) {
    grid-template-rows: repeat(8, minmax(50px, 100px));

    ${Img}:nth-child(2) {
      grid-row-start: 1;
    }

    ${Img}:nth-last-child(3) {
      grid-row-start: 5;
    }
  }
`

const GlitchDotCool = styled.strong`
  animation: ${flicker} 0.3s backwards 1;
`

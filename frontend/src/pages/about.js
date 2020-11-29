import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Layout, Head } from "../components/Layout"
import { Flex, flicker } from "../design-system"

const About = () => {
  const [coords, setCoords] = useState({ x: null, y: null })

  const handleMouseMove = ({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Layout>
      <Head title="about" />
      <Flex justify="center">
        <Wrapper
          lang={`en`}
          style={{
            transform: `rotate3d(${coords.x}, ${coords.y}, 1, ${
              (coords.x + coords.y) / -50
            }deg) skew(${coords.x / 60}deg, ${coords.y / 60}deg)`,
          }}
        >
          <p>
            <GlitchDotCool>glitch[dot]cool</GlitchDotCool> is a group of
            producers, sound designers, programmers, and visual artists orbiting
            the glitch aesthetic.
          </p>
          <br />
          <p>
            this website serves as a shared publishing resource for our members
            and its contents, a shared resource for the public.
          </p>
        </Wrapper>
      </Flex>
    </Layout>
  )
}

export default About

const Wrapper = styled.div`
  margin: 12rem 4rem;
  max-width: 62rem;
  min-width: 45vw;
  padding: 4rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.scale_6};
  hyphens: auto;
  color: ${props => props.theme.colors.scale_1};
  transform-style: preserve-3d;
  box-shadow: inset 0px 0px 20px ${({ theme }) => theme.colors.box_shadow},
    0px 0px 10px ${({ theme }) => theme.colors.box_shadow};

  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
    max-width: 100%;
  }

  p,
  strong {
    transform: translateZ(75px);
  }

  strong {
    filter: ${({ theme }) =>
      `drop-shadow(0px 0px 3px ${theme.colors.scale_0})`};
  }
`

const GlitchDotCool = styled.strong`
  animation: ${flicker} 0.3s backwards 1;
`

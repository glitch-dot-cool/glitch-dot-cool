import React from "react"
import styled from "styled-components"

import { useDeviceHeight } from "../hooks/index"
import { Layout, Head } from "../components/Layout"
import { Flex, noise1, noise2, flicker } from "../design-system"

const goBack = e => {
  e.preventDefault()
  if (typeof window !== `undefined`) {
    window.history.back()
  }
}

const NotFound = () => {
  const deviceHeight = useDeviceHeight() / 2 - 200
  return (
    <Layout>
      <Head title="404" />
      <Container
        direction="column"
        justify="center"
        align="center"
        deviceHeight={deviceHeight}
      >
        <Glitchy data-text="Sorry - this page doesn't -----.">
          Sorry - this page doesn't exist.
        </Glitchy>
        <Message>but what does it mean to exist, anyway?</Message>
        <p>
          <Repeater data-text="you know?">you know?</Repeater>
        </p>
        <br />
        <Back onClick={goBack}>Go Back</Back>
      </Container>
    </Layout>
  )
}

export default NotFound

const Container = styled(Flex)`
  margin-top: ${({ deviceHeight }) => deviceHeight}px;
  text-align: center;
`

const Back = styled.h2`
  :hover {
    cursor: pointer;
  }
`

const Glitchy = styled.h1`
  position: relative;
  color: rgba(0, 0, 0, 0);

  :before,
  :after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }

  :before {
    left: 3px;
    text-shadow: 3px 0 ${props => props.theme.colors.valid};
    animation: ${noise1} 0.5s infinite linear alternate-reverse;
  }

  :after {
    left: -3px;
    text-shadow: -3px 0 ${props => props.theme.colors.invalid};
    animation: ${noise2} 0.65s infinite linear alternate-reverse;
  }
`

const Message = styled.p`
  animation: ${flicker} 1s;
`

const Repeater = styled.span`
  animation: ${flicker} 10s infinite linear alternate-reverse;
  max-width: 50px;

  :before,
  :after {
    content: attr(data-text);
    position: relative;
    vertical-align: -50%;
  }

  :before {
    top: -8px;
    left: 94px;
    opacity: 0.8;
  }
  :after {
    top: -4px;
    left: -94px;
    opacity: 0.6;
  }
`

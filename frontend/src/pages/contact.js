import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import { Flex, Form, FormInput, FormTextArea } from "../design-system"

const NotFound = () => {
  return (
    <Layout>
      <Container direction="column" justify="center" align="center">
        <Form
          title="contact"
          action="https://formspree.io/f/mdoplzwq"
          method="POST"
          submitText="Send Message"
        >
          <>
            <label htmlFor="name">name</label>
            <FormInput type="text" name="name" required />
          </>
          <>
            <label htmlFor="_replyto">email</label>
            <FormInput type="email" name="_replyto" required />
          </>
          <>
            <label htmlFor="body">message</label>
            <FormTextArea type="text" name="body" rows="6" required />
          </>
        </Form>
      </Container>
    </Layout>
  )
}

export default NotFound

const Container = styled(Flex)`
  margin: 4rem 0rem;
`

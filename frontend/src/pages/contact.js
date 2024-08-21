import React from "react"
import styled from "styled-components"

import { Head, Layout } from "../components/Layout"
import { Flex, Form, FormInput, FormTextArea } from "../design-system"

const NotFound = () => {
  return (
    <Layout>
      <Head title="contact" />
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

        <AddressContainer>
          <AddressLine>glitch.cool</AddressLine>
          <AddressLine>12 Dudley Street </AddressLine>
          <AddressLine>Birmingham</AddressLine>
          <AddressLine>B54EA</AddressLine>
          <AddressLine>United Kingdom</AddressLine>
        </AddressContainer>
      </Container>
    </Layout>
  )
}

export default NotFound

const Container = styled(Flex)`
  margin: 4rem 0rem;
`

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`

const AddressLine = styled.p`
  font-size: 1.4rem;
  display: block;
  line-height: 1rem;
`

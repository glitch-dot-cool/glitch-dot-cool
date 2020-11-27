import { oneOf, string } from "prop-types"
import React from "react"
import styled from "styled-components"

import { Button, Title } from ".."

const Form = ({ action, method, title, submitText, children }) => {
  return (
    <StyledForm action={action} method={method}>
      {title && <Title>{title}</Title>}

      {React.Children.map(children, child => {
        return <FormGroup>{child}</FormGroup>
      })}

      <FormGroup>
        <Button type="submit">{submitText}</Button>
      </FormGroup>
    </StyledForm>
  )
}

export default Form

Form.propTypes = {
  title: string,
  action: string,
  method: oneOf(["POST"]),
  submitText: string,
}

const StyledForm = styled.form`
  width: 75%;
  margin-top: 6rem;

  label {
    color: ${props => props.theme.colors.scale_1};
    font-weight: 500;
  }

  input,
  textarea {
    display: block;
    padding: 1rem 1rem;
    border: none;
    color: ${props => props.theme.colors.scale_2};
    transition: 0.2s ease all;
    font-family: "Roboto Mono", monospace;
  }

  input {
    font-size: 1.5rem;
  }

  textarea {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
`

export const FormInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.scale_6};
  border: none;
  font-size: 2.4rem;

  :focus {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.invalid};
  }
`

export const FormTextArea = styled.textarea`
  width: 100%;
  background-color: ${props => props.theme.colors.scale_6};
  font-size: 2rem;
  resize: none;

  :focus {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.invalid};
  }
`

const FormGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`

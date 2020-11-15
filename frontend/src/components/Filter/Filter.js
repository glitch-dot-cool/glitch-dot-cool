import React from "react"
import styled from "styled-components"

import { Link, Button } from "../../design-system"

const Filter = ({ setFilterTerm, path }) => {
  return (
    <FormWrapper>
      <Form>
        <Label htmlFor="filter">filter: </Label>
        <Input id="filter" onChange={e => setFilterTerm(e.target.value)} />
      </Form>
      <Link to={path}>
        <Button>view all {path.substring(1, path.length)}</Button>
      </Link>
    </FormWrapper>
  )
}

export default Filter

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${props => props.theme.colors.scale_6};
  align-items: center;
  margin-top: 1.5rem;
`

const Form = styled.form`
  flex-grow: 1;
  margin-right: 2rem;
  font-family: "Roboto", sans-serif;
`

const Label = styled.label`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.scale_2};
`

const Input = styled.input`
  border: none;
  padding: 3px;
  width: 33%;
  min-width: 150px;
  background-color: ${props => props.theme.colors.scale_4};
  color: ${props => props.theme.colors.scale_2};
`

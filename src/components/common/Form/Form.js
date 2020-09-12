import React from 'react'
import styled from 'styled-components'

const Form = () => {
  return (
    <Wrapper>
      <Header>Your Business Need Action</Header>
      <Input
        type='text'
        placeholder='Submit email, stay connected'
      />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  width: 100%;
`

const Header = styled.h1`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
    'Trebuchet MS', sans-serif;
`

const Input = styled.input`
  width: 90%;
  border: none;
  border-bottom: solid 1.5px darkcyan;
  height: 1.8rem;
  &:focus {
    outline: none;
    border-bottom: solid 1.5px darkcyan;
    width: 92%;
    transition: ease-in-out 2s;
  }
`

export default Form

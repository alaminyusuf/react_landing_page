// core modules
import React from 'react'
import styled from 'styled-components'

// components
import Form from '../common/Form'

const Section = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <HeaderWrapper>
          <Header>Just Shopified</Header>
        </HeaderWrapper>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`

const Header = styled.h1`
  font-size: 25px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  font-weight: 40;
`

const HeaderWrapper = styled.div`
  flex-basis: 65%;
  padding: 1em;
`

const FormWrapper = styled.div`
  flex-basis: 35%;
  padding: 1em;
`

const FlexWrapper = styled.div`
  display: flex;
`

export default Section

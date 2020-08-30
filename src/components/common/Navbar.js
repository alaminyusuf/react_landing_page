import React from 'react'
import styled from 'styled-components'

const Navbar = () => (
  <Nav>
    <Container>
      <H1>GrocerBox Admin </H1>
      <ul>
        <Li>
          Log Out{' '}
          <i
            className='fa fa-sign-out'
            aria-hidden='true'
          />
        </Li>
      </ul>
    </Container>
  </Nav>
)

const Container = styled.div`
  width: 90%;
  height: 7.8vh;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav`
  color: rgb(249, 250, 251);
  background-color: #1c2260;
`

const H1 = styled.h1`
  align-items: center;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`

const Li = styled.li`
  align-items: center;
  list-style: none;
`

export default Navbar

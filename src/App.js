import React from 'react'
import styled from 'styled-components'

// components
import Navbar from './components/common/Navbar'

// common
import Img from './img/keyboard.jpg'

const App = () => (
  <>
    <Navbar />
    <ImageContainer>
      <Image />
    </ImageContainer>
  </>
)

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
`

const Image = styled(Img)`
  width: 1005;
  height: 100%;
  background-repeat: no-repeat;
  background-position: cover;
`

export default App

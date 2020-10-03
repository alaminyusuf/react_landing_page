import React from 'react';
import styled from 'styled-components';

// components
import Img from '../../img/idea_bulb.jpg';

import Header from '../Header';

const Content = () => (
  <Container style={{ backgroundImage: `url(${Img})` }}>
    <Wrapper>
      <Header />
    </Wrapper>
  </Container>
);

const Container = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  color: #ffc400;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    /* opacity: 0.72; */
    background: rgba(0, 0, 0, 0.35);
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  z-index: 10;
`;

export default Content;

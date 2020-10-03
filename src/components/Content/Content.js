import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Content = () => (
  <Container>
    <Wrapper>
      <Header />
    </Wrapper>
  </Container>
);

const Container = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  background-color: #757575;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* color: #ffc400; */
  max-width: 90%;
  margin: 0 auto;
`;

export default Content;

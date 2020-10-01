import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Content = () => (
  <Wrapper>
    <Header />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  margin: 0em auto;
  background-color: #757575;
  /* color: #ffc400; */
  color: #fff;
`;

export default Content;

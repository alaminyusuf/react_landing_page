import React from 'react';
import styled from 'styled-components';

import UlComponent from './Ul';

const Header = () => (
  <>
    <TextWrapper>
      <H1>Web Devs</H1>
    </TextWrapper>
    <UlWrapper>
      <UlComponent />
    </UlWrapper>
  </>
);

const TextWrapper = styled.div`
  flex-basis: 50%;
`;

const UlWrapper = styled.div`
  flex-basis: 50%;
`;

const H1 = styled.h1`
  font-size: 25px;
  padding: 0.5em;
`;

export default Header;

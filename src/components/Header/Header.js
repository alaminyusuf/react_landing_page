import React from 'react';
import styled from 'styled-components';

import UlComponent from './Ul';

const Header = () => (
  <>
    <H1>Web Devs</H1>
    <UlComponent />
  </>
);

const H1 = styled.h1`
  flex-basis: 50;
  font-size: 25px;
  padding: 0.5em;
  z-index: 2;
`;

export default Header;

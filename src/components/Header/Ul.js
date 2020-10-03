import React from 'react';
import styled from 'styled-components';

const UlComponent = () => {
  return (
    <Ul>
      <Li>Our Product</Li>
      <Li>Contact Us</Li>
      <Li>About</Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  padding-left: auto;
`;

const Li = styled.li`
  display: flex;
  padding: 0.8em 1em;
  font-size: 18px;
`;

export default UlComponent;

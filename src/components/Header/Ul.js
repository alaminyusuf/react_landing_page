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
  padding: 1.4em 0.5em 1em 0.5em;
  font-size: 14px;
`;

export default UlComponent;

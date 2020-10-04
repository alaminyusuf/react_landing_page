import React from 'react';
import styled from 'styled-components';

const RightPane = () => (
  <>
    <Header>Right Pane</Header>
  </>
);

const Header = styled.div`
  font-size: 25px;
  text-transform: capitalize;
  color: #fff;
  z-index: 5 !important;
`;

export default RightPane;

import React from 'react';
import styled from 'styled-components';

// components
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Intro = () => (
  <FlexWrapper>
    <LeftPane />
    <RightPane />
  </FlexWrapper>
);

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
  margin: 2.5em;
`;

export default Intro;

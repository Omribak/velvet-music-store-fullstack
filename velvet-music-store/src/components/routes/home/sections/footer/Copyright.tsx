import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
  background-color: rgb(190, 0, 0);
  color: white;
`;

const Test = styled.p`
  margin: 0;
`;

const Copyright = () => {
  return (
    <CopyrightContainer>
      <Test>COPYRIGHT</Test>
    </CopyrightContainer>
  );
};

export default Copyright;

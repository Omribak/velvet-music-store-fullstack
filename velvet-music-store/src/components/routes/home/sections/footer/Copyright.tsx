import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
  background-color: rgb(163, 33, 33, 0.9);
  color: white;
`;

const Test = styled.p`
  margin: 0;
`;

const Copyright = () => {
  return (
    <CopyrightContainer>
      <Test>&copy; 2024 Omri Bakal</Test>
    </CopyrightContainer>
  );
};

export default Copyright;

import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  text-align: center;
  padding: 3rem;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <ClipLoader />
    </LoaderContainer>
  );
};

export default Loader;

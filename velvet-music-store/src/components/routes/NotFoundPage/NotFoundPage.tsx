import React from 'react';
import styled from 'styled-components';

const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
`;

const Title = styled.h1``;

const Description = styled.p``;

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Title>404 | Not Found</Title>
      <Description>The page you were looking for was not found...</Description>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;

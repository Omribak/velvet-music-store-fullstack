import React from 'react';
import styled from 'styled-components';

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const Title = styled.h1`
  @media only screen and (max-width: 530px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  @media only screen and (max-width: 530px) {
    width: 10rem;
  }
`;

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <Title>Your cart is empty.</Title>
      <Description>
        Please add items to your cart in order to checkout.
      </Description>
    </EmptyCartContainer>
  );
};

export default EmptyCart;

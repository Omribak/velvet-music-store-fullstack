import React from 'react';
import styled from 'styled-components';
import { LoginButton } from '../home/sections/header/HeaderComponents/Navigation';

const CartNotLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  gap: 2rem;
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

const CartNotLogged = () => {
  return (
    <CartNotLoggedContainer>
      <Title>You are not logged in.</Title>
      <Description>Please Login in order to see your cart.</Description>
    </CartNotLoggedContainer>
  );
};

export default CartNotLogged;

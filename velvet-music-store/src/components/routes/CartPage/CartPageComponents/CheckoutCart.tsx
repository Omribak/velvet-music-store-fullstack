import React from 'react';
import styled from 'styled-components';
import { HR } from './CartCard';
import { useCartContext } from '../../../contexts/cart-context/cart-context';
import { useUserContext } from '../../../contexts/user-context/user-context';

const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 14%;
  height: 15rem;
  width: 25rem;
  padding: 1rem;
  border: 1px solid black;

  @media only screen and (max-width: 1800px) {
    position: static;
    right: auto;
  }

  @media only screen and (max-width: 460px) {
    width: 15rem;
  }
`;

const SummaryTitle = styled.h3``;

const CheckoutHR = styled(HR)`
  width: 25rem;

  @media only screen and (max-width: 570px) {
    width: 15rem;
  }
`;

const SubtotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubtotalPrice = styled.p``;

const SubtotalText = styled.p``;

const CheckoutButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1.2rem;
`;

const CheckoutCart = () => {
  const CartCtx = useCartContext();
  const UserCtx = useUserContext();

  const MoveToCheckout = async () => {
    if (UserCtx?.user?.id) {
      const stripe_url = await CartCtx?.CheckoutStripeItems(UserCtx?.user?.id);
      if (stripe_url) {
        window.location = stripe_url;
      }
    }
  };

  return (
    <CheckoutCartContainer>
      <SummaryTitle>Order Summary</SummaryTitle>
      <CheckoutHR />
      <SubtotalWrapper>
        <SubtotalText>Subtotal:</SubtotalText>
        <SubtotalPrice>{CartCtx?.subtotal}$</SubtotalPrice>
      </SubtotalWrapper>
      <CheckoutHR />
      <CheckoutButton onClick={MoveToCheckout}>CHECKOUT</CheckoutButton>
    </CheckoutCartContainer>
  );
};

export default CheckoutCart;
